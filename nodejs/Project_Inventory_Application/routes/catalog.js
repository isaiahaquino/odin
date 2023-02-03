const express = require('express')
const router = express.Router()

const brand_controller = require('../controllers/brandController')
const surfboard_controller = require('../controllers/surfboardController')
const surfboard_instance_controller = require('../controllers/surfboardinstanceController')

/// Surfboard Routes ///

router.get('/', surfboard_controller.index)

router.get('/surfboard/create', surfboard_controller.surfboard_create_get)

router.post('/surfboard/create', surfboard_controller.surfboard_create_post)

router.get('/surfboard/:id/delete', surfboard_controller.surfboard_delete_get)

router.post('/surfboard/:id/delete', surfboard_controller.surfboard_delete_post)

router.get('/surfboard/:id/update', surfboard_controller.surfboard_update_get)

router.post('/surfboard/:id/update', surfboard_controller.surfboard_update_post)

router.get('/surfboard/:id', surfboard_controller.surfboard_detail)

router.get('/surfboards', surfboard_controller.surfboard_list)

/// Brand Routes ///

router.get('/brand/create', brand_controller.brand_create_get)

router.post('/brand/create', brand_controller.brand_create_post)

router.get('/brand/:id/delete', brand_controller.brand_delete_get)

router.post('/brand/:id/delete', brand_controller.brand_delete_post)

router.get('/brand/:id/update', brand_controller.brand_update_get)

router.post('/brand/:id/update', brand_controller.brand_update_post)

router.get('/brands', brand_controller.brand_list)

router.get('/brand/:id', brand_controller.brand_detail)

/// Surfboard Instance Routes ///

router.get('/surfboardinstance/create', surfboard_instance_controller.surfboardinstance_create_get)

router.post('/surfboardinstance/create', surfboard_instance_controller.surfboardinstance_create_post)

router.get('/surfboardinstance/:id/delete', surfboard_instance_controller.surfboardinstance_delete_get)

router.post('/surfboardinstance/:id/delete', surfboard_instance_controller.surfboardinstance_delete_post)

router.get('/surfboardinstance/:id/update', surfboard_instance_controller.surfboardinstance_update_get)

router.post('/surfboardinstance/:id/update', surfboard_instance_controller.surfboardinstance_update_post)

router.get('/surfboardinstance/:id', surfboard_instance_controller.surfboardinstance_detail)

router.get('/surfboardinstances', surfboard_instance_controller.surfboardinstance_list)

module.exports = router;