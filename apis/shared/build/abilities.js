"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ability_1 = require("@casl/ability");
function defineAbilityFor(user) {
    var _a = new ability_1.AbilityBuilder(), can = _a.can, rules = _a.rules;
    can("manage", "all");
    can("create", "User", ["email", "password", "phone"]);
    return new ability_1.Ability(rules);
}
exports.defineAbilityFor = defineAbilityFor;
//# sourceMappingURL=abilities.js.map