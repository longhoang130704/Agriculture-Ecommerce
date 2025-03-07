import express from 'express';
import SupplierService from '../../api/supplier.api.js';

// Auth Middleware
import authentication from '../../middlewares/authentication.middleware.js';
// import authorization from '../../middlewares/authorization.middleware.js';

const supplierRouter = express.Router();

supplierRouter.get('/restore/:supplierId', authentication, SupplierService.restore);
supplierRouter.get('/destroy/:supplierId', authentication, SupplierService.destroy);
supplierRouter.get('/:supplierId', authentication, SupplierService.getSupplierById);
supplierRouter.put('/:supplierId', authentication, SupplierService.updateSupplierById);
supplierRouter.delete('/:supplierId', authentication, SupplierService.deleteSupplierById);
supplierRouter.post('/', SupplierService.createSupplier);
supplierRouter.get('/', authentication, SupplierService.getAllSuppliers);

export default supplierRouter;
