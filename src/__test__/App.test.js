import {render, screen, fireEvent} from '@testing-library/react';
import App from '../App.js';
import {rest} from "msw"
import {setupServer} from "msw/node"
test("App renders main header", async ()=>{
    const htitle = "Bitcoin examiner";
    render(<App/>);
    const textElement =screen.getByText(htitle);
    expect(textElement).toBeInTheDocument();
});


test("App renders secondary header", async ()=>{
    const htitle = "Specify the time frame for investigation";
    render(<App/>);
    const textElement =screen.getByText(htitle);
    expect(textElement).toBeInTheDocument();
});

test("App renders two headers", async ()=>{
    render(<App/>);
    const textElements =screen.getAllByRole("heading");
    expect(textElements.length).toBe(2);
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

//integration tests
/*
it("Test if when put a known timeframe the app renders the 'Recommended actions' header", async ()=>{
    render(<App/>);
    const inputElements = screen.getAllByRole("textbox");
    const buttonElement = screen.getByRole("button");
    fireEvent.change(inputElements[0], {target: {value: "2020-03-01"}});
    fireEvent.change(inputElements[1], {target: {value: "2021-08-01"}});
    fireEvent.click(buttonElement);
    const headingElement = await screen.findByText(/Recommended actions/i);
    expect(headingElement).toBeInTheDocument();
})

it("Test if when put a known timeframe the app renders the correct values", async ()=>{
    render(<App/>);
    const inputElements = screen.getAllByRole("textbox");
    const buttonElement = screen.getByRole("button");
    fireEvent.change(inputElements[0], {target: {value: "2020-03-01"}});
    fireEvent.change(inputElements[1], {target: {value: "2021-08-01"}});
    fireEvent.click(buttonElement);
    const cellElements = await screen.findAllByRole("cell");


    let status={highestv: 146032480261.85092,
        highestv_date:"Mon, 04 Jan 2021 00:00:00 GMT",
        buydate: "Tue, 17 Mar 2020 00:00:00 GMT",
        lowest_price: 4509.855956130319,
        selldate: "Wed, 14 Apr 2021 00:00:00 GMT",
        highest_price:53178.647097858826,
        longestdt:8}
    const contents=["Info","Date","Volume","Longest downward trend","",status.longestdt,"Highest trading volume",status.highestv_date,status.highestv,"Best day to buy",status.buydate,status.lowest_price,"Best day to sell",status.selldate,status.highest_price];
    for (let i = 0;i<cellElements.length;i++){
        expect(cellElements[i]).toHaveTextContent(contents[i]);
    }
})
*/

