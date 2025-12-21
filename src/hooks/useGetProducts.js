import { useEffect, useState } from "react";
import axios from "axios";

const UseGetProducts = (API) => {
    const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await axios(API);
			setProducts(response.data);
		};
		fetchProducts();
	}, [API]);
    
    return products;
};

export default UseGetProducts;