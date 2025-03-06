import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-component">
                <div className="left-side">
                    <div className="contacts">
                        <h3>Contacts</h3>
                        <div>
                            <Phone />
                            <p>+123456789</p>
                        </div>
                        <div>
                            <Mail />
                            <p>thevinylshop@support.com</p>
                        </div>
                    </div>

                    <div className="product-links">
                        <h3>Product Links</h3>
                        <p>Categories</p>
                        <p>Trending</p>
                        <p>Collections</p>
                        <p>Discount</p>
                    </div>
                </div>
                
                <div className="right-side">
                    <div className="company">
                        <h3>Company</h3>
                        <p>About us</p>
                        <p>Services</p>
                        <p>Privacy Policy</p>
                        <p>Terms of service</p>
                    </div>

                    <div className="newsletter">
                        <h3>Newsletter</h3>
                        <p>Drop your email below to get update, promotions, coupons, and more!</p>
                        <div>
                            <input placeholder="Enter your email"/>
                            <button>→</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;