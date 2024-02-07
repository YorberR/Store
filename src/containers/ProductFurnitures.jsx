import React from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProducList.scss';
import UseGetProducts from '../hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products/?categoryId=3';

const ProductFurnitures = () => {
	const products = UseGetProducts(API);

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
	);
}

export default ProductFurnitures;