const { LOB } = require("../models");

async function getSavedLOB(lob) {
  return await LOB.findOneAndUpdate(
    {
      category_name: lob.category_name,
    }, // find a document with that filter
    { $setOnInsert: lob }, // document to insert when nothing was found
    { upsert: true, new: true, runValidators: true, useFindAndModify: false }
  );
}

module.exports = {
  getSavedLOB,
};
