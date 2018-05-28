module.exports = function(sequelize, DataTypes) 
{
  var Calendar = sequelize.define("Calendar", 
  {
    // Giving the User model a name of type STRING
    name: 
    {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Calendar.associate = function(models) 
  {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Calendar.belongsTo(models.Condo, 
    {
      foreignKey: 
      {
        allowNull: false
      }
    });
  };

  return Calendar;
};