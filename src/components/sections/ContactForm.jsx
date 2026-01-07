import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { LuArrowRight } from "react-icons/lu";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ⛔ prevents reload
    console.log("Form UI only:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[var(--secondary)] p-8 space-y-4 rounded-md"
    >
      <div className="flex items-center gap-2 text-xl">
        <FiSend />
        <h2 className="text-2xl font-bold">Send Me A Message</h2>
      </div>

      <div className="space-y-6">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div>
            <label>Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              className="bg-[#364153] w-full px-4 py-3 mt-1 rounded-md focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label>Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="bg-[#364153] w-full px-4 py-3 mt-1 rounded-md focus:outline-none"
              placeholder="Your email"
            />
          </div>
        </div>

        <div>
          <label>Subject</label>
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            type="text"
            className="bg-[#364153] w-full px-4 py-3 mt-1 rounded-md focus:outline-none"
            placeholder="Subject"
          />
        </div>

        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-[#364153] w-full px-4 py-3 mt-1 rounded-md focus:outline-none"
            placeholder="Your message"
          />
        </div>

        <button
          type="submit"
          className="p-3 bg-gradient-to-r from-[#2866e1] to-[#1d69fd]/50 font-medium rounded-lg px-6 flex items-center gap-2"
        >
          Send Message <LuArrowRight />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
