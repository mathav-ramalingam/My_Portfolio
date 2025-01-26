import React from 'react'

export const Certifications = () => {
  return (
    <section id="contact" className="contact section py-10 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Get in touch</h2>
        <span className="text-gray-600">Contact me</span>
      </div>
      <div className="contact_container container flex flex-col lg:flex-row gap-8">
        {/* Contact Content */}
        <div className="contact_content flex-1">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Talk to me</h3>
          <div className="contact_info grid gap-6">
            {/* Email Card */}
            <div className="contact_card flex items-start gap-4 p-4 bg-white shadow-md rounded-lg">
              <i className="bx bx-mail-send text-xl text-gray-700"></i>
              <div>
                <h3 className="contact_card-title text-lg font-semibold text-gray-800">Email</h3>
                <span className="contact_card-data text-gray-600">ragu16102004@gmail.com</span>
                <a
                  href="mailto:ragu16102004@gmail.com"
                  className="contact_button flex items-center text-blue-600 mt-2 hover:underline"
                >
                  Write me
                  <i className="bx bx-right-arrow-alt ml-2 text-lg"></i>
                </a>
              </div>
            </div>
            {/* WhatsApp Card */}
            <div className="contact_card flex items-start gap-4 p-4 bg-white shadow-md rounded-lg">
              <i className="bx bxl-whatsapp text-xl text-green-500"></i>
              <div>
                <h3 className="contact_card-title text-lg font-semibold text-gray-800">WhatsApp</h3>
                <span className="contact_card-data text-gray-600">+9629074704</span>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <form className="contact_form flex-1 bg-white p-6 shadow-md rounded-lg">
          <div className="grid gap-4">
            {/* Name Field */}
            <div className="contact__form-div grid">
              <label
                htmlFor="name"
                className="contact__form-tag font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="contact__form-input p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            {/* Email Field */}
            <div className="contact__form-div grid">
              <label
                htmlFor="email"
                className="contact__form-tag font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="contact__form-input p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Project Field */}
            <div className="contact__form-div grid">
              <label
                htmlFor="project"
                className="contact__form-tag font-medium text-gray-700"
              >
                Project
              </label>
              <textarea
                name="project"
                id="project"
                className="contact__form-input p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message"
                rows="4"
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              className="button button--flex contactme__button flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
              type="submit"
            >
              Send Message
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
