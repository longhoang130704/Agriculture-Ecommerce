import Shipping from "../models/shipping.model.js";

// Tạo Shipping mới
const createShipping = async (req, res) => {
  try {
    const { orderId, shipping_address, carrierName, status } = req.body;
    const createdAt = new Date();
    const predict_Date = new Date();
    predict_Date.setDate(createdAt.getDate() + 5);
    // Tạo mới đối tượng shipping
    const newShipping = new Shipping({
      orderId,
      shipping_address,
      carrierName,
      status,
      predict_Date,
    });

    // Lưu shipping vào database
    await newShipping.save();

    res.status(201).json({
      message: "Shipping đã được tạo thành công",
      shipping: newShipping,
    });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi tạo shipping", error });
  }
};

// Lấy danh sách tất cả các shipping
const getAllShipping = async (req, res) => {
  try {
    const { sort, search } = req.query;
    const filter = {};

    if (search) {
      filter.carrierName = { $regex: search, $options: "i" }; // Tìm kiếm không phân biệt hoa thường
    }

    const query = Shipping.find(filter);

    // Sắp xếp theo thời gian tạo nếu có yêu cầu
    if (sort) {
      query.sort({ createdAt: sort === "asc" ? 1 : -1 });
    }

    const shippingList = await query;
    res.status(200).json({ shippingList });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy danh sách shipping", error });
  }
};

// Lấy thông tin của một shipping theo ID
const getShippingById = async (req, res) => {
  try {
    const { shippingId } = req.params;
    const shipping = await Shipping.findById(shippingId);

    if (!shipping) {
      return res.status(404).json({ message: "Shipping không tồn tại" });
    }

    res.status(200).json(shipping);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy thông tin shipping", error });
  }
};

// Cập nhật thông tin của một shipping theo ID
const updateShippingById = async (req, res) => {
  try {
    const { shippingId } = req.params;
    const { shipping_address, carrierName, status, predict_Date } = req.body;

    // Cập nhật thông tin shipping
    const updatedShipping = await Shipping.findByIdAndUpdate(
      shippingId,
      {
        shipping_address,
        carrierName,
        status,
        predict_Date,
        "time_stamp.updatedAt": Date.now(), // Cập nhật thời gian sửa đổi
      },
      { new: true } // Trả về đối tượng đã được cập nhật
    );

    if (!updatedShipping) {
      return res.status(404).json({ message: "Shipping không tồn tại" });
    }

    res.status(200).json(updatedShipping);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi cập nhật shipping", error });
  }
};

// Xóa một shipping (soft delete)
const deleteShippingById = async (req, res) => {
  try {
    const { shippingId } = req.params;

    // Cập nhật trường deletedAt để đánh dấu shipping là đã xóa
    const shipping = await Shipping.findByIdAndUpdate(
      shippingId,
      { "time_stamp.deletedAt": Date.now() },
      { new: true }
    );

    if (!shipping) {
      return res.status(404).json({ message: "Shipping không tồn tại" });
    }

    res.status(200).json({ message: "Shipping đã bị xóa" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa shipping", error });
  }
};

// Xóa vĩnh viễn một shipping (destroy)
const destroyShippingById = async (req, res) => {
  try {
    const { shippingId } = req.params;

    // Tìm và xóa vĩnh viễn shipping
    const shipping = await Shipping.findByIdAndDelete(shippingId);

    if (!shipping) {
      return res.status(404).json({ message: "Shipping không tồn tại" });
    }

    res.status(200).json({ message: "Shipping đã bị xóa vĩnh viễn" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa shipping vĩnh viễn", error });
  }
};

// Khôi phục một shipping bị xóa (soft delete)
const restoreShippingById = async (req, res) => {
  try {
    const { shippingId } = req.params;

    // Khôi phục shipping bằng cách xóa trường deletedAt
    const shipping = await Shipping.findByIdAndUpdate(
      shippingId,
      { "time_stamp.deletedAt": null },
      { new: true }
    );

    if (!shipping) {
      return res.status(404).json({ message: "Shipping không tồn tại" });
    }

    res.status(200).json({ message: "Shipping đã được khôi phục", shipping });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi khôi phục shipping", error });
  }
};

const ShippingSerive = {
  createShipping,
  getAllShipping,
  getShippingById,
  updateShippingById,
  deleteShippingById,
  destroyShippingById,
  restoreShippingById,
};

export default ShippingSerive;
