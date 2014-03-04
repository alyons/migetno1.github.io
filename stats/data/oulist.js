var POKEMON_LIST = [
   "Rotom-Wash",
   "Charizard",
   "Aegislash",
   "Talonflame",
   "Greninja",
   "Heatran",
   "Scizor",
   "Conkeldurr",
   "Garchomp",
   "Azumarill",
   "Gliscor",
   "Tyranitar",
   "Ferrothorn",
   "Dragonite",
   "Excadrill",
   "Venusaur",
   "Mandibuzz",
   "Gengar",
   "Latios",
   "Genesect",
   "Bisharp",
   "Landorus-Therian",
   "Lucario",
   "Espeon",
   "Togekiss",
   "Skarmory",
   "Alakazam",
   "Pinsir",
   "Goodra",
   "Infernape",
   "Gyarados",
   "Breloom",
   "Mamoswine",
   "Volcarona",
   "Mawile",
   "Sylveon",
   "Galvantula",
   "Blissey",
   "Cloyster",
   "Clefable",
   "Trevenant",
   "Sableye",
   "Klefki",
   "Donphan",
   "Thundurus",
   "Tentacruel",
   "Starmie",
   "Smeargle",
   "Salamence",
   "Forretress",
   "Gardevoir",
   "Chansey",
   "Scolipede",
   "Slowbro",
   "Vaporeon",
   "Jolteon",
   "Blastoise",
   "Ditto",
   "Latias",
   "Medicham",
   "Terrakion",
   "Umbreon",
   "Kyurem-Black",
   "Manectric",
   "Landorus",
   "Heracross",
   "Chandelure",
   "Hydreigon",
   "Porygon2",
   "Deoxys-Speed",
   "Metagross",
   "Noivern",
   "Arcanine",
   "Keldeo",
   "Staraptor",
   "Weavile",
   "Politoed",
   "Darmanitan",
   "Jirachi",
   "Jellicent",
   "Nidoking",
   "Zapdos",
   "Aggron",
   "Absol",
   "Gastrodon",
   "Florges",
   "Deoxys-Defense",
   "Manaphy",
   "Celebi",
   "Haxorus",
   "Thundurus-Therian",
   "Whimsicott",
   "Magnezone",
   "Kingdra",
   "Swampert",
   "Crobat",
   "Diggersby",
   "Crawdaunt",
   "Reuniclus",
   "Hippowdon",
   "Cofagrigus",
   "Milotic",
   "Aerodactyl",
   "Ambipom",
   "Ninetales",
   "Mew",
   "Quagsire",
   "Snorlax",
   "Victini",
   "Machamp",
   "Ampharos",
   "Electivire",
   "Rotom-Heat",
   "Roserade",
   "Empoleon",
   "Mienshao",
   "Malamar",
   "Scrafty",
   "Suicune",
   "Amoonguss",
   "Tornadus-Therian",
   "Dusclops",
   "Chesnaught",
   "Shuckle",
   "Heliolisk",
   "Ninjask",
   "Hawlucha",
   "Banette",
   "Sigilyph",
   "Houndoom",
   "Toxicroak",
   "Entei",
   "Zoroark",
   "Cresselia",
   "Tangrowth",
   "Exploud",
   "Porygon-Z",
   "Honchkrow",
   "Wobbuffet",
   "Cinccino",
   "Dugtrio",
   "Krookodile",
   "Hitmontop",
   "Rhyperior",
   "Sceptile",
   "Froslass",
   "Abomasnow",
   "Gallade",
   "Xatu",
   "Weezing",
   "Eelektross",
   "Flygon",
   "Liepard",
   "Tyrantrum",
   "Slurpuff",
   "Slowking",
   "Clawitzer",
   "Drapion",
   "Avalugg",
   "Gourgeist-Super",
   "Ludicolo",
   "Typhlosion",
   "Delphox",
   "Raikou",
   "Azelf",
   "Sharpedo",
   "Hitmonlee",
   "Barbaracle",
   "Vivillon",
   "Lapras",
   "Bronzong",
   "Kabutops",
   "Feraligatr",
   "Gothitelle",
   "Dusknoir",
   "Meloetta",
   "Yanmega",
   "Steelix",
   "Mr.Mime",
   "Gorebyss",
   "Zygarde",
   "Flareon",
   "Lilligant",
   "Lanturn",
   "Carbink",
   "Venomoth",
   "Dragalge",
   "Pikachu",
   "Meowstic",
   "Torkoal",
   "Swellow",
   "Shedinja",
   "Golurk",
   "Mismagius",
   "Leafeon",
   "Slaking",
   "Muk",
   "Torterra",
   "Omastar",
   "Durant",
   "Rotom-Mow",
   "Miltank",
   "Doublade",
   "Spiritomb",
   "Pangoro",
   "Chatot",
   "Claydol",
   "Cradily",
   "Kecleon",
   "Zangoose",
   "Accelgor",
   "Shaymin",
   "Drifblim",
   "Luxray",
   "Alomomola",
   "Archeops",
   "Exeggutor",
   "Escavalier",
   "Golem",
   "Furfrou",
   "Magmortar",
   "Shiftry",
   "Hitmonchan",
   "Nidoqueen",
   "Marowak",
   "Scyther",
   "Braviary",
   "Murkrow",
   "Gogoat",
   "Raichu",
   "Volbeat",
   "Carracosta",
   "Glaceon",
   "Serperior",
   "Virizion",
   "Ursaring",
   "Granbull",
   "Pyroar",
   "Gigalith",
   "Rampardos",
   "Armaldo",
   "Cobalion",
   "Uxie",
   "Lopunny",
   "Pidgeot",
   "Tornadus",
   "Seismitoad",
   "Leavanny",
   "Tauros",
   "Registeel",
   "Emboar",
   "Poliwrath",
   "Tropius",
   "Regirock",
   "Kangaskhan",
   "Hariyama",
   "Aron",
   "Moltres",
   "Crustle",
   "Victreebel",
   "Rhydon",
   "Aurorus",
   "Linoone",
   "Vileplume",
   "Meganium",
   "Regice",
   "Stoutland",
   "Sawsbuck",
   "Aromatisse",
   "Lickilicky",
   "Samurott",
   "Cacturne",
   "Articuno",
   "Bastiodon",
   "Electrode",
   "Audino",
   "Skuntank",
   "Druddigon",
   "Kyurem",
   "Klinklang",
   "Nosepass",
   "Sandslash",
   "Bouffalant",
   "Swoobat",
   "Cryogonal",
   "Primeape",
   "Sawk",
   "Kingler",
   "Floatzel",
   "Rapidash",
   "Walrein",
   "Jynx",
   "Tangela",
   "Probopass",
   "Gourgeist-Small",
   "Jumpluff",
   "Mantine",
   "Wigglytuff",
   "Arbok",
   "Persian",
   "Camerupt",
   "Magneton",
   "Regigigas",
   "Rattata",
   "Gligar",
   "Musharna",
   "Raticate",
   "Huntail",
   "Wailord",
   "Rotom-Frost",
   "Rotom",
   "Ariados",
   "Golbat",
   "Qwilfish",
   "Altaria",
   "Swanna",
   "Masquerain",
   "Relicanth",
   "Magnemite",
   "Emolga",
   "Rotom-Fan",
   "Dedenne",
   "Beheeyem",
   "Delibird",
   "Butterfree",
   "Dunsparce",
   "Stunfisk",
   "Purrloin",
   "Hypno",
   "Zebstrika",
   "Beartic",
   "Mightyena",
   "Gourgeist-Large",
   "Combusken",
   "Beedrill",
   "Dodrio",
   "Golduck",
   "Magikarp",
   "Spinda",
   "Parasect",
   "Togetic",
   "Vespiquen",
   "Gourgeist",
   "Throh",
   "Munchlax",
   "Garbodor",
   "Bibarel",
   "Illumise",
   "Swalot",
   "Misdreavus",
   "Seaking",
   "Seviper",
   "Furret",
   "Meowstic-F",
   "Cottonee",
   "Vanilluxe",
   "Magcargo",
   "Sudowoodo",
   "Electabuzz",
   "Farfetch'd",
   "Octillery",
   "Unfezant",
   "Pineco",
   "Noctowl",
   "Solrock",
   "Whiscash",
   "Mesprit",
   "Girafarig",
   "Dragonair",
   "Heatmor",
   "Basculin",
   "Riolu",
   "Simisage",
   "Purugly",
   "Pachirisu",
   "Lunatone",
   "Vigoroth",
   "Piloswine",
   "Bellossom",
   "Pelipper",
   "Dewgong",
   "Grumpig",
   "Simipour",
   "Haunter",
   "Fearow",
   "Onix",
   "Delcatty",
   "Magmar",
   "Simisear",
   "Clamperl",
   "Numel",
   "Wartortle",
   "Kricketune",
   "Clefairy",
   "Omanyte",
   "Glalie",
   "Eevee",
   "Castform",
   "Machoke",
   "Ledian",
   "Cherrim",
   "Maractus",
   "Ferroseed",
   "Charmeleon",
   "Roselia",
];
