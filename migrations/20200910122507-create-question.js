'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Questions', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
			},
			slug: {
				unique: true,
				type: Sequelize.STRING,
			},
			body: {
				type: Sequelize.TEXT,
			},
			user_id: {
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: 'Users',
					},
					key: 'id',
				},
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Questions');
	},
};
