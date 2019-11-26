import {  PatientInterface } from '..';
import { FlatInterface } from '../general';
import { EmailInterface } from '../data';

export interface PatientManagerInterface {
  activePatients: object;
  createDoc(data: FlatInterface): Promise<PatientInterface>;
  writeDoc(patientData: PatientInterface): Promise<PatientInterface>;
  getByPatientId(PatientId: string): Promise<PatientInterface[]>;
}
