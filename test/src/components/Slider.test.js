import { fireEvent, render, screen } from '@testing-library/react';

import { Slider } from '../../../src/components/Slider';

const filesList = ['image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.jpeg'];

const setup = ({ images = filesList }) => {
  render(<Slider images={images} />);
};

describe('Slider component', () => {
  it('renders without crash', () => {
    setup({});

    expect(screen.getByTestId('slider-image')).toBeInTheDocument();
    expect(screen.getByTestId('leftArrow')).toBeInTheDocument();
    expect(screen.getByTestId('rightArrow')).toBeInTheDocument();
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();

    expect(screen.getByText('Views: 1')).toBeInTheDocument();
  });

  it('shows loading animation on image switch', () => {
    setup({});

    const rightArrow = screen.getByTestId('rightArrow');
    fireEvent.click(rightArrow);

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('increments views count if image has been seen multiple times', () => {
    setup({});

    // 1 view for first image
    expect(screen.getByText('Views: 1')).toBeInTheDocument();

    const leftArrow = screen.getByTestId('leftArrow');
    const rightArrow = screen.getByTestId('rightArrow');

    fireEvent.click(rightArrow);
    // 1 view for 2nd image
    expect(screen.getByText('Views: 1')).toBeInTheDocument();

    fireEvent.click(leftArrow);
    // 2 views for 1st image
    expect(screen.getByText('Views: 2')).toBeInTheDocument();

    fireEvent.click(leftArrow);
    // 1 views for last image
    expect(screen.getByText('Views: 1')).toBeInTheDocument();
  });
});
