"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var baseInterfaces_1 = require("../baseInterfaces");
var abilities_1 = require("../abilities");
var mongoose_1 = require("@casl/mongoose");
var extra_1 = require("@casl/ability/extra");
function findOne(model, conditions, id, projection, user) {
    var accessCheck = mongoose_1.toMongoQuery(abilities_1.defineAbilityFor(user), model, "view");
    if (accessCheck === null) {
        throw new Error("you do not have permission to view " + model.name);
    }
    else {
        var permissionProjection = {};
        // projection || model.permittedFieldsBy(defineAbilityFor(user));
        if (id) {
            return model
                .findOne({ _id: id }, permissionProjection)
                .lean()
                .exec();
        }
        else {
            var baseFind = model.findOne({}, projection);
            if (conditions) {
                baseFind.elemMatch(conditions);
            }
            return baseFind.lean().exec();
        }
    }
}
exports.findOne = findOne;
function findOneById(model, id, projection, user) {
    var accessCheck = mongoose_1.toMongoQuery(abilities_1.defineAbilityFor(user), model, "view");
    if (accessCheck === null) {
        throw new Error("you do not have permission to view " + model.name);
    }
    else {
        var permissionProjection = {};
        return model
            .findById(id, permissionProjection)
            .lean()
            .exec();
    }
}
exports.findOneById = findOneById;
function findMany(model, conditions, sort, paginate, projection, user) {
    var accessCheck = mongoose_1.toMongoQuery(abilities_1.defineAbilityFor(user), model, "view");
    if (accessCheck === null) {
        throw new Error("you do not have permission to view " + model.name);
    }
    else {
        var permissionProjection = {};
        // projection || model.permittedFieldsBy(defineAbilityFor(user));
        var baseFind = model.find({}, permissionProjection);
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
        return baseFind.lean().exec(); // as unknown as Promise<R[] | null>;
    }
}
exports.findMany = findMany;
function createDoc(model, documents, user) {
    // const theUser = user ? user : {}
    var userAbilities;
    userAbilities = abilities_1.defineAbilityFor(user);
    var permitted = extra_1.permittedFieldsOf(userAbilities, "create", model);
    var allowed = userAbilities.can("create", model);
    var unpermittedFields = Object.keys(documents).filter(function (docKey) {
        return !permitted.find(function (permitted) { return permitted === docKey; });
    });
    if (!allowed) {
        throw new baseInterfaces_1.ApiError("not-permitted", 405, "not permitted");
    }
    else if (unpermittedFields.length > 0) {
        throw new baseInterfaces_1.ApiError("invalid-keys", 405, "invalid keys " + unpermittedFields.join(" "));
    }
    else {
        var testDoc = new model(documents);
        // console.log(JSON.stringify(documents), permitted, allowed, unpermittedFields);
        var invalid = testDoc.validateSync();
        if (invalid) {
            throw new baseInterfaces_1.ApiError("validation-failed", 400, invalid.toString());
        }
        else {
            return testDoc.save().then(function (doc) {
                return model.findById(doc._id, permitted, { lean: true });
            });
        }
    }
}
exports.createDoc = createDoc;
function updateDoc(model, id, updates, user, projection) {
    var accessCheck = mongoose_1.toMongoQuery(abilities_1.defineAbilityFor(user), model, "manage");
    if (accessCheck === null) {
        throw new Error("you do not have permission to manage " + model.name);
    }
    else {
        var updateQuery = model.findByIdAndUpdate(id, updates, {
            new: true
        });
        var permissionProjection = {};
        // projection || model.permittedFieldsBy(defineAbilityFor(user));
        updateQuery.setOptions({ new: true, projection: permissionProjection });
        return updateQuery.lean().exec();
    }
}
exports.updateDoc = updateDoc;
function deletDoc(model, id, user) {
    var accessCheck = mongoose_1.toMongoQuery(abilities_1.defineAbilityFor(user), model, "manage");
    if (accessCheck === null) {
        throw new Error("you do not have permission to manage " + model.name);
    }
    else {
        return model.findByIdAndDelete(id).exec();
    }
}
exports.deletDoc = deletDoc;
//# sourceMappingURL=ctrl-universal.js.map