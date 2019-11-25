import { Typegoose, prop } from 'typegoose';
import { EmailInterface } from '../../../';
import { MetaDataModel } from './MetaDataModel';

export class EmailModel extends Typegoose implements EmailInterface {

  _id: string;
  @prop({ required: true })
    patient_id: string;

  @prop({ required: true })
    email: string;

  @prop({ required: true })
    departure: number;

  @prop({ required: true })
    mailVariables: {[key:string]: string | number};

  @prop({ required: true})
    metaData: MetaDataModel;
}
