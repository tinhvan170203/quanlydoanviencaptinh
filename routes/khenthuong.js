const express = require('express');

const router = express.Router();
const checkRole = require('../middlewares/checkRole');
const middlewareController = require('../middlewares/verifyToken');
const khenthuong = require('../controllers/khenthuong');

router.get('/tap-the/fetch',middlewareController.verifyToken, khenthuong.getKhentapthes);
router.post('/tap-the/add',middlewareController.verifyToken,checkRole("thêm khen thưởng, kỉ luật"), khenthuong.addKhentapthe);
router.put('/tap-the/edit/:id',middlewareController.verifyToken,checkRole("sửa khen thưởng, kỉ luật"), khenthuong.updateKhentapthe);
router.delete('/tap-the/delete/:id',middlewareController.verifyToken,checkRole("xóa khen thưởng, kỉ luật"), khenthuong.deleteKhentapthe);

router.get('/ca-nhan/:id/fetch',middlewareController.verifyToken, khenthuong.getKhencanhan);
router.post('/ca-nhan/add',middlewareController.verifyToken,checkRole("thêm khen thưởng, kỉ luật"), khenthuong.addKhencanhan);
router.put('/ca-nhan/edit/:id',middlewareController.verifyToken,checkRole("sửa khen thưởng, kỉ luật"), khenthuong.editKhencanhan);
router.delete('/ca-nhan/delete/:id',middlewareController.verifyToken,checkRole("xóa khen thưởng, kỉ luật"), khenthuong.deleteKhencanhan);

router.get('/ca-nhan/:id/search',middlewareController.verifyToken, khenthuong.searchKhencanhan);
module.exports = router