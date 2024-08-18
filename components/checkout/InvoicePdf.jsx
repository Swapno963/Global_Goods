export default async function InvoicePdf({ allproduct, ourUser }) {
  return (
    <>
      <div class="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div class="flex justify-between  border-b pb-6 mb-6">
          <div>
            <h2 class="text-3xl font-bold text-gray-800">INVOICE</h2>
            <p class="text-gray-600">Invoice #12345</p>
            <p class="text-gray-600">August 18, 2024</p>
          </div>
          <div class="text-right">
            <h3 class="text-xl font-semibold text-gray-800">Global Goods</h3>
            <p class="text-gray-600">Dhaka, Bangladesh, 1200</p>
            <p class="text-gray-600">Email: info@globalGoods.com</p>
            <p class="text-gray-600">Phone: (+880) 170-911-2230</p>
          </div>
        </div>

        <div class="mb-8">
          <div class="grid grid-cols-2 gap-8">
            <div>
              <h4 class="text-lg font-semibold text-gray-800">Billed To:</h4>
              <p class="text-gray-600">{ourUser?.personal_name}</p>
              <p class="text-gray-600">{ourUser?.billing_address}</p>
              <p class="text-gray-600">{ourUser?.billing_phone_no}</p>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-gray-800">Shipped To:</h4>
              <p class="text-gray-600">{ourUser?.shipping_name}</p>
              <p class="text-gray-600">{ourUser?.shipping_address}</p>
              <p class="text-gray-600">{ourUser?.shipping_phone_no}</p>
            </div>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="min-w-full bg-white">
            <thead>
              <tr class="bg-gray-200 text-gray-700">
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Item
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Qty
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Price
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {allproduct?.map((p, index) => (
                <tr key={p?._id}>
                  <td class="text-left py-3 px-4">{p?.title}</td>
                  <td class="text-left py-3 px-4">1</td>
                  {/* <td class="text-left py-3 px-4">Size: {p?.size}</td>
                  <td class="text-left py-3 px-4">x1</td> */}
                  <td class="text-left py-3 px-4">$ {p?.price}</td>
                  <td class="text-left py-3 px-4">$ {p?.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div class="flex justify-end mt-6">
          <div class="text-right">
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Subtotal:</span>
              <span class="font-semibold text-gray-800">$250.00</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Tax (10%):</span>
              <span class="font-semibold text-gray-800">$25.00</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Shipping:</span>
              <span class="font-semibold text-gray-800">$10.00</span>
            </div>
            <div class="border-t mt-2 pt-2 flex justify-between items-center">
              <span class="text-lg font-semibold text-gray-800">Total:</span>
              <span class="text-lg font-semibold text-gray-800">$285.00</span>
            </div>
          </div>
        </div>

        <div class="border-t mt-8 pt-4 text-center text-gray-600">
          <p>Thank you for your shopping!</p>
          <p>Please make payment within 30 days.</p>
        </div>
      </div>
    </>
  );
}
