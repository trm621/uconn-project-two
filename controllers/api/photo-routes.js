const router = require("express").Router();
const cloudinary = require("../../utils/cloudinary");
const upload = require("../../utils/multer");

const { Photo } = require('../../models'); 

// display all comments
router.get('/', (req, res) => {
  Photo.findAll()
    .then(dbPhotoData => res.json(dbPhotoData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/", async (req, res) => {
    try {
      let photo = await Photo.find();
      res.json(photo);
    } catch (err) {
      console.log(err);
    }});

router.put("/:id", upload.single("image"), async (req, res) => {
        try {
          let photo = await Photo.findById(req.params.id);
          // Delete image from cloudinary
          await cloudinary.uploader.destroy(photo.cloudinary_id);
          // Upload image to cloudinary
          const result = await cloudinary.uploader.upload(req.file.path);
          const data = {
            name: req.body.name || photo.name,
            photourl: result.secure_url || photo.photourl,
            cloudinary_id: result.public_id || photo.cloudinary_id,
          };
          photo = await Photo.findByIdAndUpdate(req.params.id, data, {
       new: true
       });
          res.json(photo);
        } catch (err) {
          console.log(err);
        }});

router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
     // Create new photo
    let photo = new Photo({
      name: req.body.name,
      photourl: result.secure_url,
      cloudinary_id: result.public_id,
    });
    // Save photo
    await photo.save();
    res.json(photo);
  } catch (err) {
    console.log(err);
  }}); 

  router.delete("/:id", async (req, res) => {
    try {
      // Find user by id
      let photo = await Photo.findById(req.params.id);
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(photo.cloudinary_id);
      // Delete user from db
      await photo.remove();
      res.json(photo);
    } catch (err) {
      console.log(err);
    }});



 module.exports = router;