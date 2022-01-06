const { Post } = require('../models');

const postdata = [
  {
    title: 'Amazing 30th Birthday Vacation Ideas In Turks & Caicos',
    content: `The truth is ... you’ll be just as amazing at 30 as you were at 29. Maybe even more so! The world does not stop spinning once you hit the big 3.0, but your 30th birthday could just be your most incredible birthday celebration yet. Planning is critical for a memorable 30th birthday. Whether it’s going to be your big day or you’re making plans for a friend or family member, we’ve got some amazing 30th birthday vacation ideas that’ll ensure you have a blast!`,
    user_id: 10
  },
  {
    title: `Fun Ways to Reveal A Surpise Beach Vacation that your Kids Won't See Coming in Jamaica`,
    content: `Jamaica is a land with a very distinct personality, so much so that much of its culture has filtered down to some of the smaller islands of the Caribbean; everything from the music to the fashion and lingo. Jamaican culture has also gone international, seen in the most significant way on the entertainment scene, with international musical acts being influenced by Jamaican Dancehall and Reggae. The result being an ever-evolving musical contribution that is a fusion of places, cultures, and people. Aside from music, some of the other things Jamaica is known for are sports, amazing beaches, its abundance of waterfalls, and so much more.`,
    user_id: 8
  },
  {
    title: `Zodiac Vactions: What's the Best Experience for Your Sign`,
    content: `Discover your ideal vacation type, location, cocktail, travel buddy and essential item according to your zodiac sign.`,
    user_id: 1
  },
  {
    title: 'Scuba Diving Vaction: The Complete Guide',
    content: 'The lure for divers to Turks & Caicos is the clear and warm seas, vibrant coral and marine life, dramatic vertical wall diving as well as a chance to explore the third largest barrier reef in the world. Divers can descend to varying depths and scope unique features including spur and groove formations, sand chutes, canyons and so much more.',
    user_id: 4
  },
  {
    title: 'French Riviera for the Summer',
    content: 'Beach and Wine...',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
