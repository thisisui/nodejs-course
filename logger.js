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

// Running the logger
const logger = new Logger();

logger.on("message", (data) => console.log("Called Listener", data));

logger.log("Hello World");
