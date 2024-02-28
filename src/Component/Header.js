import './Header.css';
import styles from './Header.module.css'; 
function Header(){
    const mystyle={
        color:"red",
        background:"lightblue",
        padding:"10px",
        fontFamily:"Sans-Serif"

    }
    return<>
    {/* <h1 style={mystyle}>Hello Styling</h1> */}
    <h1 className={styles.bigBlue}>Hello Deva</h1>
    <p>Add a little style</p></>
}
export default Header;