import Add from "../img/addAvatar.png";
export default function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat Box</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="image" />
            <span>Add a profile</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
}
