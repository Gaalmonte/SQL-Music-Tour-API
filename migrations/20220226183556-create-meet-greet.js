'use strict';

const event = require("../models/event");

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('meet_greet', {
      meet_greet_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // foreign key to event_id in event
      event_id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      // foreign key to band_id in band
      band_id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      meet_start_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      meet_end_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('meet_greets');
  }
};