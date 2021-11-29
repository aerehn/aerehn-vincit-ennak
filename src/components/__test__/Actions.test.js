import {render, screen} from '@testing-library/react';
import Actions from '../Actions.js';
import Action from '../Action.js';

test("test if rendering an empty table when highestv is 0", async ()=>{
    let status={highestv: 0}
    render(<Actions state={status}/>
    );
    const tableElement =screen.getAllByRole("table");
    expect(tableElement.length).toBe(1);
    const rowElement =screen.queryAllByRole("row");
    expect(rowElement.length).toBe(0);
});

test("test if rendering correct number of cells and rows", async ()=>{
    let status={highestv: 346,
        highestv_date:"none",
        buydate: "Don't buy!",
        lowest_price: 34,
        selldate: "Don't sell!",
        highest_price:56,
        longestdt:6}
    render(<Actions state={status}/>
    );
    const tableElement =screen.getAllByRole("table");
    expect(tableElement.length).toBe(1);
    const cellElement =screen.getAllByRole("cell");
    expect(cellElement.length).toBe(15);
    const rowElement =screen.getAllByRole("row");
    expect(rowElement.length).toBe(5);
});

test("test if renders header for the table", async ()=>{
    let status={highestv: 346,
        highestv_date:"none",
        buydate: "Don't buy!",
        lowest_price: 34,
        selldate: "Don't sell!",
        highest_price:56,
        longestdt:6}
    render(<Actions state={status}/>
    );
    const headerElement =screen.getAllByRole("heading");
    expect(headerElement.length).toBe(1);
    const header =screen.getAllByText("Recommended actions");
    expect(header[0]).toBeInTheDocument();
});


test("test if the table renders all the info. Position is not checked", async ()=>{
    let status={highestv: 346,
        highestv_date:"none",
        buydate: "Don't buy!",
        lowest_price: 34,
        selldate: "Don't sell!",
        highest_price:56,
        longestdt:6}
    render(<Actions state={status}/>
    );
    const headers=["Info","Date","Volume","Longest downward trend","Highest trading volume","Best day to buy","Best day to sell"];
    for (let i = 0; i<headers.length;i++){
        let  headerElement = screen.getByText(headers[i]);
        expect(headerElement).toBeInTheDocument();
    }
    const variables = [status.highest_price,status.highestv,status.longestdt,status.lowest_price,status.selldate,status.highestv_date,status.buydate];
    for (let i = 0; i<variables.length;i++){
        let  variableElement = screen.getByText(variables[i]);
        expect(variableElement).toBeInTheDocument();
    }
})

test("test if the table renders all the info in correct cells", async ()=>{
    let status={highestv: 346,
        highestv_date:"none",
        buydate: "Don't buy!",
        lowest_price: 34,
        selldate: "Don't sell!",
        highest_price:56,
        longestdt:6}
    render(<Actions state={status}/>
    );
    const cellElements = screen.getAllByRole("cell");
    const contents=["Info","Date","Volume","Longest downward trend","",status.longestdt,"Highest trading volume",status.highestv_date,status.highestv,"Best day to buy",status.buydate,status.lowest_price,"Best day to sell",status.selldate,status.highest_price];
    for (let i = 0;i<cellElements.length;i++){
        expect(cellElements[i]).toHaveTextContent(contents[i]);
    }
})
