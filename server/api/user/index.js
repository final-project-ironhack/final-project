/*jshint esversion:6*/
let express = require('express');
let controller = require('./user.controller');

let router = express.Router();
//works!
router.post('/signup', controller.createUser);
//Works!
router.post('/login', controller.logInUser);
//toTest
router.post('/logout', controller.logOutUser);
//toTest
router.get('/loggedin', controller.loggedIn);
router.post('/create-user', controller.createUser);
//Works!
router.put('/edit-user/:id', controller.editUser);
//Works
router.get('/get-all-users', controller.getAllUsers);
//Works!
router.get('/get-user-by-id/:id', controller.getUserById);
//Works!
router.delete('/remove-user/:id', controller.removeUser);
//toTest
router.get('/get-user-logged', controller.getUserLogged);

module.exports = router;
