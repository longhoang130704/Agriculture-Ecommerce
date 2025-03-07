import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Supplier from '../models/supplier.model.js';
// [POST] /api/auth/login
const login = async (req, res) => {
    try {
        const { CompanyName, password } = req.body;

        console.log(CompanyName, password)

        const supplier = await Supplier.findOne({ CompanyName });
        if (!supplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }


        const isPasswordValid = await bcrypt.compare(password, supplier.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Tạo JWT token
        const token = jwt.sign(
            { supplierId: supplier._id },
            process.env.JWT_SECRET, // Biến môi trường bảo mật .env
            { expiresIn: '1h' }
        );

        // Cập nhật authToken
        supplier.authToken = token;
        await supplier.save();


        res.status(200).json({
            message: 'Login successful',
            token,
            supplier: {
                id: supplier._id,
                CompanyName: supplier.CompanyName,
                ContactName: supplier.ContactName,
            },
        });
    } catch (error) {
        console.error('error' + error);
        res.status(500).json({ message: 'Error during login' });
    }
};
// [GET] /api/auth/logout
const logout = async (req, res) => {
    try {
        const supplier = req.supplier; // Lấy thông tin supplier từ middleware

        supplier.authToken = null; // Xóa token
        await supplier.save();

        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Error during logout:', error);
        res.status(500).json({ message: 'Error during logout' });
    }
};


const AuthService = {
    login,
    logout
}

export default AuthService;
