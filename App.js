import React from "react";
import ReactDOM from "react-dom/client";

// React Element is an object but when we renders it into the dom it becomes a htmlElement

// JSX is not html in js it is a html like syntax.
// JSX is not valid pure js
// PARCEL with the help of BABEL transpiles this jsx code before it reaches to the js engine.
// behind the scenes this jsx code is convertd into react.createElement which is an
// object and renders as a html element into the dom.

const heading = (
  <h1 id="heading1" className="heading">
    This is a vaild syntax💀
  </h1>
);
console.log(heading);

// React Component
// 1. Class based components
// 2. Functional components
// A functional component is a normal js function that returns a piece of jxs

// Component Composition
const HeadingComponent = () => (
  <div>
    <Title />
    {Math.floor((Math.random() + 1) * 100)}
    <h1>This is a functional component</h1>
    {Title()}
    <NewThing />
  </div>
);
const Title = () => <h1>I'm the title component</h1>;

const NewThing = function newFunction() {
  return <h2>Comming from new function</h2>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
