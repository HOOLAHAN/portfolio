import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import projects from './projectsData';

describe('App', () => {

  it('renders project cards', () => {
    render(<App />);
    expect(screen.getByAltText(projects[0].altTextLogo)).toBeInTheDocument();
  });

  it('opens modal on project card click', () => {
    render(<App />);
    fireEvent.click(screen.getByAltText(projects[0].altTextLogo));
    expect(screen.getByText(projects[0].description)).toBeInTheDocument();
  });
});
