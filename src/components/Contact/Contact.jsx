import React from "react";
import "./contact.scss";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    window.location.href = `mailto:${data.email}?subject=${data.subject}&body=${data.message}`;
  };

  return (
    <div id="contact" className="contact">
      {/* <div className="left"></div> */}
      <div className="right">
        <h2>GET IN TOUCH</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.email && <span>An Email is required</span>}
          <input
            type="text"
            placeholder="Email"
            name="email"
            {...register("email", { required: true })}
          />

          <input
            type="text"
            placeholder="Subject"
            name="subject"
            {...register("subject")}
          />
          {errors.message && <span>A message is required.</span>}
          <textarea
            {...register("message", { required: true })}
            name="message"
            placeholder="Message..."
            cols="30"
            rows="10"
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
