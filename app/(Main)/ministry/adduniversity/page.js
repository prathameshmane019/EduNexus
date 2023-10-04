import React from "react";

const AddUniversity = () => {
  return (
    <>
      <div className="mx-16 flex flex-row gap-20 my-10">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">University Name</span>
            <span className="label-text-alt">(official name)</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email ID</span>
            <span className="label-text-alt">(official email id)</span>
          </label>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <div className="mx-16 flex flex-row gap-20 mb-10">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter Password</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Re-enter Password</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <div className="mx-16 mb-10 flex justify-center">
        <button className="btn btn-wide btn-active btn-primary">
          Add University
        </button>
      </div>
    </>
  );
};

export default AddUniversity;
