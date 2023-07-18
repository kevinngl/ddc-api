module.exports = (sequelize, DataTypes) => {
  const CampaignImageModel = sequelize.define(
    'CampaignImageModel',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      campaignId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      filePath: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: 'campaign_images',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
    }
  );

  CampaignImageModel.associate = (models) => {
    CampaignImageModel.belongsTo(models.CampaignModel, {
      as: 'campaign',
      foreignKey: 'campaignId',
    });
  };

  return CampaignImageModel;
};
