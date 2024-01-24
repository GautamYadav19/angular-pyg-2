create database ecommerce;
--  drop database ecommerce;

use ecommerce;

create table Image_Table(
image_ID int primary key auto_increment not null,
path varchar(255),
created_at timestamp,
modified_at timestamp,
deleted_at timestamp
);

create table TablesFormate_Table(
tableFormateId int primary key auto_increment not null,
headerName text ,
description text,
created_at timestamp,
modified_at timestamp,
deleted_at timestamp
);
create table ListFormate_Table(
listFormateId int primary key auto_increment not null,
description text,
created_at timestamp,
modified_at timestamp,
deleted_at timestamp
);

create table Description_Table(
description_ID int primary key auto_increment not null,
tableFormateId int not null,
listFormateId int not null,
created_at timestamp,
modified_at timestamp,
deleted_at timestamp,
foreign key (tableFormateId) references TablesFormate_Table(tableFormateId) ,
foreign key (listFormateId) references ListFormate_Table(listFormateId)
);

create table Price_compare_table(
price_compare_ID int primary key auto_increment not null,
fixedPrice float not null,
fackPrice int not null,
created_at timestamp,
modified_at timestamp,
deleted_at timestamp
);
create table Product_Inventory(
inventory_ID int primary key auto_increment not null,
quantity int not null,
warranty int ,
created_at timestamp,
modified_at timestamp,
deleted_at timestamp
);

create table discount_table(
discount_ID int primary key auto_increment not null,
name varchar(255) not null,
discount_percentage decimal not null,
active boolean not null,
created_at timestamp,
modified_at timestamp,
deleted_at timestamp
 );
create table Product_Category(
category_id int primary key auto_increment not null,
name varchar(255) not null,
description text ,
created_at timestamp,
modified_at timestamp,
deleted_at timestamp
);

create table Product_table(
product_ID int primary key auto_increment not null,
name varchar(255) not null,
description_ID int not null,
category_id int not null,
inventory_ID int not null,
price_compare_ID int not null ,
discount_ID int not null,
image_ID int not null,
created_at timestamp,
modified_at timestamp,
deleted_at timestamp,
foreign key (description_ID) references Description_Table(description_ID),
foreign key (category_id) references Product_Category(category_id) ,
foreign key (inventory_ID) references Product_Inventory(inventory_ID),
foreign key (price_compare_ID) references Price_compare_table(price_compare_ID),
foreign key (discount_ID) references discount_table(discount_ID),
foreign key (image_ID) references Image_Table(image_ID)
);

create table RelativeProductTable(
relativeProductId int primary key auto_increment not null,
product_ID int not null,
relative_Product_id int not null,
foreign key (product_ID) references Product_table(product_ID)
); 

create table user(
user_ID int primary key auto_increment not null,
username varchar(255) not null,
password text not null,
first_name varchar(255) not null,
last_name varchar (255),
telephone varchar(15) not null,
whatsapp_no varchar(15),
created_at timestamp,
modified_at timestamp
);

create table user_address(
user_address_id int not null primary key auto_increment,
user_ID int not null,
address_line1 varchar(255),
address_line2 varchar(255),
city varchar(50),
postal_code varchar(25),
country varchar(15),
foreign key(user_ID) references user(user_ID)
);

create table Order_details(
order_details_Id int primary key auto_increment not null,
user_ID int not null,
total decimal not null,
payment_ID int not null,
created_at timestamp,
modified_at timestamp,
foreign key(user_ID) references user(user_ID)
);

create table Order_items(
order_items_Id int primary key auto_increment not null,
product_ID int not null,
order_details_Id int not null,
quantity int not null,
created_at timestamp,
modified_at timestamp,
foreign key (product_ID) references Product_table(product_ID),
foreign key (order_details_Id) references Order_details(order_details_Id)
);

create table cart_item(
cart_item_id int primary key auto_increment not null,
product_ID int not null,
quantity int ,
created_at timestamp,
modified_at timestamp,
foreign key (product_ID) references Product_table(product_ID)
);

