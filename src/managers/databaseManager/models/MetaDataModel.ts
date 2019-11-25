import { Typegoose, prop } from 'typegoose';
import { MetaDataInterface } from '../../../';

export class MetaDataModel extends Typegoose implements MetaDataInterface {

  @prop({ required: true })
    creationDate: number;

  @prop({ required: true })
    modificationDate: number;

  @prop()
    editor: string;
}
