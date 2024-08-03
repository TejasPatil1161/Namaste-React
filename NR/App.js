const Parent = React.createElement('div',{id:"parent"},
   React.createElement("div",{id:"child"},[
    React.createElement("h1",{id:"c1"},"hii am i chaild 1"),
    React.createElement("h2",{id:"c2"},"hii am i chaild 2")
   ])
   
   )

console.log(parent);



const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Hello World from React");

        console.log(heading);

        const root = ReactDOM.createRoot(document.getElementById("root")) ;

        root.render(heading);