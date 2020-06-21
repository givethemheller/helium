import { GROUPS } from "./models";
export declare type RegisteredModels = {
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
        create: {
            enabled: boolean;
            groups?: GROUPS[];
        };
        /**
         * includes read a command in the controller
         */
        read: {
            enabled: boolean;
            groups?: GROUPS[];
        };
        /**
        * includes update a command in the controller
        */
        update: {
            enabled: boolean;
            groups?: GROUPS[];
        };
        /**
        * includes delete a command in the controller
        */
        delete: {
            enabled: boolean;
            groups?: GROUPS[];
        };
        /**
        * includes find a command in the controller
        */
        find: {
            enabled: boolean;
            groups?: GROUPS[];
        };
    };
}[];
export declare const registeredModels: RegisteredModels;
