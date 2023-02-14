"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerConfig = void 0;
const config_1 = require("@nestjs/config");
exports.swaggerConfig = (0, config_1.registerAs)('swagger', () => {
    return {
        path: String(process.env.SWAGGER_PATH ?? '/api'),
        options: {
            openapi: '3.0.0',
            info: {
                title: 'Umra',
                version: '0.0.0',
                description: 'API Documentation',
            },
        },
    };
});
