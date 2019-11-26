import {  PatientInterface } from '..';
import { FlatInterface } from '../general';

export interface PatientManagerInterface {
  activePatients: object;
  createDoc(data: FlatInterface): Promise<PatientInterface | void>;
  writeDoc(patientData: PatientInterface): Promise<PatientInterface | void>;
  getByPatientId(PatientId: string): Promise<PatientInterface[]>;
  getAllWithoutEmail(): Promise<PatientInterface[]>;
  getWithoutFirstName(): Promise<PatientInterface[]>;
}
