const express = require('express');

const router = express.Router();

const auth = require('../controllers/auth');
const middlewareController = require('../middlewares/verifyToken');
const checkRole = require('../middlewares/checkRole');
// const middlewareController = require('../middlewares/verifyToken');

router.post('/login', auth.login )
router.post('/change-pass', auth.changePassword )
router.get('/logout',  auth.logout)
router.get('/user/fetch',  auth.getUserList)
router.get('/requestRefreshToken', auth.requestRefreshToken)
router.post('/user/add', middlewareController.verifyToken, checkRole("thêm tài khoản"), auth.addUser)
router.delete('/user/delete/:id',middlewareController.verifyToken, checkRole("xóa tài khoản"), auth.deleteUser)
router.put('/user/edit/:id', middlewareController.verifyToken, checkRole("sửa tài khoản"),  auth.editUser)
// router.put('/users/edit-phanquyendonvi/:id', auth.editPhanquyendonvi)

module.exports = router