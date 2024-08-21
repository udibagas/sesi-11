const { Model, DataTypes } = require("sequelize");
const { toRupiah } = require("../helpers/number");
const sequelize = require("../sequelize");

class Product extends Model {
  get priceInRupiah() {
    return toRupiah(this.price);
  }
}

Product.init(
  {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
  },
  {
    sequelize,
    timestamps: false,
    // tableName: "Products",
    // modelName: "Product",
  }
);

module.exports = Product;
