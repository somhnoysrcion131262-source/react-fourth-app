import ProductHeader from "./../components/ProductHeader";
import Footer from "./../components/Footer";

export default function Computer() {
  return (
    <>
      <a href="/product" style={{textDecoration: "none"}}>
        <ProductHeader />
      </a>
      <h2 style={{textAlign: "center", color:"red"}}>Computer Page</h2>
      <p style={{textAlign: "center"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
        accusantium rerum assumenda. Ea quam est dolorum facere hic fugit
        voluptas itaque amet doloremque! Laboriosam corporis, hic labore dolores
        voluptas quam?
      </p>
      <Footer />
    </>
  );
}