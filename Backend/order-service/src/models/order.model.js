import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";

const { Schema } = mongoose;

const Order = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    OrderDetailId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OrderDetail",
      required: [true, "Carrier name is required"],
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "canceled", "shipped", "completed"],
      required: [true, "Status is required"],
    },
    totalAmount: {
      type: Number,
      required: [true, "Total amount is required"]
    },
    totalPrice: {
      type: Number,
      required: [true, "Total price is required"],
    },
    discount: {
      type: Number,
      required: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    // shippingId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Shipping",
    //   required: [true, "Shipping ID is required"],
    // shipping and order are recursive ??
    // }
  },
  {
    timestamps: true,
  }
);

Order.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

export default mongoose.model("Order", Order);
