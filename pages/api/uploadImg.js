import nextConnect from "next-connect";
import multer from "multer";
import * as fs from 'fs'

let filename = "IMAGEN";
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads", // destination folder
    filename: (req, file, cb) => cb(null, getFileName(file)),
  }),
});

const getFileName = (file) => {
  filename +=
    "." +
    file.originalname.substring(
      file.originalname.lastIndexOf(".") + 1,
      file.originalname.length
    );
  return filename;
};

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.array("file")); // attribute name you are sending the file by

apiRoute.post((req, res) => {
  /*const last = filename.substring(
    filename.lastIndexOf(".") + 1,
    filename.length
  );*/
  fs.renameSync(`./public/uploads/${filename}`,'./public/images/daniel-castillo.png');

  res.status(200).json({ data: `/uploads/profiles` }); // response
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
