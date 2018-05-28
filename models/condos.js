module.exports = function(sequelize, DataTypes) 
{
  var Condo = sequelize.define("Condo", 
  {
    // Giving the User model a name of type STRING
    name: 
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    location:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: 
    {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pets: 
    {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    guests: 
    {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: 
    {
      type: DataTypes.TEXT,
      allowNull: false
    },
  });

  Condo.associate = function(models) 
  {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Condo.hasMany(models.Picture, 
    {
      onDelete: "cascade"
    });
    Condo.hasMany(models.Calendar, 
    {
      onDelete: "cascade"
    });
    Condo.belongsTo(models.User, 
    {
      foreignKey: 
      {
        allowNull: false
      }
    });
  };

  return Condo;
};