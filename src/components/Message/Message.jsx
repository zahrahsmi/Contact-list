import "./Message.css";
function Message({ message, showMessage }) {
  return (
    <div>
      <div
        className="message-container"
        style={{ right: showMessage ? 10 : -270 }}
      >
        {message}
      </div>
    </div>
  );
}

export default Message;
