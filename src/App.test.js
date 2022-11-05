import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

afterEach(cleanup);

  it('should equal to 0', () => {
     render(<App />); 
     const getText = screen.getByTestId('learn-react');
    expect(getText).toBeInTheDocument();
   });