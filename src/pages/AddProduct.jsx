import { useState } from 'react';
import { HiCheck, HiCloudArrowUp } from 'react-icons/hi2';
import Button from '../components/Button';
import Input from '../components/Input';
import { useProduct } from '../context/ProductContext';

function AddProduct() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  const { addProduct } = useProduct();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!title.trim() || !price.trim() || !category.trim() || !image) return;

    const newProduct = {
      id: 100,
      title,
      price,
      image,
      category,
      rating: 1,
      description,
      size: 's',
    };
    console.log(newProduct);
    setLoading(true);
    try {
      await addProduct(newProduct);
    } catch (error) {
      console.error('Error while adding new product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-slate-100 dark:bg-slate-950 md:p-10">
      <div className="mx-auto max-w-5xl rounded-md bg-white p-10 dark:bg-slate-900">
        <h2 className="mb-10 text-3xl font-bold">Add Product</h2>
        <form className="flex flex-col gap-5" onSubmit={submitHandler}>
          <div className="flex justify-between gap-8 max-md:flex-col md:items-center">
            <label htmlFor="" className="flex flex-1 flex-col gap-2">
              Product title
              <Input
                placeholder="Type here"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={loading}
              />
              <p className="h-1 text-sm text-rose-500">
                {title &&
                  title.trim().length < 5 &&
                  'Title must be more than 5 characters'}
              </p>
            </label>
            <label htmlFor="" className="flex flex-1 flex-col gap-2">
              Price
              <Input
                placeholder="Type here"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                disabled={loading}
              />
              <p className="h-1"></p>
            </label>
          </div>

          <label htmlFor="" className="flex flex-1 flex-col gap-2">
            Description
            <textarea
              className="rounded-md border p-4 text-slate-600 outline-none disabled:opacity-50"
              placeholder="Type here"
              value={description}
              rows={3}
              required
              onChange={(e) => setDescription(e.target.value)}
              disabled={loading}
            ></textarea>
            <p className="h-1 text-sm text-rose-500">
              {description &&
                description.trim().length < 5 &&
                ' Description must be more than 5 characters'}
            </p>
          </label>
          <label htmlFor="" className="flex w-fit flex-col gap-2">
            Product category
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="rounded-md border p-4 text-slate-600 outline-none disabled:opacity-50"
              disabled={loading}
            >
              <option value="">Choose category</option>
              <option value="men">men</option>
              <option value="women">women</option>
              <option value="kid">kid</option>
            </select>
          </label>
          <label htmlFor="" className="flex flex-1 flex-col gap-2">
            Product image
            <div className="flex w-20 items-center justify-center border p-3 text-gray-500 opacity-60 outline-none dark:border-slate-600">
              <HiCloudArrowUp size={40} />
              <input
                className="absolute opacity-0"
                type="file"
                required
                onChange={(e) => setImage(e.target.files[0])}
                disabled={loading}
              />
            </div>
            <div className="text-sm text-green-600">
              {image && (
                <p className="flex gap-1">
                  Image Added <HiCheck />
                </p>
              )}
            </div>
          </label>
          <div className="w-32">
            <Button
              disabled={loading}
              variant="secondaryLessRound"
              type="submit"
            >
              {loading ? 'Adding...' : 'Add'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
