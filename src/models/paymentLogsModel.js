module.exports = (sequelize, DataTypes) => {
  const PaymentLogsModel = sequelize.define(
    'PaymentLogsModel',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      jsonBody: {
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
        defaultValue: 'system',
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
      tableName: 'payment_logs',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
    }
  );

  return PaymentLogsModel;
};
