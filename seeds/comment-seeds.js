const { Comment } = require('../models');

const commentdata = [
  
  {
    comment_text: 'Beach Vaction count me in!',
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text: 'I just love the sunshine',
    user_id: 6,
    post_id: 3
    
  },
  {
   
    comment_text: 'Swimming with the sharks????',
    user_id:4,
    post_id: 4,
  },
  {
    
    comment_text: 'Wow that looks like a great vacation',
    user_id: 3,
    post_id: 5,
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
