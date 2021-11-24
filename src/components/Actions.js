import Action from './Action'
import StyleCSS from "./Actions.module.css"



const Actions = (props) =>{
    if(props.state.highestv===0){ // assumes the trading volume is never zero and that when the state is zero we have not issued a query
        return(<table></table>)
    }else{
        return(
            <div className={StyleCSS.section}>
                <h2 className={StyleCSS.header}>Recommended actions</h2>
                <table className={StyleCSS.table}>
                    <tbody>
                    <Action  name = "Info" stat = "Date" volume="Volume" />
                    <Action volume = {props.state.longestdt} name = "Longest downward trend"/>
                    <Action stat = {props.state.highestv_date} name = "Highest trading volume" volume={props.state.highestv}/>
                    <Action stat = {props.state.buydate} name = "Best day to buy" volume={props.state.lowest_price}/>
                    <Action stat = {props.state.selldate} name = "Best day to sell" volume={props.state.highest_price}/>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Actions