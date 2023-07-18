module.exports = (sequelize, DataTypes) => {
  const PaymentModel = sequelize.define(
    'PaymentModel',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      donationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      orderId: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      transactionId: {
        type: DataTypes.STRING(255),
      },
      transactionTime: {
        type: DataTypes.DATE,
      },
      paymentLink: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      paymentType: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      paymentExpiry: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      paymentEvidence: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      paymentStatus: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending',
      },
      amount: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
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
      tableName: 'payment',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
    }
  );

  PaymentModel.associate = (models) => {
    PaymentModel.belongsTo(models.DonationModel, {
      foreignKey: 'donationId',
      as: 'donation',
    });
  };

  return PaymentModel;
};
