const crypto = require("crypto");

const createHmac = (secret, data) => {
  try {
    const shasum = crypto.createHmac("sha256", secret);
    shasum.update(JSON.stringify(data));
    const digest = shasum.digest("hex");
    return digest;
  } catch (e) {
    return null;
  }
};

module.exports = { createHmac };
