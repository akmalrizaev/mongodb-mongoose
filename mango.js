//  db.collection.insertOne()

const { MongoClient } = require('mongodb');

const url = '';

const read = async (req, res, next) => {
  try {
    const client = new MongoClient(url);
    await client.connect();

    const db = client.db('products_test');

    const products = db.collection('products');

    const product = products.insertOne();

    new MongoClient(url).db('products_test').collection('products').insertOne;
  } catch (error) {}

  client.close();
};
