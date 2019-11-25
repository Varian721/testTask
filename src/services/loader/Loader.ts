import fs from 'fs';
import readline from 'readline';

import { LoaderServiceInterface } from '../..';

export class LoaderService implements LoaderServiceInterface{
  protected store: any;
  constructor(){
  }
  async initialize(location: string){
    await this.checkIfFileExist(location);
    await this.readFile(location);
  }

  protected readFile(directory: string ): Promise< any >{
    return new Promise((resolve, reject) => {
      const inStream = fs.createReadStream(directory);
      const rl = readline.createInterface(inStream);
      rl.on('line', (line: string) => {
      });
      rl.on('close', () => {
        resolve();
      });
    })
  }

  protected checkIfFileExist(directory: string): Promise< boolean >{
    return new Promise((resolve, reject)=>{
      fs.access(directory, (err) => {
        if (err) {
          console.log('\f Provided file does not exist ... \n Using default path .........\n');
          resolve(false );
        }
        resolve(true );
      })
   })
  }
}
