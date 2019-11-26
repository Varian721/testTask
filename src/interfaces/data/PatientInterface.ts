import { ConsentEnum } from "./";
import { GeneralInfoInterface } from "./";
import { MetaDataInterface } from "./";

export interface PatientInterface {
  _id: string;
  memberId: string;
  programIdentifier: string;
  dataSource: string;
  cardNumber: string;
  email: string;
  consent: ConsentEnum;
  generalInfo: GeneralInfoInterface;
  metaData: MetaDataInterface;
}
