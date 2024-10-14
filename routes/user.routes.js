const Router = require('express');
const router = new Router();
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controller/user.controller');

// Маршрут для создания нового пользователя
router.post('/user', createUser);

// Маршрут для получения всех пользователей
router.get('/users', getUsers)

// Маршрут для получения,  
router.get('/users/:id', getUserById)
// обновления
router.put('/users/:id', updateUser)
// и удаления конкретного пользователя по id
router.delete('/users/:id', deleteUser)


module.exports = router;
