const { User, Policy } = require("../models");

function getPolicyInfoByUsername(userName) {
  return User.findOne({ first_name: userName }).then((user) => {
    return Policy.find({ user: user._id })
      .select("-__v -_id -user")
      .populate("agent", "-__v -_id")
      .populate("lob", "-__v -_id")
      .populate("carrier", "-__v -_id");
  });
}

function getAggregatedPolicy() {
  return Policy.find({})
    .select("-__v -_id")
    .populate("user", "-__v -_id")
    .populate("agent", "-__v -_id")
    .populate("lob", "-__v -_id")
    .populate("carrier", "-__v -_id");
}

module.exports = {
  getPolicyInfoByUsername,
  getAggregatedPolicy,
};
