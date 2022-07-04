const express = require(`express`);
const router = express.Router();
const jwt = require(`jsonwebtoken`);
require("dotenv").config()

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (token) {
    jwt.verify(token,process.env.SECRET_KEY , (err, decoded) => {
      if (err) {
        res.send({ auth: false, msg: "authorization failed" });
      } else {
        next();
      }
    });
  } else {
    res.send({ auth: false, msg: "missing token" });
  }
};

router.delete(`/user`, function (request, response) {
  response.send(`delete user`);
});

router.put(`/user`, function (request, response) {
  response.send(`update user`);
});

router.post(`/user`, function (request, response) {
  response.send(`post user`);
});

router.get(`/isAuth`, verifyJWT, function (request, response) {
  response.send({ auth: true, msg: "authorization approved" });
});


router.post(`/user`, function (request, response) {
  const username = request.body.username;
  const password = request.body.username;

  if (username === "123" && password === "123") {
    const token = jwt.sign({ username }, "secret123", {
      expiresIn: 1000,
    });

    response.send({ auth: true, token: token });

  } else {
    response.send("username/password are wrong");
  }
});

module.exports = router;
