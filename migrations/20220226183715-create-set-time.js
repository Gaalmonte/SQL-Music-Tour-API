'use strict';
module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('set_time', {
      set_time_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // foreign key to stage_id in stage
      event_id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      stage_id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      // foreign key to band_id in band
      band_id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      start_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      end_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: async(queryInterface, Sequelize) =>{
    await queryInterface.dropTable('set_times');
  }
};