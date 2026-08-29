import "../styling/Home.css";

export default function About() {
    return (
        <div className="home">
            <h2>About Price Watchdog</h2>

            <section className="home-heading">
                <p>
                    Price Watchdog is a personal price-drop tracker. Paste a
                    product URL, set the price you're willing to pay, and let us
                    keep an eye on it for you.
                </p>

                <p>
                    We check prices for you so you never overpay again. When a
                    price drops to your target, you'll be the first to know.
                </p>
            </section>

            <section>
                <p className="bottom-footer">
                    Built to help everyday shoppers find real deals -- not the
                    "deals" big retailers want you to believe in.
                </p>
            </section>
        </div>
    );
}
