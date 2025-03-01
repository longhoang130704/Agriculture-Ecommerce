import Order from "../models/order.model.js"

export const checkOrderExistence = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      return res.status(400).json({ message: "Invalid order ID format" });
    }

    const order = await Order.findById(orderId);
    if (!order || order.isDeleted) {
      return res.status(404).json({ message: "Order not found" });
    }

    req.order = order;
    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

export const validateOrderData = (req, res, next) => {
  const { userId, orderDetailId, status, totalAmount, totalPrice } = req.body;

  if (!userId || !orderDetailId || !status || totalAmount == null || totalPrice == null) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(orderDetailId)) {
    return res.status(400).json({ message: "Invalid user ID or order detail ID" });
  }

  if (typeof totalAmount !== "number" || typeof totalPrice !== "number" || totalAmount < 0 || totalPrice < 0) {
    return res.status(400).json({ message: "Total amount and total price must be positive numbers" });
  }

  next();
};

export const checkOrderOwnership = async (req, res, next) => {
  try {
    const { userId } = req.user; // user được gán từ middleware xác thực (authentication)
    const { order } = req; // Lấy từ `checkOrderExistence`

    if (!order.userId.equals(userId) && req.user.role !== "admin") {
      return res.status(403).json({ message: "Unauthorized access to this order" });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

export const checkOrderUpdatable = (req, res, next) => {
  const { order } = req;
  if (order.status === "completed") {
    return res.status(400).json({ message: "Completed orders cannot be modified" });
  }
  next();
};

const validStatusTransitions = {
  pending: ["confirmed", "canceled"],
  confirmed: ["shipped", "canceled"],
  shipped: ["completed"],
};

export const validateOrderStatusChange = (req, res, next) => {
  const { status: newStatus } = req.body;
  const { order } = req;

  if (!validStatusTransitions[order.status]?.includes(newStatus)) {
    return res.status(400).json({
      message: `Invalid status transition from ${order.status} to ${newStatus}`,
    });
  }

  next();
};
