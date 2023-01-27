const userServices = require('../services/userServices');

const newUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, message, token } = await userServices.newUser(
    email,
    displayName,
    image,
    password,
  );
  if (!message) {
    return res.status(status).json({ token });
  }
  return res.status(status).json({ message });
};

module.exports = {
    newUser,
};