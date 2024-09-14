use ecommerce;
SELECT p.product_ID, p.name AS product_name, i.path AS image_path, pc.fakePrice AS fake_price, pc.fixedPrice AS real_price FROM Product_table p inner JOIN    Image_Table i ON p.image_ID = i.image_ID inner JOIN Price_compare_table pc ON p.price_compare_ID = pc.price_compare_ID;
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
use ecommerce;

select * from image_table;
select * from tablesformate_table;
select * from ListFormate_Table;
select * from description_table;

select * from product_inventory;
select * from price_compare_table;
select * from product_table;

insert into image_table(path,created_at)
value("path test");
insert into tablesformate_table(headerName,description,created_at)
values('header testing','desc',now());
insert into listformate_table(description,created_at)
values('desc testing',now());
insert into description_table(tableFormateId,listFormateId,created_at) -- not null se hatana hain dono ko
values(1,2,now());
insert into product_inventory(quantity,warranty,created_at)
values(4,2,now());
insert into price_compare_table(fixedPrice,fakePrice,created_at) -- add tax float ,fake ki spelling
values(1.52,53,now());
insert into product_table(name,category,description_ID,inventory_ID,price_compare_ID,discount_ID,image_ID,created_at)
values();
-- insert into discount_table(name,discount_percentage) -- not null se hatana hain


-- 
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


SELECT p.product_ID, p.name AS product_name, i.path AS image_path, pc.fakePrice AS fake_price, pc.fixedPrice AS real_price FROM Product_table p inner JOIN    Image_Table i ON p.image_ID = i.image_ID inner JOIN Price_compare_table pc ON p.price_compare_ID = pc.price_compare_ID;