import { HiTrash } from 'react-icons/hi2';

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
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-slate-100"
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-slate-100"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-slate-100"
                      >
                        Old Price
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-slate-100"
                      >
                        New Price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-slate-100"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-slate-100"
                      >
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-white dark:bg-slate-900">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        <img src="images/cart_product_icon.png" alt="" />
                      </td>
                      <td className="px-6 py-4 text-sm font-light text-gray-900 dark:text-slate-100">
                        Boys Orange Colourblocked Hooded Sweatshirt
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900 dark:text-slate-100">
                        120.5
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900 dark:text-slate-100">
                        85.0
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900 dark:text-slate-100">
                        women
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900 dark:text-slate-100">
                        <HiTrash className="cursor-pointer transition-all hover:text-rose-500" />
                      </td>
                    </tr>
                    <tr className="border-b bg-white dark:bg-slate-900">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        <img src="images/cart_product_icon.png" alt="" />
                      </td>
                      <td className="px-6 py-4 text-sm font-light text-gray-900 dark:text-slate-100">
                        Boys Orange Colourblocked Hooded Sweatshirt
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900 dark:text-slate-100">
                        120.5
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900 dark:text-slate-100">
                        85.0
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900 dark:text-slate-100">
                        women
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900 dark:text-slate-100">
                        <HiTrash className="cursor-pointer transition-all hover:text-rose-500" />
                      </td>
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
