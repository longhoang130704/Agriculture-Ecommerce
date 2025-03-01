import express from "express";
import OrderService from "../../api/order.api.js";
import {
  checkOrderExistence,
  validateOrderData,
  checkOrderOwnership,
  checkOrderUpdatable,
  validateOrderStatusChange,
} from "../../middlewares/order.middleware.js";
const orderRouter = express.Router();

orderRouter.post("/", validateOrderData, OrderService.createOrder);
orderRouter.get("/", OrderService.getAllOrders);
orderRouter.get("/:orderId", checkOrderExistence, OrderService.getOrderById);
orderRouter.put(
  "/:orderId",
  checkOrderExistence,
  checkOrderOwnership,
  checkOrderUpdatable,
  validateOrderStatusChange,
  OrderService.updateOrderById
);
orderRouter.delete(
  "/:orderId",
  checkOrderExistence,
  checkOrderOwnership,
  OrderService.deleteOrderById
);
orderRouter.delete(
  "/destroy/:orderId",
  checkOrderExistence,
  checkOrderOwnership,
  OrderService.destroy
);
orderRouter.get("/restore/:orderId", OrderService.restore);

export default orderRouter;
