export default function ProductLink({ url, title, bgcolor }) {//prop ชื่อ url กับ title
  const a_link = {
    color: "white",
    textDecoration: "none",
    padding: "6px 10px",
    borderRadius: "5px",
    background: bgcolor,
  };

  return (
    <>
      <a
        href={url} style={a_link}>
        {title}
      </a>
    </>
  );
}