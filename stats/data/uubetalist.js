var POKEMON_LIST = [
   "Blastoise",
   "Florges",
   "Metagross",
   "Slowbro",
   "Latias",
   "Umbreon",
   "Darmanitan",
   "Hydreigon",
   "Chandelure",
   "Crawdaunt",
   "Victini",
   "Jirachi",
   "Chansey",
   "Gardevoir",
   "Absol",
   "Aggron",
   "Haxorus",
   "Manectric",
   "Arcanine",
   "Heracross",
   "Tornadus-Therian",
   "Chesnaught",
   "Swampert",
   "Keldeo",
   "Nidoking",
   "Mew",
   "Zapdos",
   "Mienshao",
   "Crobat",
   "Medicham",
   "Roserade",
   "Empoleon",
   "Celebi",
   "Rotom-Heat",
   "Hawlucha",
   "Diggersby",
   "Cofagrigus",
   "Amoonguss",
   "Porygon2",
   "Noivern",
   "Aerodactyl",
   "Tangrowth",
   "Hippowdon",
   "Vaporeon",
   "Magnezone",
   "Ambipom",
   "Weavile",
   "Jolteon",
   "Houndoom",
   "Machamp",
   "Honchkrow",
   "Jellicent",
   "Ampharos",
   "Gastrodon",
   "Kingdra",
   "Ditto",
   "Shuckle",
   "Suicune",
   "Milotic",
   "Gligar",
   "Rhyperior",
   "Whimsicott",
   "Krookodile",
   "Snorlax",
   "Zygarde",
   "Flygon",
   "Scrafty",
   "Clawitzer",
   "Hitmontop",
   "Exploud",
   "Porygon-Z",
   "Entei",
   "Reuniclus",
   "Banette",
   "Cobalion",
   "Heliolisk",
   "Azelf",
   "Quagsire",
   "Nidoqueen",
   "Cresselia",
   "Dusclops",
   "Escavalier",
   "Electivire",
   "Cinccino",
   "Raikou",
   "Leavanny",
   "Scyther",
   "Terrakion",
   "Gallade",
   "Malamar",
   "Toxicroak",
   "Xatu",
   "Doublade",
   "Gourgeist-Super",
   "Kyurem",
   "Drapion",
   "Shaymin",
   "Sharpedo",
   "Sceptile",
   "Yanmega",
   "Ninjask",
   "Staraptor",
   "Eelektross",
   "Slurpuff",
   "Hitmonlee",
   "Bronzong",
   "Froslass",
   "Scolipede",
   "Carbink",
   "Abomasnow",
   "Sigilyph",
   "Mismagius",
   "Venomoth",
   "Deoxys-Defense",
   "Avalugg",
   "Tyrantrum",
   "Vivillon",
   "Durant",
   "Delphox",
   "Slowking",
   "Dragalge",
   "Barbaracle",
   "Landorus",
   "Zoroark",
   "Claydol",
   "Meloetta",
   "Weezing",
   "Alomomola",
   "Bisharp",
   "Virizion",
   "Swellow",
   "Liepard",
   "Gogoat",
   "Braviary",
   "Dugtrio",
   "Omastar",
   "Registeel",
   "Rotom-Mow",
   "Steelix",
   "Typhlosion",
   "Golurk",
   "Miltank",
   "Kecleon",
   "Granbull",
   "Muk",
   "Feraligatr",
   "Chatot",
   "Torkoal",
   "Accelgor",
   "Lanturn",
   "Archeops",
   "Aromatisse",
   "Druddigon",
   "Hitmonchan",
   "Pangoro",
   "Tornadus",
   "Ludicolo",
   "Gorebyss",
   "Lapras",
   "Spiritomb",
   "Kabutops",
   "Flareon",
   "Furfrou",
   "Zangoose",
   "Uxie",
   "Dusknoir",
   "Slaking",
   "Carracosta",
   "Lilligant",
   "Mr.Mime",
   "Meowstic",
   "Ferroseed",
   "Sandslash",
   "Bouffalant",
   "Primeape",
   "Exeggutor",
   "Ariados",
   "Cradily",
   "Shedinja",
   "Golbat",
   "Armaldo",
   "Pidgeot",
   "Magmortar",
   "Ursaring",
   "Crustle",
   "Ninetales",
   "Sawk",
   "Kangaskhan",
   "Tauros",
   "Cacturne",
   "Golem",
   "Hariyama",
   "Moltres",
   "Emboar",
   "Tangela",
   "Regirock",
   "Rampardos",
   "Torterra",
   "Qwilfish",
   "Tropius",
   "Stoutland",
   "Pyroar",
   "Audino",
   "Drifblim",
   "Skuntank",
   "Seismitoad",
   "Marowak",
   "Kingler",
   "Togetic",
   "Klinklang",
   "Vileplume",
   "Luxray",
   "Cryogonal",
   "Leafeon",
   "Raichu",
   "Bastiodon",
   "Masquerain",
   "Articuno",
   "Regice",
   "Gigalith",
   "Gothitelle",
   "Shiftry",
   "Jynx",
   "Pikachu",
   "Linoone",
   "Floatzel",
   "Beheeyem",
   "Glaceon",
   "Poliwrath",
   "Meganium",
   "Serperior",
   "Electrode",
   "Lickilicky",
   "Probopass",
   "Magneton",
   "Jumpluff",
   "Volbeat",
   "Piloswine",
   "Rhydon",
   "Aurorus",
   "Lopunny",
   "Mantine",
   "Combusken",
   "Wigglytuff",
   "Camerupt",
   "Altaria",
   "Persian",
   "Arbok",
   "Samurott",
   "Rotom",
   "Rapidash",
   "Swoobat",
   "Wobbuffet",
   "Raticate",
   "Gourgeist-Small",
   "Murkrow",
   "Politoed",
   "Victreebel",
   "Haunter",
   "Regigigas",
   "Walrein",
   "Huntail",
   "Sawsbuck",
   "Stunfisk",
   "Throh",
   "Dodrio",
   "Golduck",
   "Fletchinder",
   "Musharna",
   "Garbodor",
   "Mightyena",
   "Rotom-Frost",
   "Hypno",
   "Delibird",
   "Basculin",
   "Whiscash",
   "Seaking",
   "Rotom-Fan",
   "Dedenne",
   "Wailord",
   "Gurdurr",
   "Zebstrika",
   "Emolga",
   "Butterfree",
   "Vespiquen",
   "Dunsparce",
   "Relicanth",
   "Mesprit",
   "Vanilluxe",
   "Bibarel",
   "Munchlax",
   "Octillery",
   "Gourgeist-Large",
   "Electabuzz",
   "Beedrill",
   "Pelipper",
   "Meowstic-F",
   "Kadabra",
   "Grumpig",
   "Pineco",
   "Swalot",
   "Fearow",
   "Purugly",
   "Magcargo",
   "Parasect",
   "Farfetch'd",
   "Beartic",
   "Noctowl",
   "Heatmor",
   "Sudowoodo",
   "Unfezant",
   "Vigoroth",
   "Furret",
   "Clefairy",
   "Seviper",
   "Misdreavus",
   "Gourgeist",
   "Glalie",
   "Girafarig",
   "Sliggoo",
   "Swanna",
   "Nosepass",
   "Simipour",
   "Bellossom",
   "Dewgong",
   "Magmar",
   "Aron",
   "Kricketune",
   "Dragonair",
   "Rattata",
   "Vullaby",
   "Spinda",
   "Sneasel",
   "Illumise",
   "Delcatty",
   "Simisear",
   "Omanyte",
   "Clamperl",
   "Maractus",
   "Frogadier",
   "Onix",
   "Simisage",
   "Corsola",
   "Chimecho",
   "Zweilous",
   "Machoke",
   "Stantler",
   "Wartortle",
   "Ledian",
   "Castform",
   "Monferno",
   "Gabite",
   "Carnivine",
   "Pachirisu",
   "Numel",
   "Charmeleon",
   "Lairon",
   "Magnemite",
   "Metang",
   "Wormadam-Trash",
   "Roselia",
   "Solrock",
   "Dustox",
   "Marill",
   "Porygon",
   "Phione",
   "Mothim",
   "Lunatone",
   "Magikarp",
   "Gastly",
   "Swirlix",
   "Beautifly",
   "Wynaut",
   "Drowzee",
   "Lickitung",
   "Minun",
   "Lumineon",
   "Plusle",
   "Tentacool",
   "Riolu",
   "Gothorita",
   "Hippopotas",
   "Seadra",
   "Spinarak",
   "Koffing",
   "Shelgon",
   "Whirlipede",
   "Watchog",
   "Graveler",
   "Aipom",
   "Purrloin",
   "Lampent",
   "Fraxure",
   "Bunnelby",
   "Swadloon",
   "Cottonee",
];