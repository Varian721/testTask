
import inquirer from 'inquirer';
import { Core } from './Core';

const core = new Core( { SESSIONS_DB:'mongodb://127.0.0.1:27017', ENVIRONMENT: 'prod'});

const run = async() => {
  const res = await core.init();
    console.log('\n\n\n\n\n');
    const mainMenuQuestions: inquirer.Question[] = [
      {
        type: 'input',
        name: 'path',
        message: "Enter a full path to the flatFile (press `CTRL + C`to exit)",
      }
    ]
    const answers = await inquirer.prompt(mainMenuQuestions);
    await core.loaderService.loadData(answers['path']);
    const resultEmail = await core.patientManager.getAllWithoutEmail();
    console.log('\n ALL WITHOUT EMAILS', resultEmail, '\n\n\n')
    const resultFirstName = await core.patientManager.getWithoutFirstName()
    console.log('\n ALL WITHOUT FIRSTNAME', resultFirstName, '\n\n\n')
    process.exit();
  ;
}

run();
