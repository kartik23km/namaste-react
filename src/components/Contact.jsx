const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl my-5 font-semibold">Contact us</h1>
      <form className=" flex justify-center gap-x-5">
        <input
          className="border rounded-md p-2 my-5"
          placeholder="Name"
        ></input>
        <input
          className="border rounded-md p-2 my-5"
          placeholder="Message"
        ></input>
        <button
          className="shadow-pink-500 rounded-md p-2 my-5 cursor-pointer bg-pink-100"
          onClick={() => {}}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
