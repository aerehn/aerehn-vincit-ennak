import {render, screen} from '@testing-library/react';
import App from '../App.js';
test("App renders main header", async ()=>{
    const htitle = "Bitcoin examiner";
    render(<App/>);
    const textElement =screen.getByText(htitle);
    expect(textElement).toBeInTheDocument();
});

test("App renders main header as header", async ()=>{
    const htitle = "Bitcoin examiner";
    render(<App/>);
    const textElement =screen.getByRole("heading", {name:htitle});
    expect(textElement).toBeInTheDocument();
});

test("App renders secondary header", async ()=>{
    const htitle = "Specify the time frame for investigation";
    render(<App/>);
    const textElement =screen.getByText(htitle);
    expect(textElement).toBeInTheDocument();
});

test("App renders secondary header as header", async ()=>{
    const htitle = "Specify the time frame for investigation";
    render(<App/>);
    const textElement =screen.getByRole("heading", {name:htitle});
    expect(textElement).toBeInTheDocument();
});

test("rendering the submit button", async ()=>{
    const htitle = "submit dates";
    render(<App/>);
    const textElement =screen.getByText(htitle);
    expect(textElement).toBeInTheDocument();
});

test("rendering the End-date label", async ()=>{
    const htitle = "End-date";
    render(<App/>);
    const textElement =screen.getByText(htitle);
    expect(textElement).toBeInTheDocument();
});

test("rendering the Start-date label", async ()=>{
    const htitle = "Start-date";
    render(<App/>);
    const textElement =screen.getByText(htitle);
    expect(textElement).toBeInTheDocument();
});