create table user_payment(
user_payment_ID  int primary key auto_increment not null,
 user_ID int not null,
payment_type varchar(35),
foreign key (user_ID) references user(user_ID)
);
create table payment_details(
payment_details_id  int primary key auto_increment not null,
order_details_Id int not null,
amount int not null,
provider varchar(255),
status varchar(35) not null,
created_at timestamp,
modified_at timestamp,
foreign key (order_details_Id) references Order_details(order_details_Id)
);
CREATE TABLE shipping_details (
    shipping_detail_id INT AUTO_INCREMENT PRIMARY KEY,
    order_details_Id INT NOT NULL,
    user_ID  INT NOT NULL,
    shipping_method VARCHAR(255) NOT NULL,
    shipping_cost DECIMAL(10, 2) NOT NULL,
    shipping_date TIMESTAMP,
    FOREIGN KEY (order_details_Id) REFERENCES Order_details(order_details_Id),
    FOREIGN KEY (user_ID ) REFERENCES user(user_ID)
);

-- Create a table to manage user wishlists and favorites
CREATE TABLE user_wishlists (
    wishlist_id INT AUTO_INCREMENT PRIMARY KEY,
    user_ID INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_ID) REFERENCES user(user_ID)
);

-- Create a table to track user sessions
CREATE TABLE user_sessions (
    session_id INT AUTO_INCREMENT primary KEY,
    user_ID INT NOT NULL,
    session_start TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    session_end TIMESTAMP,
    FOREIGN KEY (user_ID) REFERENCES user(user_ID)
);

-- Create a table to store customer reviews and feedback
CREATE TABLE customer_reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    user_ID INT NOT NULL,
    product_id INT NOT NULL,
    rating INT NOT NULL,
    review_text TEXT,
    review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_ID) REFERENCES user(user_ID),
    FOREIGN KEY (product_ID) REFERENCES Product_table(product_ID)
);

-- Create a table to store return requests
CREATE TABLE return_requests (
    return_request_id INT AUTO_INCREMENT PRIMARY KEY,
   order_details_Id INT NOT NULL,
    user_ID INT NOT NULL,
    reason TEXT NOT NULL,
    request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_details_Id) REFERENCES Order_details(order_details_Id),
  FOREIGN KEY (user_ID) REFERENCES user(user_ID)
);
-- Create a table to store order statuses
CREATE TABLE order_statuses (
    status_id INT AUTO_INCREMENT PRIMARY KEY,
    status_name VARCHAR(255) NOT NULL
);

-- Create a table to store order status history
CREATE TABLE order_status_history (
    status_history_id INT AUTO_INCREMENT PRIMARY KEY,
    order_details_Id INT NOT NULL,
    status_id INT NOT NULL,
    status_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_details_Id) REFERENCES Order_details(order_details_Id),
    FOREIGN KEY (status_id) REFERENCES order_statuses(status_id)
);

-- Create a table to track user interactions for predictive analytics ++
CREATE TABLE user_interactions (
    interaction_id INT AUTO_INCREMENT PRIMARY KEY,
    user_ID INT NOT NULL,
    product_id INT NOT NULL,
    interaction_type ENUM('view', 'add_to_cart', 'purchase', 'like', 'dislike') NOT NULL,
    interaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     FOREIGN KEY (user_ID) REFERENCES user(user_ID),
    FOREIGN KEY (product_ID) REFERENCES Product_table(product_ID)
);

-- Create a table to store product recommendations
CREATE TABLE product_recommendations (			
    recommendation_id INT AUTO_INCREMENT PRIMARY KEY,
    user_ID INT NOT NULL,
    recommended_product_id INT NOT NULL,
   FOREIGN KEY (user_ID) REFERENCES user(user_ID),
    FOREIGN KEY (recommended_product_id) REFERENCES Product_table(product_ID)
);

-- Dummy data for Image_Table
INSERT INTO Image_Table (path, created_at, modified_at, deleted_at) VALUES
('/images/product1.jpg', NOW(), NOW(), NULL),
('/images/product2.jpg', NOW(), NOW(), NULL),
('/images/product3.jpg', NOW(), NOW(), NULL),
('/images/product4.jpg', NOW(), NOW(), NULL),
('/images/product5.jpg', NOW(), NOW(), NULL);

-- Dummy data for TablesFormate_Table
INSERT INTO TablesFormate_Table (headerName, description, created_at, modified_at, deleted_at) VALUES
('Product Specs', 'Detailed specifications for each product', NOW(), NOW(), NULL),
('Product Features', 'Key features of each product', NOW(), NOW(), NULL),
('Warranty Info', 'Warranty information for each product', NOW(), NOW(), NULL);

