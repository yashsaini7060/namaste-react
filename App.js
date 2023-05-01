// const heading = React.createElement("h1", {id: "heading"}, "Hello Word using React");

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag")
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);
