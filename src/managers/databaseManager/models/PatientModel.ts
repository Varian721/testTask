import { Typegoose, prop } from 'typegoose';
import { PatientInterface} from '../../../';
import { GeneralInfoModel } from './GeneralInfoModel';
import { MetaDataModel } from './MetaDataModel';
import { ConsentEnum } from '../../../interfaces';

export class PatientModel extends Typegoose implements PatientInterface {

  _id: string;
  @prop({ required: true })
    memberId: string;

  @prop()
    programIdentifier: string;

  @prop()
    dataSource: string;

  @prop()
    cardNumber: string;

  @prop()
    email: string;

  @prop()
    consent: ConsentEnum;

  @prop({ required: true, _id: false })
    generalInfo: GeneralInfoModel;

  @prop({ required: true, _id: false })
    metaData: MetaDataModel;
}
