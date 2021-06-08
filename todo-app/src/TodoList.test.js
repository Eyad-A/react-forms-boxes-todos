import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todoList, task = "Finish bootcamp") {
    const taskInput = todoList.getByLabelText("Task:");
    fireEvent.change(taskInput, { target: { value: task }});
    const submitButton = todoList.getByText("Add a new todo");
    fireEvent.click(submitButton);
}

it("renders without crashing", function() {
    render(<TodoList />);
});

it("should match the snapshot", function() {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("can add a new todo", function() {
    const list = render(<TodoList />);
    addTodo(list);
    expect(list.getByText("Finish bootcamp")).toBeInTheDocument();
});