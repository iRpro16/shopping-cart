import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Shop from "../components/Shop";
import Cart from "../components/Cart";


vi.mock('../components/Home', () => ({
    default: () => (
        <div data-testid="home">Home component is rendered</div>
    )
}))

vi.mock('../components/Shop', () => ({
    default: () => (
        <div data-testid="shop">Shop component is rendered</div>
    )
}))

vi.mock('../components/Cart', () => ({
    default: () => (
        <div data-testid="cart">Cart component is rendered</div>
    )
}))

describe("App component renders all children", () => {
    it('renders Home component', () => {
        render (
            <MemoryRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index={true} element={<Home />}/>
                    </Route>
                </Routes>
            </MemoryRouter>
        )

        expect(screen.getByTestId('home')).toBeInTheDocument();
    })

    it('renders Shop component', () => {
        render (
            <MemoryRouter initialEntries={["/shop"]}>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="shop" element={<Shop />}/>
                    </Route>
                </Routes>
            </MemoryRouter>
        )

        expect(screen.getByTestId('shop')).toBeInTheDocument();
    })

    it('renders Cart component', () => {
        render (
            <MemoryRouter initialEntries={["/cart"]}>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="cart" element={<Cart />}/>
                    </Route>
                </Routes>
            </MemoryRouter>
        )

        expect(screen.getByTestId('cart')).toBeInTheDocument();
    })
})
