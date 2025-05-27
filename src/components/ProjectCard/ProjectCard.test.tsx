import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProjectCard from './ProjectCard';
import projects from '../../data/projectsData';

describe('ProjectCard', () => {
  const mockOnClick = jest.fn();
  const project = projects[0]; // Using the first project as example

  it('renders project logo correctly', () => {
    render(<ProjectCard project={project} onClick={mockOnClick} />);
    expect(screen.getByAltText(project.altTextLogo)).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    render(<ProjectCard project={project} onClick={mockOnClick} />);
    fireEvent.click(screen.getByAltText(project.altTextLogo));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
