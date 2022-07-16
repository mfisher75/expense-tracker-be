import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class MongoIdPipe implements PipeTransform {
  transform(value: any) {
    // valid MongoDB id RegExp
    if (/^[0-9a-fA-F]{24}$/.test(value) === false) {
      throw new BadRequestException('id parameter is malformed');
    }
    return value;
  }
}