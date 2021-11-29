import {useState} from 'react'
import StyleCSS from "./Timeframe.module.css"
const Timeframe = ({onAdd}) => {
    const [startday, setStartday] = useState('')
    const [endday, setEndday] = useState('')

    const onSubmit = (e)=>{
        e.preventDefault()
        if(!startday){
            alert('Please add a start date!')
        }
        if(!endday){
            alert('Please add an end date!')
        }else{
            onAdd({startday,endday})

            setStartday('')
            setEndday('')
        }
        
    }
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
