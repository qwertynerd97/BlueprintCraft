const blocks = {
	"air": {
		key: "Air",
		block: require('../assets/blocks/air-placeholder.png'),
		img: require('../assets/blocks/air.png')
	},
	"torch": {
		key: "Torch",
		img: require('../assets/blocks/torch.png')
	},
	"brick": { 
		key: "Brick", 
		img: require('../assets/blocks/brick.png') 
	},
	"stone": { 
		key: "Stone", 
		img: require('../assets/blocks/stone.png') 
	},
	"stonebrick": { 
		key: "Stone Brick", 
		img: require('../assets/blocks/stonebrick.png') 
	},
	"stonebrick_carved": { 
		key: "Carved Stone Brick", 
		img: require('../assets/blocks/stonebrick_carved.png') 
	},
	"stonebrick_cracked": { 
		key: "Cracked Stone Brick", 
		img: require('../assets/blocks/stonebrick_cracked.png') 
	},
	"stonebrick_mossy": { 
		key: "Mossy Stone Brick", 
		img: require('../assets/blocks/stonebrick_mossy.png') 
	},
	"granite": { 
		key: "Granite", 
		img: require('../assets/blocks/granite.png') 
	},
	"polished_granite": { 
		key: "Polished Granite", 
		img: require('../assets/blocks/polished_granite.png') 
	},
	"diorite": { 
		key: "Diorite", 
		img: require('../assets/blocks/diorite.png') 
	},
	"polished_diorite": { 
		key: "Polished Diorite", 
		img: require('../assets/blocks/polished_diorite.png') 
	},
	"andesite": { 
		key: "Andesite", 
		img: require('../assets/blocks/andesite.png') 
	},
	"polished_andesite": { 
		key: "Polished Andesite", 
		img: require('../assets/blocks/polished_andesite.png') 
	},
	"grass": { 
		key: "Grass", 
		img: require('../assets/blocks/grass.png'),
		side: require('../assets/blocks/grass_side.png'),
		wiki: "GB"
	},
	"grass_path": { 
		key: "Grass Path", 
		img: require('../assets/blocks/grass_path.png') 
	},
	"dirt": { 
		key: "Dirt", 
		img: require('../assets/blocks/dirt.png'),
		wiki: "dirt"
	},
	"coarse_dirt": { 
		key: "Coarse Dirt", 
		img: require('../assets/blocks/coarse_dirt.png') 
	},
	"podzol": { 
		key: "Podzol", 
		img: require('../assets/blocks/podzol.png') 
	},
	"farmland": { 
		key: "Farmland", 
		img: require('../assets/blocks/farmland.png'),
		wiki: "fa"
	},
	"cobblestone": { 
		key: "Cobblestone", 
		img: require('../assets/blocks/cobblestone.png') 
	},
	"cobblestone_mossy": { 
		key: "Mossy Cobblestone", 
		img: require('../assets/blocks/cobblestone_mossy.png') 
	},
	"oak_sapling": { 
		key: "Oak Sapling", 
		img: require('../assets/blocks/oak_sapling.png') 
	},
	"spruce_sapling": { 
		key: "Spruce Sapling", 
		img: require('../assets/blocks/spruce_sapling.png') 
	},
	"birch_sapling": { 
		key: "Birch Sapling", 
		img: require('../assets/blocks/birch_sapling.png') 
	},
	"jungle_sapling": { 
		key: "Jungle Sapling", 
		img: require('../assets/blocks/jungle_sapling.png') 
	},
	"acacia_sapling": { 
		key: "Acacia Sapling", 
		img: require('../assets/blocks/acacia_sapling.png') 
	},
	"dark_oak_sapling": { 
		key: "Dark Oak Sapling", 
		img: require('../assets/blocks/dark_oak_sapling.png') 
	},
	"oak_leaves": { 
		key: "Oak Leaves", 
		img: require('../assets/blocks/oak_leaves.png') 
	},
	"spruce_leaves": { 
		key: "Spruce Leaves", 
		img: require('../assets/blocks/spruce_leaves.png') 
	},
	"birch_leaves": { 
		key: "Birch Leaves", 
		img: require('../assets/blocks/birch_leaves.png') 
	},
	"jungle_leaves": { 
		key: "Jungle Leaves", 
		img: require('../assets/blocks/jungle_leaves.png') 
	},
	"acacia_leaves": { 
		key: "Acacia Leaves", 
		img: require('../assets/blocks/acacia_leaves.png') 
	},
	"dark_oak_leaves": { 
		key: "Dark Oak Leaves", 
		img: require('../assets/blocks/dark_oak_leaves.png') 
	},
	"oak_log": { 
		key: "Oak Log", 
		img: require('../assets/blocks/oak_log.png') 
	},
	"spruce_log": { 
		key: "Spruce Log", 
		img: require('../assets/blocks/spruce_log.png') 
	},
	"birch_log": { 
		key: "Birch Log", 
		img: require('../assets/blocks/birch_log.png') 
	},
	"jungle_log": { 
		key: "Jungle Log", 
		img: require('../assets/blocks/jungle_log.png') 
	},
	"acacia_log": { 
		key: "Acacia Log", 
		img: require('../assets/blocks/acacia_log.png') 
	},
	"dark_oak_log": { 
		key: "Dark Oak Log", 
		img: require('../assets/blocks/dark_oak_log.png') 
	},
	"stripped_oak_log": { 
		key: "Stripped Oak Log", 
		img: require('../assets/blocks/stripped_oak_log.png') 
	},
	"stripped_spruce_log": { 
		key: "Stripped Spruce Log", 
		img: require('../assets/blocks/stripped_spruce_log.png') 
	},
	"stripped_birch_log": { 
		key: "Stripped Birch Log", 
		img: require('../assets/blocks/stripped_birch_log.png') 
	},
	"stripped_jungle_log": { 
		key: "Stripped Jungle Log", 
		img: require('../assets/blocks/stripped_jungle_log.png') 
	},
	"stripped_acacia_log": { 
		key: "Stripped Acacia Log", 
		img: require('../assets/blocks/stripped_acacia_log.png') 
	},
	"stripped_dark_oak_log": { 
		key: "Stripped Dark Oak Log", 
		img: require('../assets/blocks/stripped_dark_oak_log.png') 
	},
	"oak_plank": { 
		key: "Oak Plank", 
		img: require('../assets/blocks/oak_plank.png') 
	},
	"spruce_plank": { 
		key: "Spruce Plank", 
		img: require('../assets/blocks/spruce_plank.png') 
	},
	"birch_plank": { 
		key: "Birch Plank", 
		img: require('../assets/blocks/birch_plank.png') 
	},
	"jungle_plank": { 
		key: "Jungle Plank", 
		img: require('../assets/blocks/jungle_plank.png') 
	},
	"acacia_plank": { 
		key: "Acacia Plank", 
		img: require('../assets/blocks/acacia_plank.png') 
	},
	"dark_oak_plank": { 
		key: "Dark Oak Plank", 
		img: require('../assets/blocks/dark_oak_plank.png') 
	},
	"sign": { 
		key: "Oak Sign", 
		img: require('../assets/blocks/sign.png') 
	},
	"sign_spruce": { 
		key: "Spruce Sign", 
		img: require('../assets/blocks/sign_spruce.png') 
	},
	"sign_birch": { 
		key: "Birch Sign", 
		img: require('../assets/blocks/sign_birch.png') 
	},
	"sign_jungle": { 
		key: "Jungle Sign", 
		img: require('../assets/blocks/sign_jungle.png') 
	},
	"sign_acacia": { 
		key: "Acacia Sign", 
		img: require('../assets/blocks/sign_acacia.png') 
	},
	"sign_dark_oak": { 
		key: "Dark Oak Sign", 
		img: require('../assets/blocks/sign_dark_oak.png') 
	},
	"trapdoor": { 
		key: "Oak Trapdoor", 
		img: require('../assets/blocks/trapdoor.png') 
	},
	"spruce_trapdoor": { 
		key: "Spruce Trapdoor", 
		img: require('../assets/blocks/spruce_trapdoor.png') 
	},
	"birch_trapdoor": { 
		key: "Birch Trapdoor", 
		img: require('../assets/blocks/birch_trapdoor.png') 
	},
	"jungle_trapdoor": { 
		key: "Jungle Trapdoor", 
		img: require('../assets/blocks/jungle_trapdoor.png') 
	},
	"acacia_trapdoor": { 
		key: "Acacia Trapdoor", 
		img: require('../assets/blocks/acacia_trapdoor.png') 
	},
	"dark_oak_trapdoor": { 
		key: "Dark Oak Trapdoor", 
		img: require('../assets/blocks/dark_oak_trapdoor.png') 
	},
	"iron_trapdoor": { 
		key: "Iron Trapdoor", 
		img: require('../assets/blocks/iron_trapdoor.png') 
	},
	"bedrock": { 
		key: "Bedrock", 
		img: require('../assets/blocks/bedrock.png') 
	},
	"water": { 
		key: "Water", 
		img: require('../assets/blocks/water.png') 
	},
	"lava": { 
		key: "Lava", 
		img: require('../assets/blocks/lava.png') 
	},
	"sand": { 
		key: "Sand", 
		img: require('../assets/blocks/sand.png') 
	},
	"sandstone": { 
		key: "Sandstone", 
		img: require('../assets/blocks/sandstone.png') 
	},
	"sandstone_smooth": { 
		key: "Smooth Sandstone", 
		img: require('../assets/blocks/sandstone_smooth.png') 
	},
	"sandstone_carved": { 
		key: "Carved Sandstone", 
		img: require('../assets/blocks/sandstone_carved.png') 
	},
	"red_sand": { 
		key: "Red Sand", 
		img: require('../assets/blocks/red_sand.png') 
	},
	"red_sandstone": { 
		key: "Red Sandstone", 
		img: require('../assets/blocks/red_sandstone.png') 
	},
	"red_sandstone_smooth": { 
		key: "Smooth Red Sandstone", 
		img: require('../assets/blocks/red_sandstone_smooth.png') 
	},
	"red_sandstone_carved": { 
		key: "Carved Red Sandstone", 
		img: require('../assets/blocks/red_sandstone_carved.png') 
	},
	"gravel": { 
		key: "Gravel", 
		img: require('../assets/blocks/gravel.png') 
	},
	"coal_ore": { 
		key: "Coal Ore", 
		img: require('../assets/blocks/coal_ore.png') 
	},
	"iron_ore": { 
		key: "Iron Ore", 
		img: require('../assets/blocks/iron_ore.png') 
	},
	"gold_ore": { 
		key: "Gold Ore", 
		img: require('../assets/blocks/gold_ore.png') 
	},
	"diamond_ore": { 
		key: "Diamond Ore", 
		img: require('../assets/blocks/diamond_ore.png') 
	},
	"lapis_ore": { 
		key: "Lapis Lazuli Ore", 
		img: require('../assets/blocks/lapis_ore.png') 
	},
	"redstone_ore": { 
		key: "Redstone Ore", 
		img: require('../assets/blocks/redstone_ore.png') 
	},
	"emerald_ore": { 
		key: "Emerald Ore", 
		img: require('../assets/blocks/emerald_ore.png') 
	},
	"coal_block": { 
		key: "Coal Block", 
		img: require('../assets/blocks/coal_block.png') 
	},
	"iron_block": { 
		key: "Iron Block", 
		img: require('../assets/blocks/iron_block.png') 
	},
	"gold_block": { 
		key: "Gold Block", 
		img: require('../assets/blocks/gold_block.png') 
	},
	"diamond_block": { 
		key: "Diamond Block", 
		img: require('../assets/blocks/diamond_block.png') 
	},
	"lapis_block": { 
		key: "Lapis Lazuli Block", 
		img: require('../assets/blocks/lapis_block.png') 
	},
	"redstone_block": { 
		key: "Redstone Block", 
		img: require('../assets/blocks/redstone_block.png') 
	},
	"emerald_block": { 
		key: "Emerald Block", 
		img: require('../assets/blocks/emerald_block.png') 
	},
	"sponge": { 
		key: "Sponge", 
		img: require('../assets/blocks/sponge.png') 
	},
	"sponge_wet": { 
		key: "Wet Sponge", 
		img: require('../assets/blocks/sponge_wet.png') 
	},
	"glass": { 
		key: "Glass", 
		img: require('../assets/blocks/glass.png') ,
		wiki: "glass"
	},
	"glass_white": { 
		key: "White Glass", 
		img: require('../assets/blocks/glass_white.png') 
	},
	"glass_light_gray": { 
		key: "Light Gray Glass", 
		img: require('../assets/blocks/glass_light_gray.png') 
	},
	"glass_gray": { 
		key: "Gray Glass", 
		img: require('../assets/blocks/glass_gray.png') 
	},
	"glass_black": { 
		key: "Black Glass", 
		img: require('../assets/blocks/glass_black.png') 
	},
	"glass_brown": { 
		key: "Brown Glass", 
		img: require('../assets/blocks/glass_brown.png') 
	},
	"glass_red": { 
		key: "Red Glass", 
		img: require('../assets/blocks/glass_red.png') 
	},
	"glass_orange": { 
		key: "Orange Glass", 
		img: require('../assets/blocks/glass_orange.png') 
	},
	"glass_yellow": { 
		key: "Yellow Glass", 
		img: require('../assets/blocks/glass_yellow.png') 
	},
	"glass_lime": { 
		key: "Lime Glass", 
		img: require('../assets/blocks/glass_lime.png') 
	},
	"glass_green": { 
		key: "Green Glass", 
		img: require('../assets/blocks/glass_green.png') 
	},
	"glass_cyan": { 
		key: "Cyan Glass", 
		img: require('../assets/blocks/glass_cyan.png') 
	},
	"glass_light_blue": { 
		key: "Light Blue Glass", 
		img: require('../assets/blocks/glass_light_blue.png') 
	},
	"glass_blue": { 
		key: "Blue Glass", 
		img: require('../assets/blocks/glass_blue.png') 
	},
	"glass_purple": { 
		key: "Purple Glass", 
		img: require('../assets/blocks/glass_purple.png') 
	},
	"glass_magenta": { 
		key: "Magenta Glass", 
		img: require('../assets/blocks/glass_magenta.png') 
	},
	"glass_pink": { 
		key: "Pink Glass", 
		img: require('../assets/blocks/glass_pink.png') 
	},
	"dispenser": { 
		key: "Dispenser", 
		img: require('../assets/blocks/dispenser.png') 
	},
	"dropper": { 
		key: "Dropper", 
		img: require('../assets/blocks/dropper.png') 
	},
	"noteblock": { 
		key: "Note Block", 
		img: require('../assets/blocks/noteblock.png') 
	},
	"bed_feet": { 
		key: "Bed - Feet", 
		img: require('../assets/blocks/bed_feet.png') 
	},
	"bed_head": { 
		key: "Bed - Head", 
		img: require('../assets/blocks/bed_head.png') 
	},
	"rail": { 
		key: "Rail", 
		img: require('../assets/blocks/rail.png') 
	},
	"rail_turned": { 
		key: "Rail - Turned", 
		img: require('../assets/blocks/rail_turned.png') 
	},
	"rail_powered": { 
		key: "Powered Rail", 
		img: require('../assets/blocks/rail_powered.png') 
	},
	"rail_detector": { 
		key: "Detector Rail", 
		img: require('../assets/blocks/rail_detector.png') 
	},
	"rail_activator": { 
		key: "Activator Rail", 
		img: require('../assets/blocks/rail_activator.png') 
	},
	"rail_powered_on": { 
		key: "Powered Rail - On", 
		img: require('../assets/blocks/rail_powered_on.png') 
	},
	"rail_detector_on": { 
		key: "Detector Rail - On", 
		img: require('../assets/blocks/rail_detector_on.png') 
	},
	"rail_activator_on": { 
		key: "Activator Rail - On", 
		img: require('../assets/blocks/rail_activator_on.png') 
	},
	"comparator": { 
		key: "Comparator", 
		img: require('../assets/blocks/comparator.png') 
	},
	"daylight_detector": { 
		key: "Daylight Detector", 
		img: require('../assets/blocks/daylight_detector.png') 
	},
	"piston": { 
		key: "Piston", 
		img: require('../assets/blocks/piston.png') 
	},
	"piston_sticky": { 
		key: "Sticky Piston", 
		img: require('../assets/blocks/piston_sticky.png') 
	},
	"redstone_lamp": { 
		key: "Redstone Lamp", 
		img: require('../assets/blocks/redstone_lamp.png') 
	},
	"redstone_torch": { 
		key: "Redstone Torch", 
		img: require('../assets/blocks/redstone_torch.png') 
	},
	"redstone_torch_off": { 
		key: "Redstone Torch - Off", 
		img: require('../assets/blocks/redstone_torch_off.png') 
	},
	"redstone_dot": { 
		key: "Redstone Dot", 
		img: require('../assets/blocks/redstone_dot.png') 
	},
	"redstone_vert": { 
		key: "Redstone Vertical Line", 
		img: require('../assets/blocks/redstone_vert.png') 
	},
	"redstone_horiz": { 
		key: "Redstone Horizontal Line", 
		img: require('../assets/blocks/redstone_horiz.png') 
	},
	"redstone_tr": { 
		key: "Redstone Top Right", 
		img: require('../assets/blocks/redstone_tr.png') 
	},
	"redstone_br": { 
		key: "Redstone Bottom Right", 
		img: require('../assets/blocks/redstone_br.png') 
	},
	"redstone_bl": { 
		key: "Redstone Bottom Left", 
		img: require('../assets/blocks/redstone_bl.png') 
	},
	"redstone_tl": { 
		key: "Redstone Top Left", 
		img: require('../assets/blocks/redstone_tl.png') 
	},
	"redstone_up_t": { 
		key: "Redstone Upward Pointing T", 
		img: require('../assets/blocks/redstone_up_t.png') 
	},
	"redstone_down_t": { 
		key: "Redstone Downward Pointing T", 
		img: require('../assets/blocks/redstone_down_t.png') 
	},
	"redstone_r_t": { 
		key: "Redstone Right Pointing T", 
		img: require('../assets/blocks/redstone_r_t.png') 
	},
	"redstone_l_t": { 
		key: "Redstone Left Pointing T", 
		img: require('../assets/blocks/redstone_l_t.png') 
	},
	"redstone_cross": { 
		key: "Redstone Cross", 
		img: require('../assets/blocks/redstone_cross.png') 
	},
	"repeater": { 
		key: "Repeater", 
		img: require('../assets/blocks/repeater.png') 
	},
	"trip_wire_hook": { 
		key: "Trip Wire Hook", 
		img: require('../assets/blocks/trip_wire_hook.png') 
	},
	"cobweb": { 
		key: "Cobweb", 
		img: require('../assets/blocks/cobweb.png') 
	},
	"deadbush": { 
		key: "Dead Bush", 
		img: require('../assets/blocks/deadbush.png') 
	},
	"glazed_terracotta_white": { 
		key: "White Glazed Terracotta", 
		img: require('../assets/blocks/glazed_terracotta_white.png') 
	},
	"glazed_terracotta_light_gray": { 
		key: "Light Gray Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_light_gray.png') 
	},
	"glazed_terracotta_gray": { 
		key: "Gray Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_gray.png') 
	},
	"glazed_terracotta_black": { 
		key: "Black Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_black.png') 
	},
	"glazed_terracotta_brown": { 
		key: "Brown Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_brown.png') 
	},
	"glazed_terracotta_red": { 
		key: "Red Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_red.png') 
	},
	"glazed_terracotta_orange": { 
		key: "Orange Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_orange.png') 
	},
	"glazed_terracotta_yellow": { 
		key: "Yellow Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_yellow.png') 
	},
	"glazed_terracotta_lime": { 
		key: "Lime Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_lime.png') 
	},
	"glazed_terracotta_green": { 
		key: "Green Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_green.png') 
	},
	"glazed_terracotta_cyan": { 
		key: "Cyan Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_cyan.png') 
	},
	"glazed_terracotta_light_blue": { 
		key: "Light Blue Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_light_blue.png') 
	},
	"glazed_terracotta_blue": { 
		key: "Blue Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_blue.png') 
	},
	"glazed_terracotta_purple": { 
		key: "Purple Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_purple.png') 
	},
	"glazed_terracotta_magenta": { 
		key: "Magenta Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_magenta.png') 
	},
	"glazed_terracotta_pink": { 
		key: "Pink Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_pink.png') 
	},
	"tallgrass": { 
		key: "Tall Grass", 
		img: require('../assets/blocks/tallgrass.png')
	},
	"fern": { 
		key: "Fern", 
		img: require('../assets/blocks/fern.png')
	},
	"flower_allium": { 
		key: "Allium Flower", 
		img: require('../assets/blocks/flower_allium.png')
	},
	"flower_blue_orchid": { 
		key: "Blue Orchid Flower", 
		img: require('../assets/blocks/flower_blue_orchid.png')
	},
	"flower_cornflower": { 
		key: "Cornflower Flower", 
		img: require('../assets/blocks/flower_cornflower.png')
	},
	"flower_dandelion": { 
		key: "Dandelion Flower", 
		img: require('../assets/blocks/flower_dandelion.png')
	},
	"flower_houstonia": { 
		key: "Houstonia Flower", 
		img: require('../assets/blocks/flower_houstonia.png')
	},
	"flower_lily_of_the_valley": { 
		key: "Lily of the Valley Flower", 
		img: require('../assets/blocks/flower_lily_of_the_valley.png')
	},
	"flower_oxeye_daisy": { 
		key: "Oxeye Daisy Flower", 
		img: require('../assets/blocks/flower_oxeye_daisy.png')
	},
	"flower_paeonia": { 
		key: "Paeonia Flower", 
		img: require('../assets/blocks/flower_paeonia.png')
	},
	"flower_rose": { 
		key: "Rose Flower", 
		img: require('../assets/blocks/flower_rose.png')
	},
	"flower_tulip_orange": { 
		key: "Orange Tulip Flower", 
		img: require('../assets/blocks/flower_tulip_orange.png')
	},
	"flower_tulip_pink": { 
		key: "Pink Tulip Flower", 
		img: require('../assets/blocks/flower_tulip_pink.png')
	},
	"flower_tulip_red": { 
		key: "Red Tulip Flower", 
		img: require('../assets/blocks/flower_tulip_red.png')
	},
	"flower_tulip_white": { 
		key: "White Tulip Flower", 
		img: require('../assets/blocks/flower_tulip_white.png')
	},
	"flower_wither_rose": { 
		key: "Wither Rose Flower", 
		img: require('../assets/blocks/flower_wither_rose.png')
	},
	"bamboo": { 
		key: "Bamboo", 
		img: require('../assets/blocks/bamboo.png')
	},
	"lily_pad": { 
		key: "Lily Pad", 
		img: require('../assets/blocks/lily_pad.png')
	},
	"glowstone": { 
		key: "Glowstone", 
		img: require('../assets/blocks/glowstone.png'),
		wiki: "gs" 
	},
	"hardened_clay": { 
		key: "Hardened Clay", 
		img: require('../assets/blocks/hardened_clay.png') 
	},
	"hardened_clay_stained_white": { 
		key: "White Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_white.png') 
	},
	"hardened_clay_stained_light_gray": { 
		key: "Light Gray Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_light_gray.png') 
	},
	"hardened_clay_stained_gray": { 
		key: "Gray Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_gray.png') 
	},
	"hardened_clay_stained_black": { 
		key: "Black Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_black.png') 
	},
	"hardened_clay_stained_brown": { 
		key: "Brown Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_brown.png') 
	},
	"hardened_clay_stained_red": { 
		key: "Red Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_red.png') 
	},
	"hardened_clay_stained_orange": { 
		key: "Orange Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_orange.png') 
	},
	"hardened_clay_stained_yellow": { 
		key: "Yellow Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_yellow.png') 
	},
	"hardened_clay_stained_lime": { 
		key: "Lime Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_lime.png') 
	},
	"hardened_clay_stained_green": { 
		key: "Green Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_green.png') 
	},
	"hardened_clay_stained_cyan": { 
		key: "Cyan Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_cyan.png') 
	},
	"hardened_clay_stained_light_blue": { 
		key: "Light Blue Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_light_blue.png') 
	},
	"hardened_clay_stained_blue": { 
		key: "Blue Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_blue.png') 
	},
	"hardened_clay_stained_purple": { 
		key: "Purple Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_purple.png') 
	},
	"hardened_clay_stained_magenta": { 
		key: "Magenta Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_magenta.png') 
	},
	"hardened_clay_stained_pink": { 
		key: "Pink Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_pink.png') 
	},
	"ice": { 
		key: "Ice", 
		img: require('../assets/blocks/ice.png'),
		wiki: "ice"
	},
	"ice_packed": { 
		key: "Packed Ice", 
		img: require('../assets/blocks/ice_packed.png') 
	},
	"blue_ice": { 
		key: "Blue Ice", 
		img: require('../assets/blocks/blue_ice.png') 
	},
	"frosted_ice": { 
		key: "Frosted Ice", 
		img: require('../assets/blocks/frosted_ice.png') 
	},
	"bone_block": { 
		key: "Bone Block", 
		img: require('../assets/blocks/bone_block.png') 
	},
	"obsidian": { 
		key: "Obsidian", 
		img: require('../assets/blocks/obsidian.png'),
		wiki: "obsidian"
	},
	"soul_sand": { 
		key: "Soul Sand", 
		img: require('../assets/blocks/soul_sand.png'),
		wiki: "nS"
	},
	"wool_white": { 
		key: "White Wool", 
		img: require('../assets/blocks/wool_white.png') 
	},
	"wool_light_gray": { 
		key: "Light Gray Wool", 
		img: require('../assets/blocks/wool_light_gray.png') 
	},
	"wool_gray": { 
		key: "Gray Wool", 
		img: require('../assets/blocks/wool_gray.png') 
	},
	"wool_black": { 
		key: "Black Wool", 
		img: require('../assets/blocks/wool_black.png') 
	},
	"wool_brown": { 
		key: "Brown Wool", 
		img: require('../assets/blocks/wool_brown.png') 
	},
	"wool_red": { 
		key: "Red Wool", 
		img: require('../assets/blocks/wool_red.png') 
	},
	"wool_orange": { 
		key: "Orange Wool", 
		img: require('../assets/blocks/wool_orange.png') 
	},
	"wool_yellow": { 
		key: "Yellow Wool", 
		img: require('../assets/blocks/wool_yellow.png') 
	},
	"wool_lime": { 
		key: "Lime Wool", 
		img: require('../assets/blocks/wool_lime.png') 
	},
	"wool_green": { 
		key: "Green Wool", 
		img: require('../assets/blocks/wool_green.png') 
	},
	"wool_cyan": { 
		key: "Cyan Wool", 
		img: require('../assets/blocks/wool_cyan.png') 
	},
	"wool_light_blue": { 
		key: "Light Blue Wool", 
		img: require('../assets/blocks/wool_light_blue.png') 
	},
	"wool_blue": { 
		key: "Blue Wool", 
		img: require('../assets/blocks/wool_blue.png') 
	},
	"wool_purple": { 
		key: "Purple Wool", 
		img: require('../assets/blocks/wool_purple.png') 
	},
	"wool_magenta": { 
		key: "Magenta Wool", 
		img: require('../assets/blocks/wool_magenta.png') 
	},
	"wool_pink": { 
		key: "Pink Wool", 
		img: require('../assets/blocks/wool_pink.png') 
	},
	"anvil": { 
		key: "Anvil", 
		img: require('../assets/blocks/anvil.png') 
	},
	"bookshelf": { 
		key: "Bookshelf", 
		img: require('../assets/blocks/bookshelf.png') 
	},
	"brewing_stand": { 
		key: "Brewing Stand", 
		img: require('../assets/blocks/brewing_stand.png') 
	},
	"cactus": { 
		key: "Cactus", 
		img: require('../assets/blocks/cactus.png') 
	},
	"chest": { 
		key: "Chest", 
		img: require('../assets/blocks/chest.png') 
	},
	"trapped_chest": { 
		key: "Trapped Chest", 
		img: require('../assets/blocks/trapped_chest.png') 
	},
	"barrel": { 
		key: "Barrel", 
		img: require('../assets/blocks/barrel.png') 
	},
	"crafting_table": { 
		key: "Crafting Table", 
		img: require('../assets/blocks/crafting_table.png') 
	},
	"enchanting_table": { 
		key: "Enchanting Table", 
		img: require('../assets/blocks/enchanting_table.png') 
	},
	"furnace": { 
		key: "Furnace", 
		img: require('../assets/blocks/furnace.png') 
	},
	"blast_furnace": { 
		key: "Blast Furnace", 
		img: require('../assets/blocks/blast_furnace.png') 
	},
	"cartography_table": { 
		key: "Cartography Table", 
		img: require('../assets/blocks/cartography_table.png') 
	},
	"composter": { 
		key: "Composter", 
		img: require('../assets/blocks/composter.png') 
	},
	"fletcher_table": { 
		key: "Fletcher Table", 
		img: require('../assets/blocks/fletcher_table.png') 
	},
	"loom": { 
		key: "Loom", 
		img: require('../assets/blocks/loom.png') 
	},
	"smithing_table": { 
		key: "Smithing Table", 
		img: require('../assets/blocks/smithing_table.png') 
	},
	"smoker": { 
		key: "Smoker", 
		img: require('../assets/blocks/smoker.png') 
	},
	"stonecutter": { 
		key: "Stonecutter", 
		img: require('../assets/blocks/stonecutter.png') 
	},
	"iron_bars": { 
		key: "Iron Bars", 
		img: require('../assets/blocks/iron_bars.png') 
	},
	"item_frame": { 
		key: "Item Frame", 
		img: require('../assets/blocks/item_frame.png') 
	},
	"jukebox": { 
		key: "Jukebox", 
		img: require('../assets/blocks/jukebox.png') 
	},
	"ladder": { 
		key: "Ladder", 
		img: require('../assets/blocks/ladder.png') 
	},
	"jack-o-lantern": { 
		key: "Jack-o-Lantern", 
		img: require('../assets/blocks/jack-o-lantern.png') 
	},
	"mob_spawner": { 
		key: "Mob Spawner", 
		img: require('../assets/blocks/mob_spawner.png') 
	},
	"vine": { 
		key: "Vine", 
		img: require('../assets/blocks/vine.png') 
	},
	"beetroots": { 
		key: "Beetroots", 
		img: require('../assets/blocks/beetroots.png') 
	},
	"potatoes": { 
		key: "Potatoes", 
		img: require('../assets/blocks/potatoes.png') 
	},
	"wheat": { 
		key: "Wheat", 
		img: require('../assets/blocks/wheat.png') 
	},
	"sweet_berry_bush": { 
		key: "Sweet Berry Bush", 
		img: require('../assets/blocks/sweet_berry_bush.png') 
	},
	"carrots": { 
		key: "Carrots", 
		img: require('../assets/blocks/carrots.png') 
	},
	"cocoa": { 
		key: "Cocoa", 
		img: require('../assets/blocks/cocoa.png') 
	},
	"melon": { 
		key: "Melon", 
		img: require('../assets/blocks/melon.png') 
	},
	"sugarcane": { 
		key: "Sugarcane", 
		img: require('../assets/blocks/sugarcane.png') 
	},
	"cake": { 
		key: "Cake", 
		img: require('../assets/blocks/cake.png') 
	},
	"bell": { 
		key: "Bell", 
		img: require('../assets/blocks/bell.png') 
	},
	"chorus_flower": { 
		key: "Chorus Flower", 
		img: require('../assets/blocks/chorus_flower.png') 
	},
	"chorus_plant": { 
		key: "Chorus Plant", 
		img: require('../assets/blocks/chorus_plant.png') 
	},
	"clay": { 
		key: "Clay", 
		img: require('../assets/blocks/clay.png') 
	},
	"concrete_white": { 
		key: "White Concrete", 
		img: require('../assets/blocks/concrete_white.png') 
	},
	"concrete_light_gray": { 
		key: "Light Gray Concrete", 
		img: require('../assets/blocks/concrete_light_gray.png') 
	},
	"concrete_gray": { 
		key: "Gray Concrete", 
		img: require('../assets/blocks/concrete_gray.png') 
	},
	"concrete_black": { 
		key: "Black Concrete", 
		img: require('../assets/blocks/concrete_black.png') 
	},
	"concrete_brown": { 
		key: "Brown Concrete", 
		img: require('../assets/blocks/concrete_brown.png') 
	},
	"concrete_red": { 
		key: "Red Concrete", 
		img: require('../assets/blocks/concrete_red.png') 
	},
	"concrete_orange": { 
		key: "Orange Concrete", 
		img: require('../assets/blocks/concrete_orange.png') 
	},
	"concrete_yellow": { 
		key: "Yellow Concrete", 
		img: require('../assets/blocks/concrete_yellow.png') 
	},
	"concrete_lime": { 
		key: "Lime Concrete", 
		img: require('../assets/blocks/concrete_lime.png') 
	},
	"concrete_green": { 
		key: "Green Concrete", 
		img: require('../assets/blocks/concrete_green.png') 
	},
	"concrete_cyan": { 
		key: "Cyan Concrete", 
		img: require('../assets/blocks/concrete_cyan.png') 
	},
	"concrete_light_blue": { 
		key: "Light Blue Concrete", 
		img: require('../assets/blocks/concrete_light_blue.png') 
	},
	"concrete_blue": { 
		key: "Blue Concrete", 
		img: require('../assets/blocks/concrete_blue.png') 
	},
	"concrete_purple": { 
		key: "Purple Concrete", 
		img: require('../assets/blocks/concrete_purple.png') 
	},
	"concrete_magenta": { 
		key: "Magenta Concrete", 
		img: require('../assets/blocks/concrete_magenta.png') 
	},
	"concrete_pink": { 
		key: "Pink Concrete", 
		img: require('../assets/blocks/concrete_pink.png') 
	},
	"concrete_powder_white": { 
		key: "White Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_white.png') 
	},
	"concrete_powder_light_gray": { 
		key: "Light Gray Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_light_gray.png') 
	},
	"concrete_powder_gray": { 
		key: "Gray Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_gray.png') 
	},
	"concrete_powder_black": { 
		key: "Black Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_black.png') 
	},
	"concrete_powder_brown": { 
		key: "Brown Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_brown.png') 
	},
	"concrete_powder_red": { 
		key: "Red Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_red.png') 
	},
	"concrete_powder_orange": { 
		key: "Orange Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_orange.png') 
	},
	"concrete_powder_yellow": { 
		key: "Yellow Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_yellow.png') 
	},
	"concrete_powder_lime": { 
		key: "Lime Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_lime.png') 
	},
	"concrete_powder_green": { 
		key: "Green Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_green.png') 
	},
	"concrete_powder_cyan": { 
		key: "Cyan Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_cyan.png') 
	},
	"concrete_powder_light_blue": { 
		key: "Light Blue Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_light_blue.png') 
	},
	"concrete_powder_blue": { 
		key: "Blue Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_blue.png') 
	},
	"concrete_powder_purple": { 
		key: "Purple Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_purple.png') 
	},
	"concrete_powder_magenta": { 
		key: "Magenta Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_magenta.png') 
	},
	"concrete_powder_pink": { 
		key: "Pink Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_pink.png') 
	},
	"coral_blue": { 
		key: "Blue Coral", 
		img: require('../assets/blocks/coral_blue.png') 
	},
	"coral_pink": { 
		key: "Pink Coral", 
		img: require('../assets/blocks/coral_pink.png') 
	},
	"coral_purple": { 
		key: "Purple Coral", 
		img: require('../assets/blocks/coral_purple.png') 
	},
	"coral_red": { 
		key: "Red Coral", 
		img: require('../assets/blocks/coral_red.png') 
	},
	"coral_yellow": { 
		key: "Yellow Coral", 
		img: require('../assets/blocks/coral_yellow.png') 
	},
	"coral_blue_dead": { 
		key: "Dead Blue Coral", 
		img: require('../assets/blocks/coral_blue_dead.png') 
	},
	"coral_pink_dead": { 
		key: "Dead Pink Coral", 
		img: require('../assets/blocks/coral_pink_dead.png') 
	},
	"coral_purple_dead": { 
		key: "Dead Purple Coral", 
		img: require('../assets/blocks/coral_purple_dead.png') 
	},
	"coral_red_dead": { 
		key: "Dead Red Coral", 
		img: require('../assets/blocks/coral_red_dead.png') 
	},
	"coral_yellow_dead": { 
		key: "Dead Yellow Coral", 
		img: require('../assets/blocks/coral_yellow_dead.png') 
	},
	"coral_fan_blue": { 
		key: "Blue Coral Fan", 
		img: require('../assets/blocks/coral_fan_blue.png') 
	},
	"coral_fan_pink": { 
		key: "Pink Coral Fan", 
		img: require('../assets/blocks/coral_fan_pink.png') 
	},
	"coral_fan_purple": { 
		key: "Purple Coral Fan", 
		img: require('../assets/blocks/coral_fan_purple.png') 
	},
	"coral_fan_red": { 
		key: "Red Coral Fan", 
		img: require('../assets/blocks/coral_fan_red.png') 
	},
	"coral_fan_yellow": { 
		key: "Yellow Coral Fan", 
		img: require('../assets/blocks/coral_fan_yellow.png') 
	},
	"coral_fan_blue_dead": { 
		key: "Dead Blue Coral Fan", 
		img: require('../assets/blocks/coral_fan_blue_dead.png') 
	},
	"coral_fan_pink_dead": { 
		key: "Dead Pink Coral Fan", 
		img: require('../assets/blocks/coral_fan_pink_dead.png') 
	},
	"coral_fan_purple_dead": { 
		key: "Dead Purple Coral Fan", 
		img: require('../assets/blocks/coral_fan_purple_dead.png') 
	},
	"coral_fan_red_dead": { 
		key: "Dead Red Coral Fan", 
		img: require('../assets/blocks/coral_fan_red_dead.png') 
	},
	"coral_fan_yellow_dead": { 
		key: "Dead Yellow Coral Fan", 
		img: require('../assets/blocks/coral_fan_yellow_dead.png') 
	},
	"coral_plant_blue": { 
		key: "Blue Coral Plant", 
		img: require('../assets/blocks/coral_plant_blue.png') 
	},
	"coral_plant_pink": { 
		key: "Pink Coral Plant", 
		img: require('../assets/blocks/coral_plant_pink.png') 
	},
	"coral_plant_purple": { 
		key: "Purple Coral Plant", 
		img: require('../assets/blocks/coral_plant_purple.png') 
	},
	"coral_plant_red": { 
		key: "Red Coral Plant", 
		img: require('../assets/blocks/coral_plant_red.png') 
	},
	"coral_plant_yellow": { 
		key: "Yellow Coral Plant", 
		img: require('../assets/blocks/coral_plant_yellow.png') 
	},
	"dried_kelp": { 
		key: "Dried Kelp", 
		img: require('../assets/blocks/dried_kelp.png') 
	},
	"end_bricks": { 
		key: "End Bricks", 
		img: require('../assets/blocks/end_bricks.png') 
	},
	"end_stone": { 
		key: "End Stone", 
		img: require('../assets/blocks/end_stone.png') 
	},
	"ender_chest": { 
		key: "Ender Chest", 
		img: require('../assets/blocks/ender_chest.png') 
	},
	"endframe": { 
		key: "End Frame", 
		img: require('../assets/blocks/endframe.png') 
	},
	"fire": { 
		key: "Fire", 
		img: require('../assets/blocks/fire.png')
	},
	"hay": { 
		key: "Hay", 
		img: require('../assets/blocks/hay.png')
	},
	"mushroom_red": { 
		key: "Red Mushroom", 
		img: require('../assets/blocks/mushroom_red.png')
	},
	"mushroom_brown": { 
		key: "Brown Mushroom", 
		img: require('../assets/blocks/mushroom_brown.png')
	},
	"red_mushroom_skin": { 
		key: "Red Mushroom Skin", 
		img: require('../assets/blocks/red_mushroom_skin.png')
	},
	"brown_mushroom_skin": { 
		key: "Brown Mushroom Skin", 
		img: require('../assets/blocks/brown_mushroom_skin.png')
	},
	"stem_mushroom_skin": { 
		key: "Mushroom Stem Skin", 
		img: require('../assets/blocks/stem_mushroom_skin.png')
	},
	"mycelium": { 
		key: "Mycelium", 
		img: require('../assets/blocks/mycelium.png')
	},
	"nether_brick": { 
		key: "Nether Brick", 
		img: require('../assets/blocks/nether_brick.png')
	},
	"red_nether_brick": { 
		key: "Red Nether Brick", 
		img: require('../assets/blocks/red_nether_brick.png')
	},
	"nether_wart_block": { 
		key: "Nether Wart Block", 
		img: require('../assets/blocks/nether_wart_block.png')
	},
	"nether_wart": { 
		key: "Nether Wart", 
		img: require('../assets/blocks/nether_wart.png')
	},
	"netherrack": { 
		key: "Netherrack", 
		img: require('../assets/blocks/netherrack.png')
	},
	"portal": { 
		key: "Portal", 
		img: require('../assets/blocks/portal.png')
	},
	"observer": { 
		key: "Observer", 
		img: require('../assets/blocks/observer.png')
	},
	"prismarine_bricks": { 
		key: "Prismarine Bricks", 
		img: require('../assets/blocks/prismarine_bricks.png')
	},
	"prismarine_dark": { 
		key: "Dark Prismarine", 
		img: require('../assets/blocks/prismarine_dark.png')
	},
	"pumpkin": { 
		key: "Pumpkin", 
		img: require('../assets/blocks/pumpkin.png')
	},
	"purpur_block": { 
		key: "Purpur Block", 
		img: require('../assets/blocks/purpur_block.png')
	},
	"purpur_pillar": { 
		key: "Purpur Pillar", 
		img: require('../assets/blocks/purpur_pillar.png')
	},
	"quartz_block": { 
		key: "Quartz Block", 
		img: require('../assets/blocks/quartz_block.png')
	},
	"quartz_pillar": { 
		key: "Quartz Pillar", 
		img: require('../assets/blocks/quartz_pillar.png')
	},
	"quartz_block_chiseled": { 
		key: "Chiseled Quartz", 
		img: require('../assets/blocks/quartz_block_chiseled.png')
	},
	"quartz_block_smooth": { 
		key: "Smooth Quartz", 
		img: require('../assets/blocks/quartz_block_smooth.png')
	},
	"quartz_ore": { 
		key: "Quartz Ore", 
		img: require('../assets/blocks/quartz_ore.png')
	},
	"seagrass": { 
		key: "Seagrass", 
		img: require('../assets/blocks/seagrass.png')
	},
	"slime": { 
		key: "Slime Block", 
		img: require('../assets/blocks/slime.png')
	},
	"tnt": { 
		key: "TNT", 
		img: require('../assets/blocks/tnt.png')
	},
	"beacon": { 
		key: "Beacon", 
		img: require('../assets/blocks/beacon.png') 
	},
}

export default blocks