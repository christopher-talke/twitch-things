require("dotenv").config();

module.exports = {
  IS_DEV: process.env.NODE_ENV === "development" ? true : false,
  TWITCH_SECRET: process.env.TWITCH_SECRET,
};
