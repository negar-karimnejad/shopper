import { HiTrash } from 'react-icons/hi2';

const heads = [
  'Product',
  'Title',
  'Old Price',
  'New Price',
  'Category',
  'Remove',
];

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
                    <tr className="border-b bg-white dark:bg-slate-900">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        <img src="images/cart_product_icon.png" alt="" />
                      </td>
                      <Td>Boys Orange Colourblocked Hooded Sweatshirt</Td>
                      <Td style="whitespace-nowrap">$120.5</Td>
                      <Td style="whitespace-nowrap">85.0</Td>
                      <Td style="whitespace-nowrap">women</Td>
                      <Td style="whitespace-nowrap">
                        <HiTrash className="cursor-pointer transition-all hover:text-rose-500" />
                      </Td>
                    </tr>
                    <tr className="border-b bg-white dark:bg-slate-900">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        <img src="images/cart_product_icon.png" alt="" />
                      </td>
                      <Td>Boys Orange Colourblocked Hooded Sweatshirt</Td>
                      <Td style="whitespace-nowrap">$120.5</Td>
                      <Td style="whitespace-nowrap">85.0</Td>
                      <Td style="whitespace-nowrap">women</Td>
                      <Td style="whitespace-nowrap">
                        <HiTrash className="cursor-pointer transition-all hover:text-rose-500" />
                      </Td>
                    </tr>
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
