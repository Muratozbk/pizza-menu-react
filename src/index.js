import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return <div>
        <h1>Hello react!</h1>
        <Pizza />
        <Pizza />
    </div>
}

function Pizza() {
    return (
        <div>
            <img src="pizzas/spinaci.jpg" alt="Pizza spinaci" />
            <h2>pizza Spinaci!</h2>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>);