const express = require('express');

const router = express.Router();
const checkRole = require('../middlewares/checkRole');
const middlewareController = require('../middlewares/verifyToken');
const thongke = require('../controllers/thongke');

router.get('/khen-thuong/fetch', middlewareController.verifyToken, thongke.getKhenthuongs);
router.get('/ki-luat/fetch', middlewareController.verifyToken, thongke.getKiluats);
router.get('/thi-dua-thang/fetch', middlewareController.verifyToken, thongke.getThiduathangs);
router.get('/bang-thi-dua-thang/fetch', middlewareController.verifyToken, thongke.getBangtheodoiThiduathang);
router.get('/thi-dua-nam/fetch', middlewareController.verifyToken, thongke.getThiduanams);
router.get('/bang-thi-dua-nam/fetch', middlewareController.verifyToken, thongke.getBangThiduanam);
router.get('/truong-thanh-doan/fetch', middlewareController.verifyToken, thongke.getTruongthanhdoans);
router.get('/truong-thanh-doan/change/:id', middlewareController.verifyToken, thongke.changeStatusTruongthanhdoan);
module.exports = router