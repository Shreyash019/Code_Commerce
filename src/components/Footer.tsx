import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer text-white p-4 mt-16">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Code Commerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
