import p8_img from './product_8.png'
import p20_img from './product_20.png'
import p7_img from './product_7.png'
import p32_img from './product_32.png'

let similar_products = [
  {
    product_id: 8,
    product_name: "Cozy Cashmere Scarf",
    product_category: "women",
    product_image: p8_img,
    sale_price: 10.99,
    original_price: 31,
    product_trending: false,
    product_description: "Wrap yourself in warmth with this luxurious cashmere scarf. Incredibly soft and perfect for chilly days.",
  },
  {
    product_id: 20,
    product_name: "Aviator Sunglasses",
    product_category: "men",
    product_image: p20_img,
    sale_price: 40,
    original_price: 80,
    product_trending: false,
    product_description: "Add a touch of timeless style. These aviator sunglasses feature polarized lenses and offer 100% UV protection.",
  },
  {
    product_id: 7,
    product_name: "Faux Leather Leggings",
    product_category: "women",
    product_image: p7_img,
    sale_price: 23.6,
    original_price: 60,
    product_trending: false,
    product_description: "Add a touch of edge to your wardrobe with these sleek faux-leather leggings. Comfortable stretch fabric and a flattering fit.",
  },
  {
    product_id: 32,
    product_name: "Soft Fleece Beanie",
    product_category: "kid",
    product_image: p32_img,
    sale_price: 10,
    original_price: 12,
    product_trending: false,
    product_description: "Keep little heads warm with this cozy fleece beanie. Available in a variety of fun colors and patterns.",
  },
];

export default similar_products;