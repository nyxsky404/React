//! note: we can use multiple returns with if-else ladder 
//! or use undefined variable and using that for returning only one time

// It&apos;s = It's

function IfElse({temperature = 30}){

    let message;

    if (temperature > 25){
        message = <p>It&apos;s sunny today!</p>
      }
      else if (temperature >= 15 && temperature <=25){
        message = <p>It&apos;s cloudy today.</p>
      }
      else if (temperature < 15){
        message = <p>It&apos;s might be rainy today.</p>
      }

    return (message)
}

//! js requires {} only when writing inside html/fragments means only jsx requires it

export default IfElse