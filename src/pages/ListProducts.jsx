import ListProduct from '../components/ListProduct';
import Spinner from '../components/Spinner';
import { useProduct } from '../context/ProductContext';

const heads = ['Product', 'Title', 'Price', 'Category', 'Remove'];

function ListProducts() {
  const { products } = useProduct();

  if (!products.length) return <Spinner title="Loading..." />;

  return (
    <div className="w-full bg-slate-100 dark:bg-slate-950 md:p-10">
      <div className="mx-auto max-w-5xl rounded-md bg-white p-10 dark:bg-slate-900">
        <h2 className="mb-10 text-center text-3xl font-bold">
          All Products List
        </h2>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b bg-white dark:bg-slate-900">
                    <tr>
                      {heads.map((head, index) => (
                        <th
                          key={index}
                          scope="col"
                          className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-slate-100"
                        >
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <ListProduct key={product.id} product={product} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProducts;
