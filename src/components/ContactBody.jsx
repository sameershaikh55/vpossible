import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import emailjs from "@emailjs/browser";

const ContactBody = () => {
  const form = useRef();

  const [status, setStatus] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setStatus("sending");

    emailjs
      .sendForm(
        "service_ac3ejgf",
        "template_chbustr",
        form.current,
        "09Ixer__CAqEA42zm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setStatus("Your message has been submitted.");
    reset();
  };

  return (
    <div className="contact_container">
      <div className="page_container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mx-auto px-3">
              <form
                ref={form}
                onSubmit={handleSubmit(onSubmit)}
                className="row gy-4"
              >
                <div className="col-12 col-md-6">
                  <label className="themeColor" htmlFor="First Name">
                    First Name
                  </label>
                  <br />
                  <div className="position-relative w-100">
                    <input
                      className={`${
                        errors.fname && errors.fname.message && "error_field"
                      } w-100`}
                      type="text"
                      id="First Name"
                      {...register("fname", {
                        required: "Required*",
                      })}
                    />
                    {errors.fname && (
                      <p className="login__error__message">
                        {errors.fname.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <label className="themeColor" htmlFor="Surname">
                    Surname
                  </label>
                  <br />
                  <div className="position-relative w-100">
                    <input
                      className={`${
                        errors.lname && errors.lname.message && "error_field"
                      } w-100`}
                      type="text"
                      id="Surname"
                      {...register("lname", {
                        required: "Required*",
                      })}
                    />
                    {errors.lname && (
                      <p className="login__error__message">
                        {errors.lname.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <label className="themeColor" htmlFor="Email Address">
                    Email Address
                  </label>
                  <br />
                  <div className="w-100 position-relative">
                    <input
                      className={`${
                        errors.email && errors.email.message && "error_field"
                      } w-100`}
                      {...register("email", {
                        required: "Required*",
                        pattern: {
                          value:
                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                          message: "Invalid Email*",
                        },
                      })}
                      type="text"
                      id="Email Address"
                    />
                    {errors.email && (
                      <p className="login__error__message">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <label className="themeColor" htmlFor="Phone (Optional)">
                    Phone <span>(Optional)</span>
                  </label>
                  <br />
                  <input
                    className="w-100"
                    {...register("phone")}
                    type="text"
                    id="Phone (Optional)"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="themeColor" htmlFor="Company (Optional)">
                    Company <span>(Optional)</span>
                  </label>
                  <br />
                  <input
                    className="w-100"
                    {...register("company")}
                    type="text"
                    id="Company (Optional)"
                  />
                </div>
                <div className="col-12">
                  <label className="themeColor" htmlFor="Message">
                    Message
                  </label>
                  <br />
                  <div className="position-relative w-100">
                    <textarea
                      className={`${
                        errors.message &&
                        errors.message.message &&
                        "error_field"
                      } w-100`}
                      type="text"
                      id="Message"
                      {...register("message", {
                        required: "Required*",
                      })}
                    />
                    {errors.message && (
                      <p className="login__error__message">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-12 d-flex align-items-center justify-content-end gap-2">
                  {status !== "sending" && (
                    <p className="mb-0 success">{status}</p>
                  )}
                  <button type="submit">
                    {(status === "sending" && (
                      <BeatLoader size={10} color="#fff" />
                    )) ||
                      "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
