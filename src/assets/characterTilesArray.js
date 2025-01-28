const characterTilesArray = [
  {
    id: 1,
    character: 'Mario',
    backGroundImage: "../../public/CharacterJpgs/mario.jpg"
  },
  {
    id: 2,
    character: 'Donkey Kong',
    backGroundImage: "../../public/CharacterJpgs/donkey-kong.jpg"
  },
  {
    id: 3,
    character: 'Link',
    backGroundImage: "../../public/CharacterJpgs/link.jpg"
  },
  {
    id: 4,
    character: 'Samus',
    backGroundImage: "../../public/CharacterJpgs/samus.jpg"
  },
  {
    id: 5,
    character: 'Yoshi',
    backGroundImage: "../../public/CharacterJpgs/yoshi.jpg"
  },
  {
    id: 6,
    character: 'Kirby',
    backGroundImage: "../../public/CharacterJpgs/kirby.jpg"
  },
  {
    id: 7,
    character: 'Fox',
    backGroundImage: "../../public/CharacterJpgs/fox.jpg"
  },
  {
    id: 8,
    character: 'Pikachu',
    backGroundImage: "../../public/CharacterJpgs/pikachu.jpg"
  },
  {
    id: 9,
    character: 'Luigi',
    backGroundImage: "../../public/CharacterJpgs/luigi.jpg"
  },
  {
    id: 10,
    character: 'Ness',
    backGroundImage: "../../public/CharacterJpgs/ness.jpg"
  },
  {
    id: 11,
    character: 'Captain Falcon',
    backGroundImage: "../../public/CharacterJpgs/captain-falcon.jpg"
  },
  {
    id: 12,
    character: 'Jigglypuff',
    backGroundImage: "../../public/CharacterJpgs/jigglypuff.jpg"
  },
  {
    id: 13,
    character: 'Peach',
    backGroundImage: "../../public/CharacterJpgs/peach.jpg"
  },
  {
    id: 14,
    character: 'Daisy',
    backGroundImage: "../../public/CharacterJpgs/daisy.jpg"
  },
  {
    id: 15,
    character: 'Bowser',
    backGroundImage: "../../public/CharacterJpgs/bowser.jpg"
  },
  {
    id: 16,
    character: 'Ice Climbers',
    backGroundImage: "../../public/CharacterJpgs/ice-climbers.jpg"
  },
  {
    id: 17,
    character: 'Shiek',
    backGroundImage: "../../public/CharacterJpgs/shiek.jpg"
  },
  {
    id: 18,
    character: 'Zelda',
    backGroundImage: "../../public/CharacterJpgs/zelda.jpg"
  },
  {
    id: 19,
    character: 'Dr. Mario',
    backGroundImage: "../../public/CharacterJpgs/dr-mario.jpg"
  },
  {
    id: 20,
    character: 'Pichu',
    backGroundImage: "../../public/CharacterJpgs/pichu.jpg"
  },
  {
    id: 21,
    character: 'Falco',
    backGroundImage: "../../public/CharacterJpgs/falco.jpg"
  },
  {
    id: 22,
    character: 'Marth',
    backGroundImage: "../../public/CharacterJpgs/marth.jpg"
  },
  {
    id: 23,
    character: 'Lucina',
    backGroundImage: "../../public/CharacterJpgs/lucina.jpg"
  },
  {
    id: 24,
    character: 'Young Link',
    backGroundImage: "../../public/CharacterJpgs/young-link.jpg"
  },
  {
    id: 25,
    character: 'Ganondorf',
    backGroundImage: "../../public/CharacterJpgs/ganondorf.jpg"
  },
  {
    id: 26,
    character: 'Mewtwo',
    backGroundImage: "../../public/CharacterJpgs/mewtwo.jpg"
  },
  {
    id: 27,
    character: 'Roy',
    backGroundImage: "../../public/CharacterJpgs/roy.jpg"
  },
  {
    id: 28,
    character: 'Chrom',
    backGroundImage: "../../public/CharacterJpgs/chrom.jpg"
  },
  {
    id: 29,
    character: 'Mr. Game & Watch',
    backGroundImage: "../../public/CharacterJpgs/mr-game.jpg"
  },
  {
    id: 30,
    character: 'Meta Knight',
    backGroundImage: "../../public/CharacterJpgs/meta-knight.jpg"
  },
  {
    id: 31,
    character: 'Pit',
    backGroundImage: "../../public/CharacterJpgs/pit.jpg"
  },
  {
    id: 32,
    character: 'Dark Pit',
    backGroundImage: "../../public/CharacterJpgs/dark-pit.jpg"
  },
  {
    id: 33,
    character: 'Zero Suit Samus',
    backGroundImage: "../../public/CharacterJpgs/zero-suit.jpg"
  },
  {
    id: 34,
    character: 'Wario',
    backGroundImage: "../../public/CharacterJpgs/wario.jpg"
  },
  {
    id: 35,
    character: 'Snake',
    backGroundImage: "../../public/CharacterJpgs/snake.jpg"
  },
  {
    id: 36,
    character: 'Ike',
    backGroundImage: "../../public/CharacterJpgs/ike.jpg"
  },
  {
    id: 37,
    character: 'Pokemon Trainer',
    backGroundImage: "../../public/CharacterJpgs/pokemon-trainer.jpg"
  },
  {
    id: 38,
    character: 'Diddy Kong',
    backGroundImage: "../../public/CharacterJpgs/diddy-kong.jpg"
  }, 
  {
    id: 39,
    character: 'Lucas',
    backGroundImage: "../../public/CharacterJpgs/lucas.jpg"
  },
  {
    id: 40,
    character: 'Sonic',
    backGroundImage: "../../public/CharacterJpgs/sonic.jpg"
  },
  {
    id: 41,
    character: 'King Dedede',
    backGroundImage: "../../public/CharacterJpgs/king-dedede.jpg"
  },
  {
    id: 42,
    character: 'Olimar',
    backGroundImage: "../../public/CharacterJpgs/olimar.jpg"
  },
  {
    id: 43,
    character: 'Lucario',
    backGroundImage: "../../public/CharacterJpgs/lucario.jpg"
  },
  {
    id: 44,
    character: 'R.O.B.',
    backGroundImage: "../../public/CharacterJpgs/rob.jpg"
  },
  {
    id: 45,
    character: 'Toon Link',
    backGroundImage: "../../public/CharacterJpgs/toon-link.jpg"
  },
  {
    id: 46,
    character: 'Wolf',
    backGroundImage: "../../public/CharacterJpgs/wolf.jpg"
  },
  {
    id: 47,
    character: 'Villager',
    backGroundImage: "../../public/CharacterJpgs/villager.jpg"
  },
  {
    id: 48,
    character: 'Mega Man',
    backGroundImage: "../../public/CharacterJpgs/mega-man.jpg"
  },
  {
    id: 49,
    character: 'Wii Fit Trainer',
    backGroundImage: "../../public/CharacterJpgs/wii-fit-trainer.jpg"
  },
  {
    id: 50,
    character: 'Rosalina & Luma',
    backGroundImage: "../../public/CharacterJpgs/rosalina-luma.jpg"
  },
  {
    id: 51,
    character: 'Little Mac',
    backGroundImage: "../../public/CharacterJpgs/little-mac.jpg"
  },
  {
    id: 52,
    character: 'Greninja',
    backGroundImage: "../../public/CharacterJpgs/greninja.jpg"
  },
  {
    id: 53,
    character: 'Palutena',
    backGroundImage: "../../public/CharacterJpgs/palutena.jpg"
  },
  {
    id: 54,
    character: 'Pac-Man',
    backGroundImage: "../../public/CharacterJpgs/pac-man.jpg"
  },
  {
    id: 55,
    character: 'Robin',
    backGroundImage: "../../public/CharacterJpgs/robin.jpg"
  },
  {
    id: 56,
    character: 'Shulk',
    backGroundImage: "../../public/CharacterJpgs/shulk.jpg"
  },
  {
    id: 57,
    character: 'Bowser Jr.',
    backGroundImage: "../../public/CharacterJpgs/bowser-jr.jpg"
  },
  {
    id: 58,
    character: 'Duck Hunt',
    backGroundImage: "../../public/CharacterJpgs/duck-hunt.jpg"
  },
  {
    id: 59,
    character: 'Ryu',
    backGroundImage: "../../public/CharacterJpgs/ryu.jpg"
  },
  {
    id: 60,
    character: 'Ken',
    backGroundImage: "../../public/CharacterJpgs/ken.jpg"
  },
  {
    id: 61,
    character: 'Cloud',
    backGroundImage: "../../public/CharacterJpgs/cloud.jpg"
  },
  {
    id: 62,
    character: 'Corrin',
    backGroundImage: "../../public/CharacterJpgs/corrin.jpg"
  },
  {
    id: 63,
    character: 'Bayonetta',
    backGroundImage: "../../public/CharacterJpgs/bayonetta.jpg"
  },
  {
    id: 64,
    character: 'Inkling',
    backGroundImage: "../../public/CharacterJpgs/inkling.jpg"
  },
  {
    id: 65,
    character: 'Ridley',
    backGroundImage: "../../public/CharacterJpgs/ridley.jpg"
  },
  {
    id: 66,
    character: 'Simon',
    backGroundImage: "../../public/CharacterJpgs/simon.jpg"
  },
  {
    id: 67,
    character: 'Richter',
    backGroundImage: "../../public/CharacterJpgs/richter.jpg"
  },
  {
    id: 68,
    character: 'King K. Rool',
    backGroundImage: "../../public/CharacterJpgs/king-k-rool.jpg"
  },
  {
    id: 69,
    character: 'Isabelle',
    backGroundImage: "../../public/CharacterJpgs/isabelle.jpg"
  },
  {
    id: 70,
    character: 'Incineroar',
    backGroundImage: "../../public/CharacterJpgs/incineroar.jpg"
  },
  {
    id: 71,
    character: 'Piranha Plant',
    backGroundImage: "../../public/CharacterJpgs/piranha-plant.jpg"
  },
  {
    id: 72,
    character: 'Joker',
    backGroundImage: "../../public/CharacterJpgs/joker.jpg"
  },  
  {
    id: 73,
    character: 'Hero',
    backGroundImage: "../../public/CharacterJpgs/hero.jpg"
  },
  {
    id: 74,
    character: 'Banjo & Kazooie',
    backGroundImage: "../../public/CharacterJpgs/banjo-kazooie.jpg"
  },
  {
    id: 75,
    character: 'Terry',
    backGroundImage: "../../public/CharacterJpgs/terry.jpg"
  },
  {
    id: 76,
    character: 'Byleth',
    backGroundImage: "../../public/CharacterJpgs/byleth.jpg"
  },
  {
    id: 77,
    character: 'Min Min',
    backGroundImage: "../../public/CharacterJpgs/min-min.jpg"
  },
  {
    id: 78,
    character: 'Steve',
    backGroundImage: "../../public/CharacterJpgs/steve.jpg"
  },
  {
    id: 79,
    character: 'Sephiroth',
    backGroundImage: "../../public/CharacterJpgs/sephiroth.jpg"
  },
  {
    id: 80,
    character: 'Pyra/Mythra',
    backGroundImage: "../../public/CharacterJpgs/pyra-mythra.jpg"
  },
  {
    id: 81,
    character: 'Kazuya',
    backGroundImage: "../../public/CharacterJpgs/kazuya.jpg"
  },
  {
    id: 82,
    character: 'Sora',
    backGroundImage: "../../public/CharacterJpgs/sora.jpg"
  },
  {
    id: 83,
    character: 'Mii Brawler',
    backGroundImage: "../../public/CharacterJpgs/mii-brawler.jpg"
  },
  {
    id: 84,
    character: 'Mii Swordfighter',
    backGroundImage: "../../public/CharacterJpgs/mii-swordfighter.jpg"
  },
  {
    id: 85,
    character: 'Mii Gunner',
    backGroundImage: "../../public/CharacterJpgs/mii-gunner.jpg"
  },
  {
    id: 86,
    character: 'Random',
    backGroundImage: ""
  },
];

export default characterTilesArray;