-- Dummy data for ListFormate_Table
INSERT INTO ListFormate_Table (description, created_at, modified_at, deleted_at) VALUES
('Package includes: router, power adapter, user manual', NOW(), NOW(), NULL),
('Compatibility: Windows, Mac, Linux', NOW(), NOW(), NULL),
('Additional Accessories: Ethernet cable', NOW(), NOW(), NULL);


-- Dummy data for Description_Table
INSERT INTO Description_Table (tableFormateId, listFormateId, created_at, modified_at, deleted_at) VALUES
(1, 2, NOW(), NOW(), NULL),
(2, 3, NOW(), NOW(), NULL),
(1, 1, NOW(), NOW(), NULL),
(2, 2, NOW(), NOW(), NULL),
(1, 3, NOW(), NOW(), NULL);

-- Dummy data for Price_compare_table
INSERT INTO Price_compare_table (fixedPrice, fackPrice, created_at, modified_at, deleted_at) VALUES
(149.99, 129.99, NOW(), NOW(), NULL),
(199.99, 189.99, NOW(), NOW(), NULL),
(99.99, 79.99, NOW(), NOW(), NULL),
(149.99, 139.99, NOW(), NOW(), NULL),
(69.99, 59.99, NOW(), NOW(), NULL);

-- Dummy data for Product_Inventory
INSERT INTO Product_Inventory (quantity, warranty, created_at, modified_at, deleted_at) VALUES
(100, 12, NOW(), NOW(), NULL),
(50, 6, NOW(), NOW(), NULL),
(200, 24, NOW(), NOW(), NULL),
(75, 12, NOW(), NOW(), NULL),
(150, 18, NOW(), NOW(), NULL);

-- Dummy data for discount_table
INSERT INTO discount_table (name, discount_percentage, active, created_at, modified_at, deleted_at) VALUES
('Summer Sale', 15.00, true, NOW(), NOW(), NULL),
('Back-to-School', 10.00, true, NOW(), NOW(), NULL),
('Holiday Special', 20.00, true, NOW(), NOW(), NULL),
('Clearance', 30.00, true, NOW(), NOW(), NULL),
('New Customer Discount', 5.00, true, NOW(), NOW(), NULL);

-- Dummy data for Product_Category
INSERT INTO Product_Category (name, description, created_at, modified_at, deleted_at) VALUES
('Routers', 'Various types of routers for home and office use', NOW(), NOW(), NULL),
('Networking Accessories', 'Accessories like patch cords and adapters', NOW(), NOW(), NULL);

-- Dummy data for Product_table
INSERT INTO Product_table (name, description_ID, category_id, inventory_ID, price_compare_ID, discount_ID, image_ID, created_at, modified_at, deleted_at) VALUES
('Syrotech Singleband Router', 1, 1, 1, 1, 1, 1, NOW(), NOW(), NULL),
('Syrotech Dualband Router', 2, 1, 2, 2, 2, 2, NOW(), NOW(), NULL),
('Tenda N301 Router', 3, 1, 3, 3, 3, 3, NOW(), NOW(), NULL),
('Tenda Ac5 Router', 4, 1, 4, 4, 4, 4, NOW(), NOW(), NULL),
('Cisco Patchcord', 5, 2, 5, 5, 5, 5, NOW(), NOW(), NULL),
('RMG Adapter', 4, 2, 1, 1, 1, 1, NOW(), NOW(), NULL);

-- Dummy data for RelativeProductTable
INSERT INTO RelativeProductTable (product_ID, relative_Product_id) VALUES
(1, 2),
(3, 4),
(1, 3),
(2, 6);

-- Dummy data for user
INSERT INTO user (username, password, first_name, last_name, telephone, whatsapp_no, created_at, modified_at) VALUES
('john_doe', 'password123', 'John', 'Doe', '123456789', '987654321', NOW(), NOW()),
('jane_smith', 'pass456', 'Jane', 'Smith', '987654321', NULL, NOW(), NOW());

-- Dummy data for user_address
INSERT INTO user_address (user_ID, address_line1, address_line2, city, postal_code, country) VALUES
(1, '123 Main St', 'Apt 4B', 'Cityville', '12345', 'USA'),
(2, '456 Oak St', NULL, 'Townsville', '54321', 'USA');

-- Dummy data for Order_details
INSERT INTO Order_details (user_ID, total, payment_ID, created_at, modified_at) VALUES
(1, 249.99, 1, NOW(), NOW()),
(2, 169.99, 2, NOW(), NOW());

