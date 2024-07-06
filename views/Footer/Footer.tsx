import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-secondary">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
          <div>© 2024 toni boni | All Rights NOT Reserved</div>
          <div>
            <a href="#">Privacy Policy</a>
            <span> | </span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
