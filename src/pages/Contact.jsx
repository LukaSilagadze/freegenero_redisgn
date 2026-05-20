import { Mail, Phone, Send } from 'lucide-react';
import PageHero from '../components/PageHero';
import '../styles/pages/Contact/Contact.css';

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        icon={Mail}
        title="Talk to Freegenero."
        copy="Reach out about courses, school partnerships, workshops, interviews, or career opportunities."
      />
      <section className="section contact-layout">
        <div className="contact-card">
          <h2>Start a conversation</h2>
          <p>Tell us what you are building for students and we will help you find the right next step.</p>
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
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="How can Freegenero help?" />
          </label>
          <button className="button button-primary" type="button">
            Send message
            <Send size={18} />
          </button>
        </form>
      </section>
    </>
  );
}

export default Contact;
