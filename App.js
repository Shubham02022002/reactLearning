import React from "react";
import ReactDOM from "react-dom/client"
// const heading = React.createElement("h1", {id:"heading",className:'top'}, "Hello world");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// root.render(heading);

// for nested elements

{
  /*
  
<div id="parent">
  <div id="child1">
    <h1></h1>
    <h2></h2>
  </div>
  <div id="child2">
    <h1></h1>
    <h2></h2>
  </div>
</div> 

ReactElement(object)=>HTML(browser understand this html);

*/
}

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I'm the h1 tag")
//   )
// );

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "inside h1"),
//   ]),
// ]);

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{id:"h1"},"im h1"),
        React.createElement("h2",{id:"h2"},"i'm h2")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{id:"h1"},"im h1"),
        React.createElement("h2",{id:"h2"},"React is soo cool")
    ])
])

//jsx 
// console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
