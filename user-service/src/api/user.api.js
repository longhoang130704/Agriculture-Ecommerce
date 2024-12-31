import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';

// [POST] /api/user
const createUser = async (req, res) => {
    try {
        const { email, password, firstName, lastName, sex, cccd, phone, address } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            email,
            password: hashedPassword,
            firstName,
            lastName,
            sex,
            cccd,
            phone,
            address
        });

        // Save user to the database
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user', error });
    }
}

// [POST] /api/auth/login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.secret_key, { expiresIn: '1h' });

        res.status(200).json({
            message: 'Login successful',
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error during login', error });
    }
}

// [GET] /api/user
const getAllUser = async (req, res) => {
    try {
        // Extract query parameters for pagination, filtering, searching, sorting, and selecting fields
        const { page = 1, limit = 10, search = '', sortBy = 'createdAt', sortOrder = 'desc', sex, fields } = req.query;

        // Build the filter object
        const filter = {};

        var role = 'user'
        if (role) {
            filter.role = role;
        }

        if (sex) {
            filter.sex = sex;
        }

        // Build the search condition (this is a simple search across firstName, lastName, and email)
        const searchCondition = {
            $or: [
                { firstName: { $regex: search, $options: 'i' } },
                { lastName: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
            ]
        };

        // Combine the filter and search condition
        const query = { ...filter, ...searchCondition };

        // Calculate the skip value for pagination
        const skip = (page - 1) * limit;

        // Set up sorting
        const sort = {};
        sort[sortBy] = sortOrder === 'asc' ? 1 : -1; // Ascending or descending based on sortOrder

        // Get the total count of users for pagination
        const totalUsers = await User.countDocuments(query);

        // Prepare the fields to select (if the 'fields' query parameter is provided)
        const selectedFields = fields ? fields.split(',').join(' ') : ''; 

        // Fetch the users with pagination, sorting, filtering, and selected fields
        const users = await User.find(query)
            .skip(skip)
            .limit(Number(limit))
            .sort(sort)
            .select(selectedFields);

        res.status(200).json({
            totalUsers,
            totalPages: Math.ceil(totalUsers / limit),
            currentPage: Number(page),
            users
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching users in getAllUser', error });
    }
};

// [GET] /api/user/:userId
const getUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching user', error });
    }
}

// [PUT] /api/user/:userID
const updateUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const { firstName, lastName, sex, cccd, phone, address } = req.body;

        const user = await User.findByIdAndUpdate(userId, { firstName, lastName, sex, cccd, phone, address }, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating user', error });
    }
}

// [DELETE] /api/user/:userId
const deleteUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.delete({ _id: userId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting user', error });
    }
}

// [GET] /api/user/restore/userId
const restore = async (req, res) => {
    try {
        const { userId } = req.params;

        const existuser = await User.findById(userId);

        if (!existuser) {
            return res.status(404).json({ message: 'UserId not found' });
        }

        const user = await User.restore({ _id: userId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User restored successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error restoring user', error });
    }
}

// [GET] /api/user/destroy/:userId
const destroy = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.deleteOne({ _id: userId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User permanently deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting user permanently', error });
    }
}

const UserService = {
    createUser,
    login,
    getAllUser,
    getUserById,
    updateUserById,
    deleteUserById,
    restore,
    destroy
}

export default UserService;
