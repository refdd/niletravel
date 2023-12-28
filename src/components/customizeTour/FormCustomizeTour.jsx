"use client";
import TextField from "@mui/material/TextField";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
const ArrivalDate = dynamic(() => import("../form/ArrivalDate"));
const DepartureDate = dynamic(() => import("../form/DepartureDate"));
const PhoneNumberField = dynamic(() => import("../form/PhoneNumberField"));
const CounterTraveller = dynamic(() => import("../form/CounterTraveller"));
const TextArea = dynamic(() => import("../form/TextArea"));
const NationalitySelect = dynamic(() => import("../form/NationalitySelect"));
function FormCustomizeTour() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [EndDate, setEndDate] = useState(null);
  const [StartDate, setStartDate] = useState(null);
  const [number, setnumber] = useState("+1");
  const [aduits, setAduits] = useState(0);
  const [childs, setChilds] = useState(0);
  const [childAges, setChildAges] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({
    code: "US",
    label: "United States",
    phone: "1",
  });
  const methods = useForm();
  //   handle start date change
  const handleStartDate = (date) => {
    setStartDate(date);
  };
  //   handle end date change
  const handleEndDate = (date) => {
    setEndDate(date);
  };
  // handle selected country
  const handleCountryChange = (newValue) => {
    setSelectedCountry(newValue);
  };
  //   handle change phone number
  const handlephoneNumber = (value) => {
    setnumber(value);
  };
  //  handle add child age
  const handleAddChild = () => {
    setChildAges([...childAges, ""]);
    handleAddCounter("childs");
  };
  //  handle remove child age
  const handleRemoveChild = (index) => {
    const updatedAges = [...childAges];
    updatedAges.splice(index, 1);
    setChildAges(updatedAges);
    handleRemoveCounter("childs");
  };
  //  handle change child age
  const handleChildAgeChange = (index, age) => {
    const updatedAges = [...childAges];
    updatedAges[index] = age;
    setChildAges(updatedAges);
  };
  //   handle remove travler
  const handleRemoveCounter = (type) => {
    if (type == "adults" && aduits > 0) {
      setAduits(aduits - 1);
    }
    if (type == "childs" && childs > 0) {
      setChilds(childs - 1);
    }
  };
  //   handle add traveler
  const handleAddCounter = (type) => {
    if (type == "adults") {
      setAduits(aduits + 1);
    }
    if (type == "childs") {
      setChilds(childs + 1);
    }
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
    <div className="  md:w-[60%] md:mx-auto border rounded-md shadow-lg  mt-9">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className=" grid grid-cols-1 gap-4 md:grid-cols-2  px-3 py-6"
        >
          {/* name */}
          <div className="md:col-span-1">
            <label className="block mb-2 text-2xl font-medium text-bsDark capitalize ">
              Full Name
            </label>
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
          <div className="md:col-span-1">
            <label className="block mb-2 text-2xl font-medium text-bsDark capitalize ">
              Email
            </label>
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
          {/* arrival */}
          <div className="">
            <label className="block mb-2 text-2xl font-medium text-bsDark capitalize ">
              start date
            </label>
            <ArrivalDate value={StartDate} onChange={handleStartDate} />
          </div>
          {/* departure */}
          <div className="">
            <label className="block mb-2 text-2xl font-medium text-bsDark capitalize ">
              end date
            </label>
            <DepartureDate value={EndDate} onChange={handleEndDate} />
          </div>
          {/* Nationality */}
          <div className="md:col-span-1">
            <label className="block mb-2 text-2xl font-medium text-bsDark capitalize ">
              Nationailty
            </label>
            <NationalitySelect
              selectedCountry={selectedCountry}
              handleCountryChange={handleCountryChange}
            />
          </div>
          {/* Phone Number  Field */}
          <div className="md:col-span-1">
            <label className="block mb-2 text-2xl font-medium text-bsDark capitalize ">
              code Number
            </label>
            <PhoneNumberField onChange={handlephoneNumber} value={number} />
          </div>
          {/* counter Travel */}
          <div className="md:col-span-2">
            <CounterTraveller
              handleRemoveCounter={handleRemoveCounter}
              handleAddCounter={handleAddCounter}
              adults={aduits}
              childrens={childs}
              childAges={childAges}
              handleAddChild={handleAddChild}
              handleRemoveChild={handleRemoveChild}
              handleChildAgeChange={handleChildAgeChange}
            />
          </div>
          {/*message*/}
          <div className="md:col-span-2">
            <label className="block mb-2 text-2xl font-medium text-bsDark capitalize w-60 md:w-auto  ">
              your massage
            </label>
            <TextArea />
          </div>
          {/* button */}
          <div className="md:col-span-2">
            <div className=" wrapper  flex justify-center items-center  bg-[#029e9d] px-4 py-3 rounded-2xl z-10  overflow-hidden  ">
              <span className="absolute w-0 top-0 left-0 b-b-width bg-[#ffc107]  -z-10 h-full"></span>
              <button className=" text-lg font-medium group-hover:text-white text-white ">
                Inquire now
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default FormCustomizeTour;
