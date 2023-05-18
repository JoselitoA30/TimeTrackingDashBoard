import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimeCard from './TimeCard'
import UserCard from './UsarCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='pt-5'>

      <div className="container">

      <div className="row">

      <div className='col'>
        
        <UserCard />

      </div>

      <div className='col'>
        
        <TimeCard actividad="Work" horas="24hrs" lw="Last Week - 13hrs" imagen="./img/icon-work.svg" fondo="hsl(43, 84%, 65%)"/>
        <br></br>

        <TimeCard actividad="Exercise" horas="15hrs" lw="Last Week - 27hrs" imagen="./img/icon-exercise.svg" fondo="hsl(46, 50%, 14%)"/>
        
      </div>

      <div className='col'>
        
        <TimeCard actividad="Play" horas="15hrs" lw="Last Week - 27hrs" imagen="./img/icon-play.svg" fondo="hsl(46, 50%, 14%)"/>

        <br></br>

        <TimeCard actividad="Social" horas="15hrs" lw="Last Week - 27hrs" imagen="./img/icon-social.svg" fondo="hsl(46, 50%, 14%)"/>
        
      </div>

      <div className='col'>
        
        <TimeCard actividad="Study" horas="15hrs" lw="Last Week - 27hrs" imagen="./img/icon-study.svg" fondo="hsl(46, 50%, 14%)"/>
        <br></br>
        <TimeCard actividad="Self Care" horas="15hrs" lw="Last Week - 27hrs" imagen="./img/icon-self-care.svg" fondo="hsl(46, 50%, 14%)"/>
        
      </div>
      
      </div>

      </div> 
      
    </div>
        
  )
}

export default App
