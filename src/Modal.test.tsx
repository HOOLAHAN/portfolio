import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from './Modal';
import projects from './projectsData';

describe('Modal', () => {
  const project = projects[0]; // Using the first project as example

  it('renders project title, description, and technologies', () => {
    render(<Modal project={project} onClose={() => {}} />);
    expect(screen.getByText(project.title)).toBeInTheDocument();
    expect(screen.getByText(project.description)).toBeInTheDocument();
    expect(screen.getByText(project.technologies[0])).toBeInTheDocument();
  });
});
