import dotenv from "dotenv";
dotenv.config();
import ImageKit from "imagekit";

let storageInstance = new ImageKit({
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
  urlEndpoint: process.env.IK_URL,
});

export let sendToIk = async (file, fileName) => {
  let obj = {
    file,
    fileName,
    folder: "E-comm",
  };

  return await storageInstance.upload(obj);
};
