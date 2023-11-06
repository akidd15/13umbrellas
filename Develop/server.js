const express = require('express');
const routes = require('./routes');
const sequelize = require('sequelize');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


  sequelize.sync().then(() => {
    console.log('Database synchronized.');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });



// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
