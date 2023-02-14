"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const config_1 = require("@nestjs/config");
exports.appConfig = (0, config_1.registerAs)('app', () => {
    return {
        env: String(process.env.NODE_ENV ?? 'development'),
        host: String(process.env.APP_HOST ?? '127.0.0.1'),
        port: Number(process.env.APP_PORT ?? 3000),
    };
});
