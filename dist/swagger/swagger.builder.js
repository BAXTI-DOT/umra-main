"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerBuilder = void 0;
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
class SwaggerBuilder {
    static make(app, customOptions, documentOptions) {
        const config = app.get(config_1.ConfigService);
        const swagger = config.get('swagger', {
            path: '/api',
            options: {
                openapi: '3.0.0',
                info: {
                    title: 'NestJS',
                    version: '1.0.0',
                },
            },
        });
        const document = swagger_1.SwaggerModule.createDocument(app, swagger.options, documentOptions);
        return swagger_1.SwaggerModule.setup(swagger.path, app, document, customOptions);
    }
}
exports.SwaggerBuilder = SwaggerBuilder;
