import './UserCard.css'

function UserCard(){

    return(

        <div>
            <div className=''>

<div>

    <div className="card rounded-4" style={{backgroundColor:"#5746ea", zIndex:"1"}}>

      <div className="carbody">

        <img className='d-flex justify-content-start' style={{borderRadius: 100,  width:"100px", height:"100px", border: "3px solid white"}} src="/img/image-jeremy.png" alt="" />

        <p className='d-flex justify-content-start pt-4 py-2' style={{color: "#aaa5ff"}}>Report for</p>
        
        <h1 className='d-flex justify-content-start' style={{marginTop:"10px", fontFamily: "Rubik", fontWeight:"5", color: "white"}}>Jeremy <br /> Robson</h1>

      </div>

    </div>

  </div>

  </div>
  
  <br />
  <br />

  <div className=''>

    <div>

    <div className="card rounded-4" style={{backgroundColor:"#1d204b", marginTop:"-120px",}}>

      <div className="carbody pt-5">

        <div  className='pt-3' style={{color:"#787ab5", fontFamily:"Rubik"}}>

        <p id='animacion' className='d-flex justify-content-start'>Daily</p>

        <p id='animacion' className='d-flex justify-content-start'>Weekly</p>

        <p id='animacion' className='d-flex justify-content-start'>Mounthy</p>

        </div>
      </div>

    </div>

  </div>

  </div>
        </div>
    )

}

export default UserCard