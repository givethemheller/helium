import { AbilityBuilder, Ability } from "@casl/ability";


import { keys } from 'ts-transformer-keys';
import { UserCreate, User } from "./models/User";
export function defineAbilityFor(
  user: Partial<
    User
  >
) {
  const { can, rules } = new AbilityBuilder();
  can("manage", "all");
  can("create", "User", keys<UserCreate>());
  return new Ability(rules as any);
}

