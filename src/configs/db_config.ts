export const STORE_NAME = "employees";

export const DBConfig = {
    name: "employeesLocalDB",
    version: 1,
    objectStoresMeta: [
        {
            store: STORE_NAME,
            storeConfig: { keyPath: "id", autoIncrement: true },
            storeSchema: [
                { name: "fullName", keypath: "fullName", options: { unique: false } },
                { name: "role", keypath: "role", options: { unique: false } },
                { name: "dateFrom", keypath: "dateFrom", options: { unique: false } },
                { name: "dateTo", keypath: "dateTo", options: { unique: false } },
            ],
        },
    ],
};