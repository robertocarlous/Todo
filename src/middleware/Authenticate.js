const Authenticate = (req, res, next) => {
    if (req.session && req.session.user) {
      next();
    } else {
      res
        .status(401)
        .json({ message: "Unauthorized: Please login to create a todo" });
    }
  };
  module.exports=Authenticate;