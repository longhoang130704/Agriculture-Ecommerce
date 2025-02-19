
import Category from './../components/Category';
import FilterCell from './../components/FilterCell';
import AddProductButton from './../components/AddProductButton';
import ItemSupplier from './../components/ItemSupplier';
import ItemSupplierGray from '../components/ItemSupplierGray'
import { formatDate } from '../lib/utils';
const StockPage = () => {
    const products = [
        {
            productName: {
                title: 'Tên sản phẩm',
                id: 'productName',
                content: 'Cà chua vị nho',
            },
            buyPrice: {
                title: 'Giá mua vào',
                id: 'buyPrice',
                content: 12000,
            },
            sellPrice: {
                title: 'Giá bán ra',
                id: 'sellPrice',
                content: 18000,
            },
            linkImage: {
                title: 'Đường dẫn hình ảnh',
                id: 'linkImage',
                content: 'https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2022/04/Why-Honkai-Star-Rail-Has-a-Character-Named-March-7th.jpg',
            },
            importAmount: {
                title: 'Số lượng nhập',
                id: 'importAmount',
                content: 800,
            },
            buyAmount: {
                title: 'Số lượng bán',
                id: 'buyAmount',
                content: 0,
            },
            harvestDay: {
                title: 'Ngày thu hoạch',
                id: 'harvestDay',
                content: formatDate(new Date(2025, 2, 10)),
            },
            packageUnit: {
                title: 'Đơn vị đóng gói (/1 túi)',
                id: 'packageUnit',
                content: 2,
            },
            nutritionalValue: {
                title: 'Giá trị dinh dưỡng (kcal)',
                id: 'nutritionalValue',
                content: 150,
            },
            description: {
                title: 'Mô tả',
                id: 'description',
                content: 'Cà chua bi ngọt ngào với vị nho đặc biệt.',
            },
            numberOfReviews: {
                title: 'Số lượng đánh giá',
                id: 'numberOfReviews',
                content: 70,
            },
            averageReview: {
                title: 'Đánh giá trung bình',
                id: 'averageReview',
                content: 4.5,
            }
        },
        // Product 2
        {
            productName: {
                title: 'Tên sản phẩm',
                id: 'productName',
                content: 'Táo xanh vị kiwi',
            },
            buyPrice: {
                title: 'Giá mua vào',
                id: 'buyPrice',
                content: 15000,
            },
            sellPrice: {
                title: 'Giá bán ra',
                id: 'sellPrice',
                content: 22000,
            },
            linkImage: {
                title: 'Đường dẫn hình ảnh',
                id: 'linkImage',
                content: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopgHzgx8C0w3vNKhg_ipMnJqQLbmvlZUnzIsyJR-vNIJbZPqYJOoy3YVQ69NoxmiJ2L8&usqp=CAU',
            },
            importAmount: {
                title: 'Số lượng nhập',
                id: 'importAmount',
                content: 1000,
            },
            buyAmount: {
                title: 'Số lượng bán',
                id: 'buyAmount',
                content: 600,
            },
            harvestDay: {
                title: 'Ngày thu hoạch',
                id: 'harvestDay',
                content: formatDate(new Date(2025, 1, 5)),
            },
            packageUnit: {
                title: 'Đơn vị đóng gói (/1 túi)',
                id: 'packageUnit',
                content: 3,
            },
            nutritionalValue: {
                title: 'Giá trị dinh dưỡng (kcal)',
                id: 'nutritionalValue',
                content: 90,
            },
            description: {
                title: 'Mô tả',
                id: 'description',
                content: 'Táo xanh thơm ngon với vị kiwi nhẹ nhàng.',
            },
            numberOfReviews: {
                title: 'Số lượng đánh giá',
                id: 'numberOfReviews',
                content: 120,
            },
            averageReview: {
                title: 'Đánh giá trung bình',
                id: 'averageReview',
                content: 4.6,
            }
        },
        // Product 3: Cà rốt vị đào
        {
            productName: {
                title: 'Tên sản phẩm',
                id: 'productName',
                content: 'Cà rốt vị đào',
            },
            buyPrice: {
                title: 'Giá mua vào',
                id: 'buyPrice',
                content: 13000,
            },
            sellPrice: {
                title: 'Giá bán ra',
                id: 'sellPrice',
                content: 20000,
            },
            linkImage: {
                title: 'Đường dẫn hình ảnh',
                id: 'linkImage',
                content: 'https://steamuserimages-a.akamaihd.net/ugc/2494516115373982215/879054BD8407E52CE26C32E58E28018ABA4BB77B/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
            },
            importAmount: {
                title: 'Số lượng nhập',
                id: 'importAmount',
                content: 900,
            },
            buyAmount: {
                title: 'Số lượng bán',
                id: 'buyAmount',
                content: 700,
            },
            harvestDay: {
                title: 'Ngày thu hoạch',
                id: 'harvestDay',
                content: formatDate(new Date(2025, 3, 1)),
            },
            packageUnit: {
                title: 'Đơn vị đóng gói (/1 túi)',
                id: 'packageUnit',
                content: 2,
            },
            nutritionalValue: {
                title: 'Giá trị dinh dưỡng (kcal)',
                id: 'nutritionalValue',
                content: 120,
            },
            description: {
                title: 'Mô tả',
                id: 'description',
                content: 'Cà rốt tươi kết hợp với hương vị đào ngọt ngào.',
            },
            numberOfReviews: {
                title: 'Số lượng đánh giá',
                id: 'numberOfReviews',
                content: 85,
            },
            averageReview: {
                title: 'Đánh giá trung bình',
                id: 'averageReview',
                content: 4.4,
            }
        },

        // Product 4: Bưởi vị sữa
        {
            productName: {
                title: 'Tên sản phẩm',
                id: 'productName',
                content: 'Bưởi vị sữa',
            },
            buyPrice: {
                title: 'Giá mua vào',
                id: 'buyPrice',
                content: 18000,
            },
            sellPrice: {
                title: 'Giá bán ra',
                id: 'sellPrice',
                content: 25000,
            },
            linkImage: {
                title: 'Đường dẫn hình ảnh',
                id: 'linkImage',
                content: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWlQ9fs_t8bctVt30vxbWmFhxqESuCBEJZRg&s',
            },
            importAmount: {
                title: 'Số lượng nhập',
                id: 'importAmount',
                content: 1100,
            },
            buyAmount: {
                title: 'Số lượng bán',
                id: 'buyAmount',
                content: 850,
            },
            harvestDay: {
                title: 'Ngày thu hoạch',
                id: 'harvestDay',
                content: formatDate(new Date(2025, 2, 15)),
            },
            packageUnit: {
                title: 'Đơn vị đóng gói (/1 túi)',
                id: 'packageUnit',
                content: 4,
            },
            nutritionalValue: {
                title: 'Giá trị dinh dưỡng (kcal)',
                id: 'nutritionalValue',
                content: 160,
            },
            description: {
                title: 'Mô tả',
                id: 'description',
                content: 'Bưởi mọng nước kết hợp cùng vị sữa béo ngậy.',
            },
            numberOfReviews: {
                title: 'Số lượng đánh giá',
                id: 'numberOfReviews',
                content: 95,
            },
            averageReview: {
                title: 'Đánh giá trung bình',
                id: 'averageReview',
                content: 4.7,
            }
        },
        {
            productName: {
                title: 'Tên sản phẩm',
                id: 'productName',
                content: 'Cà chua vị nho',
            },
            buyPrice: {
                title: 'Giá mua vào',
                id: 'buyPrice',
                content: 12000,
            },
            sellPrice: {
                title: 'Giá bán ra',
                id: 'sellPrice',
                content: 18000,
            },
            linkImage: {
                title: 'Đường dẫn hình ảnh',
                id: 'linkImage',
                content: 'https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2022/04/Why-Honkai-Star-Rail-Has-a-Character-Named-March-7th.jpg',
            },
            importAmount: {
                title: 'Số lượng nhập',
                id: 'importAmount',
                content: 800,
            },
            buyAmount: {
                title: 'Số lượng bán',
                id: 'buyAmount',
                content: 0,
            },
            harvestDay: {
                title: 'Ngày thu hoạch',
                id: 'harvestDay',
                content: formatDate(new Date(2025, 2, 10)),
            },
            packageUnit: {
                title: 'Đơn vị đóng gói (/1 túi)',
                id: 'packageUnit',
                content: 2,
            },
            nutritionalValue: {
                title: 'Giá trị dinh dưỡng (kcal)',
                id: 'nutritionalValue',
                content: 150,
            },
            description: {
                title: 'Mô tả',
                id: 'description',
                content: 'Cà chua bi ngọt ngào với vị nho đặc biệt.',
            },
            numberOfReviews: {
                title: 'Số lượng đánh giá',
                id: 'numberOfReviews',
                content: 70,
            },
            averageReview: {
                title: 'Đánh giá trung bình',
                id: 'averageReview',
                content: 4.5,
            }
        },
        // Product 2
        {
            productName: {
                title: 'Tên sản phẩm',
                id: 'productName',
                content: 'Táo xanh vị kiwi',
            },
            buyPrice: {
                title: 'Giá mua vào',
                id: 'buyPrice',
                content: 15000,
            },
            sellPrice: {
                title: 'Giá bán ra',
                id: 'sellPrice',
                content: 22000,
            },
            linkImage: {
                title: 'Đường dẫn hình ảnh',
                id: 'linkImage',
                content: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopgHzgx8C0w3vNKhg_ipMnJqQLbmvlZUnzIsyJR-vNIJbZPqYJOoy3YVQ69NoxmiJ2L8&usqp=CAU',
            },
            importAmount: {
                title: 'Số lượng nhập',
                id: 'importAmount',
                content: 1000,
            },
            buyAmount: {
                title: 'Số lượng bán',
                id: 'buyAmount',
                content: 600,
            },
            harvestDay: {
                title: 'Ngày thu hoạch',
                id: 'harvestDay',
                content: formatDate(new Date(2025, 1, 5)),
            },
            packageUnit: {
                title: 'Đơn vị đóng gói (/1 túi)',
                id: 'packageUnit',
                content: 3,
            },
            nutritionalValue: {
                title: 'Giá trị dinh dưỡng (kcal)',
                id: 'nutritionalValue',
                content: 90,
            },
            description: {
                title: 'Mô tả',
                id: 'description',
                content: 'Táo xanh thơm ngon với vị kiwi nhẹ nhàng.',
            },
            numberOfReviews: {
                title: 'Số lượng đánh giá',
                id: 'numberOfReviews',
                content: 120,
            },
            averageReview: {
                title: 'Đánh giá trung bình',
                id: 'averageReview',
                content: 4.6,
            }
        },
        // Product 3: Cà rốt vị đào
        {
            productName: {
                title: 'Tên sản phẩm',
                id: 'productName',
                content: 'Cà rốt vị đào',
            },
            buyPrice: {
                title: 'Giá mua vào',
                id: 'buyPrice',
                content: 13000,
            },
            sellPrice: {
                title: 'Giá bán ra',
                id: 'sellPrice',
                content: 20000,
            },
            linkImage: {
                title: 'Đường dẫn hình ảnh',
                id: 'linkImage',
                content: 'https://steamuserimages-a.akamaihd.net/ugc/2494516115373982215/879054BD8407E52CE26C32E58E28018ABA4BB77B/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
            },
            importAmount: {
                title: 'Số lượng nhập',
                id: 'importAmount',
                content: 900,
            },
            buyAmount: {
                title: 'Số lượng bán',
                id: 'buyAmount',
                content: 700,
            },
            harvestDay: {
                title: 'Ngày thu hoạch',
                id: 'harvestDay',
                content: formatDate(new Date(2025, 3, 1)),
            },
            packageUnit: {
                title: 'Đơn vị đóng gói (/1 túi)',
                id: 'packageUnit',
                content: 2,
            },
            nutritionalValue: {
                title: 'Giá trị dinh dưỡng (kcal)',
                id: 'nutritionalValue',
                content: 120,
            },
            description: {
                title: 'Mô tả',
                id: 'description',
                content: 'Cà rốt tươi kết hợp với hương vị đào ngọt ngào.',
            },
            numberOfReviews: {
                title: 'Số lượng đánh giá',
                id: 'numberOfReviews',
                content: 85,
            },
            averageReview: {
                title: 'Đánh giá trung bình',
                id: 'averageReview',
                content: 4.4,
            }
        },

        // Product 4: Bưởi vị sữa
        {
            productName: {
                title: 'Tên sản phẩm',
                id: 'productName',
                content: 'Bưởi vị sữa',
            },
            buyPrice: {
                title: 'Giá mua vào',
                id: 'buyPrice',
                content: 18000,
            },
            sellPrice: {
                title: 'Giá bán ra',
                id: 'sellPrice',
                content: 25000,
            },
            linkImage: {
                title: 'Đường dẫn hình ảnh',
                id: 'linkImage',
                content: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWlQ9fs_t8bctVt30vxbWmFhxqESuCBEJZRg&s',
            },
            importAmount: {
                title: 'Số lượng nhập',
                id: 'importAmount',
                content: 1100,
            },
            buyAmount: {
                title: 'Số lượng bán',
                id: 'buyAmount',
                content: 850,
            },
            harvestDay: {
                title: 'Ngày thu hoạch',
                id: 'harvestDay',
                content: formatDate(new Date(2025, 2, 15)),
            },
            packageUnit: {
                title: 'Đơn vị đóng gói (/1 túi)',
                id: 'packageUnit',
                content: 4,
            },
            nutritionalValue: {
                title: 'Giá trị dinh dưỡng (kcal)',
                id: 'nutritionalValue',
                content: 160,
            },
            description: {
                title: 'Mô tả',
                id: 'description',
                content: 'Bưởi mọng nước kết hợp cùng vị sữa béo ngậy.',
            },
            numberOfReviews: {
                title: 'Số lượng đánh giá',
                id: 'numberOfReviews',
                content: 95,
            },
            averageReview: {
                title: 'Đánh giá trung bình',
                id: 'averageReview',
                content: 4.7,
            }
        },
        {
            productName: {
                title: 'Tên sản phẩm',
                id: 'productName',
                content: 'Cà chua vị nho',
            },
            buyPrice: {
                title: 'Giá mua vào',
                id: 'buyPrice',
                content: 12000,
            },
            sellPrice: {
                title: 'Giá bán ra',
                id: 'sellPrice',
                content: 18000,
            },
            linkImage: {
                title: 'Đường dẫn hình ảnh',
                id: 'linkImage',
                content: 'https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2022/04/Why-Honkai-Star-Rail-Has-a-Character-Named-March-7th.jpg',
            },
            importAmount: {
                title: 'Số lượng nhập',
                id: 'importAmount',
                content: 800,
            },
            buyAmount: {
                title: 'Số lượng bán',
                id: 'buyAmount',
                content: 0,
            },
            harvestDay: {
                title: 'Ngày thu hoạch',
                id: 'harvestDay',
                content: formatDate(new Date(2025, 2, 10)),
            },
            packageUnit: {
                title: 'Đơn vị đóng gói (/1 túi)',
                id: 'packageUnit',
                content: 2,
            },
            nutritionalValue: {
                title: 'Giá trị dinh dưỡng (kcal)',
                id: 'nutritionalValue',
                content: 150,
            },
            description: {
                title: 'Mô tả',
                id: 'description',
                content: 'Cà chua bi ngọt ngào với vị nho đặc biệt.',
            },
            numberOfReviews: {
                title: 'Số lượng đánh giá',
                id: 'numberOfReviews',
                content: 70,
            },
            averageReview: {
                title: 'Đánh giá trung bình',
                id: 'averageReview',
                content: 4.5,
            }
        },
        // Product 2
        {
            productName: {
                title: 'Tên sản phẩm',
                id: 'productName',
                content: 'Táo xanh vị kiwi',
            },
            buyPrice: {
                title: 'Giá mua vào',
                id: 'buyPrice',
                content: 15000,
            },
            sellPrice: {
                title: 'Giá bán ra',
                id: 'sellPrice',
                content: 22000,
            },
            linkImage: {
                title: 'Đường dẫn hình ảnh',
                id: 'linkImage',
                content: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopgHzgx8C0w3vNKhg_ipMnJqQLbmvlZUnzIsyJR-vNIJbZPqYJOoy3YVQ69NoxmiJ2L8&usqp=CAU',
            },
            importAmount: {
                title: 'Số lượng nhập',
                id: 'importAmount',
                content: 1000,
            },
            buyAmount: {
                title: 'Số lượng bán',
                id: 'buyAmount',
                content: 600,
            },
            harvestDay: {
                title: 'Ngày thu hoạch',
                id: 'harvestDay',
                content: formatDate(new Date(2025, 1, 5)),
            },
            packageUnit: {
                title: 'Đơn vị đóng gói (/1 túi)',
                id: 'packageUnit',
                content: 3,
            },
            nutritionalValue: {
                title: 'Giá trị dinh dưỡng (kcal)',
                id: 'nutritionalValue',
                content: 90,
            },
            description: {
                title: 'Mô tả',
                id: 'description',
                content: 'Táo xanh thơm ngon với vị kiwi nhẹ nhàng.',
            },
            numberOfReviews: {
                title: 'Số lượng đánh giá',
                id: 'numberOfReviews',
                content: 120,
            },
            averageReview: {
                title: 'Đánh giá trung bình',
                id: 'averageReview',
                content: 4.6,
            }
        },
        // Product 3: Cà rốt vị đào
        {
            productName: {
                title: 'Tên sản phẩm',
                id: 'productName',
                content: 'Cà rốt vị đào',
            },
            buyPrice: {
                title: 'Giá mua vào',
                id: 'buyPrice',
                content: 13000,
            },
            sellPrice: {
                title: 'Giá bán ra',
                id: 'sellPrice',
                content: 20000,
            },
            linkImage: {
                title: 'Đường dẫn hình ảnh',
                id: 'linkImage',
                content: 'https://steamuserimages-a.akamaihd.net/ugc/2494516115373982215/879054BD8407E52CE26C32E58E28018ABA4BB77B/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
            },
            importAmount: {
                title: 'Số lượng nhập',
                id: 'importAmount',
                content: 900,
            },
            buyAmount: {
                title: 'Số lượng bán',
                id: 'buyAmount',
                content: 700,
            },
            harvestDay: {
                title: 'Ngày thu hoạch',
                id: 'harvestDay',
                content: formatDate(new Date(2025, 3, 1)),
            },
            packageUnit: {
                title: 'Đơn vị đóng gói (/1 túi)',
                id: 'packageUnit',
                content: 2,
            },
            nutritionalValue: {
                title: 'Giá trị dinh dưỡng (kcal)',
                id: 'nutritionalValue',
                content: 120,
            },
            description: {
                title: 'Mô tả',
                id: 'description',
                content: 'Cà rốt tươi kết hợp với hương vị đào ngọt ngào.',
            },
            numberOfReviews: {
                title: 'Số lượng đánh giá',
                id: 'numberOfReviews',
                content: 85,
            },
            averageReview: {
                title: 'Đánh giá trung bình',
                id: 'averageReview',
                content: 4.4,
            }
        },

        // Product 4: Bưởi vị sữa
        {
            productName: {
                title: 'Tên sản phẩm',
                id: 'productName',
                content: 'Bưởi vị sữa',
            },
            buyPrice: {
                title: 'Giá mua vào',
                id: 'buyPrice',
                content: 18000,
            },
            sellPrice: {
                title: 'Giá bán ra',
                id: 'sellPrice',
                content: 25000,
            },
            linkImage: {
                title: 'Đường dẫn hình ảnh',
                id: 'linkImage',
                content: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWlQ9fs_t8bctVt30vxbWmFhxqESuCBEJZRg&s',
            },
            importAmount: {
                title: 'Số lượng nhập',
                id: 'importAmount',
                content: 1100,
            },
            buyAmount: {
                title: 'Số lượng bán',
                id: 'buyAmount',
                content: 850,
            },
            harvestDay: {
                title: 'Ngày thu hoạch',
                id: 'harvestDay',
                content: formatDate(new Date(2025, 2, 15)),
            },
            packageUnit: {
                title: 'Đơn vị đóng gói (/1 túi)',
                id: 'packageUnit',
                content: 4,
            },
            nutritionalValue: {
                title: 'Giá trị dinh dưỡng (kcal)',
                id: 'nutritionalValue',
                content: 160,
            },
            description: {
                title: 'Mô tả',
                id: 'description',
                content: 'Bưởi mọng nước kết hợp cùng vị sữa béo ngậy.',
            },
            numberOfReviews: {
                title: 'Số lượng đánh giá',
                id: 'numberOfReviews',
                content: 95,
            },
            averageReview: {
                title: 'Đánh giá trung bình',
                id: 'averageReview',
                content: 4.7,
            }
        },
        {
            productName: {
                title: 'Tên sản phẩm',
                id: 'productName',
                content: 'Cà chua vị nho',
            },
            buyPrice: {
                title: 'Giá mua vào',
                id: 'buyPrice',
                content: 12000,
            },
            sellPrice: {
                title: 'Giá bán ra',
                id: 'sellPrice',
                content: 18000,
            },
            linkImage: {
                title: 'Đường dẫn hình ảnh',
                id: 'linkImage',
                content: 'https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2022/04/Why-Honkai-Star-Rail-Has-a-Character-Named-March-7th.jpg',
            },
            importAmount: {
                title: 'Số lượng nhập',
                id: 'importAmount',
                content: 800,
            },
            buyAmount: {
                title: 'Số lượng bán',
                id: 'buyAmount',
                content: 0,
            },
            harvestDay: {
                title: 'Ngày thu hoạch',
                id: 'harvestDay',
                content: formatDate(new Date(2025, 2, 10)),
            },
            packageUnit: {
                title: 'Đơn vị đóng gói (/1 túi)',
                id: 'packageUnit',
                content: 2,
            },
            nutritionalValue: {
                title: 'Giá trị dinh dưỡng (kcal)',
                id: 'nutritionalValue',
                content: 150,
            },
            description: {
                title: 'Mô tả',
                id: 'description',
                content: 'Cà chua bi ngọt ngào với vị nho đặc biệt.',
            },
            numberOfReviews: {
                title: 'Số lượng đánh giá',
                id: 'numberOfReviews',
                content: 70,
            },
            averageReview: {
                title: 'Đánh giá trung bình',
                id: 'averageReview',
                content: 4.5,
            }
        },
        // Product 2
        {
            productName: {
                title: 'Tên sản phẩm',
                id: 'productName',
                content: 'Táo xanh vị kiwi',
            },
            buyPrice: {
                title: 'Giá mua vào',
                id: 'buyPrice',
                content: 15000,
            },
            sellPrice: {
                title: 'Giá bán ra',
                id: 'sellPrice',
                content: 22000,
            },
            linkImage: {
                title: 'Đường dẫn hình ảnh',
                id: 'linkImage',
                content: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopgHzgx8C0w3vNKhg_ipMnJqQLbmvlZUnzIsyJR-vNIJbZPqYJOoy3YVQ69NoxmiJ2L8&usqp=CAU',
            },
            importAmount: {
                title: 'Số lượng nhập',
                id: 'importAmount',
                content: 1000,
            },
            buyAmount: {
                title: 'Số lượng bán',
                id: 'buyAmount',
                content: 600,
            },
            harvestDay: {
                title: 'Ngày thu hoạch',
                id: 'harvestDay',
                content: formatDate(new Date(2025, 1, 5)),
            },
            packageUnit: {
                title: 'Đơn vị đóng gói (/1 túi)',
                id: 'packageUnit',
                content: 3,
            },
            nutritionalValue: {
                title: 'Giá trị dinh dưỡng (kcal)',
                id: 'nutritionalValue',
                content: 90,
            },
            description: {
                title: 'Mô tả',
                id: 'description',
                content: 'Táo xanh thơm ngon với vị kiwi nhẹ nhàng.',
            },
            numberOfReviews: {
                title: 'Số lượng đánh giá',
                id: 'numberOfReviews',
                content: 120,
            },
            averageReview: {
                title: 'Đánh giá trung bình',
                id: 'averageReview',
                content: 4.6,
            }
        },
        // Product 3: Cà rốt vị đào
        {
            productName: {
                title: 'Tên sản phẩm',
                id: 'productName',
                content: 'Cà rốt vị đào',
            },
            buyPrice: {
                title: 'Giá mua vào',
                id: 'buyPrice',
                content: 13000,
            },
            sellPrice: {
                title: 'Giá bán ra',
                id: 'sellPrice',
                content: 20000,
            },
            linkImage: {
                title: 'Đường dẫn hình ảnh',
                id: 'linkImage',
                content: 'https://steamuserimages-a.akamaihd.net/ugc/2494516115373982215/879054BD8407E52CE26C32E58E28018ABA4BB77B/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
            },
            importAmount: {
                title: 'Số lượng nhập',
                id: 'importAmount',
                content: 900,
            },
            buyAmount: {
                title: 'Số lượng bán',
                id: 'buyAmount',
                content: 700,
            },
            harvestDay: {
                title: 'Ngày thu hoạch',
                id: 'harvestDay',
                content: formatDate(new Date(2025, 3, 1)),
            },
            packageUnit: {
                title: 'Đơn vị đóng gói (/1 túi)',
                id: 'packageUnit',
                content: 2,
            },
            nutritionalValue: {
                title: 'Giá trị dinh dưỡng (kcal)',
                id: 'nutritionalValue',
                content: 120,
            },
            description: {
                title: 'Mô tả',
                id: 'description',
                content: 'Cà rốt tươi kết hợp với hương vị đào ngọt ngào.',
            },
            numberOfReviews: {
                title: 'Số lượng đánh giá',
                id: 'numberOfReviews',
                content: 85,
            },
            averageReview: {
                title: 'Đánh giá trung bình',
                id: 'averageReview',
                content: 4.4,
            }
        },

        // Product 4: Bưởi vị sữa
        {
            productName: {
                title: 'Tên sản phẩm',
                id: 'productName',
                content: 'Bưởi vị sữa',
            },
            buyPrice: {
                title: 'Giá mua vào',
                id: 'buyPrice',
                content: 18000,
            },
            sellPrice: {
                title: 'Giá bán ra',
                id: 'sellPrice',
                content: 25000,
            },
            linkImage: {
                title: 'Đường dẫn hình ảnh',
                id: 'linkImage',
                content: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWlQ9fs_t8bctVt30vxbWmFhxqESuCBEJZRg&s',
            },
            importAmount: {
                title: 'Số lượng nhập',
                id: 'importAmount',
                content: 1100,
            },
            buyAmount: {
                title: 'Số lượng bán',
                id: 'buyAmount',
                content: 850,
            },
            harvestDay: {
                title: 'Ngày thu hoạch',
                id: 'harvestDay',
                content: formatDate(new Date(2025, 2, 15)),
            },
            packageUnit: {
                title: 'Đơn vị đóng gói (/1 túi)',
                id: 'packageUnit',
                content: 4,
            },
            nutritionalValue: {
                title: 'Giá trị dinh dưỡng (kcal)',
                id: 'nutritionalValue',
                content: 160,
            },
            description: {
                title: 'Mô tả',
                id: 'description',
                content: 'Bưởi mọng nước kết hợp cùng vị sữa béo ngậy.',
            },
            numberOfReviews: {
                title: 'Số lượng đánh giá',
                id: 'numberOfReviews',
                content: 95,
            },
            averageReview: {
                title: 'Đánh giá trung bình',
                id: 'averageReview',
                content: 4.7,
            }
        }

    ];
    


  return (
    <div className="flex flex-col items-center justify-start relative w-screen h-full bg-[#FFF4EE] py-20">
        <nav>
            NAVBAR: ...
        </nav>
        <div className='w-[90%] flex items-center justify-center gap-12'>
            <Category/>
            <FilterCell/>
            <AddProductButton/>
        </div>
        <div className='grid grid-cols-5 gap-12 pt-3'>
            {
                products.map((product, index) => {
                    if(product.buyAmount.content === 0) return <ItemSupplierGray key={index} item={product}/>
                    else return <ItemSupplier key={index} item={product}/>
                })
            }
        </div>
        
    </div>
  )
}

export default StockPage
