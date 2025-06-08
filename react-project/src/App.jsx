import Header from './Intro/Header.jsx'
import Footer from './Intro/Footer.jsx'
import Food from './Intro/Food.jsx'
import Card from './StyleJs/Card.jsx'
import Button from './StyleJs/Button.jsx'
import Student from './Props/Student.jsx'
import UserGreeting from './ConditionalRender/UserGreeting.jsx'
import Lists from './ListRender/Lists.jsx'
import Lists2 from './ListRender/Lists2.jsx'
import Component from './Intro/Component.jsx'
import Click from './Click-event/Click.jsx'
import Event from './Click-event/Event.jsx'
import Image from './Click-event/Image.jsx'
import UseState from './UseState/UseState.jsx'
import Project1 from './UseState/Project1.jsx'
import Change from './Change-event/Change.jsx'
import Project2 from './Change-event/Project2.jsx'
import IfElse from './ConditionalRender/IfElse.jsx'
import UpdaterFunction from './UseState/UpdaterFunction.jsx'
import UseEffect from './UseEffect/UseEffect.jsx'
import UpdateObject from './UseState/UpdateObject.jsx'


function App() {

  //* we can use same ids in different arrays/objects

  const fruit =[
    {id:1, name:"apple" , cal: 95 },
    {id:2, name:"orange" , cal: 45 },
    {id:3, name:"banana" , cal: 105 },
    {id:4, name:"coconut" , cal: 159 },
    {id:5, name:"pineapple" , cal: 37 }]

  const veg =[
    {id:1, name:"carrot" , cal: 95 },
    {id:2, name:"potato" , cal: 45 },
    {id:3, name:"onion" , cal: 105 },
    {id:4, name:"tomato" , cal: 159 },
    {id:5, name:"spinach" , cal: 37 }]

  return (
    <>
      <Header/>

      {/* Component Reusing */}
      <Card/>
      <Card/>

      <Food/>

      <Click/>
      <Event/>
      <Image/>

      <Food/>

      <UseState/>
      <Project1/>
      <UpdaterFunction/>

      
      

      <UseEffect/>

      <br/>
      <br/>
      
      <UpdateObject/>

      <Change/>
      <Project2/>

      <Component/>

    {/* //! In props: Everything other than string will be in { } */}

      <Student name ="Sponge Bob" age={30} isStudent={true} /> 
      <Student name="John" age={42} isStudent={false}/>
      <Student/>
      <Student name="Patrick"/>

      <UserGreeting isLogin ={true} name="Bob"/>
      <UserGreeting/>

      <IfElse/>
      <IfElse temperature = {15}/>

      <Lists/>


      {/* using props with list before return statement */}
      {/* Short circuiting: shorthand for ternary operator (true: return , false: null): returning <Lists2/> if condition is true, else it won't call */}
      {fruit.length > 0 && <Lists2 item={fruit} category="Fruits"/> }
      {veg.length > 0 && <Lists2 item={veg} category="Vegetables"/> }
      
      <Button/>
      <Footer/>
    </>
  )
}

export default App

//  since we have capability of including only only single element inside return statement so we use jsx fragments <> .... </> for including multiple elements.

// components are reusable
