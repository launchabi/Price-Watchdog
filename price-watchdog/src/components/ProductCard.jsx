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
                <button type="button" onClick={() => onCheckNow(id)}>
                    Check Now
                </button>

                <button
                    className="icon-button"
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
