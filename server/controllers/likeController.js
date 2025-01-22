const { Like, User, Video } = require('../models/models'); // Импортируем модели
const ApiError = require('../error/ApiError');

class LikeController {
    // Создание лайка
    async create(req, res, next) {
        try {
            const { userId, videoId } = req.body;

            // Проверка на наличие пользователя и видео
            const user = await User.findByPk(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const video = await Video.findByPk(videoId);
            if (!video) {
                return res.status(404).json({ message: 'Video not found' });
            }

            // Создание нового лайка
            const like = await Like.create({ userId, videoId });
            return res.json(like);
        } catch (error) {
            console.error('Error creating like:', error);
            next(ApiError.badRequest(error.message));
        }
    }

    // Получение всех лайков
    async getAll(req, res, next) {
        try {
            const likes = await Like.findAll({
                include: [
                    { model: User, attributes: ['id', 'name', 'email'] },  // Включаем информацию о пользователе
                    { model: Video, attributes: ['id', 'title', 'description'] } // Включаем информацию о видео
                ]
            });

            return res.json(likes);
        } catch (error) {
            console.error('Error fetching likes:', error);
            next(ApiError.badRequest(error.message));
        }
    }

    // Удаление лайка
    async delete(req, res, next) {
        try {
            const { id } = req.params;

            // Находим лайк по ID
            const like = await Like.findByPk(id);
            if (!like) {
                return res.status(404).json({ message: 'Like not found' });
            }

            // Удаляем лайк
            await like.destroy();
            return res.json({ message: 'Like deleted successfully' });
        } catch (error) {
            console.error('Error deleting like:', error);
            next(ApiError.badRequest(error.message));
        }
    }
}

module.exports = new LikeController();
