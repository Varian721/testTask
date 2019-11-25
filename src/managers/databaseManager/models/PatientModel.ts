import { Typegoose, prop, arrayProp } from 'typegoose';
import { PatientInterface} from '../../../';
import { GeneralInfoModel } from './GeneralInfoModel';
import { MetaDataModel } from './MetaDataModel';
import { ConsentEnum } from '../../../interfaces';

export class PatientModel extends Typegoose implements PatientInterface {

  _id: string;
  @prop({ required: true })
    memberId: number;

  @prop({ required: true })
    programIdentifier: number;

  @prop({ required: true })
    dataSource: string;

  @prop({ required: true })
    cardNumber: number;

  @prop({ required: true })
    email: string;

  @prop({ required: true })
    consent: ConsentEnum;

  @prop({ required: true })
    generalInfo: GeneralInfoModel;

  @prop({ required: true })
    metaData: MetaDataModel;
}
