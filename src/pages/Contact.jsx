import { Mail, Phone, Send } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/pages/Contact/Contact.css';

function Contact() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t('pages.contactEyebrow')}
        icon={Mail}
        title={t('pages.contactTitle')}
        copy={t('pages.contactCopy')}
      />
      <section className="section contact-layout">
        <div className="contact-card">
          <h2>{t('contact.cardTitle')}</h2>
          <p>{t('contact.cardCopy')}</p>
          <div className="contact-methods">
            <a href="mailto:hello@freegenero.com">
              <Mail size={18} />
              hello@freegenero.com
            </a>
            <a href="tel:+10000000000">
              <Phone size={18} />
              +1 000 000 0000
            </a>
          </div>
        </div>
        <form className="form-card">
          <label>
            {t('contact.name')}
            <input type="text" name="name" placeholder={t('contact.namePlaceholder')} />
          </label>
          <label>
            {t('contact.email')}
            <input type="email" name="email" placeholder={t('contact.emailPlaceholder')} />
          </label>
          <label>
            {t('contact.message')}
            <textarea name="message" rows="5" placeholder={t('contact.messagePlaceholder')} />
          </label>
          <button className="button button-primary" type="button">
            {t('contact.send')}
            <Send size={18} />
          </button>
        </form>
      </section>
    </>
  );
}

export default Contact;
