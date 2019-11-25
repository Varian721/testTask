import { MetaDataInterface } from "./";

export interface EmailInterface {
  _id: string;
  patient_id: string;
  email: string;
  departure: number;
  mailVariables: {[key:string]: string | number}
  metaData: MetaDataInterface;
}
