import React from "react";
import FooterData from "./FooterData";
import UserContext from "../utils/UserContext";
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
      <div>  
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({loggedInUser}) => console.log(loggedInUser)}
          </UserContext.Consumer>
        </div>
        <h1>Test Footer using classes component</h1>
        <FooterData name={"First"}/>
        <FooterData name={"Second"}/>
      </div>
    )
  }
}

export default Footer;