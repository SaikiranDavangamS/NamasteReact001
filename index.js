    
/*
Creat this type of structure using React.createElement
<div>
<div>
<h1>
</h1>
</div>
</div>


*/
    
    
    
    
    
    
    const heading = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading"},"Hello world from React"),React.createElement("h2",{id:"heading"},"Hello world from React"),React.createElement("h3",{id:"heading"},"Hello world from React")]));

    console.log(heading)

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);