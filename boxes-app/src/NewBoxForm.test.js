import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it("renders without crashing", () => {
    render(<NewBoxForm />);
});

it("should match the snapshot", () => {
    const {asFragment} = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});