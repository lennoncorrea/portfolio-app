import { render } from "@testing-library/react";
import About from "./about";

test("testing", () => {
  const skill: object = {
    "Test": "50"
  };

  const { getByText } = render(<About skills={skill} />);

  expect(getByText('Test')).toBeTruthy();
});
