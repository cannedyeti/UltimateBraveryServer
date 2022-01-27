const express = require('express');
const patchControllers = require('../controllers/patch');
const router = express.Router(); 

router.get('/update', patchControllers.updatePatch);
router.get('/', patchControllers.getPatch); 

module.exports = router