import React from 'react'
import { render } from '@testing-library/react';
import { Example } from '../src'

describe('Component', () => {
  it('displays a welcome message', () => {
    const { getByText } = render(<Example/>);
    expect(getByText(/Welcome to React components/)).toBeInTheDocument();
  })
})