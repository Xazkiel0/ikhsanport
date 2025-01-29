import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex text-white py-10 border-t border-t-muted-foreground/35">
      <span className="text-sm text-muted-foreground">
        Copyright &copy; {year} Reserved by Muhammad Sayidul Ikhsan Ulya |
        Powered by PeopleNonsenseCorp
      </span>
    </div>
  );
};

export default Footer;
