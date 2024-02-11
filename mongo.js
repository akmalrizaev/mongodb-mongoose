const MongoClient = require('mongodb').MongoClient;

const url =
  'mongodb+srv://akmalxiaomirizayev:9C0zuvDgweI8uzkh@cluster0.w8jtw5d.mongodb.net/products_test?retryWrites=true&w=majority';

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    console.log(newProduct);
    console.log('-------------------------------');
    await db.collection('products').insertOne(newProduct, function (err, res) {
      if (err) {
        return res.send({ error: 'An error has occurred' });
      }
    });
    console.log(newProduct);
  } catch (error) {
    return res.json({ message: 'Could not store data' });
  }
  client.close();

  res.json(newProduct);
};

const getProducts = async (req, res, next) => {};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
