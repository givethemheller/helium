"use strict";
import { Document, Model } from "mongoose";
import { Pagination, ApiError } from "../baseInterfaces";
import { defineAbilityFor } from "../abilities";
import { User } from "../models/User";
import { toMongoQuery } from "@casl/mongoose";
import { Ability } from "@casl/ability";
import { permittedFieldsOf } from '@casl/ability/extra';

interface KeyPairs {
  [key: string]: any;
}

export type ArgsFromType<T> =
  {
    [P in keyof T]?: any;
  };

type SortFromType<T> = KeyPairs &
  {
    [P in keyof T]: -1 | 1;
  };




export function findOne<D, R>(
  model: Model<D & Document, {}>,
  conditions?: Array<ArgsFromType<D>> | false,
  id?: string | false,
  projection?: string,
  user?: User
): Promise<R | null> {
  const accessCheck = toMongoQuery(defineAbilityFor(user), model, "view");
  if (accessCheck === null) {
    throw new Error(`you do not have permission to view ${model.name}`);
  } else {
    const permissionProjection = {};
    // projection || model.permittedFieldsBy(defineAbilityFor(user));
    if (id) {
      return model
        .findById(id, permissionProjection)
        .lean()
        .exec() as unknown as Promise<R | null>;
    } else {
      const baseFind = model.findOne({}, projection);
      if (conditions) {
        baseFind.elemMatch(conditions);
      }
      return baseFind.lean().exec() as unknown as Promise<R | null>;
    }
  }
}

export function findOneById<D, R>(
  model: Model<D & Document, {}>,
  id?: string | false,
  projection?: string,
  user?: User
): Promise<R | null> {
  const accessCheck = toMongoQuery(defineAbilityFor(user), model, "view");
  if (accessCheck === null) {
    throw new Error(`you do not have permission to view ${model.name}`);
  } else {
    const permissionProjection = {};
    return model
      .findById(id, permissionProjection)
      .lean()
      .exec() as unknown as Promise<R | null>;
  }
}

export function findMany<D, R>(
  model: Model<D & Document, {}>,
  conditions?: Array<ArgsFromType<D>> | false,
  sort?: Array<SortFromType<D>> | false,
  paginate?: Pagination | false,
  projection?: string,
  user?: User
): Promise<R[] | null> {
  const accessCheck = toMongoQuery(defineAbilityFor(user), model, "view");
  if (accessCheck === null) {
    throw new Error(`you do not have permission to view ${model.name}`);
  } else {
    const permissionProjection = {};
    // projection || model.permittedFieldsBy(defineAbilityFor(user));
    const baseFind = model.find({}, permissionProjection);
    if (conditions) {
      baseFind.elemMatch(conditions);
    }
    if (paginate) {
      baseFind.setOptions({
        limit: paginate.count,
        skip: paginate.count * paginate.page
      });
    }
    if (sort) {
      baseFind.sort(sort);
    }
    return baseFind.lean().exec() as unknown as Promise<R[] | null>;
  }
}

export function createDoc<D, R>(
  model: Model<D & Document, {}>,
  documents: ArgsFromType<D>,
  user: User
): Promise<R> {
  // const theUser = user ? user : {}
  let userAbilities: Ability;
  userAbilities = defineAbilityFor(user);

  const permitted = permittedFieldsOf(userAbilities, "create", model);
  const allowed = userAbilities.can("create", model);
  const unpermittedFields = Object.keys(documents).filter((docKey) => {
    return !permitted.find((permitted) => permitted === docKey)
  });

  if (!allowed) {
    throw new ApiError("not-permitted", 405, `not permitted`);
  } else if (
    unpermittedFields.length > 0
  ) {
    throw new ApiError("invalid-keys", 405, `invalid keys ${unpermittedFields.join(" ")}`);
  } else {
    const testDoc = new model(documents);
    // console.log(JSON.stringify(documents), permitted, allowed, unpermittedFields);
    const invalid = testDoc.validateSync();
    if (invalid) {
      throw new ApiError("validation-failed", 400, invalid.toString());
    } else {
      return testDoc.save().then((doc) => {
        return model.findById(doc._id, permitted, { lean: true }) as unknown as Promise<R>;
      });
    }
  }
}

export function updateDoc<D, R>(
  model: Model<D & Document, {}>,
  id: string,
  updates: ArgsFromType<D>,
  user: User,
  projection?: string
): Promise<R> {
  const accessCheck = toMongoQuery(defineAbilityFor(user), model, "manage");
  if (accessCheck === null) {
    throw new Error(`you do not have permission to manage ${model.name}`);
  } else {
    const updateQuery = model.findByIdAndUpdate(id, updates as any, {
      new: true
    });
    const permissionProjection = {};
    // projection || model.permittedFieldsBy(defineAbilityFor(user));
    updateQuery.setOptions({ new: true, projection: permissionProjection });

    return updateQuery.lean().exec() as unknown as Promise<R>;
  }
}

export function deletDoc<D, R>(
  model: Model<D & Document, {}>,
  id: string,
  user: User
): Promise<any> {
  const accessCheck = toMongoQuery(defineAbilityFor(user), model, "manage");
  if (accessCheck === null) {
    throw new Error(`you do not have permission to manage ${model.name}`);
  } else {
    return model.findByIdAndDelete(id).exec();
  }
}
