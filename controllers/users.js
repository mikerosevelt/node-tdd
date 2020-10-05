const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models').User;

// @desc    Get All Users
// @route   GET /api/v1/users
// @access
exports.getUsers = asyncHandler(async (req, res, next) => {
	// const users = await User.findAll();

	res.status(200).json({ success: true, data: {} });
});

// @desc    Create a User
// @route   POST /api/v1/users
// @access
exports.createUser = asyncHandler(async (req, res, next) => {
	// const { name, email, password } = req.body;
	// const user = await User.create({ name, email, password });

	res.status(201).json({ success: true, data: {} });
});

// @desc 		Update a user
// @route		PUT /api/v1/users/:id
// @access
exports.updateUser = asyncHandler(async (req, res, next) => {
	res.status(200).json({ success: true, data: '' });
});

// @desc    Delete a User
// @route   DELETE /api/v1/users/:id
// @access
exports.deleteUser = asyncHandler(async (req, res, next) => {
	// const user = await User.findOne({ where: { id: req.params.id } });

	// if (!user) {
	// 	return next(
	// 		new ErrorResponse(`User not found with id of ${req.params.id}`, 404)
	// 	);
	// }

	res.status(200).json({ success: true, data: {} });
});
