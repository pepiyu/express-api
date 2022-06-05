const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.middleware')
const accounts = require('../controllers/account.controller')
const opportunities = require('../controllers/opportunity.controller')
const activities = require('../controllers/activity.controller')
const contacts = require('../controllers/contact.controller')
const stages = require('../controllers/stageType.controller')
const activityTypes = require('../controllers/activityType.controller')
const users = require('../controllers/users.controller')
const upload = require('../config/multer.config')

//accounts
router.get('/accounts', auth.isAuthenticated, accounts.list);
router.post('/accounts', auth.isAuthenticated, upload.single("image"), accounts.create)
router.get('/accounts/:id', auth.isAuthenticated, accounts.detail);
router.patch('/accounts/:id', auth.isAuthenticated, accounts.update);
router.delete('/accounts/:id', auth.isAuthenticated, accounts.remove);

//opportunities
router.get('/opportunities', auth.isAuthenticated, opportunities.list);
router.post('/opportunities', auth.isAuthenticated, opportunities.create)
router.get('/opportunities/:id', auth.isAuthenticated, opportunities.detail);
router.patch('/opportunities/:id', auth.isAuthenticated, opportunities.update);
router.delete('/opportunities/:id', auth.isAuthenticated, opportunities.remove);

//activities
router.get('/activities', auth.isAuthenticated, activities.list);
router.post('/activities', auth.isAuthenticated, activities.create)
router.get('/activities/:id', auth.isAuthenticated, activities.detail);
router.patch('/activities/:id', auth.isAuthenticated, activities.update);
router.delete('/activities/:id', auth.isAuthenticated, activities.remove);

//contacts
router.get('/contacts', auth.isAuthenticated, contacts.list);
router.post('/contacts', auth.isAuthenticated, contacts.create)
router.get('/contacts/:id', auth.isAuthenticated, contacts.detail);
router.patch('/contacts/:id', auth.isAuthenticated, contacts.update);
router.delete('/contacts/:id', auth.isAuthenticated, contacts.remove);

//stages
router.get('/stages', auth.isAuthenticated, stages.list);
router.post('/stages', auth.isAuthenticated, stages.create)
router.get('/stages/:id', auth.isAuthenticated, stages.detail);
router.patch('/stages/:id', auth.isAuthenticated, stages.update);
router.delete('/stages/:id', auth.isAuthenticated, stages.remove);

//activity_types
router.get('/activity-types', auth.isAuthenticated, activityTypes.list);
router.post('/activity-types', auth.isAuthenticated, activityTypes.create)
router.get('/activity-types/:id', auth.isAuthenticated, activityTypes.detail);
router.patch('/activity-types/:id', auth.isAuthenticated, activityTypes.update);
router.delete('/activity-types/:id', auth.isAuthenticated, activityTypes.remove);

//auth
router.post('/users', users.create);
router.get('/users/:id/activate', users.activate);
router.post('/login', users.login);

router.get('/users', auth.isAuthenticated, users.list);
router.patch('/users/:id', auth.isAuthenticated, users.update);
router.post('/logout', auth.isAuthenticated, users.logout);

module.exports = router;