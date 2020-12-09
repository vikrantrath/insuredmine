const Carrier = require("../models/Carrier");

async function getSavedCarrier(carrier) {
  return await Carrier.findOneAndUpdate(
    {
      company_name: carrier.company_name,
    }, // find a document with that filter
    { $setOnInsert: carrier }, // document to insert when nothing was found
    { upsert: true, new: true, runValidators: true, useFindAndModify: false }
  );
}

module.exports = {
  getSavedCarrier,
};
