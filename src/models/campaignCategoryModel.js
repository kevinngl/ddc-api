module.exports = (sequelize, DataTypes) => {
  const CampaignCategoryModel = sequelize.define(
    'CampaignCategoryModel',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.CHAR(50),
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      tableName: 'campaign_categories',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
    }
  );

  return CampaignCategoryModel;
};
