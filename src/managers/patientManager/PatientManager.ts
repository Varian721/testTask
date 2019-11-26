import moment from 'moment';
import { PatientRepository } from '.';
import { DataBaseManager } from '..';
import {
  FlatInterface,
  PatientInterface,
  MetaDataInterface,
  PatientManagerInterface,
  PatientClassInterface,
  GeneralInfoClassInterface} from '../../interfaces';
import { setValues } from '../../utils';

export class PatientManager implements PatientManagerInterface {
  activePatients: object;

  constructor(
    protected repository: PatientRepository,
    protected dataBaseManager: DataBaseManager,
  ) {
    this.activePatients = {};
  }

  async createDoc(data: FlatInterface){
    let generalInfo: any =  new GeneralInfoClassInterface;
    let patientRawData: any = new PatientClassInterface;
    const metaData: MetaDataInterface = {
      creationDate: moment().unix(),
      modificationDate: moment().unix(),
    }
    generalInfo = setValues(data, generalInfo);
    patientRawData = setValues(data, patientRawData);
    const patientData = {...patientRawData, generalInfo:{ ...generalInfo }, metaData: {...metaData}};
    console.log([patientData])
    return this.writeDoc(patientData);
  }

  async writeDoc(patientData: PatientInterface) {
    return this.repository.createPatienAndEmail(patientData);
  }

  async getByPatientId(patientId: string) {
    return this.repository.getByPatientId(patientId);
  }
}
