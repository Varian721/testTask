import mongoose from 'mongoose';
import { PatientModel } from './models/PatientModel';
import { EmailModel } from './models/EmailModel';
import { DataBaseManagerInterface, ConfigInterface } from '../../';
import { serverError } from '../../utils';

mongoose.Promise = global.Promise;

export class DataBaseManager implements DataBaseManagerInterface {
  public PatientSchema: mongoose.Model< PatientModel & mongoose.Document, {}>;
  public EmailSchema: mongoose.Model< EmailModel & mongoose.Document, {}>;
  constructor(protected config: ConfigInterface) {
    this.PatientSchema = new PatientModel().getModelForClass(PatientModel, {
      existingMongoose: mongoose,
      schemaOptions: { _id: true, collection: 'patients' },
    });
    this.EmailSchema = new EmailModel().getModelForClass(EmailModel, {
      existingMongoose: mongoose,
      schemaOptions: { _id: true, collection: 'EMAIL' },
    });
  }
  connect(cb: any){
    return mongoose.connect(this.config.SESSIONS_DB, { useNewUrlParser: true }, cb)
    .then(() => console.log('Database connected'))
  }

  disconnect(): Promise<void>{
    return mongoose.disconnect();
  }

  reconnect(): Promise<any>{
    return this.disconnect().then(() =>
      this.connect((err: any) => {
        if (err !== null) {
          serverError(err);
        }
      }),
    );
  }

  getDriver() {
    return mongoose;
  }
}
