const path = require('path');
const express = require('express');
// const session = require('express-session');
const exphbs = require('express-handlebars');
// import sequelize connection-complete
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(require('./controllers/'));

// sync sequelize models to the database, then turn on the server- complete
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}!`));
});