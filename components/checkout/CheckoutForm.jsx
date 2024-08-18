export default function CheckoutForm({ ourUser }) {
  console.log("Our user from chekcoute form :", ourUser);

  return (
    <>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4"></div>
        <div>
          <label htmlhtmlFor="fullName" className="text-gray-600">
            Full Name
          </label>
          <input
            value={ourUser?.personal_name}
            type="text"
            name="fullName"
            id="fullName"
            className="input-box"
          />
        </div>
        <div>
          <label htmlhtmlFor="shippingBy" className="text-gray-600">
            Shipping By
          </label>
          <input
            value={ourUser?.shipping_name}
            type="text"
            name="shippingBy"
            id="shippingBy"
            className="input-box"
          />
        </div>
        <div>
          <label htmlhtmlFor="shippingAddress" className="text-gray-600">
            Shipping Adddress
          </label>
          <input
            value={ourUser?.shipping_address}
            type="text"
            name="shippingAddress"
            id="shippingAddress"
            className="input-box"
          />
        </div>
        <div>
          <label htmlhtmlFor="address" className="text-gray-600">
            Billing Address{" "}
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="input-box"
            value={ourUser?.billing_address}
          />
        </div>
        <div>
          <label htmlhtmlFor="billingNumber" className="text-gray-600">
            Billing Number
          </label>
          <input
            value={ourUser?.billing_phone_no}
            type="text"
            name="billingNumber"
            id="billingNumber"
            className="input-box"
          />
        </div>
        <div>
          <label htmlhtmlFor="phone" className="text-gray-600">
            Phone number
          </label>
          <input
            value={ourUser?.personal_phone_no}
            type="text"
            name="phone"
            id="phone"
            className="input-box"
          />
        </div>
        <div>
          <label htmlhtmlFor="email" className="text-gray-600">
            Email address
          </label>
          <input
            value={ourUser?.loginEmail}
            type="email"
            name="email"
            id="email"
            className="input-box"
          />
        </div>
        <div>
          <label htmlhtmlFor="billingName" className="text-gray-600">
            Billing Name
          </label>
          <input
            value={ourUser?.billing_name}
            type="text"
            name="billingName"
            id="billingName"
            className="input-box"
          />
        </div>
      </div>
    </>
  );
}
