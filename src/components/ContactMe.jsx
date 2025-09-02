import React from "react";
import { Link } from "react-router-dom";

function ContactMe() {
  return (
    <div className="contact">
      <div className="container mx-auto px-4 py-16 text-white">
        <div className="text-center ">
          <h2 className="text-3xl md:text-4xl font-bold">CONTACT ME</h2>
          <p className="mt-2 max-w-2xl mx-auto">
            Interested if I'd be the right fit for your team? Fill in the form
            and I will respond within 24-48 Hours
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => {
              window.location.href = "mailto:nikhilraikwar099@gmail.com";
            }}
            className="rounded-md border border-white/80 px-6 py-2 hover:bg-white cursor-pointer hover:text-slate-900 transition"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
