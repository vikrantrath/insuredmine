const { User, Policy } = require("../models");

function getPolicyInfoByUsername(userName) {
  return User.findOne({ first_name: userName })
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
function getAggregatedPolicy() {
  return Policy.find({})
    .select("-__v -_id")
    .populate("user", "-__v -_id -policy")
    .populate("agent", "-__v -_id")
    .populate("lob", "-__v -_id")
    .populate("carrier", "-__v -_id");
}

module.exports = {
  getPolicyInfoByUsername,
  getAggregatedPolicy,
};
