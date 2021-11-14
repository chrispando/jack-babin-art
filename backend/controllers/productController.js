import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//@desc Fetch all products
//@route GET /api/products
//@access Public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@desc Fetch single product
//@route GET /api/products/:id
//@access Public

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found." });
  }
});

//@desc Delete a product
//@route DELETE /api/products/:id
//@access Private/Admin

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404).json({ message: "Product not found." });
  }
});

//@desc Create a product
//@route POST /api/products
//@access Private/Admin

const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    user: req.user._id,
    name: "Sample name",
    image: "/images/sample.jpg",
    style: "Paint on canvas",
    size: "8x11",
    price: 0,
    inStock: false,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

//@desc Update a product
//@route PUT /api/products/:id
//@access Private/Admin

const updateProduct = asyncHandler(async (req, res) => {
  const { name, image, style, size, price, inStock } = req.body;

  const product = await Product.findById(req.params.id);
  console.log(product);
  if (product) {
    product.name = name;
    product.image = image;
    product.style = style;
    product.size = size;
    product.price = price;
    product.inStock = inStock;
    console.log("UPDATE PRODUCT: ", product);
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
