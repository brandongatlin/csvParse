var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {

    var Song = sequelize.define('Song', {
            "artist.hotttnesss": {
                allowNull: true,
                type: DataTypes.FLOAT(),
            },

            "artist.id": {
                allowNull: true,
                type: DataTypes.STRING(50),
            },

            "artist.name": {
                allowNull: true,
                type: DataTypes.STRING(50),
            },

            "title": {
                allowNull: true,
                type: DataTypes.STRING(50),
            },

            "year": {
                allowNull: true,
                type: DataTypes.DATE(),
            }

        },

        {
            timestamps: true
        });

    return Song;
};