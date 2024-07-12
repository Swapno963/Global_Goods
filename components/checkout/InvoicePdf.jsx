export default async function InvoicePdf({ allproduct }) {
  return (
    <>
      <div className="space-y-2 p-12">
        {allproduct?.map((p) => (
          <div key={p?._id} className="flex justify-between">
            <div>
              <h5 className="text-gray-800 font-medium">{p?.title}</h5>
              <p className="text-sm text-gray-600">Size: {p?.size}</p>
            </div>
            <p className="text-gray-600">x1</p>
            <p className="text-gray-800 font-medium">$ {p?.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
