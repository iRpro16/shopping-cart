import { useOutletContext } from "react-router-dom";

function Cart() {
    const {cartItems} = useOutletContext();

    return (
        <>
            <h1>This is the Cart page!</h1>
            {cartItems.map(item => (
                <div key={item.id} className="checked-out-item">
                    <img src={item.url}/>
                    <p>Price:{25.99 * item.quantity}</p>
                    <p>Quantity{item.quantity}</p>
                </div>
            ))}
        </>
    );
};

export default Cart;