import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import projects from '../data/projectsData';

jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useBreakpointValue: jest.fn().mockReturnValue('column'),
}));


describe('App', () => {

  it('renders project cards', () => {
    render(<App />);
    expect(screen.getByAltText(projects[0].altTextLogo)).toBeInTheDocument();
  });

  it('opens modal on project card click', async () => {
    render(<App />);
    fireEvent.click(screen.getByAltText(projects[0].altTextLogo));
    const descriptionElement = await screen.findByText(projects[0].description);
    expect(descriptionElement).toBeInTheDocument();
  });
});
