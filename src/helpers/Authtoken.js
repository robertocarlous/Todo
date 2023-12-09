const jwt = require("jsonwebtoken");

function generateToken(user) {
  const token = jwt.sign(
    {
      id: user._id.toString(),
    },
    process.env.authtoken,
    {
     expiresIn: "3hrs",
    }
  );
  return token;
}

function verifyToken(token) {
  try {
    const payload = jwt.verify(token, process.env.authtoken);
    return payload;
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      // Invalid token format or signature
      throw new Error('Invalid token: ' + error.message);
    } else if (error.name === 'TokenExpiredError') {
      // Token has expired
      throw new Error('Token expired');
    } else {
      // Handle other verification errors
      throw new Error('Invalid token');
    }
  }
}

module.exports = { generateToken, verifyToken };
