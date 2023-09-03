import React from 'react';
import "./style.css";

const About = () => {
  return (
   <div className="about__Container">
     
     <div className="left__Photo">
          <img src="https://lh3.googleusercontent.com/a/AAcHTtdx14ed3eP3ccLNog5Jrd6HoRIo3zCm2z79PHT9cP9RaI0=s360-c-no" alt="photo"  className='myImg' />
     </div>

     <div className="right__Information">
         <h1>Hi, I'm Shashwath</h1>
         <h3>  Living in Bengaluru,India</h3>
         <p>A passionate Frontend engineer with over two years of experience, I have developed user-driven features for data-intensive applications using React, Redux, Javascript, and Typescript. As a product builder and developer, I am excited about experimenting with Javascript and Web Development. On the side, I explore Svelte, Golang, and similar languages.
        Currently I am working as a Web Engineer at Fubo TV, a live TV streaming platform based out of NYC.</p>
     </div>
   </div>
  )
}

export default About