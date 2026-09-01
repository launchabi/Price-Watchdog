import ProductList from "./ProductList";
import { useState } from "react";
import mockProducts from "../data/mockData.js";
import "../styling/Dashboard.css";

export default function Dashboard() {
    const [products, setProducts] = useState(mockProducts);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [name, setName] = useState("");
    const [currentPrice, setCurrentPrice] = useState("");
    const [targetPrice, setTargetPrice] = useState("");
    const [url, setURL] = useState("");

    const handleCheckNow = (id) => {
        console.log("Checking price for product id: #", id);
    };

    const handleDelete = (id) => {
        setProducts((p) => p.filter((product) => product.id != id));
    };

    const closeForm = () => {
        setName("");
        setCurrentPrice("");
        setTargetPrice("");
        setURL("");
        setIsFormOpen(false);
    };

    const handleCancel = () => {
        closeForm();
    };

    const handleDone = () => {
        const product = {
            id: Date.now(),
            name: name,
            currentPrice: Number(currentPrice),
            targetPrice: targetPrice === "" ? null : Number(targetPrice),
            url: url,
        };
        setProducts((p) => [...p, product]);

        setName("");
        setCurrentPrice("");
        setTargetPrice("");
        setURL("");
        setIsFormOpen(false);
    };

    return (
        <>
            <div className="dashboard">
                <ProductList
                    products={products}
                    onCheckNow={handleCheckNow}
                    onDelete={handleDelete}
                ></ProductList>
            </div>

            {isFormOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Add a Product</h2>
                        <input
                            type="text"
                            placeholder="Product Name"
                            value={name}
                            onChange={(n) => setName(n.target.value)}
                        />

                        <input
                            type="number"
                            placeholder="Target Price"
                            value={targetPrice}
                            onChange={(n) => setTargetPrice(n.target.value)}
                        />

                        <input
                            type="number"
                            placeholder="Current Price"
                            value={currentPrice}
                            onChange={(n) => setCurrentPrice(n.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Product URL"
                            value={url}
                            onChange={(n) => setURL(n.target.value)}
                        />
                        <button onClick={handleDone}>Done</button>

                        <button
                            className="cancel-button"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            <button
                className="add-items-btn"
                onClick={() => setIsFormOpen(true)}
            >
                + Add Items
            </button>
        </>
    );
}
