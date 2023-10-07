const Notification = ({ message, messageType }) => {
  if (message === null) {
    return null;
  } else {
    return (
      <>
        <div className={messageType}>{message}</div>
        <br />
      </>
    );
  }
};

export default Notification;
