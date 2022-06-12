const express = require('express');
const router = express.Router();
const sec = require('../middlewares/sec.middleware')
const accounts = require('../controllers/account.controller')
const opportunities = require('../controllers/opportunity.controller')
const activities = require('../controllers/activity.controller')
const contacts = require('../controllers/contact.controller')
const stages = require('../controllers/stageType.controller')
const activityTypes = require('../controllers/activityType.controller')
const users = require('../controllers/users.controller')
const upload = require('../config/multer.config')
const session = require('express-session')


//accounts
router.get('/accounts', sec.auth, accounts.list);
router.post('/accounts', sec.auth, upload.single("image"), accounts.create)
router.get('/accounts/:id', sec.auth, accounts.detail);
router.patch('/accounts/:id', sec.auth, accounts.update);
router.delete('/accounts/:id', sec.auth, accounts.remove);

//opportunities
router.get('/opportunities', sec.auth, opportunities.list);
router.post('/opportunities', sec.auth, opportunities.create)
router.get('/opportunities/:id', sec.auth, opportunities.detail);
router.patch('/opportunities/:id', sec.auth, opportunities.update);
router.delete('/opportunities/:id', sec.auth, opportunities.remove);

//activities
router.get('/activities', sec.auth, activities.list);
router.post('/activities', sec.auth, activities.create)
router.get('/activities/:id', sec.auth, activities.detail);
router.patch('/activities/:id', sec.auth, activities.update);
router.delete('/activities/:id', sec.auth, activities.remove);

//contacts
router.get('/contacts', sec.auth, contacts.list);
router.post('/contacts', sec.auth, contacts.create)
router.get('/contacts/:id', sec.auth, contacts.detail);
router.patch('/contacts/:id', sec.auth, contacts.update);
router.delete('/contacts/:id', sec.auth, contacts.remove);

//stages
router.get('/stages', sec.auth, stages.list);
router.post('/stages', sec.auth, stages.create)
router.get('/stages/:id', sec.auth, stages.detail);
router.patch('/stages/:id', sec.auth, stages.update);
router.delete('/stages/:id', sec.auth, stages.remove);

//activity_types
router.get('/activity-types', sec.auth, activityTypes.list);
router.post('/activity-types', sec.auth, activityTypes.create)
router.get('/activity-types/:id', sec.auth, activityTypes.detail);
router.patch('/activity-types/:id', sec.auth, activityTypes.update);
router.delete('/activity-types/:id', sec.auth, activityTypes.remove);

//auth
router.post('/users', sec.auth, users.create);
router.get('/users/:id/activate', users.activate);
router.post('/login', users.login);

router.get('/users', sec.auth, users.list);
router.patch('/users/:id', sec.auth, users.update);
router.post('/logout', sec.auth, users.logout);

module.exports = router;