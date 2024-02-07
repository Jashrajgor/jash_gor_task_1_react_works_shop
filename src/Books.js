import React from "react";
const Books =({img,title,author,price,highlight})=>{

    const showHighlight=()=>{
        alert(`${title} Highlights : ${highlight}`)
    }

    return(
        <div className="booksItem">
            <img src={img} alt="!"/>
            <h2>{`Author : ${author}`}</h2>
            <h3>{`Title : ${title}`}</h3>
            <p>{`Price : ${price}`}</p>
            <button type="button" className="btn" onClick={showHighlight}>Click Me</button>
        </div>
    )
}

export default Books;