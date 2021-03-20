import React from "react";

export function Rating(props: any) {
    console.log("Rating rendering")
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={true}/>
        </div>
    )
}

function Star(props: any) {
    console.log("Star rendering")
    return <span>{props.selected ? <b>Star</b>: "Star"}</span>
}