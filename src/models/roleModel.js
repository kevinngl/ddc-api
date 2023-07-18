module.exports = (sequelize, DataTypes) => {
  const RoleModel = sequelize.define(
    'RoleModel',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      code: {
        type: DataTypes.CHAR(30),
        allowNull: false,
      },
      description: {
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
      tableName: 'roles',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
    }
  );

  return RoleModel;
};
