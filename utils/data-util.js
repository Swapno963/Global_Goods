export const replaceMongoIdInArray = (array) => {
  const mappedArray = array
    .map((item) => {
      return {
        id: item._id.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => rest);

  return mappedArray;
};

// for cart
export const replaceMongoProductIdInArray = (array) => {
  const mappedArray = array
    .map((item) => {
      return {
        id: item._id.toString(),
        pId: item.productId.toString(),
        ...item,
      };
    })
    .map(({ _id, productId, ...rest }) => rest);

  return mappedArray;
};

export const replaceMongoIdInObject = (obj) => {
  const { _id, ...updatedObj } = { ...obj, id: obj?._id?.toString() };
  return updatedObj;
};

export const discountedPrice = (originalPrice, discountPercentage) => {
  // Calculate the discounted amount
  const discountAmount = (originalPrice * discountPercentage) / 100;

  // Calculate the discounted price
  const discountedPrice = originalPrice - discountAmount;

  // Return the discounted price
  return discountedPrice.toFixed(2);
};

// inventory management
export const inventoryManagement = (productId, addedQuantity) => {};

// invoice  calculation
export const calculateInvoice = (products, tax, shippingBill) => {
  const productsPrice = products
    .reduce((total, product) => total + parseFloat(product.price), 0)
    .toFixed(2);
  const taxAmount = productsPrice * (parseFloat(tax) / 100);
  // const taxFixAmount = parseFloat(taxAmount.toFixed(2));

  const total =
    parseFloat(productsPrice) + taxAmount + parseFloat(shippingBill);
  // const totalFix = parseFloat(total.toFixed(2));

  const todaysDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const randomfiveDegitNumber = Math.floor(10000 + Math.random() * 90000);

  return {
    productsPrice,
    taxAmount,
    total,
    todaysDate,
    randomfiveDegitNumber,
  };
};
