// Category
import categoryImage from './Category/placeholder.png'

// Icons
import cartIcon from './icons/cart-icon.png'
import searchIcon from './icons/search-icon.png'

// Product images
import six_piece_white_dinner_plate_set from './ProductImages/6-piece-white-dinner-plate-set.jpg'
import adults_plain_cotton_tshirt_two_pack_teal from './ProductImages/adults-plain-cotton-tshirt-2-pack-teal.jpg'
import athletic_cotton_socks_six_pairs from './ProductImages/athletic-cotton-socks-6-pairs.jpg'
import backpack from './ProductImages/backpack.jpg'
import bathroom_rug from './ProductImages/bathroom-rug.jpg'
import black_two_slot_toaster from './ProductImages/black-2-slot-toaster.jpg'
import blackout_curtains_black from './ProductImages/blackout-curtains-black.jpg'
import coffeemaker_with_glass_carafe_black from './ProductImages/coffeemaker-with-glass-carafe-black.jpg'
import countertop_blender_sixty_four_oz from './ProductImages/countertop-blender-64-oz.jpg'
import duvet_cover_set_blue_twin from './ProductImages/duvet-cover-set-blue-twin.jpg'
import facial_tissue_two_ply_eighteen_boxes from './ProductImages/facial-tissue-2-ply-18-boxes.jpg'
import floral_mixing_bowl_set from './ProductImages/floral-mixing-bowl-set.jpg'
import intermediate_composite_basketball from './ProductImages/intermediate-composite-basketball.jpg'
import kitchen_paper_towels_thirty_pack from './ProductImages/kitchen-paper-towels-30-pack.jpg'
import knit_athletic_sneakers_gray from './ProductImages/knit-athletic-sneakers-gray.jpg'
import liquid_laundry_detergent_plain from './ProductImages/liquid-laundry-detergent-plain.jpg'
import luxury_tower_set_six_piece from './ProductImages/luxury-tower-set-6-piece.jpg'
import men_athletic_shoes_green from './ProductImages/men-athletic-shoes-green.jpg'
import men_chino_pants_beige from './ProductImages/men-chino-pants-beige.jpg'
import men_cozy_fleece_zip_up_hoodie_red from './ProductImages/men-cozy-fleece-zip-up-hoodie-red.jpg'
import men_golf_polo_t_shirt_blue from './ProductImages/men-golf-polo-t-shirt-blue.jpg'
import men_navigator_sunglasses_brown from './ProductImages/men-navigator-sunglasses-brown.jpg'
import men_slim_fit_summer_shorts_gray from './ProductImages/men-slim-fit-summer-shorts-gray.jpg'
import plain_hooded_fleece_sweatshirt_yellow from './ProductImages/plain-hooded-fleece-sweatshirt-yellow.jpg'
import round_airtight_food_storage_containers from './ProductImages/round-airtight-food-storage-containers.jpg'
import round_sunglasses_black from './ProductImages/round-sunglasses-black.jpg'
import trash_can_with_foot_pedal_50_liter from './ProductImages/trash-can-with-foot-pedal-50-liter.jpg'
import umbrella from './ProductImages/umbrella.jpg'
import vanity_mirror_silver from './ProductImages/vanity-mirror-silver.jpg'
import beach_sandals_women from './ProductImages/women-beach-sandals.jpg'
import women_chiffon_beachwear_coverup_black from './ProductImages/women-chiffon-beachwear-coverup-black.jpg'
import women_french_terry_fleece_jogger_camo from './ProductImages/women-french-terry-fleece-jogger-camo.jpg'
import women_knit_ballet_flat_black from './ProductImages/women-knit-ballet-flat-black.jpg'
import women_stretch_popover_hoodie_black from './ProductImages/women-stretch-popover-hoodie-black.jpg'

// Star images
import rating_0 from './ratings/rating-0.png'
import rating_05 from './ratings/rating-05.png'
import rating_10 from './ratings/rating-10.png'
import rating_15 from './ratings/rating-15.png'
import rating_20 from './ratings/rating-20.png'
import rating_25 from './ratings/rating-25.png'
import rating_30 from './ratings/rating-30.png'
import rating_35 from './ratings/rating-35.png'
import rating_40 from './ratings/rating-40.png'
import rating_45 from './ratings/rating-45.png'
import rating_50 from './ratings/rating-50.png'


