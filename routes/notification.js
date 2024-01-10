import express from 'express';

const router = express.Router();
import checkRole from '../middlewares/checkRole';
import middlewareController from '../middlewares/verifyToken';
import notification from '../controllers/notification';

router.get('/fetch',middlewareController.verifyToken, notification.getNotifications);
router.post('/add',middlewareController.verifyToken, checkRole("thêm thông báo"), notification.addNotification);
router.put('/edit/:id',middlewareController.verifyToken, checkRole("sửa thông báo"), notification.updateNotification);
router.delete('/delete/:id',middlewareController.verifyToken, checkRole("xóa thông báo"), notification.deleteNotification);


module.exports = router