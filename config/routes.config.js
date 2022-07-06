const express = require('express');
const router = express.Router();
const sec = require('../middlewares/sec.middleware')
const accounts = require('../controllers/account.controller')
const opportunities = require('../controllers/opportunity.controller')
const opportunityTypes = require('../controllers/opportunityType.controller')
const activities = require('../controllers/activity.controller')
const contacts = require('../controllers/contact.controller')
const stages = require('../controllers/stageType.controller')
const activityTypes = require('../controllers/activityType.controller')
const autoconsumoTypes = require('../controllers/autoconsumoType.controller')
const users = require('../controllers/users.controller')
const upload = require('../config/multer.config')

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

//activity_types
router.get('/opportunity-types', sec.auth, opportunityTypes.list);
router.post('/opportunity-types', sec.auth, opportunityTypes.create)
router.get('/opportunity-types/:id', sec.auth, opportunityTypes.detail);
router.patch('/opportunity-types/:id', sec.auth, opportunityTypes.update);
router.delete('/opportunity-types/:id', sec.auth, opportunityTypes.remove);

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

//autoconsumo_types
router.get('/autoconsumo-types', sec.auth, autoconsumoTypes.list);
router.post('/autoconsumo-types', sec.auth, autoconsumoTypes.create)
router.get('/autoconsumo-types/:id', sec.auth, autoconsumoTypes.detail);
router.patch('/autoconsumo-types/:id', sec.auth, autoconsumoTypes.update);
router.delete('/autoconsumo-types/:id', sec.auth, autoconsumoTypes.remove);

//auth
router.post('/users', sec.auth, users.create);
router.get('/users/:id/activate', users.activate);
router.post('/login', users.login);

router.get('/users', sec.auth, users.list);
router.get('/users/detail/:id', sec.auth, users.detail);
router.patch('/users/:id', sec.auth, users.update);
router.post('/logout', sec.auth, users.logout);

module.exports = router;