import "../styling/Home.css";

export default function Home() {
    return (
        <div className="home">
            <h2>We watch. You wait. You win</h2>

            <section className="home-heading">
                <p>
                    Price Watchdog tracks the products you are waiting to buy,
                    so you don't have to.
                </p>

                <p>
                    Just click the dashboard, add a product and fill out the
                    required details and we will do all of the heavy lifting for
                    you!
                </p>
            </section>

            <section className="features-list">
                <div>
                    <p className="features-list-item">
                        {" "}
                        Check automatically every day -- set it once, forget
                        about it.
                    </p>
                </div>

                <div>
                    <p className="features-list-item">
                        {" "}
                        Add any kind of product from any e-commerce website and
                        monitor without thinking about it
                    </p>
                </div>

                <div>
                    <p className="features-list-item">
                        {" "}
                        Get an email the moment a price drops to what you're
                        willing to pay.
                    </p>
                </div>
            </section>

            <section>
                <p className="bottom-footer">
                    Built as a project to find real deals not big corporations
                    that are telling you that it is a good deal
                </p>
            </section>
        </div>
    );
}
