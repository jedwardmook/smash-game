const charactersArray = [
  {name: "Mario", image: "/public/CharacterSvgs/mario.svg"}, 
  {name: "Donkey Kong", image: "/public/CharacterSvgs/donkey_kong.svg"},
  {name: "Link", image: "/public/CharacterSvgs/link.svg"}, 
  {name: "Samus", image: "/public/CharacterSvgs/samus.svg"},
  {name: "Yoshi", image: "/public/CharacterSvgs/yoshi.svg"},
  {name: "Kirby", image: "/public/CharacterSvgs/kirby.svg"}, 
  {name: "Fox", image: "/public/CharacterSvgs/fox.svg"},
  {name: "Pikachu", image: "/public/CharacterSvgs/pikachu.svg"},
  {name: "Luigi", image: "/public/CharacterSvgs/luigi.svg"},
  {name: "Ness", image: "/public/CharacterSvgs/ness.svg"},
  {name: "Captain Falcon", image: "/public/CharacterSvgs/captain_falcon.svg"},
  {name: "Jigglypuff", image: "/public/CharacterSvgs/jigglypuff.svg"}, 
  {name: "Peach", image: "/public/CharacterSvgs/peach.svg"},
  {name: "Daisy", image: "/public/CharacterSvgs/daisy.svg"},
  {name: "Bowser", image: "/public/CharacterSvgs/bowser.svg"},
  {name: "Ice Climbers", image: "/public/CharacterSvgs/ice_climbers.svg"}, 
  {name: "Sheik", image: "/public/CharacterSvgs/sheik.svg"},
  {name: "Zelda", image: "/public/CharacterSvgs/zelda.svg"},
  {name: "Dr. Mario", image: "/public/CharacterSvgs/dr_mario.svg"},
  {name: "Pichu", image: "/public/CharacterSvgs/pichu.svg"}, 
  {name: "Falco", image: "/public/CharacterSvgs/falco.svg"},
  {name: "Marth", image: "/public/CharacterSvgs/marth.svg"},
  {name: "Lucina", image: "/public/CharacterSvgs/lucina.svg"},
  {name: "Young Link", image: "/public/CharacterSvgs/young_link.svg"}, 
  {name: "Ganondorf", image: "/public/CharacterSvgs/ganondorf.svg"},
  {name: "Mewtwo", image: "/public/CharacterSvgs/mewtwo.svg"},
  {name: "Roy", image: "/public/CharacterSvgs/roy.svg"},
  {name: "Chrom", image: "/public/CharacterSvgs/chrom.svg"}, 
  {name: "Mr. Game & Watch", image: "/public/CharacterSvgs/mr_game_and_watch.svg"},
  {name: "Meta Knight", image: "/public/CharacterSvgs/meta_knight.svg"},
  {name: "Pit", image: "/public/CharacterSvgs/pit.svg"}, 
  {name: "Dark Pit", image: "/public/CharacterSvgs/dark_pit.svg"},
  {name: "Zero Suit Samus", image: "/public/CharacterSvgs/zero_suit_samus.svg"},
  {name: "Wario", image: "/public/CharacterSvgs/wario.svg"},
  {name: "Snake", image: "/public/CharacterSvgs/snake.svg"}, 
  {name: "Ike", image: "/public/CharacterSvgs/ike.svg"},
  {name: "Pokemon Trainer", image: "/public/CharacterSvgs/pokemon_trainer.svg"},
  {name: "Diddy Kong", image: "/public/CharacterSvgs/diddy_kong.svg"},
  {name: "Lucas", image: "/public/CharacterSvgs/lucas.svg"}, 
  {name: "Sonic", image: "/public/CharacterSvgs/sonic.svg"},
  {name: "King Dedede", image: "/public/CharacterSvgs/king_dedede.svg"},
  {name: "Olimar", image: "/public/CharacterSvgs/olimar.svg"},
  {name: "Lucario", image: "/public/CharacterSvgs/lucario.svg"},
  {name: "R.O.B.", image: "/public/CharacterSvgs/rob.svg"},
  {name: "Toon Link", image: "/public/CharacterSvgs/toon_link.svg"},
  {name: "Wolf", image: "/public/CharacterSvgs/wolf.svg"},
  {name: "Villager", image: "/public/CharacterSvgs/villager.svg"}, 
  {name: "Mega Man", image: "/public/CharacterSvgs/mega_man.svg"},
  {name: "Wii Fit Trainer", image: "/public/CharacterSvgs/wii_fit_trainer.svg"},
  {name: "Rosalina & Luma", image: "/public/CharacterSvgs/rosalina_and_luma.svg"},
  {name: "Little Mac", image: "/public/CharacterSvgs/little_mac.svg"}, 
  {name: "Greninja", image: "/public/CharacterSvgs/greninja.svg"},
  {name: "Palutena", image: "/public/CharacterSvgs/palutena.svg"},
  {name: "Pac-Man", image: "/public/CharacterSvgs/pac_man.svg"},
  {name: "Robin", image: "/public/CharacterSvgs/robin.svg"}, 
  {name: "Shulk", image: "/public/CharacterSvgs/shulk.svg"},
  {name: "Bowser Jr.", image: "/public/CharacterSvgs/bowser_jr.svg"},
  {name: "Duck Hunt", image: "/public/CharacterSvgs/duck_hunt.svg"},
  {name: "Ryu", image: "/public/CharacterSvgs/ryu.svg"}, 
  {name: "Ken", image: "/public/CharacterSvgs/ken.svg"},
  {name: "Cloud", image: "/public/CharacterSvgs/cloud.svg"},
  {name: "Corrin", image: "/public/CharacterSvgs/corrin.svg"},
  {name: "Bayonetta", image: "/public/CharacterSvgs/bayonetta.svg"},
  {name: "Inkling", image: "/public/CharacterSvgs/inkling.svg"},
  {name: "Ridley", image: "/public/CharacterSvgs/ridley.svg"},
  {name: "Simon", image: "/public/CharacterSvgs/simon.svg"},
  {name: "Richter", image: "/public/CharacterSvgs/richter.svg"}, 
  {name: "King K. Rool", image: "/public/CharacterSvgs/king_k_rool.svg"},
  {name: "Isabelle", image: "/public/CharacterSvgs/isabelle.svg"},
  {name: "Incineroar", image: "/public/CharacterSvgs/gaogaen.svg"}, 
  {name: "Piranha Plant", image: "/public/CharacterSvgs/packun_flower.svg"},
  {name: "Joker", image: "/public/CharacterSvgs/joker.svg"},
  {name: "Hero", image: "/public/CharacterSvgs/dq_hero.svg"},
  {name: "Banjo & Kazooie", image: "/public/CharacterSvgs/banjo_and_kazooie.svg"}, 
  {name: "Terry", image: "/public/CharacterSvgs/Terry.svg"},
  {name: "Byleth", image: "/public/CharacterSvgs/byleth.svg"},
  {name: "Min Min", image: "/public/CharacterSvgs/minmin.svg"},
  {name: "Steve", image: "/public/CharacterSvgs/steve.svg"},
  {name: "Sephiroth", image: "/public/CharacterSvgs/sephiroth.svg"}, 
  {name: "Pyra/Mythra", image: "/public/CharacterSvgs/homura.svg"},
  {name: "Kazuya", image: "/public/CharacterSvgs/kazuya.svg"},
  {name: "Sora", image: "/public/CharacterSvgs/sora.svg"},
  {name: "Mii Brawler", image: "/public/CharacterSvgs/mii_fighter.svg"}, 
  {name: "Mii Swordfighter", image: "/public/CharacterSvgs/mii_fighter.svg"},
  {name: "Mii Gunner", image: "/public/CharacterSvgs/mii_fighter.svg"},
  {name: "Random", image: ""},
]

export default charactersArray;