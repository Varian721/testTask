import mongoose from 'mongoose';
import { PatientModel } from '..';
import { EmailModel } from '..';
import { PatientInterface, EmailInterface } from '../../interfaces';
import { createEmailsWithDays } from '../../utils';

export class PatientRepository {
  constructor(
    protected patientSchema: mongoose.Model<PatientModel & mongoose.Document,{}>,
    protected emailSchema: mongoose.Model<EmailModel & mongoose.Document, {}>,
  ) {}

  async createPatienAndEmail(patientData: PatientInterface) {
    let result: PatientInterface;
    return this.patientSchema
      .create(patientData)
      .then((data) => {
        result = data.toObject();
        if (result.consent === 1){
          const emails: EmailInterface[] = createEmailsWithDays(result, 4);
          return this.emailSchema.create(emails);
        }
      })
      .then(() => {
        return result;
      })
      .catch((err) => {
        // throw err;
        console.error(err)
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
