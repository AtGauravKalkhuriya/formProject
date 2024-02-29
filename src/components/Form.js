import React, { useState } from "react";
import "../index.css";
import "../App.css";
import { IoDocumentsSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Form = () => {
  const [formData, setFormData] = useState({
    ticketNumber: "",
    requesters: "",
    title: "",
    services: "",
    requestType: "",
    priority: "",
    message: "",
    files: [],
  });

  function changeHandler(event) {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, files });
  };

  const handleCancelFile = (index) => {
    const updatedFiles = formData.files.filter((file, i) => i !== index);
    setFormData({ ...formData, files: updatedFiles });
  };

  function submitHandler(event) {
    event.preventDefault();
    console.log("form data is here....");
    console.log(formData);
  }
  return (
    <div>
      <h1 className="text-2xl ml-5 mt-4">Helpdesk Entry Form</h1>
      <form onSubmit={submitHandler} className="mt-7">
        <div className="flex justify-around">
          <label htmlFor="ticketNumber">
            Ticket Number:<span className="text-red-400">*</span>
          </label>

          <input
            type="text"
            placeholder="Enter Ticket Number"
            name="ticketNumber"
            required
            value={formData.ticketNumber}
            onChange={changeHandler}
            className="w-[800px] border-2 border-gray-950"
          />
        </div>
        <br />

        <br />
        <br />
        <div className="flex justify-around">
          <label htmlFor="ticketNumber">
            Requesters:<span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Requesters"
            name="requesters"
            required
            value={formData.requesters}
            onChange={changeHandler}
            className="w-[800px] border-2 border-gray-950 ml-5"
          />
        </div>

        <br />

        <br />
        <br />

        <div className="flex justify-around">
          <label htmlFor="title">
            Title:<span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Title"
            name="title"
            required
            value={formData.title}
            onChange={changeHandler}
            className="w-[800px] border-2 border-gray-950  relative left-[15px]"
          />
        </div>

        <br />

        <br />
        <br />
        <div className="flex justify-around ">
          <label htmlFor="services">
            Services:<span className="text-red-700">*</span>
          </label>
          <select
            name="services"
            id="services"
            value={formData.services}
            onChange={changeHandler}
            className="w-[800px] border-2 border-gray-950 ml-5"
          >
            <option value="select">select</option>
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
            <option value="option4">option4</option>
          </select>
        </div>

        <br />

        <br />
        <br />

        <div className="flex justify-around ">
          <label htmlFor="requestType">
            Request Type:<span className="text-red-700">*</span>
          </label>
          <select
            name="requestType"
            id="requestType"
            value={formData.requestType}
            onChange={changeHandler}
            className="w-[800px] border-2 border-gray-950 mr-3"
          >
            <option value="select">select</option>
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
            <option value="option4">option4</option>
          </select>
        </div>

        <br />

        <br />
        <br />

        <div className="flex justify-around ">
          <label htmlFor="priority">
            Priority:<span className="text-red-700">*</span>
          </label>
          <select
            name="priority"
            id="priority"
            value={formData.priority}
            onChange={changeHandler}
            className="w-[800px] border-2 border-gray-950 ml-5"
          >
            <option value="select">select</option>
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
            <option value="option4">option4</option>
          </select>
        </div>

        <br />

        <br />
        <br />

        <div className="flex justify-around ">
          <label htmlFor="message">
            Message:<span className="text-red-700">*</span>
          </label>
          <textarea
            placeholder="Enter Your Message"
            name="message"
            rows="4"
            cols="50"
            value={formData.message}
            onChange={changeHandler}
            className="w-[800px] border-2 border-gray-950"
          />
        </div>

        <br />

        <br />
        <br />
        <div className="flex  justify-around">
          <label htmlFor="attachments">
            Attachments
            <div className="relative left-24 bottom-5">
              <IoDocumentsSharp />
            </div>
          </label>

          <input
            id="files"
            type="file"
            name="files"
            multiple
            accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
  text/plain, application/pdf, image/*"
            onChange={handleFileChange}
            className="w-[800px] border-2 border-gray-950 bg-pink-500"
          />
        </div>

        {formData.files.map((file, index) => (
          <div key={index} className="flex justify-center items-center ml-52">
            {file.name}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => handleCancelFile(index)}
              className="text-red-800"
            >
              <RxCross2 />
            </span>
          </div>
        ))}

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-5"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
