export default function Error() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        {"You've stumbled upon a critical error. Sorry about that!"}
        <br />
        <br />
        Please reach out so I can fix this issue. My email is{" "}
        <a href="mailto:sean.becker15@gmail.com">sean.becker15@gmail.com</a>.
        Thanks!
      </div>
    </div>
  );
}
