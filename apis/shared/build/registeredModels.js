"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
exports.registeredModels = [
    {
        BaseType: "Boat",
        objModel: "boat",
        operations: {
            create: { enabled: true },
            delete: { enabled: true, groups: [models_1.GROUPS.owner, models_1.GROUPS.admin] },
            update: { enabled: true, groups: [models_1.GROUPS.owner, models_1.GROUPS.admin] },
            find: { enabled: true, groups: [models_1.GROUPS.admin] },
            read: { enabled: true, groups: [models_1.GROUPS.owner, models_1.GROUPS.admin] }
        }
    },
    {
        BaseType: "Part",
        objModel: "part",
        operations: {
            create: { enabled: true },
            delete: { enabled: true, groups: [models_1.GROUPS.admin] },
            update: { enabled: true, groups: [models_1.GROUPS.admin] },
            find: { enabled: true },
            read: { enabled: true }
        },
    },
    {
        BaseType: "Service",
        objModel: "service",
        operations: {
            create: { enabled: true },
            delete: { enabled: true, groups: [models_1.GROUPS.owner, models_1.GROUPS.admin] },
            update: { enabled: true, groups: [models_1.GROUPS.owner, models_1.GROUPS.admin] },
            find: { enabled: true, groups: [models_1.GROUPS.admin] },
            read: { enabled: true, groups: [models_1.GROUPS.owner, models_1.GROUPS.admin] }
        },
    },
    {
        BaseType: "System",
        objModel: "system",
        operations: {
            create: { enabled: true },
            delete: { enabled: true, groups: [models_1.GROUPS.admin] },
            update: { enabled: true, groups: [models_1.GROUPS.admin] },
            find: { enabled: true },
            read: { enabled: true }
        },
    },
    {
        BaseType: "Tool",
        objModel: "tool",
        operations: {
            create: { enabled: true },
            delete: { enabled: true, groups: [models_1.GROUPS.admin] },
            update: { enabled: true, groups: [models_1.GROUPS.admin] },
            find: { enabled: true },
            read: { enabled: true }
        },
    },
    {
        BaseType: "User",
        objModel: "user",
        operations: {
            create: { enabled: true },
            delete: { enabled: true, groups: [models_1.GROUPS.owner, models_1.GROUPS.admin] },
            update: { enabled: true, groups: [models_1.GROUPS.owner, models_1.GROUPS.admin] },
            find: { enabled: true, groups: [models_1.GROUPS.admin] },
            read: { enabled: true, groups: [models_1.GROUPS.owner, models_1.GROUPS.admin] }
        },
    },
    {
        BaseType: "System",
        objModel: "system",
        operations: {
            create: { enabled: true },
            delete: { enabled: true, groups: [models_1.GROUPS.admin] },
            update: { enabled: true, groups: [models_1.GROUPS.admin] },
            find: { enabled: true },
            read: { enabled: true }
        },
    },
];
//# sourceMappingURL=registeredModels.js.map