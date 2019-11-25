import { PatientRepository } from '.';
import { DataBaseManager } from '..';
import { PatientManagerInterface} from '../..';
import { PatientInterface } from '../..';

export class PatientManager implements PatientManagerInterface {
  activePatients: object;

  constructor(
    protected repository: PatientRepository,
    protected dataBaseManager: DataBaseManager,
  ) {
    this.activePatients = {};
  }

  async create(data: PatientInterface) {
    return this.repository.create(data);
  }
  async getByPatientId(patientId: string) {
    return this.repository.getByPatientId(patientId);
  }
}
