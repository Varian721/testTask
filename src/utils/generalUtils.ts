import { PatientInterface, EmailInterface } from "../interfaces";
import moment from "moment";

export const setValues = (data: object, array: {[key:string]: string | number}) => {
  return Object.keys(array).map(element => {
    array[element] = ( data as any)[array[element]];
  });
}

export const createEmailsWithDays = (data: PatientInterface, n: number): EmailInterface[] => {
  const emails: EmailInterface[] = []
  for (let i = 0; i < n; i++){
    const email: EmailInterface = {
      patient_id: data._id,
      email: data.email,
      departure: moment().add('day', i).unix(),
      mailVariables: data.generalInfo,
      metaData: {
        creationDate: moment().unix(),
        modificationDate: moment().unix()
      }
    }
    emails.push(email);
  }
  return emails;
}
