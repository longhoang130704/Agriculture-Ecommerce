import shippingRouter from "./shipping.route.js";

const initRouter = (app) => {
  app.use("/api/shipping", shippingRouter);
};

export default initRouter;
