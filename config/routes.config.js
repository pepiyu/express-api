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
const subvencion = require('../controllers/subvencion.controller')
const timeline = require('../controllers/timeline.controller')
const etapa = require('../controllers/etapa.controller')
const etapaTypes = require('../controllers/etapaType.controller')
const clienteTypes = require('../controllers/clienteType.controller')
const bonificacion = require('../controllers/bonificacion.controller')

//subvencion
router.get('/subvencion', sec.auth, subvencion.list)
router.post('/subvencion', sec.auth, subvencion.create)
router.get('/subvencion/:id', sec.auth, subvencion.detail)
router.patch('/subvencion/:id', sec.auth, upload.fields([
    { name: "formulario", maxCount: 1 },
    { name: "declaracion_file", maxCount: 1 },
    { name: "autorizacion_file", maxCount: 1 },
    { name: "acreditacion_file", maxCount: 1 },
    { name: "acuso_recibo_file", maxCount: 1 },
]), subvencion.update)
router.delete('/subvencion/:id', sec.auth, subvencion.remove)

//accounts
router.get('/accounts', sec.auth, accounts.list);
router.post('/accounts', sec.auth, upload.single("image"), accounts.create)
router.get('/accounts/:id', sec.auth, accounts.detail);
router.patch('/accounts/:id', sec.auth, upload.fields([
    { name: "CIE_file", maxCount: 1 },
    { name: "project_file", maxCount: 1 },
    { name: "memoria_file", maxCount: 1 },
    { name: "autorizacion_file", maxCount: 1 },
    { name: "nif_file", maxCount: 1 },
    { name: "nif_representante_file", maxCount: 1 },
    { name: "certificado_bancario_file", maxCount: 1 },
    { name: "comunicacion_file", maxCount: 1 },
    { name: "factura_file", maxCount: 1 },
    { name: "image", maxCount: 1 },
]), accounts.update);
router.delete('/accounts/:id', sec.auth, accounts.remove);
router.get('/accounts-context/:id', sec.auth, accounts.context)

//opportunities
router.get('/opportunities', sec.auth, opportunities.list);
router.post('/opportunities', sec.auth, opportunities.create)
router.get('/opportunities/:id', sec.auth, opportunities.detail);
router.patch('/opportunities/:id', sec.auth, opportunities.update);
router.delete('/opportunities/:id', sec.auth, opportunities.remove);
router.get('/opportunities-context/:id', sec.auth, opportunities.context);

//opportunity_types
router.get('/opportunity-types', sec.auth, opportunityTypes.list);
router.post('/opportunity-types', sec.auth, opportunityTypes.create)
router.get('/opportunity-types/:id', sec.auth, opportunityTypes.detail);
router.patch('/opportunity-types/:id', sec.auth, opportunityTypes.update);
router.delete('/opportunity-types/:id', sec.auth, opportunityTypes.remove);

//timeline
router.get('/timeline', sec.auth, timeline.list);
router.post('/timeline', sec.auth, timeline.create)
router.get('/timeline/:id', sec.auth, timeline.detail);
router.patch('/timeline/:id', sec.auth, timeline.update);
router.delete('/timeline/:id', sec.auth, timeline.remove);
router.get('/timeline-context/:id', sec.auth, timeline.context);

//etapa
router.get('/etapa', sec.auth, etapa.list);
router.post('/etapa', sec.auth, etapa.create)
router.get('/etapa/:id', sec.auth, etapa.detail);
router.patch('/etapa/:id', sec.auth, etapa.update);
router.delete('/etapa/:id', sec.auth, etapa.remove);

//etapa_types
router.get('/etapa-types', sec.auth, etapaTypes.list);
router.post('/etapa-types', sec.auth, etapaTypes.create)
router.get('/etapa-types/:id', sec.auth, etapaTypes.detail);
router.patch('/etapa-types/:id', sec.auth, etapaTypes.update);
router.delete('/etapa-types/:id', sec.auth, etapaTypes.remove);

//cliente_types
router.get('/cliente-types', sec.auth, clienteTypes.list);
router.post('/cliente-types', sec.auth, clienteTypes.create)
router.get('/cliente-types/:id', sec.auth, clienteTypes.detail);
router.patch('/cliente-types/:id', sec.auth, clienteTypes.update);
router.delete('/cliente-types/:id', sec.auth, clienteTypes.remove);

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

//bonificacion
router.get('/bonificacion', sec.auth, bonificacion.list);
router.post('/bonificacion', sec.auth, bonificacion.create)
router.get('/bonificacion/:id', sec.auth, bonificacion.detail);
router.patch('/bonificacion/:id', sec.auth, bonificacion.update);
router.delete('/bonificacion/:id', sec.auth, bonificacion.remove);

//auth
router.post('/users', sec.auth, users.create);
router.get('/users/:id/activate', users.activate);
router.post('/login', users.login);

router.get('/users', sec.auth, users.list);
router.get('/users/detail/:id', sec.auth, users.detail);
router.patch('/users/:id', sec.auth, users.update);
router.post('/logout', sec.auth, users.logout);

module.exports = router;