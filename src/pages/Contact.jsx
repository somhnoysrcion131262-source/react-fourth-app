import Header from "./../components/Header";
import Footer from "./../components/Footer";
import NavBarMain from "./../components/NavBarMain";

export default function Contact() {
  return (
    <>
      <NavBarMain />
      <Header />
      <h2 style={{textAlign: "center", color:"red"}}>Contact Page</h2>
      <p style={{textAlign: "center"}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo suscipit
        recusandae nobis, eum laudantium similique molestias natus dicta placeat
        unde, ratione sequi quidem earum molestiae incidunt facere ad vero
        magnam.
      </p>
      <Footer />
    </>
  );
}