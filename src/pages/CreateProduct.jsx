// {
//     id: 11,
//     name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
//     category: 'women',
//     image: p11_img,
//     new_price: 85.0,
//     old_price: 120.5,
//   },

import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { useProduct } from '../context/ProductContext';

function CreateProduct() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [oldPrice, setOldPrice] = useState('');
  const { CreateProduct } = useProduct();

  const submitHandle = async (e) => {
    e.preventDefault();
    
    const newProduct = {
      name,
      category,
      image,
      new_price: newPrice,
      old_price: oldPrice,
    };
    CreateProduct(newProduct);
  };

  return (
    <div className="container mt-10 max-w-lg rounded-lg border p-5 shadow">
      <h2 className="my-4 text-3xl font-bold">Create Product</h2>
      <form onSubmit={submitHandle} className="flex flex-col gap-2">
        <Input
          value={name}
          onchange={(e) => setName(e.target.value)}
          placeholder="name"
          type="text"
        />
        <Input
          value={category}
          onchange={(e) => setCategory(e.target.value)}
          placeholder="category"
          type="text"
        />
        <Input
          value={image}
          onchange={(e) => setImage(e.target.value)}
          placeholder="image"
          type="text"
        />
        <Input
          value={newPrice}
          onchange={(e) => setNewPrice(e.target.value)}
          placeholder="new price"
          type="text"
        />
        <Input
          value={oldPrice}
          onchange={(e) => setOldPrice(e.target.value)}
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
