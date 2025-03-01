import Order from "../models/order.model.js";

// Tạo Order mới
const createOrder = async (req, res) => {
  try {
    const { userId, OrderDetailId, status, discount, totalAmount, totalPrice } = req.body;
    const createdAt = new Date();
    // Tạo mới đối tượng order
    const newOrder = new Order({
      userId,
      OrderDetailId,
      status,
      discount,
      totalAmount,
      totalPrice,
    });

    // Lưu order vào database
    await newOrder.save();

    res.status(201).json({
      message: "Order đã được tạo thành công",
      order: newOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi khi tạo order", error });
  }
};

// Lấy danh sách tất cả các order
// [GET] /api/order
const getAllOrders = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '', sortBy = 'createdAt', sort = 'desc' } = req.query;
    const filter = {};

    const searchCondition = {
      status: { $regex: search, $options: 'i' }
    };

    const query = {...filter, ...searchCondition}

    sort[sortBy] = sort === 'asc' ? 1 : -1

    const orderList = await Order.countDocuments(query)

    const orders = await Order.find(query)
      .skip(skip)
      .limit(Number(limit))
      .sort(sort)
    

    res.status(200).json({ 
      orderList,
      pages: Math.ceil(orderList / limit),
      currentPage: Number(page), 
      orders
    });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy tất cả order", error });
  }
};

// Lấy thông tin của một order theo ID
// [GET] /api/order/:orderId
const getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order chưa có" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi khi lấy thông tin order", error });
  }
};

// Cập nhật thông tin của một order theo ID
// [PUT] /api/supplier/:supplierID
const updateOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { userId, OrderDetailId, status, discount, totalAmount, totalPrice } = req.body;

    // Cập nhật thông tin order
    const order = await Order.findByIdAndUpdate(
      orderId,
      {
        userId,
        OrderDetailId,
        status,
        discount,
        totalAmount,
        totalPrice,
      },
      { new: true } 
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order không tồn tại" });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi cập nhật order", error });
  }
};

// Xóa một order (soft delete)
// [DELETE] /api/order/:orderId
const deleteOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;

    // Cập nhật trường deletedAt để đánh dấu order là đã xóa
    const order = await Order.delete({ _id: orderId})
    if (!order) {
      return res.status(404).json({ message: "Order không tồn tại" });
    }

    res.status(200).json({ message: "Order đã bị xóa" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa order", error });
  }
};

// [GET] /api/order/restore/orderId
const restore = async (req, res) => {
  try {
    const { orderId } = req.params;

    const existedOrder = await Order.findById(orderId);
    
    if (!existedOrder) {
        return res.status(404).json({ message: 'OrderId restore không tồn tại' });
    }

    const order = await Order.restore({ _id: orderId });

    if (!order) {
      return res.status(404).json({ message: "Order restore không tồn tại" });
    }

    res.status(200).json({ message: "Order đã được khôi phục", order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi khi khôi phục order", error });
  }
};

// [GET] /api/order/destroy/:orderId
const destroy = async (req, res) => {
  try {
    const { orderId } = req.params;

    // Tìm và xóa vĩnh viễn order
    const order = await Order.delete({ _id: orderId });

    if (!order) {
      return res.status(404).json({ message: "Order không tồn tại" });
    }

    res.status(200).json({ message: "Order đã bị xóa vĩnh viễn" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi khi xóa order vĩnh viễn", error });
  }
};


const OrderService = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderById,
  deleteOrderById,
  restore,
  destroy,
};

export default OrderService;
