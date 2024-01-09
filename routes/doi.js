const express = require('express');

const router = express.Router();
const checkRole = require('../middlewares/checkRole');
const middlewareController = require('../middlewares/verifyToken');
const doi = require('../controllers/doi');

router.get('/fetch',middlewareController.verifyToken,  doi.getDois);
router.post('/add',middlewareController.verifyToken,checkRole("thêm mô hình tổ chức"), doi.addDoi);
router.put('/edit/:id',middlewareController.verifyToken,checkRole("sửa mô hình tổ chức"), doi.updateDoi);
router.delete('/delete/:id',middlewareController.verifyToken,checkRole("xóa mô hình tổ chức"), doi.deleteDoi);


module.exports = router