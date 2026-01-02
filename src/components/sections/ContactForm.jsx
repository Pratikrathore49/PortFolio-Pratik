import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { LuArrowRight } from "react-icons/lu";
import Loader from "../Loader";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!formData.subject.trim()) return "Subject is required";
    if (!formData.message.trim()) return "Message is required";
    return "";
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setError("");
      setLoading(true);
      if (
        !formData.name ||
        !formData.email ||
        !formData.message ||
        !formData.subject
      ) {
        toast.error('All Feilds Are Required')
        return;
      }
    const res =   await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if(!res.ok) throw new Error('Failed to submit form');
      toast.success('Form Submitted Successfully')
      setFormData({ name: "", email: "", message: "", subject: "" });
    } catch (error) {
      setError('Something went wrong.Please try again.')
      toast.error("Form Not Submitted")
      console.log("Form Data Not Submitted", error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && (
        <div className="inset-0 fixed z-50 bg-black/30 flex items-center justify-center min-h-screen min-w-screen ">
          <Loader />
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-[var(--secondary)] p-8 space-y-4 rounded-md "
      >
        <div className="flex items-center gap-2 text-xl ">
          <FiSend /> <h2 className="text-2xl font-bold">Send Me A Message</h2>{" "}
        </div>


        <div className="space-y-6">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
            <div>
              <label htmlFor="input1">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                id="input1"
                className=" bg-[#364153] w-full px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-500 focus:outline-none mt-1 rounded-md"
                placeholder="your name"
              />
            </div>
            <div>
              <label htmlFor="input2">Email</label>
              <input
                type="text"
                id="input2"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-[#364153] w-full px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-500 focus:outline-none mt-1  rounded-md"
                placeholder="Your Email"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="input3"
              className="text-sm font-medium text-gray-300 "
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              id="input3"
              className=" bg-[#364153] w-full px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-500 focus:outline-none mt-1  rounded-md"
              placeholder="Enter you subject for writting Message"
            />
          </div>

          <div>
            <label
              htmlFor="input4"
              className="text-sm font-medium text-gray-300 "
            >
              Message
            </label>
            <textarea
              id="input4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className=" bg-[#364153] w-full px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-500 focus:outline-none mt-1  rounded-md"
              placeholder="your name"
            ></textarea>
          </div>
                  {error && <p className="text-red-400 text-sm">{error}</p>}

          <button className="p-3  bg-gradient-to-r from-[#2866e1] to-[#1d69fd]/50 font-medium rounded-lg px-6 cursor-pointer flex items-center gap-2 ">
            Send Message <LuArrowRight />
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
