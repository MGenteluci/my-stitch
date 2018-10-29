exports = () => {
  const collection = context.services.get('mongodb-atlas')
  .db('personal')
  .collection('stitch-visitors');
  
  return collection.findOne()
  .then(doc => {
    return collection.updateOne({ _id: doc._id }, { '$set': { number: doc.number + 1 } })
    .then(() => String(doc.number + 1));
  });
};
