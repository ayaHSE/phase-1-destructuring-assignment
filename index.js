const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// Ensure that the variables for animal sounds are defined
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// Destructuring to declare the four traditional animal names.
const [bessie, dolly, babe, little] = farmAnimals.split(/\s+/);
console.log(bessie, dolly, babe, little);

// Destructuring to declare the three traditional animal colors.
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// Arrays

// Destructuring to declare the seven traditional rainbow color variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// Destructuring to declare six rainbow color variables using initials.
const [r, o, y, g, b, , v] = colors;

// Assign indigo only using indg.
const [, , , , , indg] = colors;

// Objects

// Destructuring to assign all appropriate variables using the keys as the variable names.
const { muppetName, color, song, job, partner } = muppet;

// Destructuring to assign songs 2 and 4, and Kermit's job and partner.
const { song2, song4 } = nestedMuppet.album.theMuppetMovie;
const { nestedJob, nestedPartner } = nestedMuppet;
