const NotFoundError = require("../errors/notfounderror");
const Product = require("../models/product");

exports.products = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    console.log(products[0].priceInRupiah);

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

exports.productById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(Number(id));
    if (!product) throw new NotFoundError("Product not found");
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

exports.createNewProduct = async (req, res, next) => {
  console.log(req.body);
  const { name, price, stock } = req.body;

  try {
    const newProduct = await Product.create({ name, price, stock });
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

exports.updateProductById = async (req, res, next) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;

  try {
    const product = await Product.findByPk(id);
    if (!product) throw new NotFoundError("Product not found");
    await product.update({ name, price, stock });

    // const product = await Product.update(
    //   { name, price, stock },
    //   { where: { id }, returning: true }
    // );
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

exports.removeProductById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (!product) throw new NotFoundError("Product not found");
    await product.destroy();
    // await Product.destroy({ where: { id } });
    res.status(200).json({
      message: "Product has been deleted",
    });
  } catch (error) {
    next(error);
  }
};
