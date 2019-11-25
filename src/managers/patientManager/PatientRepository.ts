import mongoose from 'mongoose';
import { PatientModel } from '..';
import { EmailModel } from '..';

export class PatientRepository {
  constructor(
    protected patientSchema: mongoose.Model<PatientModel & mongoose.Document,{}>,
    protected emailSchema: mongoose.Model<EmailModel & mongoose.Document, {}>,
  ) {}

  async create(data: PatientModel) {
    let result: any;
    return this.patientSchema
      .create(data)
      .then((data) => {
        result = data.toObject();
        return this.patientSchema.create({
          patient_id: result._id,
        } as EmailModel);
      })
      .then(() => {
        return result;
      })
      .catch((err) => {
        throw err;
      });
  }

  /**
   * This method just find without additional logic
   *
   * @param patientId
   */
  async getByPatientId(patientId: string) {
    return await this.patientSchema.find({ patientId });
  }
}
