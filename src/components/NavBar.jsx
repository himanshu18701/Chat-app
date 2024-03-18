import profile from "../img/profile.png";
export default function NavBar() {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img src={profile} alt="Profile-Pic" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
}