export const assets = {
  categoryImage,
  rating_0,
  rating_05,
  rating_10,
  rating_15,
  rating_20,
  rating_25,
  rating_30,
  rating_35,
  rating_40,
  rating_45,
  rating_50,
  cartIcon,
  searchIcon,
  women_stretch_popover_hoodie_black
}

export const categoryData = [
  {
    image: categoryImage,
    name: 'All'
  },
  {
    image: categoryImage,
    name: 'Men wears'
  },
  {
    image: categoryImage,
    name: 'Women wears'
  },
  {
    image: categoryImage,
    name: 'Foot wears'
  },
  {
    image: categoryImage,
    name: 'Beddings'
  },
  {
    image: categoryImage,
    name: 'Kitchen'
  },
  {
    image: categoryImage,
    name: 'Tissues'
  },
  {
    image: categoryImage,
    name: 'Accessories'
  },
  {
    image: categoryImage,
    name: 'Category name'
  }
]


// 1. We save the data (the information about our product) in to an object put in an array:
export const productsData = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: athletic_cotton_socks_six_pairs,
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: rating_45,
      count: 87
    },
    priceCents: 1090,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: intermediate_composite_basketball,
    name: "Intermediate Size Basketball",
    rating: {
      stars: rating_40,
      count: 127
    },
    priceCents: 2095,
    keywords: [
      "sports",
      "basketballs"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: adults_plain_cotton_tshirt_two_pack_teal,
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: rating_45,
      count: 56
    },
    priceCents: 799,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: black_two_slot_toaster,
    name: "2 Slot Toaster - Black",
    rating: {
      stars: rating_50,
      count: 2197
    },
    priceCents: 1899,
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: six_piece_white_dinner_plate_set,
    name: "6 Piece White Dinner Plate Set",
    rating: {
      stars: rating_40,
      count: 37
    },
    priceCents: 2067,
    keywords: [
      "plates",
      "kitchen",
      "dining"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: plain_hooded_fleece_sweatshirt_yellow,
    name: "Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: rating_45,
      count: 317
    },
    priceCents: 2400,
    keywords: [
      "hoodies",
      "sweaters",
      "apparel"
    ]
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: luxury_tower_set_six_piece,
    name: "Luxury Towel Set - Graphite Gray",
    rating: {
      stars: rating_45,
      count: 144
    },
    priceCents: 3599,
    keywords: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels"
    ]
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: liquid_laundry_detergent_plain,
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    rating: {
      stars: rating_45,
      count: 305
    },
    priceCents: 2899,
    keywords: [
      "bathroom",
      "cleaning"
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: knit_athletic_sneakers_gray,
    name: "Waterproof Knit Athletic Sneakers - Gray",
    rating: {
      stars: rating_40,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear"
    ]
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: women_chiffon_beachwear_coverup_black,
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars: rating_45,
      count: 235
    },
    priceCents: 2070,
    keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: round_sunglasses_black,
    name: "Round Sunglasses",
    rating: {
      stars: rating_45,
      count: 30
    },
    priceCents: 1560,
    keywords: [
      "accessories",
      "shades"
    ]
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: beach_sandals_women,
    name: "Women's Two Strap Buckle Sandals - Tan",
    rating: {
      stars: rating_45,
      count: 562
    },
    priceCents: 2499,
    keywords: [
      "footwear",
      "sandals",
      "womens",
      "beach",
      "summer"
    ]
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: men_slim_fit_summer_shorts_gray,
    name: "Men's Slim-Fit Summer Shorts",
    rating: {
      stars: rating_40,
      count: 160
    },
    priceCents: 1699,
    keywords: [
      "shorts",
      "apparel",
      "mens"
    ]
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: facial_tissue_two_ply_eighteen_boxes,
    name: "Ultra Soft Tissue 2-Ply - 18 Box",
    rating: {
      stars: rating_40,
      count: 99
    },
    priceCents: 2374,
    keywords: [
      "kleenex",
      "tissues",
      "kitchen",
      "tissues box",
      "napkins"
    ]
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image:  women_stretch_popover_hoodie_black,
    name: "Women's Stretch Popover Hoodie",
    rating: {
      stars: rating_45,
      count: 2465
    },
    priceCents: 1374,
    keywords: [
      "hooded",
      "hoodies",
      "sweaters",
      "womens",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: bathroom_rug,
    name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    rating: {
      stars: rating_45,
      count: 119
    },
    priceCents: 1250,
    keywords: [
      "bathmat",
      "bathroom",
      "home"
    ]
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: women_knit_ballet_flat_black,
    name: "Women's Knit Ballet Flat",
    rating: {
      stars: rating_40,
      count: 326
    },
    priceCents: 2640,
    keywords: [
      "shoes",
      "flats",
      "womens",
      "footwear"
    ]
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: men_golf_polo_t_shirt_blue,
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    rating: {
      stars: rating_45,
      count: 2556
    },
    priceCents: 1599,
    keywords: [
      "tshirts",
      "shirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: trash_can_with_foot_pedal_50_liter,
    name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
    rating: {
      stars: rating_45,
      count: 2286
    },
    priceCents: 8300,
    keywords: [
      "garbage",
      "bins",
      "cans",
      "kitchen"
    ]
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: duvet_cover_set_blue_twin,
    name: "Duvet Cover Set with Zipper Closure",
    rating: {
      stars: rating_40,
      count: 456
    },
    priceCents: 2399,
    keywords: [
      "bedroom",
      "bed sheets",
      "sheets",
      "covers",
      "home"
    ]
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: men_chino_pants_beige,
    name: "Men's Classic-fit Pleated Chino Pants",
    rating: {
      stars: rating_45,
      count: 9017
    },
    priceCents: 2290,
    keywords: [
      "pants",
      "apparel",
      "mens"
    ]
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: men_athletic_shoes_green,
    name: "Men's Athletic Sneaker",
    rating: {
      stars: rating_40,
      count: 229
    },
    priceCents: 3890,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "mens"
    ]
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: men_navigator_sunglasses_brown,
    name: "Men's Navigator Sunglasses Pilot",
    rating: {
      stars: rating_35,
      count: 42
    },
    priceCents: 1690,
    keywords: [
      "sunglasses",
      "glasses",
      "accessories",
      "shades"
    ]
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: vanity_mirror_silver,
    name: "Vanity Mirror with Heavy Base - Chrome",
    rating: {
      stars: rating_45,
      count: 130
    },
    priceCents: 1649,
    keywords: [
      "bathroom",
      "washroom",
      "mirrors",
      "home"
    ]
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: women_french_terry_fleece_jogger_camo,
    name: "Women's Fleece Jogger Sweatpant",
    rating: {
      stars: rating_45,
      count: 248
    },
    priceCents: 2400,
    keywords: [
      "pants",
      "sweatpants",
      "jogging",
      "apparel",
      "womens"
    ]
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: round_airtight_food_storage_containers,
    name: "Round Airtight Food Storage Containers - 5 Piece",
    rating: {
      stars: rating_40,
      count: 126
    },
    priceCents: 2899,
    keywords: [
      "boxes",
      "food containers",
      "kitchen"
    ]
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: coffeemaker_with_glass_carafe_black,
    name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
    rating: {
      stars: rating_45,
      count: 1211
    },
    priceCents: 2250,
    keywords: [
      "coffeemakers",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: blackout_curtains_black,
    name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
    rating: {
      stars: rating_45,
      count: 363
    },
    priceCents: 3099,
    keywords: [
      "bedroom",
      "home"
    ]
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: countertop_blender_sixty_four_oz,
    name: "Countertop Blender - 64oz, 1400 Watts",
    rating: {
      stars: rating_40,
      count: 3
    },
    priceCents: 10747,
    keywords: [
      "food blenders",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: floral_mixing_bowl_set,
    name: "10-Piece Mixing Bowl Set with Lids - Floral",
    rating: {
      stars: rating_50,
      count: 679
    },
    priceCents: 3899,
    keywords: [
      "mixing bowls",
      "baking",
      "cookware",
      "kitchen"
    ]
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: kitchen_paper_towels_thirty_pack,
    name: "2-Ply Kitchen Paper Towels - 30 Pack",
    rating: {
      stars: rating_45,
      count: 1045
    },
    priceCents: 5799,
    keywords: [
      "kitchen",
      "kitchen towels",
      "tissues"
    ]
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: men_cozy_fleece_zip_up_hoodie_red,
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    rating: {
      stars: rating_45,
      count: 3157
    },
    priceCents: 2400,
    keywords: [
      "sweaters",
      "hoodies",
      "apparel",
      "mens"
    ]
  }
];