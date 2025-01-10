import express from "express";
import ShippingService from "../../api/shipping.api.js";
import {
  checkShippingExistence,
  validateShippingData,
} from "../../middlewares/shipping.middleware.js";
const shippingRouter = express.Router();

shippingRouter.post("/", validateShippingData, ShippingService.createShipping);
shippingRouter.get("/", ShippingService.getAllShipping);
shippingRouter.get(
  "/:shippingId",
  checkShippingExistence,
  ShippingService.getShippingById
);
shippingRouter.put(
  "/:shippingId",
  checkShippingExistence,
  ShippingService.updateShippingById
);
shippingRouter.delete(
  "/:shippingId",
  checkShippingExistence,
  ShippingService.deleteShippingById
);
shippingRouter.delete(
  "/destroy/:shippingId",
  checkShippingExistence,
  ShippingService.destroyShippingById
);
shippingRouter.get("/restore/:shippingId", ShippingService.restoreShippingById);

export default shippingRouter;
