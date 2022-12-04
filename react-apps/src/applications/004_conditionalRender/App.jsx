function MailboxGreeting({ user, unreadMessages }) {
  return (
    <div>
      <div>Hello {user}</div>
      {unreadMessages > 0 && (
        <div>You have {unreadMessages} unread messages</div>
      )}
    </div>
  );
}

function UserMessageWithIf({ user }) {
  if (user) {
    return (
      <div>
        <h2>How you doin'?</h2>
        <div>Hello {user}</div>
      </div>
    );
  } else {
    return <div>Welcome Guest</div>;
  }
}

function UserMessage({ user }) {
  return (
    <div>
      {user ? (
        <div>
          <h2>How r u?</h2>
          <div>Hello {user}</div>
        </div>
      ) : (
        <div>Welcome Guest</div>
      )}
    </div>
  );
}

function LoginButton({ isLoggedIn }) {
  // const object = { color: 'red', name: 'barak' };
  //  const { name, color } = object;

  //
  //
  return (
    <div>
      <button>{isLoggedIn ? "Logout" : "Logout"} </button>
    </div>
  );
}
function App() {
  return (
    <div>
      <LoginButton isLoggedIn={false} />
      <UserMessage user={null} />
      <UserMessage user={"Keren"} />
      <UserMessageWithIf user={"Elena"} />
      <MailboxGreeting user="Natan" unreadMessages={99} />
    </div>
  );
}

export default App;
