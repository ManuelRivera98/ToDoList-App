const fs = require('fs');
const colors = require('colors/safe');

class LibDB {
  constructor() {
    this.fs = fs;
    this.data = [];
  }

  setDB(object) {
    this.getDataDB();

    let isArray = Array.isArray(object);

    let data;

    if (isArray) {
      data = JSON.stringify(object);
    } else {
      this.data.push(object);
      data = JSON.stringify(this.data);
    }

    this.fs.writeFile('db/task.json', data, (error) => {
      if (error) return console.error(error);
      if (!isArray) return console.log(`The data ${object.description} was successfully written.`)

      console.log('Process successfully');
    })
  }

  getDataDB() {
    try {
      const dataDB = require('../db/task.json');

      return this.data = dataDB;
    } catch (error) {
      return this.data = [];
    }
  }
}

module.exports = {
  LibDB,
};