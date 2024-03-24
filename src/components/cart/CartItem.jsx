import { formatCurrency } from '../../utilities/formatCurrency';

const Td = ({ children, style }) => {
  return (
    <td
      className={`${style} px-6 py-4 text-sm font-light text-gray-900 dark:text-slate-100`}
    >
      {children}
    </td>
  );
};

export default function CartItem({ item }) {
  console.log(item);
  return (
    <>
      <Td style="whitespace-nowrap">
        <img src={item.image} alt="" />
      </Td>
      <Td>{item.title}</Td>
      <Td style="whitespace-nowrap">{formatCurrency(item?.price)}</Td>
      <Td style="whitespace-nowrap">
        <input
          defaultValue={1}
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
