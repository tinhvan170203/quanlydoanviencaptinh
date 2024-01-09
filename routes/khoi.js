const express = require('express');

const router = express.Router();
const checkRole = require('../middlewares/checkRole');
const middlewareController = require('../middlewares/verifyToken');
const khoi = require('../controllers/khoi');

router.get('/fetch',middlewareController.verifyToken, khoi.getKhois);
router.post('/add',middlewareController.verifyToken, checkRole("thêm mô hình tổ chức"), khoi.addKhoi);
router.put('/edit/:id',middlewareController.verifyToken,checkRole("sửa mô hình tổ chức"), khoi.updateKhoi);
router.delete('/delete/:id',middlewareController.verifyToken,checkRole("xóa mô hình tổ chức"), khoi.deleteKhoi);


module.exports = router