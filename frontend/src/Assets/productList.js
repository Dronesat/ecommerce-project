import women1 from "./women/women1.jpg"
import women2 from "./women/women2.jpg"
import women3 from "./women/women3.jpg"
import women4 from "./women/women4.jpg"
import women5 from "./women/women5.jpg"
import women6 from "./women/women6.jpg"
import women7 from "./women/women7.jpg"
import women8 from "./women/women8.jpg"
import women9 from "./women/women9.jpg"
import women10 from "./women/women10.jpg"
import women11 from "./women/women11.jpg"
import women12 from "./women/women12.jpg"

import men1 from "./men/men1.jpg"
import men2 from "./men/men2.jpg"
import men3 from "./men/men3.jpg"
import men4 from "./men/men4.jpg"
import men5 from "./men/men5.jpg"
import men6 from "./men/men6.jpg"
import men7 from "./men/men7.jpg"
import men8 from "./men/men8.jpg"
import men9 from "./men/men9.jpg"
import men10 from "./men/men10.jpg"
import men11 from "./men/men11.jpg"
import men12 from "./men/men12.jpg"

import kid1 from "./kid/kid1.jpg"
import kid2 from "./kid/kid2.jpg"
import kid3 from "./kid/kid3.jpg"
import kid4 from "./kid/kid4.jpg"
import kid5 from "./kid/kid5.jpg"
import kid6 from "./kid/kid6.jpg"
import kid7 from "./kid/kid7.jpg"
import kid8 from "./kid/kid8.jpg"
import kid9 from "./kid/kid9.jpg"
import kid10 from "./kid/kid10.jpg"
import kid11 from "./kid/kid11.jpg"
import kid12 from "./kid/kid12.jpg"

