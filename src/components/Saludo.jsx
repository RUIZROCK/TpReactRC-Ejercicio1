import { useState } from "react";

const Saludo = (props) => {
    const [txt,text]=useState();

    return (
        <div>
            <h1 className="display-3">Hello {props.data} {txt}!</h1>
            <button className="btn btn-primary" onClick={()=>{text("(from changed State)")}}>Click!</button>
        </div>
    );
};

export default Saludo;