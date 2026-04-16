"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import SectionHeader from "@/components/ui/SectionHeader";
import content from "@/data/content-mock.json";

// UI-only form — no submission logic as per project brief
export default function ApplyPage() {
  const { courses } = content;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    course: "",
    currentClass: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No real submission — UI only
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-linear-to-br from-indigo-950 to-purple-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-800 text-indigo-200 text-xs font-semibold tracking-widest uppercase mb-4">
              Admissions Open
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold">Apply / Enquire</h1>
            <p className="mt-5 text-indigo-300 text-lg max-w-xl mx-auto">
              Fill in the form below and our counselling team will get back to you within 24 hours.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-12 text-center shadow-sm border border-green-100"
            >
              <p className="text-5xl mb-4">🎉</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Application Received!
              </h2>
              <p className="text-gray-500">
                Thank you, <strong>{formData.name}</strong>! Our counselling team will contact
                you at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong>{" "}
                within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    city: "",
                    course: "",
                    currentClass: "",
                    message: "",
                  });
                }}
                className="mt-6 px-6 py-2.5 bg-indigo-600 text-white rounded-lg font-semibold text-sm hover:bg-indigo-700 transition-colors"
              >
                Submit Another Enquiry
              </button>
            </motion.div>
          ) : (
            <FadeInWhenVisible>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <SectionHeader
                  eyebrow="Enquiry Form"
                  heading="Start Your Journey"
                  subheading="All fields marked * are required."
                  align="left"
                />

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rahul@example.com"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                      />
                    </div>
                  </div>

                  {/* Phone & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        City *
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Pune"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                      />
                    </div>
                  </div>

                  {/* Course & Current Class */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="course"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Interested Course *
                      </label>
                      <select
                        id="course"
                        name="course"
                        required
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition bg-white"
                      >
                        <option value="">Select a course</option>
                        {courses.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="currentClass"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Current Class / Grade *
                      </label>
                      <select
                        id="currentClass"
                        name="currentClass"
                        required
                        value={formData.currentClass}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition bg-white"
                      >
                        <option value="">Select class</option>
                        {["Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "Dropper"].map(
                          (cls) => (
                            <option key={cls} value={cls}>
                              {cls}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      Additional Message (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific questions or requirements..."
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100 text-sm"
                  >
                    Submit Enquiry →
                  </motion.button>

                  <p className="text-center text-xs text-gray-400">
                    By submitting, you agree to be contacted by Apex Academy for admissions purposes.
                  </p>
                </form>
              </div>
            </FadeInWhenVisible>
          )}
        </div>
      </section>
    </>
  );
}
