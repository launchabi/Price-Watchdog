import "../styling/ProductCard.css";

export default function ProductCard({ product, onCheckNow, onDelete }) {
    const { id, name, currentPrice, targetPrice } = product;

    return (
        <div className="product-card">
            <div className="product-card-header">
                <p>{name}</p>
                <p>
                    Target Price:{" "}
                    {typeof targetPrice === "number"
                        ? `$${targetPrice.toFixed(2)}`
                        : "-"}
                </p>

                <p>
                    Current Price:{" "}
                    {typeof currentPrice === "number"
                        ? `$${currentPrice.toFixed(2)}`
                        : "-"}
                </p>
            </div>

            <div className="product-card-footer">
                <button className="click-button" type="button" onClick={() => onCheckNow(id)}>
                    Check Now
                </button>

                <LinkButton productURL={product.url}/>

                <button
                    className="click-button icon-button"
                    type="button"
                    onClick={() => {
                        onDelete(id);
                    }}
                    aria-label={`Remove ${name} from Product List`}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

function LinkButton({ productURL }) {
    return (
        <a 
            href={productURL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="click-button"
        >
            Product URL
        </a>
    );
}
