import Input from '../components/Input';
import Button from '../components/Button';
import { HiCloudArrowUp } from 'react-icons/hi2';

function AddProduct() {
  return (
    <div className="w-full bg-slate-100 dark:bg-slate-950 md:p-10">
      <div className="mx-auto max-w-5xl rounded-md bg-white p-10 dark:bg-slate-900">
        <h2 className="mb-10 text-3xl font-bold">Add Product</h2>
        <form className="flex flex-col gap-5">
          <label htmlFor="" className="flex flex-col gap-2">
            Product title
            <Input placeholder="Type here" />
          </label>
          <div className="flex justify-between gap-8 max-md:flex-col md:items-center">
            <label htmlFor="" className="flex flex-1 flex-col gap-2">
              Price
              <Input placeholder="Type here" />
            </label>
            <label htmlFor="" className="flex flex-1 flex-col gap-2">
              Offer Price
              <Input placeholder="Type here" />
            </label>
          </div>
          <label htmlFor="" className="flex w-fit flex-col gap-2">
            Product category
            <select
              name=""
              id=""
              className="w-24 border p-3 outline-none dark:text-gray-600"
            >
              <option value="">1</option>
              <option value="">1</option>
              <option value="">1</option>
            </select>
          </label>
          <label htmlFor="" className="flex flex-1 flex-col gap-2">
            Product image
            <div className="flex w-20 items-center justify-center border p-3 text-gray-500 opacity-60 outline-none dark:border-slate-600">
              <HiCloudArrowUp size={40} />
              <input className="absolute opacity-0" type="file" />
            </div>
          </label>
          <div className="w-32">
            <Button variant="secondaryLessRound">Add</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
