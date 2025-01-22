// userRouter.js
const Router = require('express');
const router = new Router();  // Используем скобки

// Исправляем путь до контроллера (../controllers/userController)
const userController = require('../controllers/userController') 

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)

router.delete('/', (req, res) => {
    res.send('Delete endpoint');  // Просто для теста
});

module.exports = router;
