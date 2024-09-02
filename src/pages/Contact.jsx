import React, { useState, useEffect } from "react";
import Header from '../layouts/Header';
import '../assets/css/contact.css';

import LanguageSelector from '../components/LanguageSelector';
import { useTranslation } from 'react-i18next';

import emailjs from 'emailjs-com';


function Contact() {
  const { t } = useTranslation();
  const [isSectionShown, setIsSectionShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sentMessage, setSentMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsSectionShown(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSentMessage('');
    setErrorMessage('');

    const form = e.target;
    
    // SERVICE TEMPLATE USER
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form, process.env.REACT_APP_EMAILJS_USER_ID)

      .then((response) => {
        setSentMessage(t('Contact.sentMessage'));
        form.reset(); // Reset the form fields
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(t('Contact.sentErrorMessage'));
        setLoading(false);
      });
  };

  return (
    <>
      <Header page={'Contact'} H_position="Top" />
      <section id="contact" className={isSectionShown ? 'contact section-show' : ''}>
        <LanguageSelector lang={t('lang')} page={t('Contact.Title')}/>

        <div className="container">
          <div className="section-title">
            <h2>{t('Contact.Title')}</h2>
            <p>{t('Contact.ContactMe')}</p>
          </div>

          <div className="row mt-2">
            {/* Address, Social Profiles, Email, and Phone InfoBoxes */}
          </div>

          <form onSubmit={handleSubmit} role="form" className="php-email-form mt-4">
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder={t('Contact.YouName')} required />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder={t('Contact.YouEmail')} required />
              </div>
            </div>
            <div className="form-group mt-3">
              <input type="text" className="form-control" name="subject" id="subject" placeholder={t('Contact.Subject')} required />
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows="5" placeholder={t('Contact.Message')} required></textarea>
            </div>
            <div className="my-3">
              {loading && <div className="loading">{t('Contact.Loading')}</div>}
              {errorMessage && <div className="error-message">{errorMessage}</div>}
              {sentMessage && <div className="sent-message">{sentMessage}</div>}
            </div>
            <div className="text-center"><button type="submit">{t('Contact.SendMessage')}</button></div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;