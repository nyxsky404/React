//* How to use Css Styles in react components
// 1. External: index.css -> use for global styling

// 2. Modules: dedicated .css sheet for components to avoid global class conflicts :
        // create a new folder : add .jsx file 
        // create css file named: filename.module.css
        // Import in .jsx file as: import styles from './filename.module.css'
        // className must be in {styles.camelCase} (className={styles.colorDisplay})

// 3. Inline: Object -> unique & minimal styling

//! External to inline css:- inside object: separated by commas instead semi-colon, Use Camel Case , every value must be string.

// .button {
//     background-color: hsl(200, 100%, 50%);
//     color: white;
//     padding: 10px 20px;
//     border-radius: 5px;
//     border: none;
//     cursor: pointer;
// }


function Button(){

    const styles ={
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    }

    return(
        <button style ={styles} >Click me</button>
    )
}

export default Button