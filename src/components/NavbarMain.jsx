export default function NavbarMain() {
  const a_style = {
    color: "white",
    textDecoration: "none",
  }

  const dev_style = {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1f1881",
          padding: "15px",
          marginBottom: "50px",
          gap: "5px",
        }

  return (
    <>
      <dev style={dev_style}>
        <a href="/" style={a_style}>Home</a> |
        <a href="/about" style={a_style}>ABOUT</a> |
        <a href="/contact" style={a_style}>CONTACT</a> |
        <a href="/products" style={a_style}>PRODUCT</a>
      </dev>
    </>
  );
}