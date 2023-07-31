import React from "react";

class FooterData extends React.Component{

  constructor(props){
    super(props);
    console.log( this.props.name + "Constructor");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log( this.props.name +" Component did mount");
  }

  render() {
    console.log(this.props.name + " Render")
    return(
      <>
      <h1>Name:{this.props.name}</h1>
      <h2>Count:{this.state.count}</h2>
        <button onClick={() => {
          this.setState({count: this.state.count + 1});
        }}>Increment</button>
      </>
    )
  }
}

export default FooterData;