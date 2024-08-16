import React from "react";


const About =({image="https://via.placeholder.com/215"})=>{
    return(
    <aside>
     <img
     src={image}
     alt="blog logo"
     />
     <p>About this blog</p>
    </aside>
    )
}
export default About;