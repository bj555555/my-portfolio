import { useState } from "react";
import emailjs from "@emailjs/browser";

// ─── SETUP (one-time, free) ────────────────────────────────────────────────
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add a new Email Service → connect your Gmail
// 3. Create an Email Template — use these variables in the template body:
//      From: {{from_name}} <{{from_email}}>
//      Subject: {{subject}}
//      Budget: {{budget}}
//      Message: {{message}}
// 4. Replace the three strings below with your real IDs:
const EMAILJS_SERVICE_ID  = "service_woe62hf";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_z2i0c9s";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "tda13CVaIgtE2zAOx";   // e.g. "AbCdEfGhIjKlMnOp"
// ──────────────────────────────────────────────────────────────────────────

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", subject: "", budget: "", message: "",
  });
  const [errors, setErrors]   = useState({});
  const [status, setStatus]   = useState("idle"); // idle | sending | success | error
  const [charCount, setCharCount] = useState(0);

  const MAX_CHARS = 500;

  function validate() {
    const e = {};
    if (!form.name.trim())    e.name    = true;
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = true;
    if (!form.message.trim()) e.message = true;
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "message") {
      const trimmed = value.slice(0, MAX_CHARS);
      setForm((f) => ({ ...f, message: trimmed }));
      setCharCount(trimmed.length);
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
    setErrors((prev) => ({ ...prev, [name]: false }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject || "General Inquiry",
          budget:     form.budget  || "Not specified",
          message:    form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-success">
        <div className="success-icon">✓</div>
        <h3>Message sent!</h3>
        <p>
          Thanks <strong>{form.name}</strong>! I'll reply to{" "}
          <span className="success-email">{form.email}</span> within 24 hours.
        </p>
        <button className="btn-glow" onClick={() => { setStatus("idle"); setForm({ name:"",email:"",subject:"",budget:"",message:"" }); setCharCount(0); }}>
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="cf-row">
        <div className={`cf-field ${errors.name ? "cf-error" : ""}`}>
          <label>Your Name</label>
          <input
            name="name" type="text" placeholder="John Smith"
            value={form.name} onChange={handleChange}
          />
          {errors.name && <span className="cf-err-msg">Name is required</span>}
        </div>
        <div className={`cf-field ${errors.email ? "cf-error" : ""}`}>
          <label>Email Address</label>
          <input
            name="email" type="email" placeholder="john@example.com"
            value={form.email} onChange={handleChange}
          />
          {errors.email && <span className="cf-err-msg">Valid email required</span>}
        </div>
      </div>

      <div className="cf-row">
        <div className="cf-field">
          <label>Subject</label>
          <select name="subject" value={form.subject} onChange={handleChange}>
            <option value="">Select a topic...</option>
            <option>Freelance Project</option>
            <option>Job Opportunity</option>
            <option>Collaboration</option>
            <option>General Inquiry</option>
          </select>
        </div>
        <div className="cf-field">
          <label>Budget (optional)</label>
          <select name="budget" value={form.budget} onChange={handleChange}>
            <option value="">Select range...</option>
            <option>Under $500</option>
            <option>$500 – $1,000</option>
            <option>$1,000 – $5,000</option>
            <option>$5,000+</option>
            <option>Let's discuss</option>
          </select>
        </div>
      </div>

      <div className={`cf-field ${errors.message ? "cf-error" : ""}`}>
        <label>Your Message</label>
        <textarea
          name="message" rows={6}
          placeholder="Tell me about your project or idea..."
          value={form.message} onChange={handleChange}
        />
        <div className="cf-meta">
          {errors.message && <span className="cf-err-msg">Message is required</span>}
          <span className="char-count">{charCount} / {MAX_CHARS}</span>
        </div>
      </div>

      {status === "error" && (
        <div className="cf-send-error">
          Something went wrong. Please email me directly at bijaykalikoti8@gmail.com
        </div>
      )}

      <button className="btn-glow" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Message →"}
      </button>
    </form>
  );
}
