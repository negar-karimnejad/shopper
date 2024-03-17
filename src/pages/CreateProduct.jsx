import { useState } from 'react';
import p1_img from '../../public/images/product_1.png';
import p10_img from '../../public/images/product_10.png';
import p11_img from '../../public/images/product_11.png';
import p12_img from '../../public/images/product_12.png';
import p13_img from '../../public/images/product_13.png';
import p14_img from '../../public/images/product_14.png';
import p15_img from '../../public/images/product_15.png';
import p16_img from '../../public/images/product_16.png';
import p17_img from '../../public/images/product_17.png';
import p18_img from '../../public/images/product_18.png';
import p19_img from '../../public/images/product_19.png';
import p2_img from '../../public/images/product_2.png';
import p20_img from '../../public/images/product_20.png';
import p21_img from '../../public/images/product_21.png';
import p22_img from '../../public/images/product_22.png';
import p23_img from '../../public/images/product_23.png';
import p24_img from '../../public/images/product_24.png';
import p25_img from '../../public/images/product_25.png';
import p26_img from '../../public/images/product_26.png';
import p27_img from '../../public/images/product_27.png';
import p28_img from '../../public/images/product_28.png';
import p29_img from '../../public/images/product_29.png';
import p3_img from '../../public/images/product_3.png';
import p30_img from '../../public/images/product_30.png';
import p31_img from '../../public/images/product_31.png';
import p32_img from '../../public/images/product_32.png';
import p33_img from '../../public/images/product_33.png';
import p34_img from '../../public/images/product_34.png';
import p35_img from '../../public/images/product_35.png';
import p36_img from '../../public/images/product_36.png';
import p4_img from '../../public/images/product_4.png';
import p5_img from '../../public/images/product_5.png';
import p6_img from '../../public/images/product_6.png';
import p7_img from '../../public/images/product_7.png';
import p8_img from '../../public/images/product_8.png';
import p9_img from '../../public/images/product_9.png';
import Button from '../components/Button';
import Input from '../components/Input';
import supabase from '../services/supabase';

