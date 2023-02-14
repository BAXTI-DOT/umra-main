"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const config_1 = require("@nestjs/config");
exports.databaseConfig = (0, config_1.registerAs)('database', () => {
    return {
        url: String(process.env.DATABASE_URL ?? 'postgresql://postgres:postgres@127.0.0.1:5433/umra'),
    };
});
