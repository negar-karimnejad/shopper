import { useState } from 'react';
import { useProduct } from '../context/ProductContext';
import { formatCurrency } from '../utilities/formatCurrency';
import Button from './Button';
import { HiTrash } from 'react-icons/hi2';

const Td = ({ children, style }) => {
  return (
    <td
      className={`${style} px-6 py-4 text-sm font-light text-gray-900 dark:text-slate-100`}
    >
      {children}
    </td>
  );
};

function ListProduct({ product }) {
  const [loading, setLoading] = useState(false);
  const { removeProduct } = useProduct();

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
  return (
    <tr className="border-b bg-white dark:bg-slate-900">
      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
        <img
          className="h-14 w-14 object-contain"
          src={product.image}
          alt={product.title}
        />
      </td>
      <Td>{product.title}</Td>
      <Td style="whitespace-nowrap">{formatCurrency(product.price)}</Td>

      <Td style="whitespace-nowrap">{product.category}</Td>
      <Td style="whitespace-nowrap">
        <Button
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
  );
}

export default ListProduct;
