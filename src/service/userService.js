const { User } = require("../models");

function getAggregatedPolicyByUser() {
  return User.find({})
    .select("-__v -_id")
    .populate({
      path: "policy",
      select: "-__v -_id -user",
      populate: [
        { path: "agent", select: "-__v -_id" },
        { path: "lob", select: "-__v -_id" },
        { path: "carrier", select: "-__v -_id" },
      ],
    });
}

module.exports = {
  getAggregatedPolicyByUser,
};
