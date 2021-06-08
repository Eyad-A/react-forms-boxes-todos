import React from "react";
import {render, fireEvent} from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", function() {
    render(<App />);
});

it("matches the snapshot", function() {
    const {asFragment} = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});

it("should create a new todo on form submit", function() {
    const createMock = jest.fn();
    const {getByText} = render(<NewTodoForm createTodo={createMock} />);
    const createButton = getByText("Add a new todo");
    fireEvent.click(createButton);
    expect(createMock).toHaveBeenCalled();
});