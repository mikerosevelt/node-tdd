const models = require('./models');
const app = require('./app');

const PORT = process.env.PORT || 5000;
// Sync sequelize models
models.sequelize.sync().then(() => {
	const server = app.listen(
		PORT,
		console.log(
			`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
		)
	);

	// Handle promises rejections
	process.on('unhandledRejection', (err, promise) => {
		console.log(`Error: ${err.message}`);
		// Close server
		server.close(() => process.exit(1));
	});
});
