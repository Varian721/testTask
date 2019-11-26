import {  PatientInterface } from '..';
import { FlatInterface } from '../general';

export interface PatientManagerInterface {
  activePatients: object;
  createDoc(data: FlatInterface): Promise<PatientInterface>;
  writeDoc(patientData: PatientInterface): Promise<PatientInterface>;
  getByPatientId(PatientId: string): Promise<PatientInterface[]>;
}
