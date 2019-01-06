module.exports = function(sequelize, DataTypes) {

    var Song = sequelize.define('Song', {
            artistHotttnesss: {
                allowNull: true,
                type: DataTypes.FLOAT(),
            },

            artistId: {
                allowNull: true,
                type: DataTypes.STRING(50),
            },

            artistName: {
                allowNull: true,
                type: DataTypes.STRING(50),
            },

            title: {
                allowNull: true,
                type: DataTypes.STRING(50),
            },

            year: {
                allowNull: true,
                type: DataTypes.DATE(),
            }

        },

        {
            timestamps: true
        });

    return Song;
};