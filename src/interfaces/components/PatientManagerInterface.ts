import {  PatientInterface } from '..';

export interface PatientManagerInterface {
  activePatients: object;
  create(data: PatientInterface): Promise<PatientInterface>;
  getByPatientId(PatientId: string): Promise<PatientInterface[]>;
}
