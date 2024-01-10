import React, { useState } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <>
      {/* Footer */}
      <footer className="py-6 md:py-8">
        <div className="container mx-auto">
          <p className="text-center text-base text-gray-500">
            Copyright ©{year} | All rights reserved by Learn with Sumit
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
