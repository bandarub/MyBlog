import React from "react";

const About = () => {
  return (
    <div className="aboutApp">
      <span>
        <h4>Summary</h4>
        <p>
          This is CRUD aplication.You can add,remove,update and delete the post
        </p>
        <h4>Technologies used:</h4>
        <p>
          <span>Front-End: </span>React,Redux
        </p>
        <p>
          <span>Back-End: </span>Node,MongoDB
        </p>
        <h4>GitHub Link</h4>
        <a href="https://github.com/bandarub/MyBlog" target="blank">
          Please click
        </a>
      </span>
    </div>
  );
};

export default About;
