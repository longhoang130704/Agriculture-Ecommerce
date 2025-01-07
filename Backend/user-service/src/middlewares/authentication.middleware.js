import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const authentication = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Lấy token từ header

    if (!token) {
        return res.status(401).json({ message: 'Access token is missing' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Kiểm tra token hợp lệ
        if (user.authToken !== token) {
            return res.status(401).json({ message: 'Token is invalid or has been replaced' });
        }

        req.user = user; // Lưu thông tin user vào request để sử dụng sau
        next();
    } catch (error) {
        console.error('Token verification failed:', error);
        return res.status(401).json({ message: 'Token verification failed' });
    }
};



export default authentication;
