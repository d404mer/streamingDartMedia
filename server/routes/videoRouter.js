const Router = require('express');
const router = new Router();
const VideoController = require('../controllers/VideoController');

router.post('/', VideoController.create); // Добавить видео
router.get('/', VideoController.getAll); // Получить все видео
router.get('/:id', VideoController.getById); // Получить видео по ID
router.put('/:id', VideoController.update); // Обновить видео
router.delete('/:id', VideoController.delete); // Удалить видео

module.exports = router;
