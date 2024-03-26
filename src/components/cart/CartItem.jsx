import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utilities/formatCurrency';
import Spinner from '../Spinner';

const Td = ({ children, style }) => {
  return (
    <td
      className={`${style} px-6 py-4 text-sm font-light text-gray-900 dark:text-slate-100`}
    >
      {children}
    </td>
  );
};

export default function Cartproduct({ product, item }) {
  if (!product) return <Spinner title="Loading..." />;

  return (
    <>
      <Td style="whitespace-nowrap">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt=""
            className="h-14 w-14 object-contain"
          />
        </Link>
      </Td>
      <Td>
        <Link to={`/product/${product.id}`}>{product.title}</Link>
      </Td>
      <Td style="whitespace-nowrap">{formatCurrency(product?.price)}</Td>
      <Td style="whitespace-nowrap">
        <input
          defaultValue={item.quantity}
          type="text"
          className="h-8 w-8 border text-center font-semibold outline-none dark:text-slate-800"
        />
      </Td>
      <Td style="whitespace-nowrap">$120.5</Td>
      <Td style="whitespace-nowrap">
        <span className="cursor-pointer text-2xl font-medium transition-all hover:text-rose-500">
          &times;
        </span>
      </Td>
    </>
  );
}
