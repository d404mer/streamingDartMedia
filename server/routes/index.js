const Router = require('express');
const router = new Router();
const categoryRouter = require('./categoryRouter');  // Убедитесь, что путь правильный
const userRouter = require('./userRouter');
const videoRouter = require('./videoRouter');

router.use('/category', categoryRouter);  // Роуты для категорий
router.use('/user', userRouter);  // Роуты для пользователей
router.use('/video', videoRouter);  // Роуты для видео

module.exports = router;
