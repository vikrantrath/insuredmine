const Agent = require("../models/Agent");

async function getSavedAgent(agent) {
  return await Agent.findOneAndUpdate(
    {
      agent_name: agent.agent_name,
    }, // find a document with that filter
    { $setOnInsert: agent }, // document to insert when nothing was found
    { upsert: true, new: true, runValidators: true, useFindAndModify: false }
  );
}

module.exports = {
  getSavedAgent,
};
