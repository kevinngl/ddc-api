module.exports = (sequelize, DataTypes) => {
  const CampaignModel = sequelize.define(
    'CampaignModel',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      campaignCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      campaignPicId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      donationTarget: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      donationAchieved: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'day',
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      createdBy: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      deletedBy: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
    },
    {
      tableName: 'campaign',
      timestamps: true,
      underscored: true,
      paranoid: true,
      freezeTableName: true,
    }
  );

  CampaignModel.associate = (models) => {
    CampaignModel.belongsTo(models.CampaignCategoryModel, {
      as: 'category',
      foreignKey: 'campaignCategoryId',
    });
    CampaignModel.belongsTo(models.UserModel, {
      as: 'pic',
      foreignKey: 'campaignPicId',
    });
    CampaignModel.hasOne(models.CampaignImageModel, {
      as: 'image',
      foreignKey: 'campaignId',
    });
  };

  return CampaignModel;
};
