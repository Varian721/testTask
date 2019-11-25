import { ConsentEnum } from "./";
import { GeneralInfoInterface } from "./";
import { MetaDataInterface } from "./";

export interface PatientInterface {
  _id: string;
  memberId: number;
  programIdentifier: number;
  dataSource: string;
  cardNumber: number;
  email: string;
  consent: ConsentEnum;
  generalInfo: GeneralInfoInterface;
  metaData: MetaDataInterface;
}
