import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        //Create State
        this.state = {
            userInfo: {
                name: "Dummy Name",
                lacation: "Dummy Location"
            },
        };
        //console.log("Child - Constructor = this.props.name")
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            console.log("NAMSTE REACT");
        },1000);
        //console.log("Child - compomemtDidMount");
    }

    async componentDidUpdate(prevProps,prevState){
        if (this.state.count !== prevState.count) {
            //
        }
          if (this.state.count2 !== prevState.count2) {
            // code
        }
          console.log("Component Did Update");
    
        // //API call
        // const data = await fetch("https://api.github.com/users/sujin-a-s");
        // const json = await data.json();
        // console.log(json);
        // this.setState({
        //     userInfo:json,
        // });
        // console.log("Child - componentDidMount"+this.props.name);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        //console.log("componentWillMount");
    }

    render(){
        const {count} = this.state;
        //console.log("Child - render" + this.props.name);
        return (
            <div>
                <h1>profile class component</h1>
                <img src={this.state.userInfo.avatar_url} />
                <h2>Name:{this.state.userInfo.name}</h2>
                <h2>Location:{this.state.userInfo.location}</h2>
                
            </div>);
    }}

/**
 *
 *  child constructor
 *  child render
 *  child componentDidMount
 *
 *  API call
 *  Set State
 *
 *  <UPDATE CYCLES>
 *  render
 *
 *
 */

export default ProfileClass;