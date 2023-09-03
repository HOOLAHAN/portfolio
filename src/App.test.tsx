// src/App.test.tsx

import { render, screen } from '@testing-library/react';
import App from './App';
import projects from './projectsData';

describe('App', () => {
  it('should render the app title', () => {
    render(<App />);
    const titleElement = screen.getByText(/My Portfolio/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('should render the list of projects', () => {
    render(<App />);
    projects.forEach(project => {
      const titleElements = screen.getAllByText(new RegExp(project.title, 'i'));
      titleElements.forEach(titleElement => {
        expect(titleElement).toBeInTheDocument();
      });
    });
  });
  
});