function CreateProduct() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [oldPrice, setOldPrice] = useState('');

  // const { addProduct } = useProduct();

  const submitHandle = async (e) => {
    e.preventDefault();

    // const newProduct = {
    //   name,
    //   category,
    //   image,
    //   new_price: newPrice,
    //   old_price: oldPrice,
    // };

    try {
      // await addProduct(newProduct);
      await supabase.from('products').insert(
        //   [
        //   {
        //     id: 1,
        //     name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
        //     category: 'women',
        //     image: p1_img,
        //     new_price: 50.0,
        //     old_price: 80.5,
        //     description:
        //       'stretch sun hemp print, super soft, classic premium fabric, very flowy and soft.',
        //   },
        //   {
        //     id: 2,
        //     name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
        //     category: 'women',
        //     image: p2_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //     description:
        //       'stretch sun hemp print, super soft, classic premium fabric, very flowy and soft.',
        //   },
        //   {
        //     id: 3,
        //     name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
        //     category: 'women',
        //     image: p3_img,
        //     new_price: 60.0,
        //     old_price: 100.5,
        //     description:
        //       'MAXIMUM TEMPERATURE 30 C GENTLE PROCESSDO NOT BLEACHDO NOT TUMBLE DRYFLAT DRYINGIRON AT A MAXIMUM SOLE PLATE TEMPERATURE OF 110C STEAM IRONING MAY CAUSE IRREVERSIBLE DAMAGEDO NOT DRY CLEAN',
        //   },
        //   {
        //     id: 4,
        //     name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
        //     category: 'women',
        //     image: p4_img,
        //     new_price: 100.0,
        //     old_price: 150.0,
        //   },
        //   {
        //     id: 5,
        //     name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
        //     category: 'women',
        //     image: p5_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 6,
        //     name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
        //     category: 'women',
        //     image: p6_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 7,
        //     name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
        //     category: 'women',
        //     image: p7_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 8,
        //     name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
        //     category: 'women',
        //     image: p8_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 9,
        //     name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
        //     category: 'women',
        //     image: p9_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 10,
        //     name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
        //     category: 'women',
        //     image: p10_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 11,
        //     name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
        //     category: 'women',
        //     image: p11_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 12,
        //     name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
        //     category: 'women',
        //     image: p12_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 13,
        //     name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket',
        //     category: 'men',
        //     image: p13_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 14,
        //     name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket',
        //     category: 'men',
        //     image: p14_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 15,
        //     name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket',
        //     category: 'men',
        //     image: p15_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 16,
        //     name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket',
        //     category: 'men',
        //     image: p16_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 17,
        //     name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket',
        //     category: 'men',
        //     image: p17_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 18,
        //     name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket',
        //     category: 'men',
        //     image: p18_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 19,
        //     name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket',
        //     category: 'men',
        //     image: p19_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 20,
        //     name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket',
        //     category: 'men',
        //     image: p20_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 21,
        //     name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket',
        //     category: 'men',
        //     image: p21_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 22,
        //     name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket',
        //     category: 'men',
        //     image: p22_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 23,
        //     name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket',
        //     category: 'men',
        //     image: p23_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 24,
        //     name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket',
        //     category: 'men',
        //     image: p24_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 25,
        //     name: 'Boys Orange Colourblocked Hooded Sweatshirt',
        //     category: 'kid',
        //     image: p25_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 26,
        //     name: 'Boys Orange Colourblocked Hooded Sweatshirt',
        //     category: 'kid',
        //     image: p26_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 27,
        //     name: 'Boys Orange Colourblocked Hooded Sweatshirt',
        //     category: 'kid',
        //     image: p27_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 28,
        //     name: 'Boys Orange Colourblocked Hooded Sweatshirt',
        //     category: 'kid',
        //     image: p28_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 29,
        //     name: 'Boys Orange Colourblocked Hooded Sweatshirt',
        //     category: 'kid',
        //     image: p29_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 30,
        //     name: 'Boys Orange Colourblocked Hooded Sweatshirt',
        //     category: 'kid',
        //     image: p30_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 31,
        //     name: 'Boys Orange Colourblocked Hooded Sweatshirt',
        //     category: 'kid',
        //     image: p31_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 32,
        //     name: 'Boys Orange Colourblocked Hooded Sweatshirt',
        //     category: 'kid',
        //     image: p32_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 33,
        //     name: 'Boys Orange Colourblocked Hooded Sweatshirt',
        //     category: 'kid',
        //     image: p33_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 34,
        //     name: 'Boys Orange Colourblocked Hooded Sweatshirt',
        //     category: 'kid',
        //     image: p34_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 35,
        //     name: 'Boys Orange Colourblocked Hooded Sweatshirt',
        //     category: 'kid',
        //     image: p35_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        //   {
        //     id: 36,
        //     name: 'Boys Orange Colourblocked Hooded Sweatshirt',
        //     category: 'kid',
        //     image: p36_img,
        //     new_price: 85.0,
        //     old_price: 120.5,
        //   },
        // ]
        [
          {
            id: 1,
            title: 'iPhone 9',
            description: 'An apple mobile which is nothing like apple',
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: 'Apple',
            category: 'smartphones',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/1/1.jpg',
              'https://cdn.dummyjson.com/product-images/1/2.jpg',
              'https://cdn.dummyjson.com/product-images/1/3.jpg',
              'https://cdn.dummyjson.com/product-images/1/4.jpg',
              'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
            ],
          },
          {
            id: 2,
            title: 'iPhone X',
            description:
              'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
            price: 899,
            discountPercentage: 17.94,
            rating: 4.44,
            stock: 34,
            brand: 'Apple',
            category: 'smartphones',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/2/1.jpg',
              'https://cdn.dummyjson.com/product-images/2/2.jpg',
              'https://cdn.dummyjson.com/product-images/2/3.jpg',
              'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg',
            ],
          },
          {
            id: 3,
            title: 'Samsung Universe 9',
            description:
              "Samsung's new variant which goes beyond Galaxy to the Universe",
            price: 1249,
            discountPercentage: 15.46,
            rating: 4.09,
            stock: 36,
            brand: 'Samsung',
            category: 'smartphones',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/3/thumbnail.jpg',
            images: ['https://cdn.dummyjson.com/product-images/3/1.jpg'],
          },
          {
            id: 4,
            title: 'OPPOF19',
            description: 'OPPO F19 is officially announced on April 2021.',
            price: 280,
            discountPercentage: 17.91,
            rating: 4.3,
            stock: 123,
            brand: 'OPPO',
            category: 'smartphones',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/4/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/4/1.jpg',
              'https://cdn.dummyjson.com/product-images/4/2.jpg',
              'https://cdn.dummyjson.com/product-images/4/3.jpg',
              'https://cdn.dummyjson.com/product-images/4/4.jpg',
              'https://cdn.dummyjson.com/product-images/4/thumbnail.jpg',
            ],
          },
          {
            id: 5,
            title: 'Huawei P30',
            description:
              'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
            price: 499,
            discountPercentage: 10.58,
            rating: 4.09,
            stock: 32,
            brand: 'Huawei',
            category: 'smartphones',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/5/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/5/1.jpg',
              'https://cdn.dummyjson.com/product-images/5/2.jpg',
              'https://cdn.dummyjson.com/product-images/5/3.jpg',
            ],
          },
          {
            id: 6,
            title: 'MacBook Pro',
            description:
              'MacBook Pro 2021 with mini-LED display may launch between September, November',
            price: 1749,
            discountPercentage: 11.02,
            rating: 4.57,
            stock: 83,
            brand: 'Apple',
            category: 'laptops',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/6/thumbnail.png',
            images: [
              'https://cdn.dummyjson.com/product-images/6/1.png',
              'https://cdn.dummyjson.com/product-images/6/2.jpg',
              'https://cdn.dummyjson.com/product-images/6/3.png',
              'https://cdn.dummyjson.com/product-images/6/4.jpg',
            ],
          },
          {
            id: 7,
            title: 'Samsung Galaxy Book',
            description:
              'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
            price: 1499,
            discountPercentage: 4.15,
            rating: 4.25,
            stock: 50,
            brand: 'Samsung',
            category: 'laptops',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/7/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/7/1.jpg',
              'https://cdn.dummyjson.com/product-images/7/2.jpg',
              'https://cdn.dummyjson.com/product-images/7/3.jpg',
              'https://cdn.dummyjson.com/product-images/7/thumbnail.jpg',
            ],
          },
          {
            id: 8,
            title: 'Microsoft Surface Laptop 4',
            description:
              'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.',
            price: 1499,
            discountPercentage: 10.23,
            rating: 4.43,
            stock: 68,
            brand: 'Microsoft Surface',
            category: 'laptops',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/8/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/8/1.jpg',
              'https://cdn.dummyjson.com/product-images/8/2.jpg',
              'https://cdn.dummyjson.com/product-images/8/3.jpg',
              'https://cdn.dummyjson.com/product-images/8/4.jpg',
              'https://cdn.dummyjson.com/product-images/8/thumbnail.jpg',
            ],
          },
          {
            id: 9,
            title: 'Infinix INBOOK',
            description:
              'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
            price: 1099,
            discountPercentage: 11.83,
            rating: 4.54,
            stock: 96,
            brand: 'Infinix',
            category: 'laptops',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/9/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/9/1.jpg',
              'https://cdn.dummyjson.com/product-images/9/2.png',
              'https://cdn.dummyjson.com/product-images/9/3.png',
              'https://cdn.dummyjson.com/product-images/9/4.jpg',
              'https://cdn.dummyjson.com/product-images/9/thumbnail.jpg',
            ],
          },
          {
            id: 10,
            title: 'HP Pavilion 15-DK1056WM',
            description:
              'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10',
            price: 1099,
            discountPercentage: 6.18,
            rating: 4.43,
            stock: 89,
            brand: 'HP Pavilion',
            category: 'laptops',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg',
            images: [
              'https://cdn.dummyjson.com/product-images/10/1.jpg',
              'https://cdn.dummyjson.com/product-images/10/2.jpg',
              'https://cdn.dummyjson.com/product-images/10/3.jpg',
              'https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg',
            ],
          },
          {
            id: 11,
            title: 'perfume Oil',
            description:
              'Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil',
            price: 13,
            discountPercentage: 8.4,
            rating: 4.26,
            stock: 65,
            brand: 'Impression of Acqua Di Gio',
            category: 'fragrances',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/11/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/11/1.jpg',
              'https://cdn.dummyjson.com/product-images/11/2.jpg',
              'https://cdn.dummyjson.com/product-images/11/3.jpg',
              'https://cdn.dummyjson.com/product-images/11/thumbnail.jpg',
            ],
          },
          {
            id: 12,
            title: 'Brown Perfume',
            description:
              'Royal_Mirage Sport Brown Perfume for Men & Women - 120ml',
            price: 40,
            discountPercentage: 15.66,
            rating: 4,
            stock: 52,
            brand: 'Royal_Mirage',
            category: 'fragrances',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/12/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/12/1.jpg',
              'https://cdn.dummyjson.com/product-images/12/2.jpg',
              'https://cdn.dummyjson.com/product-images/12/3.png',
              'https://cdn.dummyjson.com/product-images/12/4.jpg',
              'https://cdn.dummyjson.com/product-images/12/thumbnail.jpg',
            ],
          },
          {
            id: 13,
            title: 'Fog Scent Xpressio Perfume',
            description:
              'Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men',
            price: 13,
            discountPercentage: 8.14,
            rating: 4.59,
            stock: 61,
            brand: 'Fog Scent Xpressio',
            category: 'fragrances',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/13/thumbnail.webp',
            images: [
              'https://cdn.dummyjson.com/product-images/13/1.jpg',
              'https://cdn.dummyjson.com/product-images/13/2.png',
              'https://cdn.dummyjson.com/product-images/13/3.jpg',
              'https://cdn.dummyjson.com/product-images/13/4.jpg',
              'https://cdn.dummyjson.com/product-images/13/thumbnail.webp',
            ],
          },
          {
            id: 14,
            title: 'Non-Alcoholic Concentrated Perfume Oil',
            description:
              'Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil',
            price: 120,
            discountPercentage: 15.6,
            rating: 4.21,
            stock: 114,
            brand: 'Al Munakh',
            category: 'fragrances',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/14/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/14/1.jpg',
              'https://cdn.dummyjson.com/product-images/14/2.jpg',
              'https://cdn.dummyjson.com/product-images/14/3.jpg',
              'https://cdn.dummyjson.com/product-images/14/thumbnail.jpg',
            ],
          },
          {
            id: 15,
            title: 'Eau De Perfume Spray',
            description:
              'Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality',
            price: 30,
            discountPercentage: 10.99,
            rating: 4.7,
            stock: 105,
            brand: 'Lord - Al-Rehab',
            category: 'fragrances',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/15/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/15/1.jpg',
              'https://cdn.dummyjson.com/product-images/15/2.jpg',
              'https://cdn.dummyjson.com/product-images/15/3.jpg',
              'https://cdn.dummyjson.com/product-images/15/4.jpg',
              'https://cdn.dummyjson.com/product-images/15/thumbnail.jpg',
            ],
          },
          {
            id: 16,
            title: 'Hyaluronic Acid Serum',
            description:
              "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
            price: 19,
            discountPercentage: 13.31,
            rating: 4.83,
            stock: 110,
            brand: "L'Oreal Paris",
            category: 'skincare',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/16/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/16/1.png',
              'https://cdn.dummyjson.com/product-images/16/2.webp',
              'https://cdn.dummyjson.com/product-images/16/3.jpg',
              'https://cdn.dummyjson.com/product-images/16/4.jpg',
              'https://cdn.dummyjson.com/product-images/16/thumbnail.jpg',
            ],
          },
          {
            id: 17,
            title: 'Tree Oil 30ml',
            description:
              'Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,',
            price: 12,
            discountPercentage: 4.09,
            rating: 4.52,
            stock: 78,
            brand: 'Hemani Tea',
            category: 'skincare',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/17/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/17/1.jpg',
              'https://cdn.dummyjson.com/product-images/17/2.jpg',
              'https://cdn.dummyjson.com/product-images/17/3.jpg',
              'https://cdn.dummyjson.com/product-images/17/thumbnail.jpg',
            ],
          },
          {
            id: 18,
            title: 'Oil Free Moisturizer 100ml',
            description:
              'Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.',
            price: 40,
            discountPercentage: 13.1,
            rating: 4.56,
            stock: 88,
            brand: 'Dermive',
            category: 'skincare',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/18/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/18/1.jpg',
              'https://cdn.dummyjson.com/product-images/18/2.jpg',
              'https://cdn.dummyjson.com/product-images/18/3.jpg',
              'https://cdn.dummyjson.com/product-images/18/4.jpg',
              'https://cdn.dummyjson.com/product-images/18/thumbnail.jpg',
            ],
          },
          {
            id: 19,
            title: 'Skin Beauty Serum.',
            description:
              'Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m',
            price: 46,
            discountPercentage: 10.68,
            rating: 4.42,
            stock: 54,
            brand: 'ROREC White Rice',
            category: 'skincare',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/19/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/19/1.jpg',
              'https://cdn.dummyjson.com/product-images/19/2.jpg',
              'https://cdn.dummyjson.com/product-images/19/3.png',
              'https://cdn.dummyjson.com/product-images/19/thumbnail.jpg',
            ],
          },
          {
            id: 20,
            title: 'Freckle Treatment Cream- 15gm',
            description:
              "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
            price: 70,
            discountPercentage: 16.99,
            rating: 4.06,
            stock: 140,
            brand: 'Fair & Clear',
            category: 'skincare',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/20/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/20/1.jpg',
              'https://cdn.dummyjson.com/product-images/20/2.jpg',
              'https://cdn.dummyjson.com/product-images/20/3.jpg',
              'https://cdn.dummyjson.com/product-images/20/4.jpg',
              'https://cdn.dummyjson.com/product-images/20/thumbnail.jpg',
            ],
          },
          {
            id: 21,
            title: '- Daal Masoor 500 grams',
            description:
              'Fine quality Branded Product Keep in a cool and dry place',
            price: 20,
            discountPercentage: 4.81,
            rating: 4.44,
            stock: 133,
            brand: 'Saaf & Khaas',
            category: 'groceries',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/21/thumbnail.png',
            images: [
              'https://cdn.dummyjson.com/product-images/21/1.png',
              'https://cdn.dummyjson.com/product-images/21/2.jpg',
              'https://cdn.dummyjson.com/product-images/21/3.jpg',
            ],
          },
          {
            id: 22,
            title: 'Elbow Macaroni - 400 gm',
            description:
              'Product details of Bake Parlor Big Elbow Macaroni - 400 gm',
            price: 14,
            discountPercentage: 15.58,
            rating: 4.57,
            stock: 146,
            brand: 'Bake Parlor Big',
            category: 'groceries',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/22/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/22/1.jpg',
              'https://cdn.dummyjson.com/product-images/22/2.jpg',
              'https://cdn.dummyjson.com/product-images/22/3.jpg',
            ],
          },
          {
            id: 23,
            title: 'Orange Essence Food Flavou',
            description:
              'Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item',
            price: 14,
            discountPercentage: 8.04,
            rating: 4.85,
            stock: 26,
            brand: 'Baking Food Items',
            category: 'groceries',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/23/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/23/1.jpg',
              'https://cdn.dummyjson.com/product-images/23/2.jpg',
              'https://cdn.dummyjson.com/product-images/23/3.jpg',
              'https://cdn.dummyjson.com/product-images/23/4.jpg',
              'https://cdn.dummyjson.com/product-images/23/thumbnail.jpg',
            ],
          },
          {
            id: 24,
            title: 'cereals muesli fruit nuts',
            description:
              'original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji',
            price: 46,
            discountPercentage: 16.8,
            rating: 4.94,
            stock: 113,
            brand: 'fauji',
            category: 'groceries',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/24/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/24/1.jpg',
              'https://cdn.dummyjson.com/product-images/24/2.jpg',
              'https://cdn.dummyjson.com/product-images/24/3.jpg',
              'https://cdn.dummyjson.com/product-images/24/4.jpg',
              'https://cdn.dummyjson.com/product-images/24/thumbnail.jpg',
            ],
          },
          {
            id: 25,
            title: 'Gulab Powder 50 Gram',
            description:
              'Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds',
            price: 70,
            discountPercentage: 13.58,
            rating: 4.87,
            stock: 47,
            brand: 'Dry Rose',
            category: 'groceries',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/25/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/25/1.png',
              'https://cdn.dummyjson.com/product-images/25/2.jpg',
              'https://cdn.dummyjson.com/product-images/25/3.png',
              'https://cdn.dummyjson.com/product-images/25/4.jpg',
              'https://cdn.dummyjson.com/product-images/25/thumbnail.jpg',
            ],
          },
          {
            id: 26,
            title: 'Plant Hanger For Home',
            description:
              'Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf',
            price: 41,
            discountPercentage: 17.86,
            rating: 4.08,
            stock: 131,
            brand: 'Boho Decor',
            category: 'home-decoration',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/26/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/26/1.jpg',
              'https://cdn.dummyjson.com/product-images/26/2.jpg',
              'https://cdn.dummyjson.com/product-images/26/3.jpg',
              'https://cdn.dummyjson.com/product-images/26/4.jpg',
              'https://cdn.dummyjson.com/product-images/26/5.jpg',
              'https://cdn.dummyjson.com/product-images/26/thumbnail.jpg',
            ],
          },
          {
            id: 27,
            title: 'Flying Wooden Bird',
            description:
              'Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm',
            price: 51,
            discountPercentage: 15.58,
            rating: 4.41,
            stock: 17,
            brand: 'Flying Wooden',
            category: 'home-decoration',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/27/thumbnail.webp',
            images: [
              'https://cdn.dummyjson.com/product-images/27/1.jpg',
              'https://cdn.dummyjson.com/product-images/27/2.jpg',
              'https://cdn.dummyjson.com/product-images/27/3.jpg',
              'https://cdn.dummyjson.com/product-images/27/4.jpg',
              'https://cdn.dummyjson.com/product-images/27/thumbnail.webp',
            ],
          },
          {
            id: 28,
            title: '3D Embellishment Art Lamp',
            description:
              '3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)',
            price: 20,
            discountPercentage: 16.49,
            rating: 4.82,
            stock: 54,
            brand: 'LED Lights',
            category: 'home-decoration',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/28/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/28/1.jpg',
              'https://cdn.dummyjson.com/product-images/28/2.jpg',
              'https://cdn.dummyjson.com/product-images/28/3.png',
              'https://cdn.dummyjson.com/product-images/28/4.jpg',
              'https://cdn.dummyjson.com/product-images/28/thumbnail.jpg',
            ],
          },
          {
            id: 29,
            title: 'Handcraft Chinese style',
            description:
              'Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate',
            price: 60,
            discountPercentage: 15.34,
            rating: 4.44,
            stock: 7,
            brand: 'luxury palace',
            category: 'home-decoration',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/29/thumbnail.webp',
            images: [
              'https://cdn.dummyjson.com/product-images/29/1.jpg',
              'https://cdn.dummyjson.com/product-images/29/2.jpg',
              'https://cdn.dummyjson.com/product-images/29/3.webp',
              'https://cdn.dummyjson.com/product-images/29/4.webp',
              'https://cdn.dummyjson.com/product-images/29/thumbnail.webp',
            ],
          },
          {
            id: 30,
            title: 'Key Holder',
            description:
              'Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality',
            price: 30,
            discountPercentage: 2.92,
            rating: 4.92,
            stock: 54,
            brand: 'Golden',
            category: 'home-decoration',
            thumbnail:
              'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
            images: [
              'https://cdn.dummyjson.com/product-images/30/1.jpg',
              'https://cdn.dummyjson.com/product-images/30/2.jpg',
              'https://cdn.dummyjson.com/product-images/30/3.jpg',
              'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
            ],
          },
        ],
      );
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div className="container mt-10 max-w-lg rounded-lg border p-5 shadow">
      <h2 className="my-4 text-3xl font-bold">Create Product</h2>
      <form onSubmit={submitHandle} className="flex flex-col gap-2">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          type="text"
        />
        <Input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="category"
          type="text"
        />
        <Input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="image"
          type="text"
        />
        <Input
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          placeholder="new price"
          type="text"
        />
        <Input
          value={oldPrice}
          onChange={(e) => setOldPrice(e.target.value)}
          placeholder="old price"
          type="text"
        />
        <div className="w-1/3">
          <Button type="submit" variant="secondaryLessRound">
            Create Product
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
