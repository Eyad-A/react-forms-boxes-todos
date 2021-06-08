import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = "150", width = "150", color = "purple") {
    const heightInput = boxList.getByLabelText("Height");
    const widthInput = boxList.getByLabelText("Width");
    const backgroundInput = boxList.getByLabelText("Background Color");
    fireEvent.change(backgroundInput, { target: { value: color } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    const button = boxList.getByText("Add a new box");
    fireEvent.click(button);
}

it("should render without crashing", () => {
    render(<BoxList />);
});

it("should match the snapshot", () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add a new box", () => {
    const boxList = render(<BoxList />);

    // expect to see no boxes
    expect(boxList.queryByText("X")).not.toBeInTheDocument();
    addBox(boxList);

    // expect to see one box 
    const removeButton = boxList.getByText("X");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
        width: 150px;
        height: 150px;
        background-color: purple;
    `);
});

