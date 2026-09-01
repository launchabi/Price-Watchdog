import "../styling/Home.css";

export default function About() {
    return (
        <div className="home">
            <h2>About Price Watchdog</h2>

            <section className="home-heading">
                <ol>
                    <li>Price Watchdog will never track and collect data to sell to third party companies</li>
                    <li>Price Watchdog will check prices for you everyday so you never have to do it</li>
                    <li>Use us and never overpay again</li>
                </ol>
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
