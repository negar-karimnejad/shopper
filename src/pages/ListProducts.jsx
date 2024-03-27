import { useState } from 'react';
import { HiTrash } from 'react-icons/hi2';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import { useProduct } from '../context/ProductContext';
import { formatCurrency } from '../utilities/formatCurrency';

const heads = ['Product', 'Title', 'Price', 'Category', 'Remove'];

const Td = ({ children, style }) => {
  return (
    <td
      className={`${style} px-6 py-4 text-sm font-light text-gray-900 dark:text-slate-100`}
    >
      {children}
    </td>
  );
};

function ListProducts() {
  const { products, removeProduct } = useProduct();
  const [loading, setLoading] = useState(false);

  const removeHandler = async (id) => {
    setLoading(true);
    try {
      await removeProduct(id);
    } catch (error) {
      console.error('Error while removing product:', error.message);
    } finally {
      setLoading(false);
    }
  };

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
                      <tr
                        key={product.id}
                        className="border-b bg-white dark:bg-slate-900"
                      >
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          <img
                            className="h-14 w-14 object-contain"
                            src={product.image}
                            alt={product.title}
                          />
                        </td>
                        <Td>{product.title}</Td>
                        <Td style="whitespace-nowrap">
                          {formatCurrency(product.price)}
                        </Td>

                        <Td style="whitespace-nowrap">{product.category}</Td>
                        <Td style="whitespace-nowrap">
                          <Button
                            variant="secondary"
                            disabled={loading}
                            type="button"
                            onClick={() => removeHandler(product.id)}
                          >
                            {loading ? (
                              'Removing...'
                            ) : (
                              <HiTrash className="cursor-pointer transition-all" />
                            )}
                          </Button>
                        </Td>
                      </tr>
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
