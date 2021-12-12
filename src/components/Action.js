import StyleCSS from "./Action.module.css"
//A component that shows 3 values as a tablerow. Must be used inside a table
const Action = (props) =>{
        return(
            <tr className={StyleCSS.row}>
                <td className={StyleCSS.item}>{props.name}</td>
                <td className={StyleCSS.item}>{props.stat}</td>
                <td className={StyleCSS.item}>{props.volume}</td>
            </tr>
        )
}
export default Action