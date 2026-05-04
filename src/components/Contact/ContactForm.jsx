import { useState } from 'react';
import { Button } from '../Button';

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('loading');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const mailtoLink = `mailto:islam@example.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
      window.location.href = mailtoLink;
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="form-success">
        <div className="form-success-icon">&#10003;</div>
        <h3>Message Sent!</h3>
        <p>Thank you for reaching out. I'll get back to you soon.</p>
        <Button variant="secondary" size="sm" onClick={() => setStatus('idle')}>
          Send Another
        </Button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className={`form-input ${errors.name ? 'form-input-error' : ''}`}
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
          />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className={`form-input ${errors.email ? 'form-input-error' : ''}`}
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="subject" className="form-label">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          className={`form-input ${errors.subject ? 'form-input-error' : ''}`}
          value={form.subject}
          onChange={handleChange}
          placeholder="Project discussion"
        />
        {errors.subject && <span className="form-error">{errors.subject}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          className={`form-input form-textarea ${errors.message ? 'form-input-error' : ''}`}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
        />
        {errors.message && <span className="form-error">{errors.message}</span>}
      </div>
      {status === 'error' && (
        <div className="form-error-message">Something went wrong. Please try again.</div>
      )}
      <Button type="submit" variant="primary" size="lg" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
