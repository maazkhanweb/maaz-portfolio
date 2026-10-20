/*
 * File: src/components/Contact/Contact.jsx
 * Description: Contact section with Laravel API form.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {
  FiArrowUpRight,
  FiMail,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import "./Contact.css";

const CONTACT_EMAIL = "YOUR_EMAIL@gmail.com";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/maaz-ali-974350429/";
const GITHUB_URL = "https://github.com/maazkhanweb";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/contact",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.data?.success) {
        setStatus({
          type: "success",
          message:
            response.data.message ||
            "Your message has been sent successfully.",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      const errors = error.response?.data?.errors;

      setStatus({
        type: "error",
        message:
          errors
            ? Object.values(errors).flat()[0]
            : error.response?.data?.message ||
              "Unable to connect to the portfolio server.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-orbit contact-orbit-one" />
      <div className="contact-orbit contact-orbit-two" />
      <div className="contact-orbit contact-orbit-three" />

      <motion.div
        className="contact-label"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span>08</span>
        <i />
        <strong>CONTACT</strong>
      </motion.div>

      <div className="contact-content">
        <motion.p
          className="contact-kicker"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          HAVE AN IDEA?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          LET&apos;S BUILD
          <br />
          <span>SOMETHING</span>
          <br />
          <span>USEFUL.</span>
        </motion.h2>

        <motion.p
          className="contact-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Whether it is a complete software system, an intelligent
          workflow or a digital product, I am interested in turning
          meaningful ideas into real working solutions.
        </motion.p>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="contact-field">
            <label htmlFor="contact-name">YOUR NAME</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              maxLength={100}
              autoComplete="name"
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email">EMAIL ADDRESS</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              maxLength={150}
              autoComplete="email"
              required
            />
          </div>

          <div className="contact-field contact-field-message">
            <label htmlFor="contact-message">YOUR MESSAGE</label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your idea..."
              maxLength={5000}
              rows={5}
              required
            />
          </div>

          {status.message && (
            <div className={`contact-form-status ${status.type}`}>
              {status.type === "success" ? (
                <FiCheckCircle />
              ) : (
                <FiAlertCircle />
              )}
              <span>{status.message}</span>
            </div>
          )}

          <button
            type="submit"
            className="contact-submit"
            disabled={isSubmitting}
          >
            <span>
              {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
            </span>

            {isSubmitting ? (
              <span className="contact-spinner" />
            ) : (
              <FiSend />
            )}
          </button>
        </motion.form>

        <motion.div
          className="contact-actions"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="contact-button contact-button-primary"
          >
            <FiMail />
            <span>EMAIL ME</span>
            <FiArrowUpRight />
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <FiLinkedin />
            <span>LINKEDIN</span>
            <FiArrowUpRight />
          </a>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <FiGithub />
            <span>GITHUB</span>
            <FiArrowUpRight />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="contact-availability"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="availability-dot" />
        <span>AVAILABLE FOR WORK</span>
      </motion.div>

      <div className="contact-bottom">
        <span>BUILD WITH PURPOSE.</span>
        <span>© 2026</span>
      </div>
    </section>
  );
};

export default Contact;