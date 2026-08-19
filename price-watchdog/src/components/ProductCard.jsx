export default function ProductCard({ product, onCheckNow, onDelete }) {
    const { id, name, currentPrice, targetPrice } = product;

    return (
        <div className="product-card">
            <div className="product-card-header">
                <p>{name}</p>
                <p>
                    {typeof targetPrice === "number"
                        ? `$${targetPrice.toFixed(2)}`
                        : "-"}
                </p>
                
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

            <div className="product-card-footer">
                <p>
                    {typeof currentPrice === "number"
                        ? `$${currentPrice.toFixed(2)}`
                        : "-"}
                </p>
                <button type="button" onClick={() => onCheckNow(id)}>
                    Check Now
                </button>
            </div>
        </div>
    );
}
