import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";

const { Schema } = mongoose;

const Shipping = new Schema(
  {
    orderId: {
      type: String,
      required: [true, "Order ID is required"],
    },
    shipping_address: {
      type: String,
      required: [true, "Shipping address is required"],
    },
    carrierName: {
      type: String,
      required: [true, "Carrier name is required"],
    },
    status: {
      type: String,
      enum: ["waiting", "in_transit", "delivered", "failed"],
      required: [true, "Status is required"],
    },
    predict_Date: {
      type: Date,
      required: [false, "Predict Date is required"],
    },
    shipped_Date: {
      type: Date,
      default: null,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

Shipping.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

export default mongoose.model("Shipping", Shipping);
