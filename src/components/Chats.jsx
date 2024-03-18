import profile from "../img/profile.png";
export default function Chats() {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={profile} alt="user" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
}
