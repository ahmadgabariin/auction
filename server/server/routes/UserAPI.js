const express = require(`express`);
const router = express.Router();
const jwt = require(`jsonwebtoken`);
require("dotenv").config()
const bcrypt = require(`bcrypt`)
const User = require(`../models/User`)

router.get(`/user`, function (request, response) {
  response.send(`get user`);
})

router.delete(`/user`, function (request, response) {
  response.send(`delete user`);
})
 
router.put(`/user`, function (request, response) {
  response.send(`update user`);
})

router.post(`/user`, async function (request, response) {
  try {
    let user = request.body
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash( user.password , salt)
    user.password = hashedPassword
    const newUser = new User(user)
    newUser.save(function (error , user ) {
      if (error) {
        response.status(500).send(error)
      }
      response.status(201).send(user);
    })
  } catch {
    response.status(500).send(`error`)
  }
  
})

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
}

router.delete(`/user`, function (request, response) {
  response.send(`delete user`);
});

router.put(`/user`, function (request, response) {
  response.send(`update user`);
})

router.post(`/user`, function (request, response) {
  response.send(`post user`);
})

router.get(`/isAuth`, verifyJWT, function (request, response) {
  response.send({ auth: true, msg: "authorization approved" });
})

router.post(`/login`, async function (request, response) {
  const username = request.body.username;
  const password = request.body.password;
  User.findOne ({
    email :username
  } , async function (error , user) {
    try {
      if (error) { 
        response.status(500).send(error) 
        return
      }
      else if ( ! user) { 
        response.status(404).send(`User not found`) 
        return
      }  
      
      if ( await bcrypt.compare(password , user.password) ) {

        const token = jwt.sign({ username }, "secret123", {
          expiresIn: 1000,
        })
        response.send({ user ,auth: true, token: token })
        return
        
      } else {
        response.status(404).send(`Wrong Password`) 
        return
      }
    } catch   {
      response.status(500).send(`Error`)
      return
    }
  })

  
})



module.exports = router;
