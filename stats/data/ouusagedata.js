var RANKINGS = [
   [ "1", "Charizard", "18.36808%" ],
   [ "2", "Greninja", "18.00440%" ],
   [ "3", "Aegislash", "16.61758%" ],
   [ "4", "Rotom-Wash", "15.41740%" ],
   [ "5", "Talonflame", "14.99469%" ],
   [ "6", "Tyranitar", "13.81925%" ],
   [ "7", "Scizor", "13.39743%" ],
   [ "8", "Excadrill", "13.23513%" ],
   [ "9", "Garchomp", "13.15786%" ],
   [ "10", "Azumarill", "12.58607%" ],
   [ "11", "Ferrothorn", "12.13105%" ],
   [ "12", "Dragonite", "11.66396%" ],
   [ "13", "Heatran", "10.50548%" ],
   [ "14", "Venusaur", "10.32297%" ],
   [ "15", "Gliscor", "9.66141%" ],
   [ "16", "Conkeldurr", "9.16776%" ],
   [ "17", "Gengar", "9.03075%" ],
   [ "18", "Bisharp", "8.89196%" ],
   [ "19", "Latios", "8.83549%" ],
   [ "20", "Skarmory", "8.46940%" ],
   [ "21", "Thundurus", "8.08042%" ],
   [ "22", "Breloom", "7.47883%" ],
   [ "23", "Espeon", "7.38585%" ],
   [ "24", "Gyarados", "7.23976%" ],
   [ "25", "Landorus-Therian", "7.16308%" ],
   [ "26", "Mawile", "6.95090%" ],
   [ "27", "Sylveon", "6.86444%" ],
   [ "28", "Pinsir", "6.55055%" ],
   [ "29", "Keldeo", "6.52080%" ],
   [ "30", "Alakazam", "6.27402%" ],
   [ "31", "Togekiss", "6.18970%" ],
   [ "32", "Mamoswine", "6.16423%" ],
   [ "33", "Mandibuzz", "6.13507%" ],
   [ "34", "Clefable", "5.83483%" ],
   [ "35", "Infernape", "5.64815%" ],
   [ "36", "Goodra", "5.35504%" ],
   [ "37", "Landorus", "5.26812%" ],
   [ "38", "Volcarona", "5.22801%" ],
   [ "39", "Chansey", "4.87846%" ],
   [ "40", "Blissey", "4.81674%" ],
   [ "41", "Deoxys-Defense", "4.34211%" ],
   [ "42", "Deoxys-Speed", "4.33316%" ],
   [ "43", "Zapdos", "4.28045%" ],
   [ "44", "Latias", "4.18247%" ],
   [ "45", "Gardevoir", "3.72534%" ],
   [ "46", "Scolipede", "3.72345%" ],
   [ "47", "Cloyster", "3.55720%" ],
   [ "48", "Terrakion", "3.55283%" ],
   [ "49", "Smeargle", "3.44792%" ],
   [ "50", "Manectric", "3.37231%" ],
   [ "51", "Kyurem-Black", "3.33919%" ],
   [ "52", "Medicham", "3.32691%" ],
   [ "53", "Sableye", "3.06658%" ],
   [ "54", "Vaporeon", "3.04559%" ],
   [ "55", "Salamence", "3.04167%" ],
   [ "56", "Blastoise", "2.90678%" ],
   [ "57", "Heracross", "2.88628%" ],
   [ "58", "Galvantula", "2.84434%" ],
   [ "59", "Jolteon", "2.71973%" ],
   [ "60", "Lucario", "2.66207%" ],
   [ "61", "Umbreon", "2.61511%" ],
   [ "62", "Starmie", "2.51301%" ],
   [ "63", "Quagsire", "2.48665%" ],
   [ "64", "Weavile", "2.42368%" ],
   [ "65", "Donphan", "2.38799%" ],
   [ "66", "Tentacruel", "2.34040%" ],
   [ "67", "Forretress", "2.33266%" ],
   [ "68", "Arcanine", "2.24819%" ],
   [ "69", "Chandelure", "2.20572%" ],
   [ "70", "Magnezone", "2.18106%" ],
   [ "71", "Staraptor", "2.14796%" ],
   [ "72", "Politoed", "2.13048%" ],
   [ "73", "Ditto", "2.12465%" ],
   [ "74", "Metagross", "2.09881%" ],
   [ "75", "Crawdaunt", "2.07117%" ],
   [ "76", "Porygon2", "2.02766%" ],
   [ "77", "Klefki", "1.98690%" ],
   [ "78", "Trevenant", "1.98407%" ],
   [ "79", "Hippowdon", "1.89624%" ],
   [ "80", "Slowbro", "1.89326%" ],
   [ "81", "Haxorus", "1.87413%" ],
   [ "82", "Hydreigon", "1.84342%" ],
   [ "83", "Manaphy", "1.76787%" ],
   [ "84", "Nidoking", "1.75675%" ],
   [ "85", "Aggron", "1.67407%" ],
   [ "86", "Thundurus-Therian", "1.66990%" ],
   [ "87", "Aerodactyl", "1.62209%" ],
   [ "88", "Milotic", "1.61961%" ],
   [ "89", "Darmanitan", "1.61333%" ],
   [ "90", "Florges", "1.59901%" ],
   [ "91", "Diggersby", "1.59741%" ],
   [ "92", "Absol", "1.58548%" ],
   [ "93", "Noivern", "1.57304%" ],
   [ "94", "Crobat", "1.52060%" ],
   [ "95", "Swampert", "1.50215%" ],
   [ "96", "Jirachi", "1.43574%" ],
   [ "97", "Snorlax", "1.42654%" ],
   [ "98", "Kingdra", "1.39922%" ],
   [ "99", "Machamp", "1.39283%" ],
   [ "100", "Whimsicott", "1.32258%" ],
   [ "101", "Mew", "1.30268%" ],
   [ "102", "Ambipom", "1.25061%" ],
   [ "103", "Ampharos", "1.19763%" ],
   [ "104", "Gothitelle", "1.19666%" ],
   [ "105", "Ninetales", "1.17443%" ],
   [ "106", "Suicune", "1.16007%" ],
   [ "107", "Gastrodon", "1.15254%" ],
   [ "108", "Amoonguss", "1.15196%" ],
   [ "109", "Scrafty", "1.14146%" ],
   [ "110", "Rotom-Heat", "1.13841%" ],
   [ "111", "Victini", "1.12946%" ],
   [ "112", "Jellicent", "1.12524%" ],
   [ "113", "Electivire", "1.10529%" ],
   [ "114", "Hawlucha", "1.08710%" ],
   [ "115", "Mienshao", "1.05146%" ],
   [ "116", "Celebi", "1.04877%" ],
   [ "117", "Cofagrigus", "1.03891%" ],
   [ "118", "Roserade", "1.01194%" ],
   [ "119", "Empoleon", "1.00693%" ],
   [ "120", "Reuniclus", "1.00043%" ],
   [ "121", "Shuckle", "0.99611%" ],
   [ "122", "Porygon-Z", "0.97658%" ],
   [ "123", "Chesnaught", "0.90660%" ],
   [ "124", "Ninjask", "0.87028%" ],
   [ "125", "Zoroark", "0.86046%" ],
   [ "126", "Tornadus-Therian", "0.85950%" ],
   [ "127", "Honchkrow", "0.85560%" ],
   [ "128", "Krookodile", "0.84959%" ],
   [ "129", "Toxicroak", "0.82654%" ],
   [ "130", "Entei", "0.78874%" ],
   [ "131", "Houndoom", "0.76517%" ],
   [ "132", "Malamar", "0.75495%" ],
   [ "133", "Azelf", "0.73411%" ],
   [ "134", "Dusclops", "0.72907%" ],
   [ "135", "Banette", "0.71600%" ],
   [ "136", "Sceptile", "0.70631%" ],
   [ "137", "Mr. Mime", "0.69899%" ],
   [ "138", "Sigilyph", "0.69643%" ],
   [ "139", "Kabutops", "0.68515%" ],
   [ "140", "Heliolisk", "0.68368%" ],
   [ "141", "Rhyperior", "0.66489%" ],
   [ "142", "Cresselia", "0.66374%" ],
   [ "143", "Ludicolo", "0.64842%" ],
   [ "144", "Raikou", "0.62860%" ],
   [ "145", "Exploud", "0.62106%" ],
   [ "146", "Hitmonlee", "0.61976%" ],
   [ "147", "Wobbuffet", "0.61754%" ],
   [ "148", "Flygon", "0.58438%" ],
   [ "149", "Hitmontop", "0.56063%" ],
   [ "150", "Gallade", "0.55234%" ],
   [ "151", "Froslass", "0.54680%" ],
   [ "152", "Drapion", "0.54649%" ],
   [ "153", "Weezing", "0.53365%" ],
   [ "154", "Tangrowth", "0.53131%" ],
   [ "155", "Dugtrio", "0.52313%" ],
   [ "156", "Cinccino", "0.52260%" ],
   [ "157", "Eelektross", "0.49657%" ],
   [ "158", "Sharpedo", "0.48684%" ],
   [ "159", "Abomasnow", "0.47447%" ],
   [ "160", "Slowking", "0.47093%" ],
   [ "161", "Vivillon", "0.46603%" ],
   [ "162", "Tyrantrum", "0.43890%" ],
   [ "163", "Delphox", "0.42920%" ],
   [ "164", "Venomoth", "0.42485%" ],
   [ "165", "Typhlosion", "0.41780%" ],
   [ "166", "Zygarde", "0.41309%" ],
   [ "167", "Slurpuff", "0.39761%" ],
   [ "168", "Xatu", "0.39651%" ],
   [ "169", "Clawitzer", "0.39443%" ],
   [ "170", "Pikachu", "0.38661%" ],
   [ "171", "Yanmega", "0.38006%" ],
   [ "172", "Lapras", "0.36656%" ],
   [ "173", "Bronzong", "0.36052%" ],
   [ "174", "Meloetta", "0.35793%" ],
   [ "175", "Avalugg", "0.32958%" ],
   [ "176", "Swellow", "0.32856%" ],
   [ "177", "Feraligatr", "0.32602%" ],
   [ "178", "Slaking", "0.32468%" ],
   [ "179", "Dusknoir", "0.31367%" ],
   [ "180", "Virizion", "0.30917%" ],
   [ "181", "Alomomola", "0.30735%" ],
   [ "182", "Lanturn", "0.30721%" ],
   [ "183", "Durant", "0.30407%" ],
   [ "184", "Gourgeist-Super", "0.29571%" ],
   [ "185", "Miltank", "0.29243%" ],
   [ "186", "Cradily", "0.28953%" ],
   [ "187", "Gorebyss", "0.28842%" ],
   [ "188", "Shedinja", "0.27980%" ],
   [ "189", "Golurk", "0.27420%" ],
   [ "190", "Leafeon", "0.27324%" ],
   [ "191", "Flareon", "0.27224%" ],
   [ "192", "Raichu", "0.26897%" ],
   [ "193", "Shaymin", "0.26573%" ],
   [ "194", "Omastar", "0.26521%" ],
   [ "195", "Dragalge", "0.26168%" ],
   [ "196", "Barbaracle", "0.25912%" ],
   [ "197", "Muk", "0.25657%" ],
   [ "198", "Steelix", "0.25517%" ],
   [ "199", "Torterra", "0.25462%" ],
   [ "200", "Mismagius", "0.25199%" ],
];
