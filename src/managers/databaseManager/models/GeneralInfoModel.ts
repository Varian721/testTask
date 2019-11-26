import { Typegoose, prop } from 'typegoose';
import { GeneralInfoInterface } from '../../../';

export class GeneralInfoModel extends Typegoose implements GeneralInfoInterface {
  @prop()
    firstName: string;

  @prop()
    lastName: string;

  @prop()
    dateOfBirth: string;

  @prop()
    mobilePhone: string;

  @prop()
    address1: string;

  @prop()
    address2: string;

  @prop()
    state: string;

  @prop()
    city: string;

  @prop()
    zip: string;

  @prop()
    telephoneNumber: string;
}
