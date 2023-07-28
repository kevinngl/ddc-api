module.exports = (sequelize, DataTypes) => {
  const DonationModel = sequelize.define(
    'DonationModel',
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
      donatorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      showName: {
        type: DataTypes.CHAR,
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      createdBy: {
        type: DataTypes.CHAR(30),
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: null,
      },
      updatedBy: {
        type: DataTypes.CHAR(30),
        defaultValue: null,
      },
      deletedAt: {
        type: DataTypes.DATE,
        defaultValue: null,
      },
      deletedBy: {
        type: DataTypes.CHAR(30),
        defaultValue: null,
      },
    },
    {
      tableName: 'donation',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
    }
  );

  DonationModel.associate = (models) => {
    DonationModel.belongsTo(models.CampaignModel, {
      foreignKey: 'campaignId',
      as: 'campaign',
    });
    DonationModel.belongsTo(models.UserModel, {
      foreignKey: 'donatorId',
      as: 'donator',
    });
    DonationModel.hasOne(models.PaymentModel, {
      foreignKey: 'donationId',
      as: 'payment',
    });
  };

  return DonationModel;
};
