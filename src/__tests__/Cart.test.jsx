import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { useOutletContext } from "react-router-dom";
import Cart from "../components/Cart";
import userEvent from "@testing-library/user-event";

const mocks = {
    mockCartArray: [
        {
            id: 0, 
            url: "www.mock.com",
            price: 9.99,
            quantity: 1,
            name: "MockItemOne"
        },
        {
            id: 1, 
            url: "www.mock.com",
            price: 9.99,
            quantity: 1,
            name: "MockItemTwo"
        },
        {
            id: 2, 
            url: "www.mock.com",
            price: 9.99,
            quantity: 1,
            name: "MockItemThree"
        },
    ],
    mockEmptyCart: [],
    mockFunction: vi.fn()
}

vi.mock("react-router-dom", async () => {
    const mod = await vi.importActual("react-router-dom")
    return {
        ...mod,
        useOutletContext: vi.fn()
    }
})

vi.mock("../components/EmptyCart", () => ({
    default: () => <div data-testid="empty-cart">EmptyCart is rendered</div>
}))

describe("Testing Cart Component", () => {
    it("Renders an empty shopping cart if cart is empty", () => {
        vi.mocked(useOutletContext).mockReturnValue({ cartItems: mocks.mockEmptyCart})
        render(<Cart />)
        expect(screen.getByTestId("empty-cart")).toBeInTheDocument();
    })

    it("Renders all items in cart", () => {
        vi.mocked(useOutletContext).mockReturnValue({ cartItems: mocks.mockCartArray})
        render(<Cart />)
        expect(screen.queryAllByText(/Quantity: 1/i)).toHaveLength(3);
    })

    it("Calls handleDelete function when delete button is clicked", async () => {
        vi.mocked(useOutletContext).mockReturnValue({
            cartItems: mocks.mockCartArray, 
            setCartItems: mocks.mockFunction 
        })
        const user = userEvent.setup();
        render(<Cart />)

        const button = screen.getAllByRole("button")[0];

        await user.click(button);

        expect(mocks.mockFunction).toHaveBeenCalled();
    })
})

