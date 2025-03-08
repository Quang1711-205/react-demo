import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css"; // Nhớ tạo file App.css và copy phần CSS vào đây
import { products } from "../../../pages/data";

const ProductList = ({ products, title }) => {
  console.log('products nhận được category:', products);
    const featuredProducts = products
      // .filter(product => product.isFeatured) -> Chỉ in sản phẩm nổi bật
      .map(product => ({
        id: product.id,
        image: product.image,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        discount: product.discount,
        rating: Array(5).fill('★').fill('☆', Math.round(parseFloat(product.rating))).join('')
      }));
  return (
    <div>
      <h2 className="section-titles">{title}</h2>
      <section className="products">
        {featuredProducts.map((product) => (
          <Link key={product.id} to={`/san-pham/${product.id}`} className="product">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              {product.discount && <span className="product-tag">{product.discount}</span>}
            </div>
            <div className="product-info1">
              <h3>{product.name}</h3>
              <div className="product-prices">
                <div>
                  <span className="price">{product.price}</span>
                </div>
                <div className="rating">{product.rating}</div>
              </div>
              <div className="product-actions">
                <button className="add-to-cart">Thêm vào giỏ</button>
                <button className="wishlist">♡</button>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

function ProductCards({ products }) {
  /*
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Lọc sản phẩm theo danh mục
    console.log('Category nhận được để in sản phẩm tương tự:', category);
    const filtered = products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
  }, [category]); // Chạy lại khi category thay đổi

  */
  return (
    <div>
        <ProductList products={products} title={`Sản phẩm tương tự`} />
    </div>
  );
}

export default ProductCards;
