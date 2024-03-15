const Td = ({ children, style }) => {
  return (
    <td
      className={`${style} px-6 py-4 text-sm font-light text-gray-900 dark:text-slate-100`}
    >
      {children}
    </td>
  );
};

export default function CartItem() {
  return (
    <>
      <Td style="whitespace-nowrap">
        <img src="images/cart_product_icon.png" alt="" />
      </Td>
      <Td>Boys Orange Colourblocked Hooded Sweatshirt</Td>
      <Td style="whitespace-nowrap">$120.5</Td>
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