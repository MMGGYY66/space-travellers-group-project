import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../components/Header';

describe('Header Component', () => {
  afterEach(cleanup);

  test('Renders the logo', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const logoImage = screen.getByAltText(/logo/i);
    expect(logoImage).toBeInTheDocument();
  });

  test('Renders the Header component', () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>,
    );
    const linkElement = getByText(/Missions/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Builds the snapshot of the Header component', () => {
    const navigation = render(
      <Router>
        <Header />
      </Router>,
    );
    expect(navigation).toMatchSnapshot();
  });
});
