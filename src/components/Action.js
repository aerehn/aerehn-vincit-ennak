import StyleCSS from "./Action.module.css"
const Action = (props) =>{
        return(
            <tr className={StyleCSS.row}>
                <td className={StyleCSS.item}>{props.name}:</td>
                <td className={StyleCSS.item}>{props.stat}</td>
                <td className={StyleCSS.item}>{props.volume}</td>
            </tr>
        )
}
export default Action