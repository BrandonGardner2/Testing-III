import React from "react";
import { render } from "react-testing-library";
import banana from "react-test-renderer"; // 1: install this npm module as a dev dependency

import App from "./App";

describe("<App />", () => {
  // 2. write this test
  it("matches snapshot", () => {
    const tree = banana.create(<App />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("matches snapshot RTL", () => {
    const { container } = render(<App />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

//testing both snapshots
