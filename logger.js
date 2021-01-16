const EventEmitter = require("events");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    const message = { id: uuid.v4(), msg };
    this.emit("message", message);
    // File append
    fs.appendFile(
      path.join("./logger.txt"),
      `${message.id} ${message.msg}`,
      (err) => {
        if (err) throw err;
        console.log("File written to...");
      }
    );
  }
}

module.exports = Logger;
