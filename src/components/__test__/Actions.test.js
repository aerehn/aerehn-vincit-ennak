import {render, screen} from '@testing-library/react';
import Actions from '../Actions.js';

test("test if rendering a table row", async ()=>{
    status={highestv: 0}
    render(<Actions state={status}/>
    );
    const tableElement =screen.getAllByRole("table");
    expect(tableElement.length).toBe(1);
});