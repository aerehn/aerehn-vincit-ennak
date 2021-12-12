import {useState} from 'react'
import StyleCSS from "./Timeframe.module.css"
const Timeframe = ({onAdd}) => {
    //component state that has the startday and endday of the request sent to coingecko
    const [startday, setStartday] = useState('')
    const [endday, setEndday] = useState('')
    //a function that is called when the user clicks the submit button
    const onSubmit = (e)=>{
        e.preventDefault()
        //if one is missing completetly the app sends an alert
        if(!startday){
            alert('Please add a start date!')
        }
        if(!endday){
            alert('Please add an end date!')
        }else{
            //a method was passed to this component and it sends a http request to coingecko
            onAdd({startday,endday})
            //days are reset
            setStartday('')
            setEndday('')
        }
        
    }
    // a component that contains two text fields, two labels and a submit button are returned
    return (
        <form className={StyleCSS.form} onSubmit={onSubmit}>
            <div className={StyleCSS.row}>
                <label className={StyleCSS.label}>Start-date</label>
                <input type='text' placeholder='yyyy-mm-dd' className={StyleCSS.input}
                value = {startday}
                onChange = {(e)=>setStartday(e.target.value)}/>
            </div>
            <div className={StyleCSS.row}>
                <label className={StyleCSS.label}>End-date</label>
                <input type='text' placeholder='yyyy-mm-dd' className={StyleCSS.input}
                value = {endday}
                onChange = {(e)=>setEndday(e.target.value)}/>
            </div>
            <div className={StyleCSS.row}>
                <input type='submit' value='submit dates'
                className={StyleCSS.btn}/>
            </div>
        </form>
    )
}
export default Timeframe
