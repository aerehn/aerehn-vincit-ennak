import {render, screen} from '@testing-library/react';
import Action from '../Action.js';

test("test if rendering a table row", async ()=>{
    const text1 = "Info";
    const text2 = "Date";
    const text3 = "Volume";
    render(<table >
                <tbody>
                    <Action name={text1} stat={text2} volume={text3}/>
                </tbody>
            </table>
    );
    const rowElement =screen.getAllByRole("row");
    expect(rowElement.length).toBe(1);
});

test("test if rendering a table row with correct number of cells", async ()=>{
    const text1 = "Info";
    const text2 = "Date";
    const text3 = "Volume";
    render(<table >
                <tbody>
                    <Action name={text1} stat={text2} volume={text3}/>
                </tbody>
            </table>
    );
    const rowElement =screen.getAllByRole("cell");
    expect(rowElement.length).toBe(3);
});

test("test if rendering a table row with correct cell contents", async ()=>{
    const text1 = "Info";
    const text2 = "Date";
    const text3 = "Volume";
    render(<table >
                <tbody>
                    <Action name={text1} stat={text2} volume={text3}/>
                </tbody>
            </table>
    );
    const rowElement =screen.getAllByRole("cell");
    expect(rowElement[0]).toHaveTextContent(text1);
    expect(rowElement[1]).toHaveTextContent(text2);
    expect(rowElement[2]).toHaveTextContent(text3);
});