import { buildMessage, ValidateBy, ValidationOptions } from 'class-validator'
import { luhn } from '../helper'

export const IsPan = (options?: ValidationOptions): PropertyDecorator =>
  ValidateBy(
    {
      name: 'IsPan',
      validator: {
        validate: (value: unknown): boolean => typeof value === 'string' && /^\d{16}$/.test(value) && luhn(value),
        defaultMessage: buildMessage((each: string): string => each + '$property must be a valid PAN', options),
      },
    },
    options,
  )

export const IsPhone = (options?: ValidationOptions): PropertyDecorator =>
  ValidateBy(
    {
      name: 'IsPhone',
      validator: {
        validate: (value: unknown): boolean =>
          typeof value === 'string' && /^998(33|77|88|90|91|93|94|95|97|98|99)\d{7}$/.test(value),
        defaultMessage: buildMessage((each: string): string => each + '$property must be a valid phone', options),
      },
    },
    options,
  )
