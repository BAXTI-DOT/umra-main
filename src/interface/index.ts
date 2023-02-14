import { HttpStatus } from '@nestjs/common'

export interface Response {
  readonly status: HttpStatus
  readonly message?: string
  readonly exception?: string
}
