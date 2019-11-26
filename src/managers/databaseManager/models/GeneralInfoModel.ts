import { Typegoose, prop } from 'typegoose';
import { GeneralInfoInterface } from '../../../';

export class GeneralInfoModel extends Typegoose implements GeneralInfoInterface {
  @prop({required: true })
    firstName: string;

  @prop({ required: true })
    lastName: string;

  @prop({ required: true })
    dateOfBirth: string;

  @prop({ required: true })
    mobilePhone: string;

  @prop({ required: true })
    address1: string;

  @prop()
    address2: string;

  @prop({ required: true })
    state: string;

  @prop({ required: true })
    city: string;

  @prop({ required: true })
    zip: string;

  @prop()
    telephoneNumber: string;
}
