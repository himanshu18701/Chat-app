export default function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat Box</span>
        <span className="title">LogIn</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
        </form>
        <p>You don&apos;t have an account? Register</p>
      </div>
    </div>
  );
}
