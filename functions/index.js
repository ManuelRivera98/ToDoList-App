const colors = require('colors');

const { LibDB } = require('../lib/db');

const DB = new LibDB();

const createTask = (description) => {
  const data = {
    description,
    complete: false,
  };

  DB.setDB(data);
};

const listTask = () => {
  let taskDB = DB.getDataDB();
  for (let task of taskDB) {
    console.log('======Task======'.green);
    console.log(task.description);
    console.log('State', task.complete);
    console.log('============'.green);
  }
}

const updateTask = (description, complete = true) => {
  let tasksDB = DB.getDataDB();

  let index = tasksDB.findIndex((task) => {
    return task.description === description;
  });

  if (index >= 0) {
    tasksDB[index].complete = complete;
    DB.setDB(tasksDB);
    return console.log(`The task ${description} was updated successfully.`);
  }

  console.log(`The task ${description} does not exist`)
}

const deleteTask = (description) => {
  let tasksDB = DB.getDataDB();

  let index = tasksDB.findIndex((task) => {
    return task.description === description;
  });

  if (index >= 0) {
    tasksDB.splice(index, 1);
    DB.setDB(tasksDB);
    return console.log(`The task ${description} was eliminated.`);
  }

  console.log(`The task ${description} does not exist.`);
}

module.exports = {
  createTask,
  listTask,
  updateTask,
  deleteTask,
};