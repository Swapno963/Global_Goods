import { cartModel } from "@/models/Cart_model";
import { accountInfoModel } from "@/models/account_info_model";
import { categoryModel } from "@/models/category_model";
import { productModel } from "@/models/product_models";
import { wishModel } from "@/models/wishList_model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
  replaceMongoProductIdInArray,
} from "@/utils/data-util";

// geting all data from category db model
export async function getAllCategory() {
  const allCategory = await categoryModel.find().lean();
  return replaceMongoIdInArray(allCategory);
}
// geting all products from db model
export async function getAllProduct() {
  const allProduct = await productModel.find().lean();
  return replaceMongoIdInArray(allProduct);
}

// get trending product
export async function getNewArrivalProduct() {
  const product = await productModel
    .find()
    .sort({ arrival_date: -1 })
    .limit(4)
    .lean();
  return replaceMongoIdInArray(product);
}
// get trending product
export async function getTrendingProduct() {
  const product = await productModel
    .find()
    .sort({ view_count: 1 })
    .limit(4)
    .lean();
  return replaceMongoIdInArray(product);
}

// find by id for detail page
export async function getProductById(productId) {
  // const product = await productModel.findOne({ _id: productId }).lean();
  const product = await productModel
    .findByIdAndUpdate(
      { _id: productId },
      { $inc: { view_count: 1 } },
      { new: true }
    )
    .lean();
  // return replaceMongoIdInArray(product);
  console.log(product);
  return replaceMongoIdInObject(product);
}

// find by Category for detail page
export async function getProductByCategory(categoryName) {
  const product = await productModel
    .find({ category_name: categoryName })
    .limit(4)
    .lean();
  return replaceMongoIdInArray(product);
}

// filter by title,category,description,brand
export async function getSearchProduct(searchQuery) {
  const product = await productModel
    .find({
      $or: [
        { title: { $regex: new RegExp(searchQuery, "i") } },
        { category_name: { $regex: new RegExp(searchQuery, "i") } },
        { detail: { $regex: new RegExp(searchQuery, "i") } },
        { brand: { $regex: new RegExp(searchQuery, "i") } },
      ],
    })
    .lean();
  return replaceMongoIdInArray(product);
}

// find by email from cart for checkout
export async function getProductForCheckout(userEmail) {
  const product = await cartModel.find({ userEmail: userEmail }).lean();
  return replaceMongoProductIdInArray(product);
}
// find by email from wishlist for navbar
export async function getProductForNavbar(userEmail) {
  const product = await wishModel.find({ userEmail: userEmail }).lean();
  return replaceMongoProductIdInArray(product);
}
// find by ids from products for checkout
export async function getProductByIds(objectIds) {
  // console.log("from index", objectIds);
  const products = await productModel.find({ _id: { $in: objectIds } });
  // console.log(products);
  return products;
}
// find by accountInfo By ids
export async function getAccountInfoByEmail(email) {
  // console.log("from index", objectIds);
  const user = await accountInfoModel.findOne({ loginEmail: email });
  // console.log(products);
  return user;
}
