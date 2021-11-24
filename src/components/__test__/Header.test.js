import {render, screen} from '@testing-library/react';
import Header from '../Header.js';

test("renders the header text", async ()=>{
    const htitle = "Bitcoin examiner"
    render(<Header title = {htitle}/>);
    const headerElement =screen.getByText(htitle);
    expect(headerElement).toBeInTheDocument();
});

test("renders the header text", async ()=>{
    const htitle = "Bitcoin examiner"
    render(<Header title = {htitle}/>);
    const headerElement =screen.getByRole("heading",{name: htitle});
    expect(headerElement).toBeInTheDocument();
});