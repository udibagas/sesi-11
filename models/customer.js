const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

class Customer extends Model {
  get title() {
    return this.gender == "M" ? "Mr." : "Mrs.";
  }
}

Customer.init(
  {
    name: DataTypes.STRING(50),
    gender: "CHAR(1)",
    email: DataTypes.STRING(100),
    phone: DataTypes.STRING(20),
    address: DataTypes.TEXT,
  },
  {
    sequelize,
    timestamps: false,
    // modelName: "Customer",
    // tableName: "Customers",
  }
);

module.exports = Customer;
