// Welcome to Code in Framer
// Get Started: https://www.framer.com/developers/

/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/developers/components/auto-sizing
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function PricingForm(props) {
    // This is a React component containing an Example component
    // Replace <Example /> with your own code

    return (
        <div style={containerStyle}>
            <div style={pricingContainer}>
                <h2 style={h2}>Your Semaglutide plan</h2>

                <div style={plan}>
                    <input type="radio" id="monthly" name="plan" checked />
                    <label htmlFor="monthly">
                        <span>Monthly plan</span>
                        <span className="price">$299/mo</span>
                    </label>
                </div>

                <div style={plan}>
                    <input
                        style={{ display: "none" }}
                        type="radio"
                        id="three-months"
                        name="plan"
                    />
                    <label style={planLabel} htmlFor="three-months">
                        <span>3 months in full</span>
                        <span className="old-price">$897</span>
                        <span className="new-price">$785</span>
                        <span className="price">$261/mo</span>
                    </label>
                </div>

                <div style={plan} className="plan best-value">
                    <input
                        style={{ display: "none" }}
                        type="radio"
                        id="six-months"
                        name="plan"
                    />
                    <label style={planLabel} htmlFor="six-months">
                        <span>6 months in full</span>
                        <span className="old-price">$1794</span>
                        <span className="new-price">$1489</span>
                        <span className="price">$248/mo</span>
                        <span className="best-tag">Best Value</span>
                    </label>
                </div>

                <div className="features">
                    <h3>Your monthly subscription includes:</h3>
                    <ul>
                        <li>✅ Guaranteed GLP-1 weight loss medication</li>
                        <li>✅ Support from board-certified clinicians</li>
                        <li>✅ 16% body weight loss in 6 months</li>
                    </ul>
                </div>

                <button id="subscribe-btn">$299 - GET STARTED</button>
            </div>
        </div>
    )
}

// Styles are written in object syntax
// Learn more: https://reactjs.org/docs/dom-elements.html#style
const containerStyle = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#f5f5eb",
}

const pricingContainer = {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "350px",
}

const h2 = {
    backgroundColor: "#e3e8a0",
    padding: "10px",
    margin: "-20px -20px 20px -20px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
}

const plan = {
    border: "2px solid #ccc",
    padding: " 15px",
    margin: " 10px 0",
    borderRadius: " 5px",
    cursor: " pointer",
    display: " flex",
    alignItems: " center",
    justifyContent: " space-between",
}

const planLabel = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
}
