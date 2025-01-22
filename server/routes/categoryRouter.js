const Router = require('express');
const router = new Router();
const CategoryController = require('../controllers/CategoryController');

// Определение маршрутов для категорий
router.post('/', CategoryController.create); // Создание категории
router.get('/', CategoryController.get); // Получить все категории
router.get('/:id', CategoryController.get); // Получить категорию по ID
router.put('/:id', CategoryController.update); // Обновить категорию
router.delete('/:id', CategoryController.delete); // Удалить категорию

module.exports = router;
