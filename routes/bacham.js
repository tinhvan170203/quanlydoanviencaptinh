const express = require('express');

const router = express.Router();

const checkRole = require('../middlewares/checkRole');
const middlewareController = require('../middlewares/verifyToken');

const bacham = require('../controllers/bacham');

router.get('/fetch',middlewareController.verifyToken,  bacham.getBachams);
router.post('/add',middlewareController.verifyToken, checkRole("thêm bậc hàm"), bacham.addBacham);
router.put('/edit/:id',middlewareController.verifyToken, checkRole("sửa bậc hàm"), bacham.updateBacham);
router.delete('/delete/:id',middlewareController.verifyToken,checkRole("xóa bậc hàm"), bacham.deleteBacham);


module.exports = router