
import './App.css';
import Header from './components/Header'
import Button from './components/Button'


import React from 'react';
import ReactDOM from 'react-dom';

const Part = (props) =>{
    return (
        <div>
            <p>{props.parts[props.index].name} {props.parts[props.index].exercises}</p>
        </div>
    )
}

const Contents = (props) =>{
    return(
        <div>
            <Part parts={props.course.parts} index = {0}/>
            <Part parts={props.course.parts} index = {1}/>
            <Part parts={props.course.parts} index = {2}/>
        </div>
    )
}


const Total = (props) =>{
    return(
        <p>Total {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} exercises</p>
    )
}
class App extends React.Component {
    constructor(props) {
        super(props)
        this.klikPos = this.klikPos.bind(this)
        this.state = {
          title: 'Bitcoin examiner',
          positiivinen: 0,
          neutraali: 0, 
          negatiivinen: 0,
          average: 0,
          positiivisia: 0,
          course: {
            name: 'Superadvanced web and mobile programming',
            parts: [
              {
                name: 'Basics of React',
                exercises: 8
              },
              {
                name: 'Using props',
                exercises: 10
              },
              {
                name: 'Component states',
                exercises: 12
              }
            ]
          }
        }
    }
    
    //getPing = async = () => {
    //  const result = await fetch('https://api.coingecko.com/api/v3/ping')
    //  const data = await result.json()
  
    //  return data
    //}

    klikPos = () => {
        this.setState({
          positiivinen: this.state.positiivinen + 1,
        })
        
    }
    klikNet = () => {
        this.setState({
          neutraali: this.state.neutraali + 1,
        })
    }
    klikNeg = () => {
        this.setState({
          negatiivinen: this.state.negatiivinen + 1,
        })
    }
      
  
    render(){
        return(
            <div>
                <div>
                    <Header title = {this.state.title}/>
                    <Contents course = {this.state.course}/>
                    <Total course  = {this.state.course}/>
                </div>
                <div>
                    <h2>Anna palautetta</h2>
                    <Button onClick = {this.klikPos} title = "Positiivinen"/>
                    <Button onClick = {this.klikNet} title = "Neutraali"/>
                    <Button onClick = {this.klikNeg} title = "Negatiivinen"/>
                </div>
                <div>
                    
                    <Statistics state = {this.state}/>
                    
                </div>
            </div>
        )
    }
}

const Statistics = (props) =>{
    if(props.state.positiivinen===0 && props.state.negatiivinen===0 && props.state.neutraali===0){
        return(<table></table>)
    }else{
        return(
            <div>
                <h2>Statistiikka</h2>
                <table>
                    <tbody>
                    <Statistic stat = {props.state.positiivinen} name = "Positiivinen"/>
                    <Statistic stat = {props.state.neutraali} name = "Neutraali"/>
                    <Statistic stat = {props.state.negatiivinen} name = "Negatiivinen"/>
                    <Statistic stat = {props.state} name = "Average"/>
                    <Statistic stat = {props.state} name = "Positiivisia"/>
                    </tbody>
                </table>
            </div>
        )
    }
}
const Statistic = (props) =>{
    if(props.name === "Average"){
        return(
            <tr>
                <td>Average:</td> 
                <td>{((props.stat.negatiivinen*(-1)+props.stat.positiivinen)/(props.stat.negatiivinen+props.stat.neutraali+props.stat.positiivinen)).toFixed(2)}</td>
            </tr>
        )
    }else if(props.name === "Positiivisia"){
        return(
            <tr>
                <td>Positiivisia: </td>
                <td>{(props.stat.positiivinen / (props.stat.positiivinen + props.stat.negatiivinen + props.stat.neutraali) * 100).toFixed(2)}%</td>
            </tr>
        )
    }else{
        return(
            <tr>
                <td>{props.name}:</td>
                <td>{props.stat}</td>
            </tr>
        )
    }
    
}
ReactDOM.render(<App />, document.getElementById('root'));