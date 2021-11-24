import {render, screen} from '@testing-library/react';
import Timeframe from '../Timeframe.js';

test("test if rendering the submit button", async ()=>{
    const htitle = "submit dates";
    render(<Timeframe/>);
    const textElement =screen.getByText(htitle);
    expect(textElement).toBeInTheDocument();
});

test("Testing if submit dates is a button", async ()=>{
    const htitle = "submit dates";
    render(<Timeframe/>);
    const buttonElement =screen.getByRole("button", {name: htitle});
    expect(buttonElement).toBeInTheDocument();
});

test("test if rendering the End-date label", async ()=>{
    const htitle = "End-date";
    render(<Timeframe/>);
    const textElement =screen.getByText(htitle);
    expect(textElement).toBeInTheDocument();
});



test("test if rendering the Start-date label", async ()=>{
    const htitle = "Start-date";
    render(<Timeframe/>);
    const textElement =screen.getByText(htitle);
    expect(textElement).toBeInTheDocument();
});

test("test if rendering two input fields", async ()=>{
    const htitle = "End-date";
    render(<Timeframe/>);
    const inputElements =screen.getAllByRole("textbox");
    expect(inputElements.length).toBe(2);
});

test("test if rendering two input fields with correct place holders", async ()=>{
    const text = "yyyy-mm-dd";
    render(<Timeframe/>);
    const inputElements =screen.getAllByPlaceholderText(text);
    expect(inputElements.length).toBe(2);
});

// property tests