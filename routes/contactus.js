const express = require('express');
const path = require('path');
const router = express.Router();
const getContactform=require('../controller/contact')

router.get('/contactus',getContactform.getContact )

router.post('/success', getContactform.success)

router.use(getContactform.error404page)

module.exports = router;
