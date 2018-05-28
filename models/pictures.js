module.exports = function(sequelize, DataTypes) 
{
  var Picture = sequelize.define("Picture", 
  {
    // Giving the User model a name of type STRING
    name: 
    {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Picture.associate = function(models) 
  {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Picture.belongsTo(models.Condo, 
    {
      foreignKey: 
      {
        allowNull: false
      }
    });
  };

  return Picture;
};