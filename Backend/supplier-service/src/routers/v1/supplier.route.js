import express from 'express';
import SupplierService from '../../api/supplier.api.js';

// Auth Middleware
// import authorization from '../../middlewares/authorization.middleware.js';

const supplierRouter = express.Router();

supplierRouter.get('/restore/:supplierId', SupplierService.restore);
supplierRouter.get('/destroy/:supplierId', SupplierService.destroy);
supplierRouter.get('/:supplierId', SupplierService.getSupplierById);
supplierRouter.put('/:supplierId', SupplierService.updateSupplierById);
supplierRouter.delete('/:supplierId', SupplierService.deleteSupplierById);
supplierRouter.post('/', SupplierService.createSupplier);
supplierRouter.get('/', SupplierService.getAllSuppliers);

// supplierRouter.get('/restore/:supplierId', authentication, SupplierService.restore);
// supplierRouter.get('/destroy/:supplierId', authentication, SupplierService.destroy);
// supplierRouter.get('/:supplierId', authentication, SupplierService.getSupplierById);
// supplierRouter.put('/:supplierId', authentication, SupplierService.updateSupplierById);
// supplierRouter.delete('/:supplierId', authentication, SupplierService.deleteSupplierById);
// supplierRouter.post('/', SupplierService.createSupplier);
// supplierRouter.get('/', authentication, SupplierService.getAllSuppliers);

export default supplierRouter;
