const { argv } = require('./config/yargs');

const { createTask, listTask, updateTask, deleteTask } = require('./functions');

let command = argv._[0];

switch (command) {
  case 'create':
    createTask(argv.description);
    break;
  case 'list':
    listTask();
    break;
  case 'update':
    updateTask(argv.description, argv.complete);
    break;
  case 'delete':
    deleteTask(argv.description);
    break;
  case undefined:
    console.log('Run node fileName --help');
    break;
  default:
    console.log('Command don\'t exists');
}