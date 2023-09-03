// src/ProjectCard.test.tsx

import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

describe('ProjectCard', () => {
  const mockProject = {
    title: "Mock Project",
    logo: "mock_logo.svg",
    description: "This is a mock project",
    url: "http://www.mockproject.com/",
    client_repo: "http://github.com/mock/client_repo",
    server_repo: "http://github.com/mock/server_repo",
    technologies: ["React", "TypeScript"],
    features: [["Mock feature 1", "Mock description 1"]] as [string, string][]
  };

  it('should render project title', () => {
    render(<ProjectCard {...(mockProject as any)} />);
    const titleElements = screen.getAllByText(/Mock Project/i);
    expect(titleElements.length).toBe(2);
    expect(titleElements[0]).toBeInTheDocument();
  });

  it('should render project description', () => {
    render(<ProjectCard {...(mockProject as any)} />);
    const descriptionElement = screen.getByText(/This is a mock project/i);
    expect(descriptionElement).toBeInTheDocument();
  });

});
