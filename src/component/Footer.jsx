import React from "react";

export default function Footer() {
  const nDate = new Date();
  const currentYear = nDate.getFullYear();
  return (
    <footer>
      <p>copyright @{currentYear}</p>
    </footer>
  );
}
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
