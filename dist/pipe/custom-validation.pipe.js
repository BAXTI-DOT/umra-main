"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomValidationPipe = void 0;
const common_1 = require("@nestjs/common");
class CustomValidationPipe extends common_1.ValidationPipe {
    constructor() {
        super({
            transform: true,
            whitelist: true,
            stopAtFirstError: true,
        });
    }
}
exports.CustomValidationPipe = CustomValidationPipe;
