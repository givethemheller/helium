import { Ability } from "@casl/ability";
import { User } from "./models/User";
export declare function defineAbilityFor(user: Partial<User>): Ability<import("@casl/ability").AbilityTuple<string, import("@casl/ability").Subject>, Record<string | number | symbol, string | number | boolean | Record<string | number | symbol, any> | import("@casl/ability").MongoQueryOperators>>;