-- Dummy data for Order_items
INSERT INTO Order_items (product_ID, order_details_Id, quantity, created_at, modified_at) VALUES
(1, 1, 1, NOW(), NOW()),
(2, 1, 2, NOW(), NOW()),
(3, 2, 1, NOW(), NOW());

-- Dummy data for cart_item 
INSERT INTO cart_item (product_ID, quantity, created_at, modified_at) VALUES
(1, 1, NOW(), NOW()),
(4, 3, NOW(), NOW()),
(6, 2, NOW(), NOW());

-- Dummy data for user_payment
INSERT INTO user_payment (user_ID, payment_type) VALUES
(1, 'Credit Card'),
(2, 'PayPal');

-- Dummy data for payment_details
INSERT INTO payment_details (order_details_Id, amount, provider, status, created_at, modified_at) VALUES
(1, 249.99, 'Stripe', 'Completed', NOW(), NOW()),
(2, 169.99, 'PayPal', 'Pending', NOW(), NOW());

-- Insert dummy data into the shipping_details table
INSERT INTO shipping_details (order_details_Id, user_ID, shipping_method, shipping_cost, shipping_date)
VALUES
    (1, 1, 'Standard Shipping', 5.99, '2023-01-01 12:00:00'),
    (2, 2, 'Express Shipping', 10.99, '2023-01-02 14:30:00');
   

-- Insert dummy data into the user_wishlists table
INSERT INTO user_wishlists (user_ID, name)
VALUES
    (1, 'My Wishlist'),
    (2, 'Favorites'),
    (1, 'Tech Gadgets');

-- Insert dummy data into the user_sessions table
INSERT INTO user_sessions (user_ID, session_end)
VALUES
    (1, '2023-01-01 15:00:00'),
    (2, '2023-01-02 18:45:00'),
    (1, '2023-01-03 12:30:00');

-- Insert dummy data into the customer_reviews table
INSERT INTO customer_reviews (user_ID, product_id, rating, review_text, review_date)
VALUES
    (1, 1, 4, 'Great product, fast delivery!', '2023-01-01 08:00:00'),
    (2, 2, 5, 'Excellent quality and service!', '2023-01-02 10:30:00'),
    (1, 3, 3, 'Not as expected, but decent.', '2023-01-03 14:15:00');

-- Insert dummy data into the return_requests table
INSERT INTO return_requests (order_details_Id, user_ID, reason, request_date)
VALUES
    (1, 1, 'Product damaged upon arrival', '2023-01-01 16:30:00'),
    (2, 2, 'Changed my mind, want a refund', '2023-01-02 20:45:00');
    

-- Insert dummy data into the order_statuses table
INSERT INTO order_statuses (status_name)
VALUES
    ('Processing'),
    ('Shipped'),
    ('Delivered');

-- Insert dummy data into the order_status_history table
INSERT INTO order_status_history (order_details_Id, status_id, status_date)
VALUES
    (1, 1, '2023-01-01 09:00:00'),
    (2, 2, '2023-01-02 11:30:00');
    

-- Insert dummy data into the user_interactions table
INSERT INTO user_interactions (user_ID, product_id, interaction_type, interaction_date)
VALUES
    (1, 1, 'view', '2023-01-01 10:00:00'),
    (2, 2, 'add_to_cart', '2023-01-02 12:15:00'),
    (1, 3, 'purchase', '2023-01-03 14:30:00');