let productList = [
  {
    product_id: 1,
    product_name: "Classic V-Neck Blouse",
    product_category: "women",
    product_image: women1,
    sale_price: 29.99,
    original_price: 45,
    product_trending: false,
    product_description: "A timeless wardrobe staple. This soft and flowy blouse features a flattering V-neckline and comes in a variety of essential colors",
  },
  {
    product_id: 2,
    product_name: "Floral Wrap Dress",
    product_category: "women",
    product_image: women2,
    sale_price: 29.99,
    original_price: 42.5,
    product_trending: false,
    product_description: "The perfect blend of comfort and cool. This relaxed-fit denim jacket features a slightly faded wash for a vintage-inspired look",
  },
  {
    product_id: 3,
    product_name: "Denim Boyfriend Jacket",
    product_category: "women",
    product_image: women3,
    sale_price: 15.5,
    original_price: 30.5,
    product_trending: false,
    product_description: "The perfect blend of comfort and cool. This relaxed-fit denim jacket features a slightly faded wash for a vintage-inspired look",
  },
  {
    product_id: 4,
    product_name: "Cable Knit Sweater",
    product_category: "women",
    product_image: women4,
    sale_price: 22.5,
    original_price: 30.5,
    product_trending: false,
    product_description: "Cozy up in timeless style with this classic cable knit sweater. Made from soft wool-blend yarn for ultimate warmth",
  },
  {
    product_id: 5,
    product_name: "Tailored Midi Skirt",
    product_category: "women",
    product_image: women5,
    sale_price: 5.99,
    original_price: 12.99,
    product_trending: false,
    product_description: "Elevate your look with this sophisticated midi skirt. Features a flattering A-line silhouette and a comfortable stretch waistband",
  },
  {
    product_id: 6,
    product_name: "Satin Slip Dress",
    product_category: "women",
    product_image: women6,
    sale_price: 85.0,
    original_price: 120.5,
    product_trending: false,
    product_description: "Slip into luxury with this silky-smooth satin dress. The adjustable straps and flowing design ensure a perfect fit",
  },
  {
    product_id: 7,
    product_name: "Faux Leather Leggings",
    product_category: "women",
    product_image: women7,
    sale_price: 23.6,
    original_price: 60,
    product_trending: false,
    product_description: "Add a touch of edge to your wardrobe with these sleek faux-leather leggings. Comfortable stretch fabric and a flattering fit",
  },
  {
    product_id: 8,
    product_name: "Cozy Cashmere Scarf",
    product_category: "women",
    product_image: women8,
    sale_price: 10.99,
    original_price: 31,
    product_trending: false,
    product_description: "Wrap yourself in warmth with this luxurious cashmere scarf. Incredibly soft and perfect for chilly days",
  },
  {
    product_id: 9,
    product_name: "Structured Tote Bag",
    product_category: "women",
    product_image: women9,
    sale_price: 30,
    original_price: 50.99,
    product_trending: true,
    product_description: "Spacious and sophisticated, this tote bag is crafted from durable faux leather and boasts ample compartments for all your essentials",
  },
  {
    product_id: 10,
    product_name: "Statement Earrings",
    product_category: "women",
    product_image: women10,
    sale_price: 21.5,
    original_price: 32.99,
    product_trending: true,
    product_description: "Add a touch of glamour with these bold statement earrings. Choose from playful tassels, geometric designs, or sparkling stones.",
  },
  {
    product_id: 11,
    product_name: "Minimalist Pendant Necklace",
    product_category: "women",
    product_image: women11,
    original_price: 50,
    sale_price: 32.99,
    product_trending: true,
    product_description: "Everyday elegance. This delicate pendant necklace features a timeless design and a subtle sparkle.",
  },
  {
    product_id: 12,
    product_name: "Block Heel Ankle Boots",
    product_category: "women",
    product_image: women12,
    sale_price: 10.99,
    original_price: 20.99,
    product_trending: true,
    product_description: "Versatile and stylish, these ankle boots feature a comfortable block heel and a sleek silhouette.",
  },
  {
    product_id: 13,
    product_name: "Crisp White Oxford Shirt",
    product_category: "men",
    product_image: men1,
    sale_price: 21,
    original_price: 25,
    product_trending: false,
    product_description: "A must-have for any man's wardrobe. This classic Oxford shirt is made from breathable cotton and features a wrinkle-resistant finish.",
  },
  {
    product_id: 14,
    product_name: "Slim Fit Chinos (multiple colors)",
    product_category: "men",
    product_image: men2,
    sale_price: 31,
    original_price: 60,
    product_trending: false,
    product_description: "Upgrade your everyday style with these versatile chinos. Tailored for a modern fit and available in a range of classic colors.",
  },
  {
    product_id: 15,
    product_name: "Wool Blend Blazer",
    product_category: "men",
    product_image: men3,
    sale_price: 21,
    original_price: 31,
    product_trending: false,
    product_description: "Look sharp for any occasion in this tailored blazer. Crafted from a soft wool blend for comfort and style.",
  },
  {
    product_id: 16,
    product_name: "Henley T-Shirt",
    product_category: "men",
    product_image: men4,
    sale_price: 33,
    original_price: 55.99,
    product_trending: false,
    product_description: "The perfect blend of comfort and casual style. This Henley T-shirt features a soft cotton fabric and a classic button placket.",
  },
  {
    product_id: 17,
    product_name: "Vintage Wash Jeans",
    product_category: "men",
    product_image: men5,
    sale_price: 10,
    original_price: 20.99,
    product_trending: false,
    product_description: "The perfect pair of everyday jeans. These feature a comfortable straight-leg fit, a classic five-pocket design, and a worn-in look.",
  },
  {
    product_id: 18,
    product_name: "Waterproof Hiking Boots",
    product_category: "men",
    product_image: men6,
    sale_price: 50,
    original_price: 100.5,
    product_trending: false,
    product_description: "Conquer any terrain in these rugged hiking boots. Waterproof construction, superior traction, and comfortable support.",
  },
  {
    product_id: 19,
    product_name: "Canvas Weekender Bag",
    product_category: "men",
    product_image: men7,
    sale_price: 85.0,
    original_price: 120.5,
    product_trending: false,
    product_description: "The perfect travel companion. This durable canvas bag offers ample space and features sturdy leather accents.",
  },
  {
    product_id: 20,
    product_name: "Aviator Sunglasses",
    product_category: "men",
    product_image: men8,
    sale_price: 40,
    original_price: 80,
    product_trending: false,
    product_description: "Add a touch of timeless style. These aviator sunglasses feature polarized lenses and offer 100% UV protection.",
  },
  {
    product_id: 21,
    product_name: "Leather Dress Belt",
    product_category: "men",
    product_image: men9,
    sale_price: 21.99,
    original_price: 51,
    product_trending: true,
    product_description: "A refined touch for any outfit.  This classic belt is crafted from genuine leather and features a timeless design",
  },
  {
    product_id: 22,
    product_name: "Minimalist Watch",
    product_category: "men",
    product_image: men10,
    sale_price: 21.99,
    original_price:51.89,
    product_trending: true,
    product_description: "Sophisticated simplicity. This watch features a clean design, a durable leather strap, and a reliable movement.",
  },
  {
    product_id: 23,
    product_name: "Oxford Dress Shoes",
    product_category: "men",
    product_image: men11,
    sale_price: 20,
    original_price: 40,
    product_trending: true,
    product_description: "Elevate your look with these timeless Oxford shoes.  Crafted from genuine leather with a classic lace-up design.",
  },
  {
    product_id: 24,
    product_name: "Suede Chelsea Boots",
    product_category: "men",
    product_image: men12,
    sale_price: 45,
    original_price: 55,
    product_trending: true,
    product_description: "Step out in style with these versatile Chelsea boots. Crafted from supple suede with comfortable elastic side panels.",
  },
  {
    product_id: 25,
    product_name: "Dinosaur Graphic Tee",
    product_category: "kid",
    product_image: kid1,
    sale_price: 5.99,
    original_price: 19.99,
    product_trending: false,
    product_description: "Your little adventurer will roar with delight in this tee featuring a bold dinosaur graphic.",
  },
  {
    product_id: 26,
    product_name: "Rainbow Unicorn Hoodie",
    product_category: "kid",
    product_image: kid2,
    sale_price: 30,
    original_price: 50,
    product_trending: false,
    product_description: "Wrap them in magic! This cozy hoodie features a whimsical unicorn design and a burst of rainbow colors.",
  },
  {
    product_id: 27,
    product_name: "Colorblock Sweatpants",
    product_category: "kid",
    product_image: kid3,
    sale_price: 12,
    original_price: 24,
    product_trending: false,
    product_description: "The ultimate in comfort and fun. These sweatpants feature bold color combinations and a soft, fleece lining.",
  },
  {
    product_id: 28,
    product_name: "Striped Denim Overalls",
    product_category: "kid",
    product_image: kid4,
    sale_price: 31,
    original_price: 50.99,
    product_trending: false,
    product_description: "Classic and cool for little explorers. These overalls feature adjustable straps, front pockets, and a comfy fit.",
  },
  {
    product_id: 29,
    product_name: "Waterproof Rain Jacket",
    product_category: "kid",
    product_image: kid5,
    sale_price: 11,
    original_price: 25.99,
    product_trending: false,
    product_description: "Rain or shine, adventures await! This waterproof jacket keeps them dry with its vibrant colors and playful design.",
  },
  {
    product_id: 30,
    product_name: "High Top Sneakers",
    product_category: "kid",
    product_image: kid6,
    sale_price: 15,
    original_price: 20.99,
    product_trending: false,
    product_description: "Perfect for playground adventures! These high tops offer support, style, and come in a variety of vibrant colors.",
  },
  {
    product_id: 31,
    product_name: "Animal Print Backpack",
    product_category: "kid",
    product_image: kid7,
    sale_price: 9.99,
    original_price: 15.99,
    product_trending: false,
    product_description: "Roar into the school year! This backpack features a fun animal print and plenty of space for their supplies.",
  },
  {
    product_id: 32,
    product_name: "Soft Fleece Beanie",
    product_category: "kid",
    product_image: kid8,
    sale_price: 10,
    original_price: 12,
    product_trending: false,
    product_description: "Keep little heads warm with this cozy fleece beanie. Available in a variety of fun colors and patterns.",
  },
  {
    product_id: 33,
    product_name: "Patterned Pajama Set",
    product_category: "kid",
    product_image: kid9,
    sale_price: 20,
    original_price: 25,
    product_trending: true,
    product_description: "Sweet dreams guaranteed!  This snuggly pajama set features a playful pattern and a super-soft fabric.",
  },
  {
    product_id: 34,
    product_name: "Superhero Cape",
    product_category: "kid",
    product_image: kid10,
    sale_price: 16,
    original_price: 31,
    product_trending: true,
    product_description: "Let imaginations soar! This vibrant cape transforms them into their favorite superhero.",
  },
  {
    product_id: 35,
    product_name: "Building Blocks Set",
    product_category: "kid",
    product_image: kid11,
    sale_price: 8.99,
    original_price: 20,
    product_trending: true,
    product_description: "Endless possibilities! This colorful set of building blocks encourages creativity and hours of fun",
  },
  {
    product_id: 36,
    product_name: "Dinosaur Stuffed Animal",
    product_category: "kid",
    product_image: kid12,
    sale_price: 13,
    original_price: 25,
    product_trending: true,
    product_description: "Their new best friend! This cuddly dinosaur plush is perfect for playtime snuggles.",
  },
];

export default productList;
