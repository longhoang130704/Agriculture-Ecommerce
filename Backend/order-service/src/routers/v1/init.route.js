import orderRouter from "./order.route.js";

const initRouter = (app) => {
  app.use("/api/order/", orderRouter);
};

export default initRouter;
