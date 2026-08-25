import ProductList from "./ProductList";
import { useState } from "react";
import mockProducts from "../data/mockData.js";

export default function Dashboard() {
    const [products, setProducts] = useState(mockProducts);

    const handleCheckNow = (id) => {
        console.log("Checking price for product id: #", id);
    };

    const handleDelete = (id) => {
        setProducts((p) => p.filter((product) => product.id != id));
    };

    return (
        <div className="dashboard">
            <ProductList
                products={products}
                onCheckNow={handleCheckNow}
                onDelete={handleDelete}
            ></ProductList>
        </div>
    );
}
