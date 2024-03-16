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
  
  const { addProduct } = useProduct();

  const submitHandle = async (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      category,
      image,
      new_price: newPrice,
      old_price: oldPrice,
    };

    try {
      await addProduct(newProduct);
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
