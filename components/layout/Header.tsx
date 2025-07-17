const Header = () => {
  return (
    <header className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">LuxStay</h1>
      <input
        type="text"
        placeholder="Search..."
        className="border rounded-md px-3 py-1 w-1/2"
      />
      <div className="space-x-4">
        <button className="text-blue-600">Sign In</button>
        <button className="bg-blue-600 text-white px-4 py-1 rounded-md">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
