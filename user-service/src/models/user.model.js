import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;

const User = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    role: {
        type: String,
        required: true,
        enum: ['user', 'admin'], // Danh sách role hợp lệ
        default: 'user',
    },
    authToken: {
        type: String,
        default: null,
    },
    firstName: {
        type: String,
        trim: true,
        required: [true, 'First name is required'],
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'Last name is required'],
    },
    sex: {
        type: String,
        required: [true, 'Sex is required'],
        enum: ['male', 'female', 'other'], // Giá trị hợp lệ
    },
    cccd: {
        type: String,
        required: [true, 'CCCD is required'],
        unique: true,
        match: [/^\d{12}$/, 'CCCD must be a 12-digit number'], // Ràng buộc định dạng
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        match: [/^\d{10,11}$/, 'Phone number must be 10-11 digits'], // Định dạng số điện thoại
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        trim: true,
    },
},{
    timestamps: true, // Tự động thêm createdAt và updatedAt
}
);

User.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

export default mongoose.model('User', User);
