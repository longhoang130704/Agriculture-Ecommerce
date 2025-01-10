export const checkShippingExistence = async (req, res, next) => {
  const { shippingId } = req.params;
  const shipping = await shipping.findById(shippingId);

  if (!shipping || shipping.isDeleted) {
    return res.status(404).json({ message: "Shipping not found" });
  }

  req.shipping = shipping;
  next();
};

export const validateShippingData = (req, res, next) => {
  const { orderId, shipping_address, carrierName, status } = req.body;
  if (!orderId || !shipping_address || !carrierName || !status) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  next();
};
