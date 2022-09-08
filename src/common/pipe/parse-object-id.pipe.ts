import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class ParseObjectIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const validObjectId = Types.ObjectId.isValid(value);

    if(!validObjectId){
      throw new BadRequestException({
        statusCode: 400,
        message: 'O id informado é invalido'
      })
    }


    return value;
  }
}
