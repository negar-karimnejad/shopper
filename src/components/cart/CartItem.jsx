import { MdOutlineArrowLeft, MdOutlineArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utilities/formatCurrency';
import Spinner from '../Spinner';

const Td = ({ children, style }) => {
  return (
    <td
      className={`${style} px-6 py-2 text-sm font-light text-gray-900 dark:text-slate-100`}
    >
      {children}
    </td>
  );
};

export default function Cartproduct({ product, item }) {
  const { removeFromCart, decrementQuantity, incrementQuantity } = useCart();
  console.log(item);
  if (!product) return <Spinner title="Loading..." />;

  return (
    <>
      <Td style="whitespace-nowrap">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="h-14 w-14 object-contain"
          />
        </Link>
      </Td>
      <Td>
        <Link to={`/product/${product.id}`}>{product.title}</Link>
      </Td>
      <Td style="whitespace-nowrap uppercase">{product?.size}</Td>
      <Td style="whitespace-nowrap">{formatCurrency(product?.price)}</Td>
      <Td style="whitespace-nowrap flex items-center pt-5">
        <div
          className="cursor-pointer transition-all hover:text-rose-500"
          onClick={() => decrementQuantity(item.id)}
        >
          <MdOutlineArrowLeft size={25} />
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-md border font-semibold">
          {item.quantity}
        </div>
        <div
          className="cursor-pointer transition-all hover:text-rose-500"
          onClick={() => incrementQuantity(item.id)}
        >
          <MdOutlineArrowRight size={25} />
        </div>
      </Td>
      <Td style="whitespace-nowrap">
        {formatCurrency(product?.price * item.quantity)}
      </Td>
      <Td style="whitespace-nowrap">
        <span
          onClick={() => removeFromCart(item.id)}
          className="cursor-pointer text-2xl font-medium transition-all hover:text-rose-500 disabled:opacity-50"
        >
          &times;
        </span>
      </Td>
    </>
  );
}
