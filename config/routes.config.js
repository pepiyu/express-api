const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.middleware')
const accounts = require('../controllers/account.controller')
const users = require('../controllers/users.controller')
const upload = require('../config/multer.config')

router.get('/accounts', auth.isAuthenticated, accounts.list);
router.post('/accounts', auth.isAuthenticated, upload.single("image"), accounts.create)
router.get('/accounts/:id', auth.isAuthenticated, accounts.detail);
router.patch('/accounts/:id', auth.isAuthenticated, accounts.update);
router.delete('/accounts/:id', auth.isAuthenticated, accounts.remove);


router.get('/users', auth.isAuthenticated, users.list);
router.post('/users', users.create);
router.patch('/users/:id', auth.isAuthenticated, users.update);
router.get('/users/:id/activate', users.activate);
router.post('/login', users.login);
router.post('/logout', auth.isAuthenticated, users.logout);

module.exports = router;