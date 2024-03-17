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
    //   price: newPrice,    //
    // };

    try {
      // await addProduct(newProduct);
      await supabase.from('products').insert([
        {
          id: 1,
          title: 'Baronin Tunic',
          category: 'women',
          image: p1_img,
          price: 50.0,
          description:
            'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
          rating: 4.69,
        },
        {
          id: 2,
          title: 'Fjallraven - Foldsack',
          category: 'women',
          image: p2_img,
          price: 85.0,
          description:
            'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
          rating: 4.44,
        },
        {
          id: 3,
          title: "John Hardy Women's Legends Naga Gold",
          category: 'women',
          image: p3_img,
          price: 60.0,
          description:
            'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
          rating: 4.09,
        },
        {
          id: 4,
          title: 'Striped Flutter Sleeve Overlap Collar',
          category: 'women',
          image: p4_img,
          price: 100.0,
          description:
            'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
          rating: 4.3,
        },
        {
          id: 5,
          title: 'Rain Jacket Women Windbreaker Striped',
          category: 'women',
          image: p5_img,
          price: 85.0,
          description:
            "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
          rating: 4.09,
        },
        {
          id: 6,
          title: "Lock and Love Women's Removable Hooded",
          category: 'women',
          image: p6_img,
          price: 85.0,
          description:
            'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
          rating: 4.57,
        },
        {
          id: 7,
          title: 'sunt aut facere repellat provident ',
          category: 'women',
          image: p7_img,
          price: 85.0,
          description:
            "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
          rating: 4.25,
        },
        {
          id: 8,
          title: 'Charming Sweater Kit',
          category: 'women',
          image: p8_img,
          price: 85.0,
          description:
            'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
          rating: 4.43,
        },
        {
          id: 9,
          title: "Tankaneo Women's Pullover Colour Block Long Sleeve",
          category: 'women',
          image: p9_img,
          price: 85.0,
          description:
            'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
          rating: 4.54,
        },
        {
          id: 10,
          title: 'Lightweight Long Sleeve',
          category: 'women',
          image: p10_img,
          price: 85.0,
          description:
            'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
          rating: 4.43,
        },
        {
          id: 11,
          title: 'Emma & Giovanni Women’s Oversize Jumper',
          category: 'women',
          image: p11_img,
          price: 85.0,
          description:
            '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
          rating: 4.26,
        },
        {
          id: 12,
          title: "Vila Women's Viril",
          category: 'women',
          image: p12_img,
          price: 85.0,
          description:
            "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
          rating: 4,
        },
        {
          id: 13,
          title: 'Big & Tall Graphic Tee T-Shirt',
          category: 'men',
          image: p13_img,
          price: 85.0,
          description:
            '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
          rating: 4.59,
        },
        {
          id: 14,
          title: 'Calvin Klein Golf Men’s Crew Neck Tour Jumper',
          category: 'men',
          image: p14_img,
          price: 85.0,
          description:
            '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
          rating: 4.21,
        },
        {
          id: 15,
          title: 'Steens Mountain Half Snap Men’s Pullover, Jumper',
          category: 'men',
          image: p15_img,
          price: 85.0,
          description:
            'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
          rating: 4.7,
        },
        {
          id: 16,
          title: 'Raglan Sweatshirt',
          category: 'men',
          image: p16_img,
          price: 85.0,
          description:
            '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
          rating: 4.83,
        },
        {
          id: 17,
          title: 'Full-Zip Slim Fit Bomber Jacket',
          category: 'men',
          image: p17_img,
          price: 85.0,
          description:
            "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
          rating: 4.52,
        },
        {
          id: 18,
          title: 'Tesero Pullover T-Shirt',
          category: 'men',
          image: p18_img,
          price: 85.0,
          description:
            '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
          rating: 4.56,
        },
        {
          id: 19,
          title: 'Male Knitted Jumper with Crew Neck, Plain',
          category: 'men',
          image: p19_img,
          price: 85.0,
          description:
            '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
          rating: 4.42,
        },
        {
          id: 20,
          title: 'Men Green Solid Zippered',
          category: 'men',
          image: p20_img,
          price: 85.0,
          description:
            '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
          rating: 4.06,
        },
        {
          id: 21,
          title: "Oliver Men's sweater",
          category: 'men',
          image: p21_img,
          price: 85.0,
          description:
            'stretch sun hemp print, super soft, classic premium fabric, very flowy and soft.',
          rating: 4.44,
        },
        {
          id: 22,
          title: 'Structure Made of Cotton',
          category: 'men',
          image: p22_img,
          price: 85.0,
          description:
            'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
          rating: 4.57,
        },
        {
          id: 23,
          title: 'Round Neck Sweater',
          category: 'men',
          image: p23_img,
          price: 85.0,
          description:
            'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
          rating: 4.85,
        },
        {
          id: 24,
          title: 'Cotton Quarter Zip Jumper',
          category: 'men',
          image: p24_img,
          price: 85.0,
          description:
            'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
          rating: 4.94,
        },
        {
          id: 25,
          title: 'Fleece Lined Winter Coat with Full Zip',
          category: 'kid',
          image: p25_img,
          price: 85.0,
          description:
            'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
          rating: 4.87,
        },
        {
          id: 26,
          title: 'Boys Orange Colourblocked',
          category: 'kid',
          image: p26_img,
          price: 85.0,
          description:
            "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
          rating: 4.08,
        },
        {
          id: 27,
          title: 'Hooded Sweatshirt',
          category: 'kid',
          image: p27_img,
          price: 85.0,
          description:
            'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
          rating: 4.41,
        },
        {
          id: 28,
          title: 'Colourblocked Hooded',
          category: 'kid',
          image: p28_img,
          price: 85.0,
          description:
            "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
          rating: 4.82,
        },
        {
          id: 29,
          title: 'Hannu Knitted Casual',
          category: 'kid',
          image: p29_img,
          price: 85.0,
          description:
            'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
          rating: 4.44,
        },
        {
          id: 30,
          title: 'Duke Ronald Jumper',
          category: 'kid',
          image: p30_img,
          price: 85.0,
          description:
            'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
          rating: 4.92,
        },
        {
          id: 31,
          title: 'sweatshirt with crew',
          category: 'kid',
          image: p31_img,
          price: 85.0,
          description:
            'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
          rating: 4.02,
        },
        {
          id: 32,
          title: 'Cotton Logo Hoodie, Hooded Jumper',
          category: 'kid',
          image: p32_img,
          price: 85.0,
          description:
            '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
          rating: 3.41,
        },
        {
          id: 33,
          title: "Children's Legacy American Classics B-Ultralight",
          category: 'kid',
          image: p33_img,
          price: 85.0,
          description:
            "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
          rating: 4.41,
        },
        {
          id: 34,
          title: "Squadra 21 Children's Tracksuit Top",
          category: 'kid',
          image: p34_img,
          price: 85.0,
          description:
            '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
          rating: 4.11,
        },
        {
          id: 35,
          title: 'Colourblocked Hooded Sweatshirt',
          category: 'kid',
          image: p35_img,
          price: 85.0,
          description:
            '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
          rating: 3.3,
        },
        {
          id: 36,
          title: 'Strickjacke Baumwoll',
          category: 'kid',
          image: p36_img,
          price: 85.0,
          description:
            'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
          rating: 2.3,
        },
      ]);
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
