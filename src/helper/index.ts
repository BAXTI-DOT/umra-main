import { applyDecorators, HttpCode, HttpStatus } from '@nestjs/common'
import { ApiCreatedResponse, ApiOperation, ApiResponse } from '@nestjs/swagger'
import http from 'http'

export const luhn = (value: string): boolean => {
  const digits: number[] = value
    .split('')
    .reverse()
    .map((digit: string): number => Number(digit))

  const checksum: number = digits.reduce(
    (prev: number, curr: number, index: number) =>
      index % 2 !== 0 ? prev + ((curr *= 2) > 9 ? curr - 9 : curr) : prev + curr,
    0,
  )

  return checksum % 10 === 0
}

export const ApiResponseCustom = (status: HttpStatus, message: string, summary: string) =>
  applyDecorators(
    HttpCode(status),
    ApiResponse({
      status: status,
      description: http.STATUS_CODES[status],
      schema: {
        type: 'object',
        example: {
          status: status,
          message,
        },
      },
    }),
    ApiOperation({
      summary,
    })
  )
