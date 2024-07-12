export default function CheckoutForm({ ourUser, session }) {
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
          <label htmlhtmlFor="company" className="text-gray-600">
            Company
          </label>
          <input
            type="text"
            name="company"
            id="company"
            className="input-box"
          />
        </div>
        <div>
          <label htmlhtmlFor="region" className="text-gray-600">
            Country/Region
          </label>
          <input type="text" name="region" id="region" className="input-box" />
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
          <label htmlhtmlFor="city" className="text-gray-600">
            City
          </label>
          <input type="text" name="city" id="city" className="input-box" />
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
          <label htmlhtmlFor="company" className="text-gray-600">
            Company
          </label>
          <input
            type="text"
            name="company"
            id="company"
            className="input-box"
          />
        </div>
      </div>
    </>
  );
}
