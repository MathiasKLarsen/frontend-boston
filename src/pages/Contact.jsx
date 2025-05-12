"use client"

import { useYupForm } from "../schema/Schema"

const Contact = () => {
  const { register, handleSubmit, reset, errors } = useYupForm()

  return (
    <section id="contact" className="flex flex-col justify-center items-center text-center w-full">
      {/* Title */}
      <h2 className="text-[3.5rem] font-bold uppercase">contact</h2>
      <div className="flex justify-center items-center mb-8">
        <div className="w-30 h-[4px] bg-white rounded-full"></div>
        <span className="text-2xl mx-2">★</span>
        <div className="w-30 h-[4px] bg-white rounded-full"></div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(() => reset())}
        className="w-[800px] max-w-full grid grid-cols-1 gap-6"
      >
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className="w-full border-b-2 text-2xl border-gray-400 focus:outline-none p-2 bg-transparent placeholder-white"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email Address"
            {...register("email")}
            className="w-full border-b-2 text-2xl border-gray-400 focus:outline-none p-2 bg-transparent placeholder-white"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            {...register("phone")}
            className="w-full border-b-2 text-2xl border-gray-400 focus:outline-none p-2 bg-transparent placeholder-white"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        {/* Message */}
        <div>
          <textarea
            rows={5}
            placeholder="Message"
            {...register("message")}
            className="w-full border-b-2 text-2xl border-gray-400 focus:outline-none p-2 bg-transparent placeholder-white resize-none"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-neutral-600 hover:bg-neutral-500 border-2 border-white rounded-lg w-fit py-4 px-10"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
