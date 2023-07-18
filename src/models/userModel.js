module.exports = (sequelize, DataTypes) => {
  const UserModel = sequelize.define(
    'UserModel',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      email: {
        type: DataTypes.CHAR(50),
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.CHAR(15),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.CHAR(50),
        allowNull: false,
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
      tableName: 'users',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
    }
  );

  UserModel.associate = (models) => {
    UserModel.belongsTo(models.RoleModel, {
      as: 'role',
      foreignKey: 'roleId',
    });
  };

  return UserModel;
};
