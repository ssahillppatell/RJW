import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Ride from '../Ride';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Ride></Ride>, div);
});
