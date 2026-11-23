import Header from "./../components/Header";
import Footer from "./../components/Footer";
import NavBarMain from "./../components/NavBarMain";
import ProductLink from "../components/ProductLink";


export default function Product() {
  return (
    <>
      <NavBarMain />
      <Header />
      <h2 style={{textAlign: "center", color:"red"}}>Product Page</h2>
      <dev style={{display: "flex", justifyContent: "center", gap: "10px"}}>
        <ProductLink url="/product/computer" 
                     title="COMPUTER" bgcolor="#12703d" />
        <ProductLink url="/product/smartphone" 
                     title="SMARTPHONE" bgcolor="#ff0000"/>
      </dev>
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