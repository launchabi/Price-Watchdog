import ProductCard from "./ProductCard";

export default function ProductList({ products, onDelete }) {
    if (products.length === 0) {
        return <p>No Products tracked -- Add one to start tracking</p>;
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}
