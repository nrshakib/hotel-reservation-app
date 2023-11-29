const Navbar = () => {
  return (
    <nav className="h-14 bg-blue-950 text-white flex justify-center">
      <div className="w-full max-w-full">
        <span className="font-medium">bookaroom</span>
        <div className="">
          <button className="border-2 rounded px-2 mr-1">Register</button>
          <button className="border-2 rounded px-2 ml-1">Log In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
