import { GROUPS } from "./models";

export type RegisteredModels = {
  BaseType: string;
  /**
   * operations that can be created with generated controllers
   */
  objModel: string;
  /**
   * the Root Type, which build to [Type]Create, [Type]Read, etc
   */
  operations: {
    /**
     * Includes create a create command in the controller
     */
    create: { enabled: boolean, groups?: GROUPS[] };
    /**
     * includes read a command in the controller
     */
    read: { enabled: boolean, groups?: GROUPS[] };
    /**
    * includes update a command in the controller
    */
    update: { enabled: boolean, groups?: GROUPS[] };
    /**
    * includes delete a command in the controller
    */
    delete: { enabled: boolean, groups?: GROUPS[] };
    /**
    * includes find a command in the controller
    */
    find: { enabled: boolean, groups?: GROUPS[] };
  }
}[];

export const registeredModels: RegisteredModels = [
  {
    BaseType: "Boat",
    objModel: "boat",
    operations: {
      create: { enabled: true },
      delete: { enabled: true, groups: [GROUPS.owner, GROUPS.admin] },
      update: { enabled: true, groups: [GROUPS.owner, GROUPS.admin] },
      find: { enabled: true, groups: [GROUPS.admin] },
      read: { enabled: true, groups: [GROUPS.owner, GROUPS.admin] }
    }
  },
  {
    BaseType: "Part",
    objModel: "part",
    operations: {
      create: { enabled: true },
      delete: { enabled: true, groups: [GROUPS.admin] },
      update: { enabled: true, groups: [GROUPS.admin] },
      find: { enabled: true },
      read: { enabled: true }
    },
  },
  {
    BaseType: "Service",
    objModel: "service",
    operations: {
      create: { enabled: true },
      delete: { enabled: true, groups: [GROUPS.owner, GROUPS.admin] },
      update: { enabled: true, groups: [GROUPS.owner, GROUPS.admin] },
      find: { enabled: true, groups: [GROUPS.admin] },
      read: { enabled: true, groups: [GROUPS.owner, GROUPS.admin] }
    },
  },
  {
    BaseType: "System",
    objModel: "system",
    operations: {
      create: { enabled: true },
      delete: { enabled: true, groups: [GROUPS.admin] },
      update: { enabled: true, groups: [GROUPS.admin] },
      find: { enabled: true },
      read: { enabled: true }

    },
  },
  {
    BaseType: "Tool",
    objModel: "tool",
    operations: {
      create: { enabled: true },
      delete: { enabled: true, groups: [GROUPS.admin] },
      update: { enabled: true, groups: [GROUPS.admin] },
      find: { enabled: true },
      read: { enabled: true }
    },
  },
  {
    BaseType: "User",
    objModel: "user",
    operations: {
      create: { enabled: true },
      delete: { enabled: true, groups: [GROUPS.owner, GROUPS.admin] },
      update: { enabled: true, groups: [GROUPS.owner, GROUPS.admin] },
      find: { enabled: true, groups: [GROUPS.admin] },
      read: { enabled: true, groups: [GROUPS.owner, GROUPS.admin] }
    },
  },
  {
    BaseType: "System",
    objModel: "system",
    operations: {
      create: { enabled: true },
      delete: { enabled: true, groups: [GROUPS.admin] },
      update: { enabled: true, groups: [GROUPS.admin] },
      find: { enabled: true },
      read: { enabled: true }
    },
  },
];