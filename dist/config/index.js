"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const app_1 = require("./app");
const swagger_1 = require("./swagger");
const database_1 = require("./database");
exports.config = {
    load: [app_1.appConfig, swagger_1.swaggerConfig, database_1.databaseConfig],
    cache: true,
    isGlobal: true,
};
