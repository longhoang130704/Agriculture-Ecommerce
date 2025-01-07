import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
// [POST] /api/auth/login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log(email, password)

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }


        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Tạo JWT token
        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET, // Biến môi trường bảo mật .env
            { expiresIn: '1h' }
        );

        // Cập nhật authToken
        user.authToken = token;
        await user.save();


        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                email: user.email,
                role: user.role,
                name: `${user.firstName} ${user.lastName}`,
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
        const user = req.user; // Lấy thông tin user từ middleware

        user.authToken = null; // Xóa token
        await user.save();

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
