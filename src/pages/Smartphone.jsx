import ProductHeader from "./../components/ProductHeader";
import Footer from "./../components/Footer";

export default function Smartphone() {
  return (
    <>
      <a href="/product" style={{textDecoration: "none"}}>
        <ProductHeader />
      </a>
      <h2 style={{textAlign: "center", color:"red"}}>Smartphone Page</h2>
      <p style={{textAlign: "center"}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint harum
        perspiciatis a repellat obcaecati quasi illo recusandae nam aut hic
        veniam, modi exercitationem, dolorum facilis laudantium eaque architecto
        quisquam deserunt!
      </p>
      <Footer />
    </>
  );
}