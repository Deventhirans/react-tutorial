function Car(props) {
 // const {brand,color} = props
  const { carInfo } = props;
  const { brand,color } = carInfo
  
  const text = `i,am a ${color} ${brand} Car`;
  return (
    <h2>{text}</h2>
    );
}


export default Car;