import React from "react";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer>
      <p>&copy; copyright {currentYear}</p>
    </footer>
  );
};

export default Footer;
