import { Router } from "express";
import isAuth from "../middlewares/isAuth.js";
import listAllSlots from "../controllers/slot/create.js"

const privateRouter = Router();

privateRouter.use(isAuth);

privateRouter.get("/helloworld", (req, res) => {
  res.send("<h1>Hello admin!</h1>");
});

privateRouter.get("/helloworld-json", (req, res) => {
  res.json({ message: "Hello admin!" });
});

privateRouter.post("/slots", listAllSlots);

export default privateRouter;
