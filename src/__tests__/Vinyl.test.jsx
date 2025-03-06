import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Vinyl from '../components/Vinyl';

// Mock data for allAlbums
const allAlbums = [
  { name: 'Album 1', url: 'album1.jpg', price: 19.99 },
  { name: 'Album 2', url: 'album2.jpg', price: 24.99 },
];

describe("Vinyl Component", () => {
    it('renders album details correctly', () => {
        render(
            <Vinyl 
                URL={'test.jpg'}
                albumName={'Album 1'}
                cart={[]}
                modifyCart={vi.fn()}
                allAlbums={allAlbums}
            />
        )
        expect(screen.getByText('Album 1')).toBeInTheDocument();
        expect(screen.getByText('$19.99')).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute('src', 'test.jpg');
        expect(screen.getByText('Quantity:')).toBeInTheDocument();
        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('Add to cart')).toBeInTheDocument();
      });

      it('increments the quantity when plus button is clicked', async () => {
        const user = userEvent.setup();
        render(
            <Vinyl 
                URL={'test.jpg'}
                albumName={'Album 1'}
                cart={[]}
                modifyCart={vi.fn()}
                allAlbums={allAlbums}
            />
        )
        const plusButton = screen.getByText("+");

        await user.click(plusButton);

        expect(screen.getByText('2')).toBeInTheDocument();
      });

      it('decrements the quantity when minus button is clicked', async () => {
        const user = userEvent.setup();
        render(
            <Vinyl 
                URL={'test.jpg'}
                albumName={'Album 1'}
                cart={[]}
                modifyCart={vi.fn()}
                allAlbums={allAlbums}
            />
        )
        const plusButton = screen.getByText("+");
        const minusButton = screen.getByText("-");

        await user.click(plusButton);
        await user.click(minusButton);

        expect(screen.getByText('1')).toBeInTheDocument();
      });

      it('does not decrement past 1 when user clicks minus button', async () => {
        const user = userEvent.setup();
        render(
            <Vinyl 
                URL={'test.jpg'}
                albumName={'Album 1'}
                cart={[]}
                modifyCart={vi.fn()}
                allAlbums={allAlbums}
            />
        )

        const minusButton = screen.getByText("-");

        await user.click(minusButton);

        expect(screen.getByText('1')).toBeInTheDocument();
      });

      it('adds album to cart on button click', async () => {
        const user = userEvent.setup();
        const mockFunction = vi.fn();
        render(
            <Vinyl 
                URL={'test.jpg'}
                albumName={'Album 1'}
                cart={[]}
                modifyCart={mockFunction}
                allAlbums={allAlbums}
            />
        )
        const addItemButton = screen.getByText("Add to cart");

        await user.click(addItemButton);

        expect(mockFunction).toHaveBeenCalled();
      });

      it('updates the cart when user adds same album to cart', async () => {
        const user = userEvent.setup();
        const mockFunction = vi.fn();
        render(
            <Vinyl 
                URL={'test.jpg'}
                albumName={'Album 1'}
                cart={[]}
                modifyCart={mockFunction}
                allAlbums={allAlbums}
            />
        )

        const addItemButton = screen.getByText("Add to cart");

        await user.click(addItemButton);
        await user.click(addItemButton);

        expect(mockFunction).toHaveBeenCalled(2);
      });

})