import cors from "cors";
import express from "express";
import { productService } from "./ProductService.js";

const app = express();
app.use(express.static("public"));
app.use(cors());

app.get("/api/getProducts", async (req, res) => {
  const category = req.query.category;
  const name = req.query.name;
  // const startDate = req.query.startDate;
  // const endDate = req.query.endDate;
  const products = await productService.getProducts(category, name);
  res.json(products);
});

app.listen(8081, () => {
  console.log("server is listening on port 8081");
});
