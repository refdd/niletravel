"use client";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import PhoneNumberField from "../form/PhoneNumberField";
import TextArea from "../form/TextArea";
import TextField from "@mui/material/TextField";

function FormContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setnumber] = useState("+1");
  const methods = useForm();
  //   handle change phone number
  const handlephoneNumber = (value) => {
    setnumber(value);
  };
  const onSubmit = (data) => {
    // axios
    //   .post(
    //     `https://api.dubaidaytrips.com/v1/inquires?tenant_id=18&language_id=11`,
    //     {
    //       ...data,
    //       adults: aduits,
    //       children: childs,
    //       departure_airport: ariportFlight,
    //       arrival: dateArrival,
    //       departure: dateDepature,
    //       flight: checked ? "yes" : "no",
    //       url_goal: window.location.href,
    //       number: number,
    //       nationality: selectedCountry.label,
    //       name,
    //       email,
    //       ageOfChildern: JSON.stringify(childAges),
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     router.push("/richiestaricevuta");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    console.log(data);
  };
  return (
    <div className="md:col-span-2">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className=" grid grid-cols-1 gap-4 md:grid-cols-2  px-3 py-6"
        >
          {/* name */}
          <div className="md:col-span-2">
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              type="text"
              required
              fullWidth
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          {/* email */}
          <div className="md:col-span-2">
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              required
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>

          {/* Phone Number  Field */}
          <div className="md:col-span-2">
            <PhoneNumberField onChange={handlephoneNumber} value={number} />
          </div>
          {/* counter Travel */}

          {/*message*/}
          <div className="md:col-span-2">
            <TextArea />
          </div>
          {/* button */}
          <div className="md:col-span-2">
            <div className=" wrapper  flex justify-center items-center w-fit   bg-[#029e9d] px-4 py-3 rounded-2xl z-10  overflow-hidden  ">
              <span className="absolute w-0 top-0 left-0 b-b-width bg-[#ffc107]  -z-10 h-full"></span>
              <button className=" text-lg font-medium group-hover:text-white text-white ">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default FormContactUs;
