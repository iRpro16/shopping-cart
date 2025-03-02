import { useOutletContext } from "react-router-dom";

function Cart() {
    const {vinyls} = useOutletContext();
    console.log(vinyls);

    return (
        <>
            <h1>This is the Cart page!</h1>
        </>
    );
};

export default Cart;