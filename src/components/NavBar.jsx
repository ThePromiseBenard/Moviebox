const NavBar = () => {
  return (
    <div className="flex justify-between items-center z-[100] absolute w-full p-4 md:p-8">
      <h1 className=" text-red-600 uppercase text-2xl  md:text-4xl font-bold cursor-pointer ">
        netflix
      </h1>
      <div className="text-white  font-semibold flex items-center gap-4">
        <button className="capitalize">sign in</button>
        <button className="bg-red-600 py-2 px-6 rounded-sm capitalize">
          sign up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
