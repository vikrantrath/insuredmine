const schedule = require("node-schedule");
const Message = require("../models/Message");

function scheduleMessage(message, insertTime) {
  const scheduledDate = new Date(insertTime);
  schedule.scheduleJob(scheduledDate, () => {
    new Message({
      message: message,
      insertedAt: new Date().toUTCString(),
    }).save();
  });
}

module.exports = {
  scheduleMessage,
};
