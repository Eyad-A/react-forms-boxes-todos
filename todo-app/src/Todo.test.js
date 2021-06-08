import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

it("renders without crashing", function() {
    render(<Todo />);
});

it("should match the snapshot", function() {
    const {asFragment} = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
});

