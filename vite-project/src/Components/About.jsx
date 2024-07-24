import React, { useState } from "react";
import { Button } from "reactstrap";

function About(props) {
  const [mystyle, setMystyle] = useState({
    color: "black",
    backgroundColor: "white",
    textAlign: "justify",
  });

  const [btnText, setBtnText] = useState("Enable Dark mode");

  let toggleStyle = () => {
    if (mystyle.color === "black") {
      setMystyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light mode");
    } else {
      setMystyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark mode");
    }
  };

  return (
    <>
      <h1
        className="my-3"
        style={{ color: props.mode === "dark" ? "grey" : "white" }}
      >
        Background color
      </h1>
      <div className="container" style={mystyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        facilis aut perspiciatis atque quos provident adipisci maiores, omnis
        mollitia eveniet. Quibusdam sint corporis, dolor laudantium magnam,
        harum eaque saepe id sequi tempora nobis amet exercitationem voluptatum.
        Possimus voluptatibus perspiciatis, molestiae nostrum nobis qui iusto
        veritatis dolorum optio suscipit. Dignissimos molestias reiciendis
        laborum ut non. Inventore a nam, dicta autem perspiciatis facilis
        officiis harum, labore natus sit vitae doloribus quam accusantium
        laborum iusto recusandae quis quas ea provident vero quae sequi voluptas
        esse expedita? Dolores provident excepturi consectetur fuga tempora
        dignissimos reprehenderit officia voluptatem eligendi corporis
        perferendis aperiam quaerat adipisci quo, soluta officiis odio sit,
        deserunt pariatur ipsum nobis eius praesentium modi dolor? Sed, pariatur
        quidem nulla non ex rerum nemo nihil molestiae explicabo cumque. Cumque
        excepturi recusandae laborum quam, cupiditate ut aliquid porro vel,
        inventore commodi asperiores voluptatum repellat dicta odit in sequi!
        Sit id aliquid nesciunt, officiis nihil esse perferendis facilis autem
        error quo dolore obcaecati voluptate quae? Impedit id aliquam ea modi
        quis unde nobis. Deleniti alias saepe temporibus fuga. Necessitatibus
        ipsum iure velit facilis, sed aut eum quae, ut inventore, quaerat
        blanditiis laboriosam. Corrupti, minima! Voluptatibus magni quam
        blanditiis velit animi laboriosam unde molestias nobis fugiat vel.
      </div>

      <Button onClick={toggleStyle} className="my-3" color="danger">
        {btnText}
      </Button>
    </>
  );
}

export default About;