-- Insert dummy data into the product_recommendations table
INSERT INTO product_recommendations (user_ID, recommended_product_id)
VALUES
    (1, 2),
    (2, 1),
    (1, 3);

 SELECT
    i.image_ID,
    i.path AS image_path,
    i.created_at AS image_created_at,
    i.modified_at AS image_modified_at,
    tf.tableFormateId,
    tf.headerName,
    tf.description AS table_description,
    tf.created_at AS table_created_at,
    tf.modified_at AS table_modified_at,
    lf.listFormateId,
    lf.description AS list_description,
    lf.created_at AS list_created_at,
    lf.modified_at AS list_modified_at,
    d.description_ID,
    d.tableFormateId AS desc_table_format_id,
    d.listFormateId AS desc_list_format_id,
    d.created_at AS desc_created_at,
    d.modified_at AS desc_modified_at,
    p.price_compare_ID,
    p.fixedPrice,
    p.fackPrice,
    p.created_at AS price_created_at,
    p.modified_at AS price_modified_at,
    inv.inventory_ID,
    inv.quantity AS inventory_quantity,
    inv.warranty AS inventory_warranty,
    inv.created_at AS inventory_created_at,
    inv.modified_at AS inventory_modified_at,
    dt.discount_ID,
    dt.name AS discount_name,
    dt.discount_percentage,
    dt.active AS discount_active,
    dt.created_at AS discount_created_at,
    dt.modified_at AS discount_modified_at,
    pc.category_id,
    pc.name AS category_name,
    pc.description AS category_description,
    pc.created_at AS category_created_at,
    pc.modified_at AS category_modified_at,
    prod.product_ID,
    prod.name AS product_name,
    prod.description_ID AS product_desc_id,
    prod.category_id AS product_category_id,
    prod.inventory_ID AS product_inventory_id,
    prod.price_compare_ID AS product_price_id,
    prod.discount_ID AS product_discount_id,
    prod.image_ID AS product_image_id,
    prod.created_at AS product_created_at,
    prod.modified_at AS product_modified_at,
    r.relativeProductId,
    r.product_ID AS relative_product_id,
    r.relative_Product_id AS relative_product_id
FROM
    Image_Table i
JOIN TablesFormate_Table tf ON i.image_ID = tf.tableFormateId
JOIN ListFormate_Table lf ON i.image_ID = lf.listFormateId
JOIN Description_Table d ON i.image_ID = d.description_ID
JOIN Price_compare_table p ON i.image_ID = p.price_compare_ID
JOIN Product_Inventory inv ON i.image_ID = inv.inventory_ID
JOIN discount_table dt ON i.image_ID = dt.discount_ID
JOIN Product_Category pc ON i.image_ID = pc.category_id
JOIN Product_table prod ON i.image_ID = prod.product_ID
JOIN RelativeProductTable r ON i.image_ID = r.relativeProductId;

----------------------------------------------------------------------------------
SELECT
    p.product_ID,
    p.name AS product_name,
    i.path AS image_path,
    pc.fackPrice AS fake_price,
    pc.fixedPrice AS real_price
FROM
    Product_table p
inner JOIN
    Image_Table i ON p.image_ID = i.image_ID
inner JOIN
    Price_compare_table pc ON p.price_compare_ID = pc.price_compare_ID;
    -- 
    
    SELECT
    c.category_id,
    c.name AS category_name,
    COUNT(p.product_ID) AS product_count,
    (SELECT i.path FROM Product_table p2
     JOIN Image_Table i ON p2.image_ID = i.image_ID
     WHERE p2.category_id = c.category_id
     ORDER BY p2.product_ID LIMIT 1) AS category_image
FROM
    Product_table p
JOIN
    Product_Category c ON p.category_id = c.category_id
GROUP BY
    c.category_id, c.name;
--

SELECT
    p.name AS product_name,
    lf.description AS list_format_description,
    pc.fackPrice AS fake_price,
    pc.fixedPrice AS real_price,
    lf.description AS product_description
    FROM
    Product_table p
JOIN
    Description_Table d ON p.description_ID = d.description_ID
JOIN
    ListFormate_Table lf ON d.listFormateId = lf.listFormateId
JOIN
    Price_compare_table pc ON p.price_compare_ID = pc.price_compare_ID;

--
-- Assuming you have the current product_ID as a parameter, replace 'current_product_ID' with the actual value
SET @current_product_ID := 1;

SELECT
    p2.product_ID AS relative_product_ID,
    p2.name AS relative_product_name
FROM
    RelativeProductTable r
JOIN
    Product_table p1 ON r.product_ID = p1.product_ID
JOIN
    Product_table p2 ON r.relative_Product_id = p2.product_ID
WHERE
    p1.product_ID = @current_product_ID;
    
    --
    -- Assuming you have the user_ID as a parameter, replace 'your_user_ID' with the actual value
SET @user_ID := 1;

SELECT
    ci.cart_item_id,
    p.product_ID,
    p.name AS product_name,
    ci.quantity,
    pc.fixedPrice AS real_price,
    ci.created_at AS added_to_cart_at
FROM
    cart_item ci
JOIN
    Product_table p ON ci.product_ID = p.product_ID
JOIN
    Price_compare_table pc ON p.price_compare_ID = pc.price_compare_ID

WHERE
    ci.user_ID = @user_ID;


