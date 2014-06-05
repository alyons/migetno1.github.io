var POKEMON_LIST = [
   "Florges",
   "Blastoise",
   "Darmanitan",
   "Mienshao",
   "Nidoking",
   "Hydreigon",
   "Arcanine",
   "Victini",
   "Honchkrow",
   "Chandelure",
   "Crobat",
   "Manectric",
   "Galvantula",
   "Heracross",
   "Forretress",
   "Aerodactyl",
   "Donphan",
   "Slowbro",
   "Umbreon",
   "Metagross",
   "Roserade",
   "Flygon",
   "Absol",
   "Mew",
   "Cloyster",
   "Aggron",
   "Swampert",
   "Empoleon",
   "Azelf",
   "Porygon2",
   "Scrafty",
   "Porygon-Z",
   "Jirachi",
   "Trevenant",
   "Milotic",
   "Krookodile",
   "Ampharos",
   "Noivern",
   "Rotom-Heat",
   "Toxicroak",
   "Machamp",
   "Entei",
   "Houndoom",
   "Starmie",
   "Jolteon",
   "Chesnaught",
   "Suicune",
   "Snorlax",
   "Celebi",
   "Quagsire",
   "Gardevoir",
   "Shaymin",
   "Salamence",
   "Kingdra",
   "Tentacruel",
   "Raikou",
   "Nidoqueen",
   "Sableye",
   "Ambipom",
   "Hippowdon",
   "Vaporeon",
   "Crawdaunt",
   "Rhyperior",
   "Hitmonlee",
   "Tangrowth",
   "Amoonguss",
   "Cofagrigus",
   "Zoroark",
   "Sharpedo",
   "Froslass",
   "Whimsicott",
   "Kyurem",
   "Smeargle",
   "Exploud",
   "Yanmega",
   "Hitmontop",
   "Tornadus",
   "Reuniclus",
   "Cinccino",
   "Cresselia",
   "Gallade",
   "Banette",
   "Magnezone",
   "Cobalion",
   "Escavalier",
   "Bronzong",
   "Gligar",
   "Gastrodon",
   "Registeel",
   "Jellicent",
   "Clawitzer",
   "Slowking",
   "Medicham",
   "Drapion",
   "Ninjask",
   "Shuckle",
   "Mismagius",
   "Hitmonchan",
   "Braviary",
   "Xatu",
   "Slurpuff",
   "Heliolisk",
   "Eelektross",
   "Weezing",
   "Sigilyph",
   "Vivillon",
   "Sceptile",
   "Malamar",
   "Dusclops",
   "Magneton",
   "Swellow",
   "Alomomola",
   "Electivire",
   "Durant",
   "Delphox",
   "Claydol",
   "Rotom-Mow",
   "Tyrantrum",
   "Doublade",
   "Druddigon",
   "Ditto",
   "Abomasnow",
   "Miltank",
   "Muk",
   "Feraligatr",
   "Virizion",
   "Dugtrio",
   "Meloetta",
   "Ludicolo",
   "Golbat",
   "Aromatisse",
   "Venomoth",
   "Slaking",
   "Typhlosion",
   "Scyther",
   "Cacturne",
   "Cradily",
   "Uxie",
   "Lilligant",
   "Kabutops",
   "Stoutland",
   "Lanturn",
   "Zangoose",
   "Barbaracle",
   "Dragalge",
   "Golurk",
   "Steelix",
   "Gorebyss",
   "Emboar",
   "Gourgeist-Super",
   "Armaldo",
   "Carracosta",
   "Avalugg",
   "Dusknoir",
   "Pyroar",
   "Torkoal",
   "Flareon",
   "Kecleon",
   "Skuntank",
   "Moltres",
   "Archeops",
   "Accelgor",
   "Drifblim",
   "Tauros",
   "Hariyama",
   "Magmortar",
   "Meowstic",
   "Regirock",
   "Omastar",
   "Spiritomb",
   "Ursaring",
   "Carbink",
   "Mr.Mime",
   "Seismitoad",
   "Luxray",
   "Granbull",
   "Lapras",
   "Jynx",
   "Leavanny",
   "Chatot",
   "Exeggutor",
   "Golem",
   "Pikachu",
   "Shedinja",
   "Leafeon",
   "Gogoat",
   "Marowak",
   "Crustle",
   "Torterra",
   "Vileplume",
   "Qwilfish",
   "Furfrou",
   "Bouffalant",
   "Kingler",
   "Ferroseed",
   "Togetic",
   "Ninetales",
   "Linoone",
   "Raichu",
   "Primeape",
   "Combusken",
   "Rampardos",
   "Meganium",
   "Sawk",
   "Swoobat",
   "Altaria",
   "Klinklang",
   "Pangoro",
   "Liepard",
   "Cryogonal",
   "Regice",
   "Poliwrath",
   "Electrode",
   "Gigalith",
   "Sandslash",
   "Floatzel",
   "Bastiodon",
   "Masquerain",
   "Glaceon",
   "Raticate",
   "Articuno",
   "Mantine",
   "Jumpluff",
   "Tropius",
   "Tangela",
   "Rhydon",
   "Shiftry",
   "Audino",
   "Arbok",
   "Rotom",
   "Rapidash",
   "Persian",
   "Lopunny",
   "Serperior",
   "Aron",
   "Lickilicky",
   "Probopass",
   "Aurorus",
   "Piloswine",
   "Volbeat",
   "Rotom-Fan",
   "Samurott",
   "Kangaskhan",
   "Camerupt",
   "Throh",
   "Sawsbuck",
   "Regigigas",
   "Fletchinder",
   "Ariados",
   "Haunter",
   "Wigglytuff",
   "Murkrow",
   "Dodrio",
   "Basculin",
   "Walrein",
   "Rotom-Frost",
   "Beheeyem",
   "Relicanth",
   "Dunsparce",
   "Politoed",
   "Huntail",
   "Mightyena",
   "Swalot",
   "Butterfree",
   "Victreebel",
   "Musharna",
   "Emolga",
   "Gurdurr",
   "Beartic",
   "Zebstrika",
   "Mesprit",
   "Magcargo",
   "Purugly",
   "Whiscash",
   "Hypno",
   "Bibarel",
   "Pidgeot",
   "Noctowl",
   "Dedenne",
   "Stunfisk",
   "Wailord",
   "Seviper",
   "Octillery",
   "Swanna",
   "Vanilluxe",
   "Parasect",
   "Seaking",
   "Sneasel",
   "Vespiquen",
   "Heatmor",
   "Gourgeist-Small",
   "Pelipper",
   "Garbodor",
   "Spinda",
   "Golduck",
   "Dragonair",
   "Fearow",
   "Magmar",
   "Grumpig",
   "Delibird",
   "Beedrill",
   "Misdreavus",
   "Kadabra",
   "Bellossom",
   "Gothorita",
   "Clefairy",
   "Roselia",
   "Vigoroth",
   "Meowstic-F",
   "Furret",
   "Corsola",
   "Dewgong",
   "Pineco",
   "Rattata",
   "Munchlax",
   "Gourgeist-Large",
   "Unfezant",
   "Beautifly",
   "Simipour",
   "Wormadam-Trash",
   "Sudowoodo",
   "Machoke",
   "Electabuzz",
   "Simisear",
   "Girafarig",
   "Chimecho",
   "Riolu",
   "Magikarp",
   "Simisage",
   "Sliggoo",
   "Glalie",
   "Maractus",
   "Castform",
   "Pachirisu",
   "Nosepass",
   "Numel",
   "Magnemite",
   "Clamperl",
   "Ledian",
   "Stantler",
   "Lunatone",
   "Delcatty",
   "Lairon",
   "Wartortle",
   "Illumise",
   "Torchic",
   "Farfetch'd",
   "Cottonee",
   "Koffing",
   "Solrock",
   "Onix",
   "Minun",
   "Bayleef",
   "Hippopotas",
   "Cubone",
   "Zweilous",
   "Vullaby",
   "Klang",
   "Cherrim",
   "Natu",
   "Mothim",
   "Ivysaur",
   "Lickitung",
   "Dustox",
   "Seadra",
   "Plusle",
   "Shelgon",
   "Metang",
   "Wynaut",
   "Diglett",
   "Kricketune",
   "Sunflora",
   "Carnivine",
   "Gourgeist",
   "Lumineon",
   "Frogadier",
   "Duosion",
   "Porygon",
];
