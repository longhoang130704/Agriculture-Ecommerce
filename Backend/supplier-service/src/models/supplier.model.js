import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;

const Supplier = new Schema({
    CompanyName: {
        type: String,
        required: [true, 'Company name is required'],
        trim: true,
    },
    ContactName: {
        type: String,
        required: [true, 'Contact name is required'],
        trim: true,
    },
    ContactTitle: {
        type: String,
        trim: true,
    },
    Address: {
        type: String,
        required: [true, 'Address is required'],
        trim: true,
    },
    City: {
        type: String,
        required: [true, 'City is required'],
        trim: true,
    },
    Region: {
        type: String,
        trim: true,
    },
    Country: {
        type: String,
        required: [true, 'Country is required'],
        trim: true,
    },
    Phone: {
        type: String,
        required: [true, 'Phone number is required'],
        match: [/^\d{10,11}$/, 'Phone number must be between 10 to 11 digits'], // Adjust the number range as needed
    },
    Fax: {
        type: String,
        match: [/^\d{7,15}$/, 'Fax number must be between 7 to 15 digits'], // Optional, adjust as needed
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    authToken: {
        type: String,
        default: null,
    },
}, {
    timestamps: true, 
});

// Add soft delete functionality
Supplier.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

export default mongoose.model('Supplier', Supplier);
