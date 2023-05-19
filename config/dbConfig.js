const Sequelize = require('sequelize');
// DB conn. of node with mysql using sequelize
const testQuery = {};
const sequelize = new Sequelize("tailor_management", "root", "12345678", {
  host: "localhost",
  dialect: 'mysql',
  logging: false
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected successfully to the database.');
  })
  .catch(err => {
    console.error('Unable to connect to the database.');
  });

sequelize.sync().then((err) => {
  // put your user create code inside this
  console.log('Table(s) created.');
}, function (err) {
  console.log('An error occured while creating table: ' + err);
});

// End of DB script
testQuery.sequelize = sequelize;

module.exports = testQuery;
module.exports = sequelize;