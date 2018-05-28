module.exports = function(sequelize, DataTypes) 
{
  var User = sequelize.define("User", 
  {
    // Giving the User model a name of type STRING
    name: 
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    email:
    {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = function(models) 
  {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Condo, 
    {
      onDelete: "cascade"
    });
  };

  return User;
};