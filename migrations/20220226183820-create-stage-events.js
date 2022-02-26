'use strict';
module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('stage_events', {
      stage_event_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // foreign key to stage_id in stage
      stage_id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      // foreign key to event_id in event
      event_id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
    });
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('stage_events');
  }
};