const description = {
  alias: 'd',
  demandOption: true,
  desc: 'Description task.',
};

const complete = {
  alias: 'c',
  default: true,
  desc: 'Change status task',
};

const { argv } = require('yargs')
  .command('create', 'Create a task.', {
    description,
  })
  .command('update', 'Update the status of a task to completed', {
    description,
    complete,
  })
  .command('delete', 'Delete task.', {
    description,
  });

module.exports = {
  argv,
};