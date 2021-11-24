import {render, screen} from '@testing-library/react';
import Timeframe from '../Timeframe.js';
test("rendering the submit button", async ()=>{
    const htitle = "submit dates";
    render(<Timeframe/>);
    const textElement =screen.getByText(htitle);
    expect(textElement).toBeInTheDocument();
});

test("rendering the End-date label", async ()=>{
    const htitle = "End-date";
    render(<Timeframe/>);
    const textElement =screen.getByText(htitle);
    expect(textElement).toBeInTheDocument();
});

test("rendering the Start-date label", async ()=>{
    const htitle = "Start-date";
    render(<Timeframe/>);
    const textElement =screen.getByText(htitle);
    expect(textElement).toBeInTheDocument();
});