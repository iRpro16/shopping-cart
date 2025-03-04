import { useOutletContext } from "react-router-dom";
import { Trash } from "lucide-react";
import EmptyCart from "./EmptyCart";

function Cart() {
    const {cartItems, setCartItems} = useOutletContext();

    const handleDelete = (albumName) => {
        const updatedCart = cartItems.filter(item => item.name !== albumName);
        setCartItems(updatedCart);
    }

    return (
        <div className="cart-component">
            {cartItems === undefined || cartItems.length == 0 ?  (
                <EmptyCart />
            ) : (
                cartItems.map(item => (
                    <div key={item.id} className="checked-out-item">
                        <img src={item.url}/>
                        <p>Price: ${item.price * item.quantity}</p>
                        <p>Quantity: {item.quantity}</p>
                        <Trash onClick={() => handleDelete(item.name)}/>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;