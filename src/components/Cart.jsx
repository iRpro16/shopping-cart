import { useOutletContext } from "react-router-dom";
import { Trash } from "lucide-react";

function Cart() {
    const {cartItems, setCartItems} = useOutletContext();

    const handleDelete = (albumName) => {
        const updatedCart = cartItems.filter(item => item.name !== albumName);
        setCartItems(updatedCart);
    }

    return (
        <>
            <h1>This is the Cart page!</h1>
            {cartItems.map(item => (
                <div key={item.id} className="checked-out-item">
                    <img src={item.url}/>
                    <p>Price:{item.price * item.quantity}</p>
                    <p>Quantity{item.quantity}</p>
                    <Trash onClick={() => handleDelete(item.name)}/>
                </div>
            ))}
        </>
    );
};

export default Cart;