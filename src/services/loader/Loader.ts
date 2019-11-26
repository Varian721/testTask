import fs from 'fs';
import csv from 'csvtojson';
import { LoaderServiceInterface, PatientManager  } from '../..';
import { async } from 'rxjs/internal/scheduler/async';

export class LoaderService implements LoaderServiceInterface{
  protected manager: PatientManager;
  constructor(manager: PatientManager){
    this.manager = manager;
  }
  async loadData(location: string){
    await this.checkIfFileExist(location);
    await this.readFileAndCreateDocument(location);
  }

  protected async readFileAndCreateDocument(directory: string ): Promise<any>{
    const inStream = fs.createReadStream(directory);
    return csv({delimiter: '|'}).fromStream(inStream)
    .subscribe(async (json)=>{
      await this.manager.createDoc(json);
    })
  }

  protected checkIfFileExist(directory: string): Promise< boolean >{
    return new Promise((resolve, reject)=>{
      fs.access(directory, (err) => {
        if (err) {
          console.log('\f Provided file does not exist ... \n');
          process.exit();
        }
        resolve(true );
      })
   })
  }
}
