import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Shop from "../components/Shop";
import DisplayAll from "../components/DisplayAll";
import DisplayGenre from "../components/DisplayGenre";

const mocks = {
    mockEmptyArray: [],
    mockAlbumsArray: [
        {name: "ASTROWORLD", genre: "rap"},
        {name: "Scorpion", genre: "r&b"},
        {name: "Un Verano Sin Ti", genre: "latin"},
        {name: "Loud", genre: "pop"},
    ]
}

vi.mock("react-router-dom", async () => {
    const mod = await vi.importActual("react-router-dom")
    return {
        ...mod, 
        useOutletContext: vi.fn()
    }
})

vi.mock("../components/DisplayAll", () => ({
    default: () => <div data-testid="display-all">DisplayAll is rendered</div>
}))

vi.mock("../components/DisplayGenre", () => ({
    default: () => <div data-testid="display-genre">DisplayGenre is rendered</div>
}))

describe("Shop component renders its children", () => {
    it("renders error message if array is empty", () => {
        vi.mocked(useOutletContext).mockReturnValue({ albums: mocks.mockEmptyArray })
        render (
            <MemoryRouter initialEntries={["/shop"]}>
                <Routes>
                    <Route path="shop" element={<Shop/>}>
                        <Route index={true} element={<DisplayAll />}/>
                    </Route>
                </Routes>
            </MemoryRouter>
        )
        expect(screen.getByText("There has been a connection error")).toBeInTheDocument();
    })

    it("renders DisplayAll on initial render", () => {
        vi.mocked(useOutletContext).mockReturnValue({ albums: mocks.mockAlbumsArray })
        render (
            <MemoryRouter initialEntries={["/shop"]}>
                <Routes>
                    <Route path="shop" element={<Shop/>}>
                        <Route index={true} element={<DisplayAll />}/>
                    </Route>
                </Routes>
            </MemoryRouter>
        )
        expect(screen.getByTestId("display-all")).toBeInTheDocument();
    })

    it("renders DisplayGenre when in proper paths", () => {
        vi.mocked(useOutletContext).mockReturnValue({ albums: mocks.mockAlbumsArray })
        render (
            <MemoryRouter initialEntries={["/shop/:genre"]}>
                <Routes>
                    <Route path="shop" element={<Shop/>}>
                            <Route path="/shop/:genre" element={<DisplayGenre />}/>
                    </Route>
                </Routes>
            </MemoryRouter>
        )
        expect(screen.getByTestId("display-genre")).toBeInTheDocument();
    })
})

