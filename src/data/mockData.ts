// User Data
export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@email.com",
    role: "Admin",
    registrationDate: "2022-01-15",
    imageUrl: "JohnDoe.jpg"
    
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@email.com",
    role: "Moderator",
    registrationDate: "2022-03-20",
    imageUrl: "JaneSmith.jpg"
    
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@email.com",
    role: "Customer",
    registrationDate: "2022-05-10",
    imageUrl: "MichaelJohnson.jpg"
  },
];

// Product Data
export const products = [
  {
    id: 1,
    productName: "Laptop",
    sku: "LAP123",
    price: 899.99,
    stock: 50,
    category: "Electronics",
    createdDate: "2022-02-10",
  },
  {
    id: 2,
    productName: "Smartphone",
    sku: "PHONE456",
    price: 499.99,
    stock: 30,
    category: "Electronics",
    createdDate: "2022-03-05",
  },
  {
    id: 3,
    productName: "T-Shirt",
    sku: "TSHIRT789",
    price: 19.99,
    stock: 100,
    category: "Clothing",
    createdDate: "2022-04-15",
  },
];

// Order Data
export const orders = [
  {
    id: 1,
    orderId: "ORD123",
    userId: 1, 
    date: "2022-06-12",
    totalAmount: 1199.98,
    status: "Shipped",
  },
  {
    id: 2,
    orderId: "ORD456",
    userId: 3,
    date: "2022-07-25",
    totalAmount: 499.99,
    status: "Delivered",
  },
  {
    id: 3,
    orderId: "ORD789",
    userId: 2,
    date: "2022-08-05",
    totalAmount: 59.97,
    status: "Completed",
  },
];
