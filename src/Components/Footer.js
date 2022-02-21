import React from 'react';

const Footer = ({ wxResults }) => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="author">
          <p>
            Contact API Author:
            {wxResults && (
              <span className="note">{wxResults.contact_author.auth_note}</span>
            )}
            {wxResults && (
              <span className="email">{wxResults.contact_author.email}</span>
            )}
          </p>
        </div>
        <div className="data-source">
          {wxResults && <span>{wxResults.data_source}</span>}
        </div>
      </div>
    </div>
  );
};

export default Footer;
