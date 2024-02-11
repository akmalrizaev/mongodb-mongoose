const { MongoClient } = require('mongodb');

const url =
  'mongodb+srv://akmalxiaomirizayev:9C0zuvDgweI8uzkh@cluster0.w8jtw5d.mongodb.net/products_test?retryWrites=true&w=majority';

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };

  const client = new MongoClient(url);

  try {
    // Connect to DB
    await client.connect();
    console.log('DB Connected successfully');

    // Create new DB
    const db = client.db('products_test');

    // Create collection
    const products = db.collection('products');

    // Create document
    const product = await products.insertOne(newProduct);
  } catch (error) {
    console.log(error);
    return res.json({ message: 'Could not store data' });
  }

  client.close();

  res.json(newProduct);
};

const getProducts = (req, res, next) => {};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
