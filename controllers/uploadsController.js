const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const path = require("path");
const fs = require("fs");
const CustomError = require("../errors");
const cloudinary = require("cloudinary").v2;

const uploadProductImageLocal = async (req, res) => {
  //   console.log(req.files);
  if (!req.files) {
    throw new CustomError.BadRequestError("No file uploaded");
  }

  const productImage = req.files.image;

  if (!productImage.mimetype.startsWith("image")) {
    throw new CustomError.BadRequestError("Please upload images only");
  }
  const maxSize = 1000;
  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError(
      "Please upload image smaller than 1KB"
    );
  }
  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`
  );

  await productImage.mv(imagePath);

  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

const uploadProductImage = async (req, res) => {
  // use temp storage using express-fileupload
  // express-fileupload will parse the file and put it in temp directory
  // this is setup in app.js
  // console.log(req.files.image);
  // file is located in tempFilePath
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: process.env.CLOUD_FOLDER, //create folder in cloudinary media library
    }
  );
  // console.log(result);
  fs.unlinkSync(req.files.image.tempFilePath); //removes temp files from temp directory

  return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};

module.exports = {
  uploadProductImage,
  uploadProductImageLocal,
};
