"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponseCustom = exports.luhn = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const http_1 = __importDefault(require("http"));
const luhn = (value) => {
    const digits = value
        .split('')
        .reverse()
        .map((digit) => Number(digit));
    const checksum = digits.reduce((prev, curr, index) => index % 2 !== 0 ? prev + ((curr *= 2) > 9 ? curr - 9 : curr) : prev + curr, 0);
    return checksum % 10 === 0;
};
exports.luhn = luhn;
const ApiResponseCustom = (status, message, summary) => (0, common_1.applyDecorators)((0, common_1.HttpCode)(status), (0, swagger_1.ApiResponse)({
    status: status,
    description: http_1.default.STATUS_CODES[status],
    schema: {
        type: 'object',
        example: {
            status: status,
            message,
        },
    },
}), (0, swagger_1.ApiOperation)({
    summary,
}));
exports.ApiResponseCustom = ApiResponseCustom;
