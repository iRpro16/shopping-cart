import { useOutletContext } from "react-router-dom";
import { Trash } from "lucide-react";
import EmptyCart from "./EmptyCart";
import Footer from "./Footer";
import "../styles/Cart.css";

function Cart() {
    const {cartItems, setCartItems} = useOutletContext();
    const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);
    const tax = (totalPrice * 1.15) - totalPrice;
    const deliveryFee = 7.00;

    const handleDelete = (albumName) => {
        const updatedCart = cartItems.filter(item => item.name !== albumName);
        setCartItems(updatedCart);
    }

    return (
        <>
            <div className="cart-component">
                {cartItems === undefined || cartItems.length == 0 ?  (
                    <EmptyCart />
                ) : (
                    <div className="cart-content">
                        <div className="checked-out-items">
                            <h3>Your order:</h3>
                            {cartItems.map(item => (
                                <div key={item.id} className="checked-out-item">
                                    <img src={item.url} alt={item.name} />
                                    <p>Quantity: {item.quantity}</p>
                                    <button onClick={() => handleDelete(item.name)}><Trash/></button>
                                    <p>Total: ${(item.price).toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                        <div className="order-summary">
                            <h2>Order Summary</h2>
                            <div>
                                <div>
                                    <p>Tax:</p>
                                    <p>+${tax.toFixed(2)}</p>
                                </div>
                                <div>
                                    <p>Delivery fee:</p>
                                    <p>+$7.00</p>
                                </div>
                                <div>
                                    <p>Total:</p>
                                    <p>${(totalPrice + tax + deliveryFee).toFixed(2)}</p>
                                </div>
                            </div>
                            <div className="checkout-cont">
                                <button className="checkout-btn">Checkout</button>
                            </div>
                        </div>
        </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Cart;