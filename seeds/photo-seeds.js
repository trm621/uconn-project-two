const { Photo } = require('../models');

const photodata = [
  
  { 
    name: 'Punta Cana Sunrise over carribean',
    photourl: 'https://www.istockphoto.com/photo/punta-cana-sunrise-over-caribbean-beach-with-lifeguard-station-gm926427464-254196401',
    cloudinary_id: '123',
    post_id: 2,
  },
  { 
    name: 'Beach Holiday',
    photourl: 'https://www.istockphoto.com/photo/beach-holiday-gm528910606-93139575',
    cloudinary_id: '456',
    post_id: 2,
  },
];

const seedPhotos = () => Photo.bulkCreate(photodata);

module.exports = seedPhotos;
