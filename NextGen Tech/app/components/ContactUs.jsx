'use client';
import React, { useState } from "react";
import Image from "next/image";
import contactImage from "@/public/images/contactUs.webp";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

const ContactUs = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const data = formik.values;
    setLoading(true);
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response?.ok) {
        toast.success("Message sent successfully");
        formik.resetForm();
        setLoading(false);
      }
    } catch (error) {
      toast.error("Failed to send message");
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <Image
            src={contactImage}
            alt="Contact"
            width={500}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-[#333333] mb-6">Get in touch</h2>
          <form onSubmit={formik.handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label className="block font-medium text-[#444] mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full border border-[#ebebda] rounded-full px-4 py-3 text-sm bg-[#fcfcfc] text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block font-medium text-[#444] mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-[#ebebda] rounded-full px-4 py-3 text-sm bg-[#fcfcfc] text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
              )}
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label className="block font-medium text-[#444] mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                className="w-full border border-[#ebebda] rounded-full px-4 py-3 text-sm bg-[#fcfcfc] text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.subject && formik.errors.subject && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.subject}</p>
              )}
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block font-medium text-[#444] mb-1">Message</label>
              <textarea
                name="message"
                placeholder="Write your message"
                rows={4}
                className="w-full border border-[#ebebda] rounded-2xl px-4 py-3 text-sm bg-[#fcfcfc] text-black resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#4e2fa9] text-white font-medium text-sm py-3 transition-all duration-300 hover:bg-[#3e2391] disabled:opacity-50"
            >
              {loading ? <Spinner /> : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
