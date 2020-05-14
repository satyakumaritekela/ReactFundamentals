import React from "react";

const Loc = (props) => {
    return <div style={props.style}>{props.name}</div>;
};

const Hoc = Comp => props => {
    return <Comp style={{ color: "yellow" }} {...props} />;
};

const Comp = Hoc(Loc)

const App = () => {
    const details = {
        name: "Satya Kumar",
    };
  return (
    <div className="App"> 
      <Comp {...details}/>
    </div>);
};

export default App;
