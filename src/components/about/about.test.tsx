import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import About from "./about";

describe('About Component', () => {
  it('should be rendered', () => {
    const { baseElement } = render(<About skills={{ skillTest: 100 }} />);
    expect(baseElement).toBeInTheDocument();
  });
  it('should have Education div', () => {
    const { container } = render(<About skills={{ skillTest: 100 }} />);
    const educationDiv = container.querySelector('#education');
    expect(educationDiv).toBeInTheDocument();
    expect(educationDiv?.innerHTML).toContain("Education");
  });
  it('should have Skills div', () => {
    const { container } = render(<About skills={{ skillTest: 100 }} />);
    const skillsDiv = container.querySelector('#skills');
    expect(skillsDiv).toBeInTheDocument();
    expect(skillsDiv?.innerHTML).toContain("Skills");
  });
  it('should have Experience div', () => {
    const { container } = render(<About skills={{ skillTest: 100 }} />);
    const experienceDiv = container.querySelector('#experience');
    expect(experienceDiv).toBeInTheDocument();
    expect(experienceDiv?.innerHTML).toContain("Experience");
  });
})
