const Express = require('express')
const Router = Express.Router()

const brand_controller = require('../controllers/brandController')
const surfboard_controller = require('../controllers/surfboardController')
const surfboard_instance_controller = require('../controllers/surfboardinstanceController')

/// Surfboard Routes ///

Router.get('/', surfboard_controller.index)

Router.get('/surfboard/create', surfboard_controller.surfboard_create_get)

Router.post('/surfboard/create', surfboard_controller.surfboard_create_post)

Router.get('/surfboard/:id/delete', surfboard_controller.surfboard_delete_get)

Router.post('/surfboard/:id/delete', surfboard_controller.surfboard_delete_post)

Router.get('/surfboard/:id/update', surfboard_controller.surfboard_update_get)

Router.post('/surfboard/:id/update', surfboard_controller.surfboard_update_post)

Router.get('/surfboard/:id', surfboard_controller.surfboard_detail)

Router.get('/surfboards', surfboard_controller.surfboard_list)

/// Brand Routes ///

Router.get('/brand/create', brand_controller.brand_create_get)

Router.post('/brand/create', brand_controller.brand_create_post)

Router.get('/brand/:id/delete', brand_controller.brand_delete_get)

Router.post('/brand/:id/delete', brand_controller.brand_delete_post)

Router.get('/brand/:id/update', brand_controller.brand_update_get)

Router.post('/brand/:id/update', brand_controller.brand_update_post)

Router.get('/brands', brand_controller.brand_list)

Router.get('/brand/:id', brand_controller.brand_detail)

/// Surfboard Instance Routes ///

Router.get('/surfboardinstance/create', surfboard_instance_controller.surfboardinstance_create_get)

Router.post('/surfboardinstance/create', surfboard_instance_controller.surfboardinstance_create_post)

Router.get('/surfboardinstance/:id/delete', surfboard_instance_controller.surfboardinstance_delete_get)

Router.post('/surfboardinstance/:id/delete', surfboard_instance_controller.surfboardinstance_delete_post)

Router.get('/surfboardinstance/:id/update', surfboard_instance_controller.surfboardinstance_update_get)

Router.post('/surfboardinstance/:id/update', surfboard_instance_controller.surfboardinstance_update_post)

Router.get('/surfboardinstance/:id', surfboard_instance_controller.surfboardinstance_detail)

Router.get('/surfboardinstances', surfboard_instance_controller.surfboardinstance_list)