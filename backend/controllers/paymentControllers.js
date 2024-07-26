const { STRIPE_PUBLISHABLE_KEY, STRIPE_SECRET_KEY } = process.env;

const stripe = require("stripe")(STRIPE_SECRET_KEY);

const payment = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const success = async (req, res) => {
  try {
    res.json("payment is successful");
  } catch (error) {
    console.log(error);
    res.json({ msg: error.message, success: false, status: 500 });
  }
};

const failed = async (req, res) => {
  try {
    res.json("payment is failed");
  } catch (error) {
    console.log(error);
    res.json({ msg: error.message, success: false, status: 500 });
  }
};

const getKey = (req, res) => {
  try {
    res.json({ key: STRIPE_PUBLISHABLE_KEY, success: true, status: 200 });
  } catch (error) {
    console.log(error);
    res.json({ msg: error.message, success: false, status: 500 });
  }
};

module.exports = { payment, success, failed, getKey };
