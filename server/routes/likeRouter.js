const Router = require('express');
const router = new Router();
const LikeController = require('../controllers/likeController');

router.post('/', LikeController.create); // Добавить лайк
router.get('/', LikeController.getAll); // Получить все лайки
router.delete('/:id', LikeController.delete); // Удалить лайк

module.exports = router;
