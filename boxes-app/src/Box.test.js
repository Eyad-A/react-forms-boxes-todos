import React from "react";
import { render } from '@testing-library/react';
import Box from './Box';

it('should render the Box component', () => {
    render(<Box />);
});

it('matches the snapshot', function() {
    const {asFragment} = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});