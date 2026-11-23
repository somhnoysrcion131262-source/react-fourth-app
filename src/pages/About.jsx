import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBarMain from "../components/NavBarMain";

export default function About() {
  return (
    <>
      <NavBarMain />
      <Header />
      <h2 style={{ textAlign: "center", color: "red" }}>
        About Page
      </h2>
      <p style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ut
        aspernatur temporibus tenetur cumque, in, porro deleniti libero iste
        tempore cupiditate beatae consectetur! Quis nihil veritatis possimus
        repudiandae similique! Voluptates!
      </p>
      <Footer />
    </>
  );
}