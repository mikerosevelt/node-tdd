const express = require('express');
const router = express.Router();
const {
	getUsers,
	createUser,
	deleteUser,
	updateUser,
} = require('../controllers/users');

router.route('/').get(getUsers).post(createUser);
router.route('/:id').put(updateUser).delete(deleteUser);

module.exports = router;
