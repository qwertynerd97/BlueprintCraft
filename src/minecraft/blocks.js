const blocks = [
	{
		key: "Air",
		block: require('../assets/blocks/air-placeholder.png'),
		img: require('../assets/blocks/air.png')
	},
	{
		key: "Torch",
		img: require('../assets/blocks/torch.png')
	},
	{ 
		key: "Brick", 
		img: require('../assets/blocks/brick.png') 
	},
	{ 
		key: "Stone", 
		img: require('../assets/blocks/stone.png') 
	},
	{ 
		key: "Stone Brick", 
		img: require('../assets/blocks/stonebrick.png') 
	},
	{ 
		key: "Carved Stone Brick", 
		img: require('../assets/blocks/stonebrick_carved.png') 
	},
	{ 
		key: "Cracked Stone Brick", 
		img: require('../assets/blocks/stonebrick_cracked.png') 
	},
	{ 
		key: "Mossy Stone Brick", 
		img: require('../assets/blocks/stonebrick_mossy.png') 
	},
	{ 
		key: "Granite", 
		img: require('../assets/blocks/granite.png') 
	},
	{ 
		key: "Polished Granite", 
		img: require('../assets/blocks/polished_granite.png') 
	},
	{ 
		key: "Diorite", 
		img: require('../assets/blocks/diorite.png') 
	},
	{ 
		key: "Polished Diorite", 
		img: require('../assets/blocks/polished_diorite.png') 
	},
	{ 
		key: "Andesite", 
		img: require('../assets/blocks/andesite.png') 
	},
	{ 
		key: "Polished Andesite", 
		img: require('../assets/blocks/polished_andesite.png') 
	},
	{ 
		key: "Grass", 
		img: require('../assets/blocks/grass.png'),
		wiki: "GB"
	},
	{ 
		key: "Grass - Side", 
		img: require('../assets/blocks/grass_side.png'),
		wiki: "GB-$"
	},
	{ 
		key: "Grass Path", 
		img: require('../assets/blocks/grass_path.png') 
	},
	{ 
		key: "Dirt", 
		img: require('../assets/blocks/dirt.png'),
		wiki: "dirt"
	},
	{ 
		key: "Coarse Dirt", 
		img: require('../assets/blocks/coarse_dirt.png') 
	},
	{ 
		key: "Podzol", 
		img: require('../assets/blocks/podzol.png') 
	},
	{ 
		key: "Farmland", 
		img: require('../assets/blocks/farmland.png'),
		wiki: "fa"
	},
	{ 
		key: "Cobblestone", 
		img: require('../assets/blocks/cobblestone.png') 
	},
	{ 
		key: "Mossy Cobblestone", 
		img: require('../assets/blocks/cobblestone_mossy.png') 
	},
	{ 
		key: "Oak Sapling", 
		img: require('../assets/blocks/oak_sapling.png') 
	},
	{ 
		key: "Spruce Sapling", 
		img: require('../assets/blocks/spruce_sapling.png') 
	},
	{ 
		key: "Birch Sapling", 
		img: require('../assets/blocks/birch_sapling.png') 
	},
	{ 
		key: "Jungle Sapling", 
		img: require('../assets/blocks/jungle_sapling.png') 
	},
	{ 
		key: "Acacia Sapling", 
		img: require('../assets/blocks/acacia_sapling.png') 
	},
	{ 
		key: "Dark Oak Sapling", 
		img: require('../assets/blocks/dark_oak_sapling.png') 
	},
	{ 
		key: "Oak Leaves", 
		img: require('../assets/blocks/oak_leaves.png') 
	},
	{ 
		key: "Spruce Leaves", 
		img: require('../assets/blocks/spruce_leaves.png') 
	},
	{ 
		key: "Birch Leaves", 
		img: require('../assets/blocks/birch_leaves.png') 
	},
	{ 
		key: "Jungle Leaves", 
		img: require('../assets/blocks/jungle_leaves.png') 
	},
	{ 
		key: "Acacia Leaves", 
		img: require('../assets/blocks/acacia_leaves.png') 
	},
	{ 
		key: "Dark Oak Leaves", 
		img: require('../assets/blocks/dark_oak_leaves.png') 
	},
	{ 
		key: "Oak Log", 
		img: require('../assets/blocks/oak_log.png') 
	},
	{ 
		key: "Spruce Log", 
		img: require('../assets/blocks/spruce_log.png') 
	},
	{ 
		key: "Birch Log", 
		img: require('../assets/blocks/birch_log.png') 
	},
	{ 
		key: "Jungle Log", 
		img: require('../assets/blocks/jungle_log.png') 
	},
	{ 
		key: "Acacia Log", 
		img: require('../assets/blocks/acacia_log.png') 
	},
	{ 
		key: "Dark Oak Log", 
		img: require('../assets/blocks/dark_oak_log.png') 
	},
	{ 
		key: "Stripped Oak Log", 
		img: require('../assets/blocks/stripped_oak_log.png') 
	},
	{ 
		key: "Stripped Spruce Log", 
		img: require('../assets/blocks/stripped_spruce_log.png') 
	},
	{ 
		key: "Stripped Birch Log", 
		img: require('../assets/blocks/stripped_birch_log.png') 
	},
	{ 
		key: "Stripped Jungle Log", 
		img: require('../assets/blocks/stripped_jungle_log.png') 
	},
	{ 
		key: "Stripped Acacia Log", 
		img: require('../assets/blocks/stripped_acacia_log.png') 
	},
	{ 
		key: "Stripped Dark Oak Log", 
		img: require('../assets/blocks/stripped_dark_oak_log.png') 
	},
	{ 
		key: "Oak Plank", 
		img: require('../assets/blocks/oak_plank.png') 
	},
	{ 
		key: "Spruce Plank", 
		img: require('../assets/blocks/spruce_plank.png') 
	},
	{ 
		key: "Birch Plank", 
		img: require('../assets/blocks/birch_plank.png') 
	},
	{ 
		key: "Jungle Plank", 
		img: require('../assets/blocks/jungle_plank.png') 
	},
	{ 
		key: "Acacia Plank", 
		img: require('../assets/blocks/acacia_plank.png') 
	},
	{ 
		key: "Dark Oak Plank", 
		img: require('../assets/blocks/dark_oak_plank.png') 
	},
	{ 
		key: "Oak Sign", 
		img: require('../assets/blocks/sign.png') 
	},
	{ 
		key: "Spruce Sign", 
		img: require('../assets/blocks/sign_spruce.png') 
	},
	{ 
		key: "Birch Sign", 
		img: require('../assets/blocks/sign_birch.png') 
	},
	{ 
		key: "Jungle Sign", 
		img: require('../assets/blocks/sign_jungle.png') 
	},
	{ 
		key: "Acacia Sign", 
		img: require('../assets/blocks/sign_acacia.png') 
	},
	{ 
		key: "Dark Oak Sign", 
		img: require('../assets/blocks/sign_dark_oak.png') 
	},
	{ 
		key: "Oak Trapdoor", 
		img: require('../assets/blocks/trapdoor.png') 
	},
	{ 
		key: "Spruce Trapdoor", 
		img: require('../assets/blocks/spruce_trapdoor.png') 
	},
	{ 
		key: "Birch Trapdoor", 
		img: require('../assets/blocks/birch_trapdoor.png') 
	},
	{ 
		key: "Jungle Trapdoor", 
		img: require('../assets/blocks/jungle_trapdoor.png') 
	},
	{ 
		key: "Acacia Trapdoor", 
		img: require('../assets/blocks/acacia_trapdoor.png') 
	},
	{ 
		key: "Dark Oak Trapdoor", 
		img: require('../assets/blocks/dark_oak_trapdoor.png') 
	},
	{ 
		key: "Iron Trapdoor", 
		img: require('../assets/blocks/iron_trapdoor.png') 
	},
	{ 
		key: "Bedrock", 
		img: require('../assets/blocks/bedrock.png') 
	},
	{ 
		key: "Water", 
		img: require('../assets/blocks/water.png') 
	},
	{ 
		key: "Lava", 
		img: require('../assets/blocks/lava.png') 
	},
	{ 
		key: "Sand", 
		img: require('../assets/blocks/sand.png') 
	},
	{ 
		key: "Sandstone", 
		img: require('../assets/blocks/sandstone.png') 
	},
	{ 
		key: "Smooth Sandstone", 
		img: require('../assets/blocks/sandstone_smooth.png') 
	},
	{ 
		key: "Carved Sandstone", 
		img: require('../assets/blocks/sandstone_carved.png') 
	},
	{ 
		key: "Red Sand", 
		img: require('../assets/blocks/red_sand.png') 
	},
	{ 
		key: "Red Sandstone", 
		img: require('../assets/blocks/red_sandstone.png') 
	},
	{ 
		key: "Smooth Red Sandstone", 
		img: require('../assets/blocks/red_sandstone_smooth.png') 
	},
	{ 
		key: "Carved Red Sandstone", 
		img: require('../assets/blocks/red_sandstone_carved.png') 
	},
	{ 
		key: "Gravel", 
		img: require('../assets/blocks/gravel.png') 
	},
	{ 
		key: "Coal Ore", 
		img: require('../assets/blocks/coal_ore.png') 
	},
	{ 
		key: "Iron Ore", 
		img: require('../assets/blocks/iron_ore.png') 
	},
	{ 
		key: "Gold Ore", 
		img: require('../assets/blocks/gold_ore.png') 
	},
	{ 
		key: "Diamond Ore", 
		img: require('../assets/blocks/diamond_ore.png') 
	},
	{ 
		key: "Lapis Lazuli Ore", 
		img: require('../assets/blocks/lapis_ore.png') 
	},
	{ 
		key: "Redstone Ore", 
		img: require('../assets/blocks/redstone_ore.png') 
	},
	{ 
		key: "Emerald Ore", 
		img: require('../assets/blocks/emerald_ore.png') 
	},
	{ 
		key: "Coal Block", 
		img: require('../assets/blocks/coal_block.png') 
	},
	{ 
		key: "Iron Block", 
		img: require('../assets/blocks/iron_block.png') 
	},
	{ 
		key: "Gold Block", 
		img: require('../assets/blocks/gold_block.png') 
	},
	{ 
		key: "Diamond Block", 
		img: require('../assets/blocks/diamond_block.png') 
	},
	{ 
		key: "Lapis Lazuli Block", 
		img: require('../assets/blocks/lapis_block.png') 
	},
	{ 
		key: "Redstone Block", 
		img: require('../assets/blocks/redstone_block.png') 
	},
	{ 
		key: "Emerald Block", 
		img: require('../assets/blocks/emerald_block.png') 
	},
	{ 
		key: "Sponge", 
		img: require('../assets/blocks/sponge.png') 
	},
	{ 
		key: "Wet Sponge", 
		img: require('../assets/blocks/sponge_wet.png') 
	},
	{ 
		key: "Glass", 
		img: require('../assets/blocks/glass.png') ,
		wiki: "glass"
	},
	{ 
		key: "White Glass", 
		img: require('../assets/blocks/glass_white.png') 
	},
	{ 
		key: "Light Gray Glass", 
		img: require('../assets/blocks/glass_light_gray.png') 
	},
	{ 
		key: "Gray Glass", 
		img: require('../assets/blocks/glass_gray.png') 
	},
	{ 
		key: "Black Glass", 
		img: require('../assets/blocks/glass_black.png') 
	},
	{ 
		key: "Brown Glass", 
		img: require('../assets/blocks/glass_brown.png') 
	},
	{ 
		key: "Red Glass", 
		img: require('../assets/blocks/glass_red.png') 
	},
	{ 
		key: "Orange Glass", 
		img: require('../assets/blocks/glass_orange.png') 
	},
	{ 
		key: "Yellow Glass", 
		img: require('../assets/blocks/glass_yellow.png') 
	},
	{ 
		key: "Lime Glass", 
		img: require('../assets/blocks/glass_lime.png') 
	},
	{ 
		key: "Green Glass", 
		img: require('../assets/blocks/glass_green.png') 
	},
	{ 
		key: "Cyan Glass", 
		img: require('../assets/blocks/glass_cyan.png') 
	},
	{ 
		key: "Light Blue Glass", 
		img: require('../assets/blocks/glass_light_blue.png') 
	},
	{ 
		key: "Blue Glass", 
		img: require('../assets/blocks/glass_blue.png') 
	},
	{ 
		key: "Purple Glass", 
		img: require('../assets/blocks/glass_purple.png') 
	},
	{ 
		key: "Magenta Glass", 
		img: require('../assets/blocks/glass_magenta.png') 
	},
	{ 
		key: "Pink Glass", 
		img: require('../assets/blocks/glass_pink.png') 
	},
	{ 
		key: "Dispenser", 
		img: require('../assets/blocks/dispenser.png') 
	},
	{ 
		key: "Dropper", 
		img: require('../assets/blocks/dropper.png') 
	},
	{ 
		key: "Note Block", 
		img: require('../assets/blocks/noteblock.png') 
	},
	{ 
		key: "Bed - Feet", 
		img: require('../assets/blocks/bed_feet.png') 
	},
	{ 
		key: "Bed - Head", 
		img: require('../assets/blocks/bed_head.png') 
	},
	{ 
		key: "Rail", 
		img: require('../assets/blocks/rail.png') 
	},
	{ 
		key: "Rail - Turned", 
		img: require('../assets/blocks/rail_turned.png') 
	},
	{ 
		key: "Powered Rail", 
		img: require('../assets/blocks/rail_powered.png') 
	},
	{ 
		key: "Detector Rail", 
		img: require('../assets/blocks/rail_detector.png') 
	},
	{ 
		key: "Activator Rail", 
		img: require('../assets/blocks/rail_activator.png') 
	},
	{ 
		key: "Powered Rail - On", 
		img: require('../assets/blocks/rail_powered_on.png') 
	},
	{ 
		key: "Detector Rail - On", 
		img: require('../assets/blocks/rail_detector_on.png') 
	},
	{ 
		key: "Activator Rail - On", 
		img: require('../assets/blocks/rail_activator_on.png') 
	},
	{ 
		key: "Comparator", 
		img: require('../assets/blocks/comparator.png') 
	},
	{ 
		key: "Daylight Detector", 
		img: require('../assets/blocks/daylight_detector.png') 
	},
	{ 
		key: "Piston", 
		img: require('../assets/blocks/piston.png') 
	},
	{ 
		key: "Sticky Piston", 
		img: require('../assets/blocks/piston_sticky.png') 
	},
	{ 
		key: "Redstone Lamp", 
		img: require('../assets/blocks/redstone_lamp.png') 
	},
	{ 
		key: "Redstone Torch", 
		img: require('../assets/blocks/redstone_torch.png') 
	},
	{ 
		key: "Redstone Torch - Off", 
		img: require('../assets/blocks/redstone_torch_off.png') 
	},
	{ 
		key: "Repeater", 
		img: require('../assets/blocks/repeater.png') 
	},
	{ 
		key: "Trip Wire Hook", 
		img: require('../assets/blocks/trip_wire_hook.png') 
	},
	{ 
		key: "Cobweb", 
		img: require('../assets/blocks/cobweb.png') 
	},
	{ 
		key: "Dead Bush", 
		img: require('../assets/blocks/deadbush.png') 
	},
	{ 
		key: "White Glazed Terracotta", 
		img: require('../assets/blocks/glazed_terracotta_white.png') 
	},
	{ 
		key: "Light Gray Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_light_gray.png') 
	},
	{ 
		key: "Gray Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_gray.png') 
	},
	{ 
		key: "Black Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_black.png') 
	},
	{ 
		key: "Brown Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_brown.png') 
	},
	{ 
		key: "Red Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_red.png') 
	},
	{ 
		key: "Orange Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_orange.png') 
	},
	{ 
		key: "Yellow Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_yellow.png') 
	},
	{ 
		key: "Lime Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_lime.png') 
	},
	{ 
		key: "Green Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_green.png') 
	},
	{ 
		key: "Cyan Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_cyan.png') 
	},
	{ 
		key: "Light Blue Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_light_blue.png') 
	},
	{ 
		key: "Blue Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_blue.png') 
	},
	{ 
		key: "Purple Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_purple.png') 
	},
	{ 
		key: "Magenta Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_magenta.png') 
	},
	{ 
		key: "Pink Glazed Teracotta", 
		img: require('../assets/blocks/glazed_terracotta_pink.png') 
	},
	{ 
		key: "Tall Grass", 
		img: require('../assets/blocks/tallgrass.png')
	},
	{ 
		key: "Fern", 
		img: require('../assets/blocks/fern.png')
	},
	{ 
		key: "Allium Flower", 
		img: require('../assets/blocks/flower_allium.png')
	},
	{ 
		key: "Blue Orchid Flower", 
		img: require('../assets/blocks/flower_blue_orchid.png')
	},
	{ 
		key: "Cornflower Flower", 
		img: require('../assets/blocks/flower_cornflower.png')
	},
	{ 
		key: "Dandelion Flower", 
		img: require('../assets/blocks/flower_dandelion.png')
	},
	{ 
		key: "Houstonia Flower", 
		img: require('../assets/blocks/flower_houstonia.png')
	},
	{ 
		key: "Lily of the Valley Flower", 
		img: require('../assets/blocks/flower_lily_of_the_valley.png')
	},
	{ 
		key: "Oxeye Daisy Flower", 
		img: require('../assets/blocks/flower_oxeye_daisy.png')
	},
	{ 
		key: "Paeonia Flower", 
		img: require('../assets/blocks/flower_paeonia.png')
	},
	{ 
		key: "Rose Flower", 
		img: require('../assets/blocks/flower_rose.png')
	},
	{ 
		key: "Orange Tulip Flower", 
		img: require('../assets/blocks/flower_tulip_orange.png')
	},
	{ 
		key: "Pink Tulip Flower", 
		img: require('../assets/blocks/flower_tulip_pink.png')
	},
	{ 
		key: "Red Tulip Flower", 
		img: require('../assets/blocks/flower_tulip_red.png')
	},
	{ 
		key: "White Tulip Flower", 
		img: require('../assets/blocks/flower_tulip_white.png')
	},
	{ 
		key: "Wither Rose Flower", 
		img: require('../assets/blocks/flower_wither_rose.png')
	},
	{ 
		key: "Bamboo", 
		img: require('../assets/blocks/bamboo.png')
	},
	{ 
		key: "Lily Pad", 
		img: require('../assets/blocks/lily_pad.png')
	},
	{ 
		key: "Glowstone", 
		img: require('../assets/blocks/glowstone.png'),
		wiki: "gs" 
	},
	{ 
		key: "Hardened Clay", 
		img: require('../assets/blocks/hardened_clay.png') 
	},
	{ 
		key: "White Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_white.png') 
	},
	{ 
		key: "Light Gray Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_light_gray.png') 
	},
	{ 
		key: "Gray Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_gray.png') 
	},
	{ 
		key: "Black Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_black.png') 
	},
	{ 
		key: "Brown Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_brown.png') 
	},
	{ 
		key: "Red Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_red.png') 
	},
	{ 
		key: "Orange Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_orange.png') 
	},
	{ 
		key: "Yellow Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_yellow.png') 
	},
	{ 
		key: "Lime Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_lime.png') 
	},
	{ 
		key: "Green Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_green.png') 
	},
	{ 
		key: "Cyan Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_cyan.png') 
	},
	{ 
		key: "Light Blue Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_light_blue.png') 
	},
	{ 
		key: "Blue Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_blue.png') 
	},
	{ 
		key: "Purple Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_purple.png') 
	},
	{ 
		key: "Magenta Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_magenta.png') 
	},
	{ 
		key: "Pink Stained Hardened Clay", 
		img: require('../assets/blocks/hardened_clay_stained_pink.png') 
	},
	{ 
		key: "Ice", 
		img: require('../assets/blocks/ice.png'),
		wiki: "ice"
	},
	{ 
		key: "Packed Ice", 
		img: require('../assets/blocks/ice_packed.png') 
	},
	{ 
		key: "Blue Ice", 
		img: require('../assets/blocks/blue_ice.png') 
	},
	{ 
		key: "Frosted Ice", 
		img: require('../assets/blocks/frosted_ice.png') 
	},
	{ 
		key: "Bone Block", 
		img: require('../assets/blocks/bone_block.png') 
	},
	{ 
		key: "Obsidian", 
		img: require('../assets/blocks/obsidian.png'),
		wiki: "obsidian"
	},
	{ 
		key: "Soul Sand", 
		img: require('../assets/blocks/soul_sand.png'),
		wiki: "nS"
	},
	{ 
		key: "White Wool", 
		img: require('../assets/blocks/wool_white.png') 
	},
	{ 
		key: "Light Gray Wool", 
		img: require('../assets/blocks/wool_light_gray.png') 
	},
	{ 
		key: "Gray Wool", 
		img: require('../assets/blocks/wool_gray.png') 
	},
	{ 
		key: "Black Wool", 
		img: require('../assets/blocks/wool_black.png') 
	},
	{ 
		key: "Brown Wool", 
		img: require('../assets/blocks/wool_brown.png') 
	},
	{ 
		key: "Red Wool", 
		img: require('../assets/blocks/wool_red.png') 
	},
	{ 
		key: "Orange Wool", 
		img: require('../assets/blocks/wool_orange.png') 
	},
	{ 
		key: "Yellow Wool", 
		img: require('../assets/blocks/wool_yellow.png') 
	},
	{ 
		key: "Lime Wool", 
		img: require('../assets/blocks/wool_lime.png') 
	},
	{ 
		key: "Green Wool", 
		img: require('../assets/blocks/wool_green.png') 
	},
	{ 
		key: "Cyan Wool", 
		img: require('../assets/blocks/wool_cyan.png') 
	},
	{ 
		key: "Light Blue Wool", 
		img: require('../assets/blocks/wool_light_blue.png') 
	},
	{ 
		key: "Blue Wool", 
		img: require('../assets/blocks/wool_blue.png') 
	},
	{ 
		key: "Purple Wool", 
		img: require('../assets/blocks/wool_purple.png') 
	},
	{ 
		key: "Magenta Wool", 
		img: require('../assets/blocks/wool_magenta.png') 
	},
	{ 
		key: "Pink Wool", 
		img: require('../assets/blocks/wool_pink.png') 
	},
	{ 
		key: "Anvil", 
		img: require('../assets/blocks/anvil.png') 
	},
	{ 
		key: "Bookshelf", 
		img: require('../assets/blocks/bookshelf.png') 
	},
	{ 
		key: "Brewing Stand", 
		img: require('../assets/blocks/brewing_stand.png') 
	},
	{ 
		key: "Cactus", 
		img: require('../assets/blocks/cactus.png') 
	},
	{ 
		key: "Chest", 
		img: require('../assets/blocks/chest.png') 
	},
	{ 
		key: "Trapped Chest", 
		img: require('../assets/blocks/trapped_chest.png') 
	},
	{ 
		key: "Barrel", 
		img: require('../assets/blocks/barrel.png') 
	},
	{ 
		key: "Crafting Table", 
		img: require('../assets/blocks/crafting_table.png') 
	},
	{ 
		key: "Enchanting Table", 
		img: require('../assets/blocks/enchanting_table.png') 
	},
	{ 
		key: "Furnace", 
		img: require('../assets/blocks/furnace.png') 
	},
	{ 
		key: "Blast Furnace", 
		img: require('../assets/blocks/blast_furnace.png') 
	},
	{ 
		key: "Cartography Table", 
		img: require('../assets/blocks/cartography_table.png') 
	},
	{ 
		key: "Composter", 
		img: require('../assets/blocks/composter.png') 
	},
	{ 
		key: "Fletcher Table", 
		img: require('../assets/blocks/fletcher_table.png') 
	},
	{ 
		key: "Loom", 
		img: require('../assets/blocks/loom.png') 
	},
	{ 
		key: "Smithing Table", 
		img: require('../assets/blocks/smithing_table.png') 
	},
	{ 
		key: "Smoker", 
		img: require('../assets/blocks/smoker.png') 
	},
	{ 
		key: "Stonecutter", 
		img: require('../assets/blocks/stonecutter.png') 
	},
	{ 
		key: "Iron Bars", 
		img: require('../assets/blocks/iron_bars.png') 
	},
	{ 
		key: "Item Frame", 
		img: require('../assets/blocks/item_frame.png') 
	},
	{ 
		key: "Jukebox", 
		img: require('../assets/blocks/jukebox.png') 
	},
	{ 
		key: "Ladder", 
		img: require('../assets/blocks/ladder.png') 
	},
	{ 
		key: "Jack-o-Lantern", 
		img: require('../assets/blocks/jack-o-lantern.png') 
	},
	{ 
		key: "Mob Spawner", 
		img: require('../assets/blocks/mob_spawner.png') 
	},
	{ 
		key: "Vine", 
		img: require('../assets/blocks/vine.png') 
	},
	{ 
		key: "Beetroots", 
		img: require('../assets/blocks/beetroots.png') 
	},
	{ 
		key: "Potatoes", 
		img: require('../assets/blocks/potatoes.png') 
	},
	{ 
		key: "Wheat", 
		img: require('../assets/blocks/wheat.png') 
	},
	{ 
		key: "Sweet Berry Bush", 
		img: require('../assets/blocks/sweet_berry_bush.png') 
	},
	{ 
		key: "Carrots", 
		img: require('../assets/blocks/carrots.png') 
	},
	{ 
		key: "Cocoa", 
		img: require('../assets/blocks/cocoa.png') 
	},
	{ 
		key: "Melon", 
		img: require('../assets/blocks/melon.png') 
	},
	{ 
		key: "Sugarcane", 
		img: require('../assets/blocks/sugarcane.png') 
	},
	{ 
		key: "Cake", 
		img: require('../assets/blocks/cake.png') 
	},
	{ 
		key: "Bell", 
		img: require('../assets/blocks/bell.png') 
	},
	{ 
		key: "Chorus Flower", 
		img: require('../assets/blocks/chorus_flower.png') 
	},
	{ 
		key: "Chorus Plant", 
		img: require('../assets/blocks/chorus_plant.png') 
	},
	{ 
		key: "Clay", 
		img: require('../assets/blocks/clay.png') 
	},
	{ 
		key: "White Concrete", 
		img: require('../assets/blocks/concrete_white.png') 
	},
	{ 
		key: "Light Gray Concrete", 
		img: require('../assets/blocks/concrete_light_gray.png') 
	},
	{ 
		key: "Gray Concrete", 
		img: require('../assets/blocks/concrete_gray.png') 
	},
	{ 
		key: "Black Concrete", 
		img: require('../assets/blocks/concrete_black.png') 
	},
	{ 
		key: "Brown Concrete", 
		img: require('../assets/blocks/concrete_brown.png') 
	},
	{ 
		key: "Red Concrete", 
		img: require('../assets/blocks/concrete_red.png') 
	},
	{ 
		key: "Orange Concrete", 
		img: require('../assets/blocks/concrete_orange.png') 
	},
	{ 
		key: "Yellow Concrete", 
		img: require('../assets/blocks/concrete_yellow.png') 
	},
	{ 
		key: "Lime Concrete", 
		img: require('../assets/blocks/concrete_lime.png') 
	},
	{ 
		key: "Green Concrete", 
		img: require('../assets/blocks/concrete_green.png') 
	},
	{ 
		key: "Cyan Concrete", 
		img: require('../assets/blocks/concrete_cyan.png') 
	},
	{ 
		key: "Light Blue Concrete", 
		img: require('../assets/blocks/concrete_light_blue.png') 
	},
	{ 
		key: "Blue Concrete", 
		img: require('../assets/blocks/concrete_blue.png') 
	},
	{ 
		key: "Purple Concrete", 
		img: require('../assets/blocks/concrete_purple.png') 
	},
	{ 
		key: "Magenta Concrete", 
		img: require('../assets/blocks/concrete_magenta.png') 
	},
	{ 
		key: "Pink Concrete", 
		img: require('../assets/blocks/concrete_pink.png') 
	},
	{ 
		key: "White Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_white.png') 
	},
	{ 
		key: "Light Gray Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_light_gray.png') 
	},
	{ 
		key: "Gray Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_gray.png') 
	},
	{ 
		key: "Black Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_black.png') 
	},
	{ 
		key: "Brown Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_brown.png') 
	},
	{ 
		key: "Red Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_red.png') 
	},
	{ 
		key: "Orange Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_orange.png') 
	},
	{ 
		key: "Yellow Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_yellow.png') 
	},
	{ 
		key: "Lime Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_lime.png') 
	},
	{ 
		key: "Green Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_green.png') 
	},
	{ 
		key: "Cyan Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_cyan.png') 
	},
	{ 
		key: "Light Blue Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_light_blue.png') 
	},
	{ 
		key: "Blue Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_blue.png') 
	},
	{ 
		key: "Purple Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_purple.png') 
	},
	{ 
		key: "Magenta Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_magenta.png') 
	},
	{ 
		key: "Pink Concrete Powder", 
		img: require('../assets/blocks/concrete_powder_pink.png') 
	},
	{ 
		key: "Blue Coral", 
		img: require('../assets/blocks/coral_blue.png') 
	},
	{ 
		key: "Pink Coral", 
		img: require('../assets/blocks/coral_pink.png') 
	},
	{ 
		key: "Purple Coral", 
		img: require('../assets/blocks/coral_purple.png') 
	},
	{ 
		key: "Red Coral", 
		img: require('../assets/blocks/coral_red.png') 
	},
	{ 
		key: "Yellow Coral", 
		img: require('../assets/blocks/coral_yellow.png') 
	},
	{ 
		key: "Dead Blue Coral", 
		img: require('../assets/blocks/coral_blue_dead.png') 
	},
	{ 
		key: "Dead Pink Coral", 
		img: require('../assets/blocks/coral_pink_dead.png') 
	},
	{ 
		key: "Dead Purple Coral", 
		img: require('../assets/blocks/coral_purple_dead.png') 
	},
	{ 
		key: "Dead Red Coral", 
		img: require('../assets/blocks/coral_red_dead.png') 
	},
	{ 
		key: "Dead Yellow Coral", 
		img: require('../assets/blocks/coral_yellow_dead.png') 
	},
	{ 
		key: "Blue Coral Fan", 
		img: require('../assets/blocks/coral_fan_blue.png') 
	},
	{ 
		key: "Pink Coral Fan", 
		img: require('../assets/blocks/coral_fan_pink.png') 
	},
	{ 
		key: "Purple Coral Fan", 
		img: require('../assets/blocks/coral_fan_purple.png') 
	},
	{ 
		key: "Red Coral Fan", 
		img: require('../assets/blocks/coral_fan_red.png') 
	},
	{ 
		key: "Yellow Coral Fan", 
		img: require('../assets/blocks/coral_fan_yellow.png') 
	},
	{ 
		key: "Dead Blue Coral Fan", 
		img: require('../assets/blocks/coral_fan_blue_dead.png') 
	},
	{ 
		key: "Dead Pink Coral Fan", 
		img: require('../assets/blocks/coral_fan_pink_dead.png') 
	},
	{ 
		key: "Dead Purple Coral Fan", 
		img: require('../assets/blocks/coral_fan_purple_dead.png') 
	},
	{ 
		key: "Dead Red Coral Fan", 
		img: require('../assets/blocks/coral_fan_red_dead.png') 
	},
	{ 
		key: "Dead Yellow Coral Fan", 
		img: require('../assets/blocks/coral_fan_yellow_dead.png') 
	},
	{ 
		key: "Blue Coral Plant", 
		img: require('../assets/blocks/coral_plant_blue.png') 
	},
	{ 
		key: "Pink Coral Plant", 
		img: require('../assets/blocks/coral_plant_pink.png') 
	},
	{ 
		key: "Purple Coral Plant", 
		img: require('../assets/blocks/coral_plant_purple.png') 
	},
	{ 
		key: "Red Coral Plant", 
		img: require('../assets/blocks/coral_plant_red.png') 
	},
	{ 
		key: "Yellow Coral Plant", 
		img: require('../assets/blocks/coral_plant_yellow.png') 
	},
	{ 
		key: "Dried Kelp", 
		img: require('../assets/blocks/dried_kelp.png') 
	},
	{ 
		key: "End Bricks", 
		img: require('../assets/blocks/end_bricks.png') 
	},
	{ 
		key: "End Stone", 
		img: require('../assets/blocks/end_stone.png') 
	},
	{ 
		key: "Ender Chest", 
		img: require('../assets/blocks/ender_chest.png') 
	},
	{ 
		key: "End Frame", 
		img: require('../assets/blocks/endframe.png') 
	},
	{ 
		key: "Fire", 
		img: require('../assets/blocks/fire.png')
	},
	{ 
		key: "Hay", 
		img: require('../assets/blocks/hay.png')
	},
	{ 
		key: "Red Mushroom", 
		img: require('../assets/blocks/mushroom_red.png')
	},
	{ 
		key: "Brown Mushroom", 
		img: require('../assets/blocks/mushroom_brown.png')
	},
	{ 
		key: "Red Mushroom Skin", 
		img: require('../assets/blocks/red_mushroom_skin.png')
	},
	{ 
		key: "Brown Mushroom Skin", 
		img: require('../assets/blocks/brown_mushroom_skin.png')
	},
	{ 
		key: "Mushroom Stem Skin", 
		img: require('../assets/blocks/stem_mushroom_skin.png')
	},
	{ 
		key: "Mycelium", 
		img: require('../assets/blocks/mycelium.png')
	},
	{ 
		key: "Nether Brick", 
		img: require('../assets/blocks/nether_brick.png')
	},
	{ 
		key: "Red Nether Brick", 
		img: require('../assets/blocks/red_nether_brick.png')
	},
	{ 
		key: "Nether Wart Block", 
		img: require('../assets/blocks/nether_wart_block.png')
	},
	{ 
		key: "Nether Wart", 
		img: require('../assets/blocks/nether_wart.png')
	},
	{ 
		key: "Netherrack", 
		img: require('../assets/blocks/netherrack.png')
	},
	{ 
		key: "Portal", 
		img: require('../assets/blocks/portal.png')
	},
	{ 
		key: "Observer", 
		img: require('../assets/blocks/observer.png')
	},
	{ 
		key: "Prismarine Bricks", 
		img: require('../assets/blocks/prismarine_bricks.png')
	},
	{ 
		key: "Dark Prismarine", 
		img: require('../assets/blocks/prismarine_dark.png')
	},
	{ 
		key: "Pumpkin", 
		img: require('../assets/blocks/pumpkin.png')
	},
	{ 
		key: "Purpur Block", 
		img: require('../assets/blocks/purpur_block.png')
	},
	{ 
		key: "Purpur Pillar", 
		img: require('../assets/blocks/purpur_pillar.png')
	},
	{ 
		key: "Quartz Block", 
		img: require('../assets/blocks/quartz_block.png')
	},
	{ 
		key: "Quartz Pillar", 
		img: require('../assets/blocks/quartz_pillar.png')
	},
	{ 
		key: "Chiseled Quartz", 
		img: require('../assets/blocks/quartz_block_chiseled.png')
	},
	{ 
		key: "Smooth Quartz", 
		img: require('../assets/blocks/quartz_block_smooth.png')
	},
	{ 
		key: "Quartz Ore", 
		img: require('../assets/blocks/quartz_ore.png')
	},
	{ 
		key: "Seagrass", 
		img: require('../assets/blocks/seagrass.png')
	},
	{ 
		key: "Slime Block", 
		img: require('../assets/blocks/slime.png')
	},
	{ 
		key: "TNT", 
		img: require('../assets/blocks/tnt.png')
	},
	{ 
		key: "Beacon", 
		img: require('../assets/blocks/beacon.png') 
	},
]

export default blocks