import logo from "../assets/stackline_logo.svg";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center py-2.5 bg-nav-blue">
      <img src={logo} alt="Logo" className="h-10 py-2 mx-4 my-2" />
    </nav>
  );
}
