
import inquirer from 'inquirer';
import { Core } from './Core';

const core = new Core( { SESSIONS_DB:'', ENVIRONMENT: 'prod'});

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
    console.log(answers['path'])
    await core.loaderService.loadData(answers['path']);
    process.exit();
  ;
}

run();
