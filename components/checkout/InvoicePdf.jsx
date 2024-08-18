import { calculateInvoice } from "@/utils/data-util";

export default async function InvoicePdf({ allproduct, ourUser }) {
  const invoiceData = calculateInvoice(allproduct, 10, 10);
  // console.log("the invoice allproduct is ", allproduct);

  return (
    <>
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* invoice and global goods in summary */}
        <div className="flex justify-between  border-b pb-6 mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">INVOICE</h2>
            <p className="text-gray-600">
              Invoice #{invoiceData?.randomfiveDegitNumber}
            </p>
            <p className="text-gray-600">{invoiceData?.todaysDate}</p>
          </div>
          <div className="text-right">
            <h3 className="text-xl font-semibold text-gray-800">
              Global Goods
            </h3>
            <p className="text-gray-600">Dhaka, Bangladesh, 1200</p>
            <p className="text-gray-600">Email: info@globalGoods.com</p>
            <p className="text-gray-600">Phone: (+880) 170-911-2230</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Billed To:
              </h4>
              <p className="text-gray-600">{ourUser?.personal_name}</p>
              <p className="text-gray-600">{ourUser?.billing_address}</p>
              <p className="text-gray-600">{ourUser?.billing_phone_no}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Shipped To:
              </h4>
              <p className="text-gray-600">{ourUser?.shipping_name}</p>
              <p className="text-gray-600">{ourUser?.shipping_address}</p>
              <p className="text-gray-600">{ourUser?.shipping_phone_no}</p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Item
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Qty
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Price
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {allproduct?.map((p, index) => (
                <tr key={p?.title + index}>
                  <td className="text-left py-3 px-4">{p?.title}</td>
                  <td className="text-left py-3 px-4">1</td>
                  {/* <td className="text-left py-3 px-4">Size: {p?.size}</td>
                  <td className="text-left py-3 px-4">x1</td> */}
                  <td className="text-left py-3 px-4">$ {p?.price}</td>
                  <td className="text-left py-3 px-4">$ {p?.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* counting subtotal, tax, shipping and total */}
        <div className="flex justify-end mt-6">
          <div className="text-right">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-semibold text-gray-800">
                ${invoiceData?.productsPrice}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Tax (10%):</span>
              <span className="font-semibold text-gray-800">
                ${invoiceData?.taxAmount}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Shipping:</span>
              <span className="font-semibold text-gray-800">$10.00</span>
            </div>
            <div className="border-t mt-2 pt-2 flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-800">
                Total:
              </span>
              <span className="text-lg font-semibold text-gray-800">
                ${invoiceData?.total?.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-4 text-center text-gray-600">
          <p>Thank you for your shopping!</p>
          <p>Please make payment within 30 days.</p>
        </div>
      </div>
    </>
  );
}
