import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { useOutletContext } from "react-router-dom";
import Home from "../components/Home";

const mocks = {
    mockEmptyArray: [],
    mockAlbumsArray: [
        {name: "ASTROWORLD", genre: "rap"},
        {name: "Scorpion", genre: "r&b"},
        {name: "Un Verano Sin Ti", genre: "latin"},
        {name: "Loud", genre: "pop"},
    ]
}

vi.mock('react-router-dom', async () => {
    const mod = await vi.importActual('react-router-dom');
    return {
        ...mod,
        useOutletContext: vi.fn()
    }
})

vi.mock('../components/ImageCarousel', () => ({
    default: () => (
        <div data-testid="image-carousel">ImageCarousel is rendered</div>
    )
}))

describe("Testing Home Component", () => {
    it("Renders 'Loading...' if albums array is null", () => {
        vi.mocked(useOutletContext).mockReturnValue({ albums: null });
        render(<Home />);
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    })

    it("Renders 'Loading...' if albums array is empty", () => {
        vi.mocked(useOutletContext).mockReturnValue({ albums: mocks.mockEmptyArray });
        render(<Home />);
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    })

    it("Renders ImageCarousel when array has albums", () => {
        vi.mocked(useOutletContext).mockReturnValue({ albums: mocks.mockAlbumsArray })
        render(<Home />)
        expect(screen.getByTestId("image-carousel")).toBeInTheDocument();
    })
})