import Car from './Car'
import Apple from'./Apple'

function Garage () {
    const isDoorOpened = false;
    //const brand = 'Ferrari'
    //const color = 'blue'
    const carInfo = {brand : "Lembo",color:"white"}
    //const carInfo = {};
    const AppleInfo = {type:"fuji",color:"Red"}
    const carList = [
        {brand:"Bmw", color:"red" },
        {brand:"frod", color:"Blue" },
        {brand:"Kwid", color:"Yellow" }];

    const numberList= [
        1,2,3,4
    ]

    const showcarInfo = carInfo.brand !== undefined && carInfo.color !== undefined;

    return (
      <div>
        <h1>who lives inside my garage?</h1>
          {/* <Car brand={brand} color="red"/> */}
          {showcarInfo?<Car carInfo={carInfo}/>: null }
          <Apple AppleInfo={AppleInfo}/>
          {isDoorOpened?<h2>Garage door is open</h2>:<h2>Garage door is closed</h2>}
          <ul>
            {carList.map((carInfo) => <li key={carInfo.brand}><Car carInfo={carInfo}/></li>)}
          </ul>
          <ul>
            {numberList.map((e,index) =><p key={index}> {e}</p>)}
          </ul>
      </div>
   )
   }
   export default Garage;