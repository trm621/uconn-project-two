const path = require("path");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
// specify the multer library
const multer = require("multer");
// place where all the files are uploaded in the server
const upload = multer({ dest: "uploads/" });
const { uploadFile, getFileStream } = require("./utils/s3");

// e.log(err.stack)
//    else{
//      console.log(AWS.config.credentials.accessKeyId)
//    }
// })AWS.config.getCredentials(function(err){
//   if (err) consol

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const helpers = require("./utils/helpers");

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/"));

//  pulls the image from AWS- think we should use post id as the key???

app.get("/images/:key", (req, res) => {
  const key = req.params.key;
  const readStream = getFileStream(key);

  readStream.pipe(res);
});

// add asyncs and awaits
app.post(
  "/profile-upload-single",
  upload.single("profile-file"),
  (req, res) => {
    // req.file is the `profile-file` file
    // req.body will hold the other blog post fields
    console.log(JSON.stringify(req.file));
    var response = '<a href="/">Home</a><br>';
    response += "Files uploaded successfully.<br>";
    response += `<img src="${req.file.path}" /><br>`;
    uploadFile(req.file.path);
    // deletes the local file
    unlinkFile(req.file.path);
    return res.send(response);
  }
);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
