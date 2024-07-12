import React from "react";
import "./ContactMiddle.css";
import Newsletter from "../../layouts/newsletter/Newsletter";
import Preview from "../../layouts/preview/Preview";
import bgImage from "../../assets/banner.png";

const ContactMiddle = () => {
  return (
    <>
      <Preview title="#letsTalk" des="Leave a message, we love to hear from you!" bg={bgImage} />
      <Newsletter />
    </>
  );
};

export default ContactMiddle;
