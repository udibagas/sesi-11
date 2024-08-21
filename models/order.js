const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

class Order extends Model {}

Order.init(
  {
    date: DataTypes.DATE,
    ProductId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    totalAmount: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Order",
    tableName: "Orders",
    timestamps: false,
  }
);

// Order.belongsTo(Product);

module.exports = Order;
