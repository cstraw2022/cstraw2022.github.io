import React from "react"
import face from "../assets/face.png"
export function About(){
    return (
        <div id="About">
            <img
                src={face}
                alt="nsu"
                height="200px"
            />
            <h1>About Me</h1> 

            <p>Hi! My name’s Chris, a recent graduate from UCSB with a passion in tinkering. When I'm not glued to the computer screen, in my free time I enjoy playing Nintendo games, tennis, violin, and going to support Nikkei Student Union meetings. Feel free to take a look at my research and experience below!</p>     
        </div>
    )
}