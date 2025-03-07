import bcrypt from 'bcryptjs';

import Supplier from '../models/supplier.model.js';

// [POST] /api/supplier
const createSupplier = async (req, res) => {
    try {
        const { CompanyName, ContactName, ContactTitle, Address, City, Region, Country, Phone, Fax, password } = req.body;

        // Check if the supplier already exists
        const existingSupplier = await Supplier.findOne({ CompanyName });
        if (existingSupplier) {
            return res.status(400).json({ message: 'CompanyName already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new supplier
        const newSupplier = new Supplier({
            CompanyName,
            password: hashedPassword,
            ContactName,
            ContactTitle,
            Address,
            City,
            Region,
            Country,
            Phone,
            Fax
        });

        // Save supplier to the database
        await newSupplier.save();

        res.status(201).json({ message: 'Supplier created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating supplier', error });
    }
}

// [GET] /api/supplier
const getAllSupplier = async (req, res) => {
    try {
        // Extract query parameters for pagination, filtering, searching, sorting, and selecting fields
        const { page = 1, limit = 10, search = '', sortBy = 'createdAt', sortOrder = 'desc', fields } = req.query;

        // Build the filter object
        const filter = {}; // no or country ?


        // Build the search condition (this is a simple search across firstName, lastName, and email)
        const searchCondition = {
            $or: [
                { CompanyName: { $regex: search, $options: 'i' } },
                { ContactName: { $regex: search, $options: 'i' } },
            ]
        };

        // Combine the filter and search condition
        const query = { ...filter, ...searchCondition };

        // Calculate the skip value for pagination
        const skip = (page - 1) * limit;

        // Set up sorting
        const sort = {};
        sort[sortBy] = sortOrder === 'asc' ? 1 : -1; // Ascending or descending based on sortOrder

        // Get the total count of suppliers for pagination
        const totalSuppliers = await Supplier.countDocuments(query);

        // Prepare the fields to select (if the 'fields' query parameter is provided)
        const selectedFields = fields ? fields.split(',').join(' ') : ''; 

        // Fetch the suppliers with pagination, sorting, filtering, and selected fields
        const suppliers = await Supplier.find(query)
            .skip(skip)
            .limit(Number(limit))
            .sort(sort)
            .select(selectedFields);

        res.status(200).json({
            totalSuppliers,
            totalPages: Math.ceil(totalSuppliers / limit),
            currentPage: Number(page),
            suppliers
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching suppliers in getAllSupplier', error });
    }
};

// [GET] /api/supplier/:supplierId
const getSupplierById = async (req, res) => {
    try {
        const { supplierId } = req.params;
        const supplier = await Supplier.findById(supplierId);

        if (!supplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }

        res.status(200).json(supplier);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching supplier', error });
    }
}

// [PUT] /api/supplier/:supplierID
const updateSupplierById = async (req, res) => {
    try {
        const { supplierId } = req.params;
        const { CompanyName, ContactName, ContactTitle, Address, City, Region, Country, Phone, Fax } = req.body;

        const supplier = await Supplier.findByIdAndUpdate(supplierId, { CompanyName, ContactName, ContactTitle, Address, City, Region, Country, Phone, Fax }, { new: true });

        if (!supplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }

        res.status(200).json(supplier);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating supplier', error });
    }
}

// [DELETE] /api/supplier/:supplierId
const deleteSupplierById = async (req, res) => {
    try {
        const { supplierId } = req.params;
        const supplier = await Supplier.delete({ _id: supplierId });

        if (!supplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }

        res.status(200).json({ message: 'Supplier deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting supplier', error });
    }
}

// [GET] /api/supplier/restore/supplierId
const restore = async (req, res) => {
    try {
        const { supplierId } = req.params;

        const existsupplier = await Supplier.findById(supplierId);

        if (!existsupplier) {
            return res.status(404).json({ message: 'SupplierId not found' });
        }

        const supplier = await Supplier.restore({ _id: supplierId });

        if (!supplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }

        res.status(200).json({ message: 'Supplier restored successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error restoring supplier', error });
    }
}

// [GET] /api/supplier/destroy/:supplierId
const destroy = async (req, res) => {
    try {
        const { supplierId } = req.params;
        const supplier = await Supplier.deleteOne({ _id: supplierId });

        if (!supplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }

        res.status(200).json({ message: 'Supplier permanently deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting supplier permanently', error });
    }
}

const SupplierService = {
    createSupplier,
    getAllSuppliers,
    getSupplierById,
    updateSupplierById,
    deleteSupplierById,
    restore,
    destroy
}

export default SupplierService;
