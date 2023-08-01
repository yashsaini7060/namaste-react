import React from "react";
import FooterData from "./FooterData";
class Footer extends React.Component{
 
  constructor(props){
    console.log("Parent Constructor");
    super(props);
  }

  componentDidMount() {
    console.log("Parent Component did mount");
  }
   componentWillUnmount() {
    console.log("Parent Unmounted")
   }
   
  render(){
    console.log("Parent Render");
    return( 
      <>  
        <h1>Test Footer using class component</h1>
        <FooterData name={"First"}/>
        <FooterData name={"Second"}/>
      </>
    )
  }
}

export default Footer;