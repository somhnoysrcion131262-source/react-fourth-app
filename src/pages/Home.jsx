import Header from "./../components/Header";
import Footer from "./../components/Footer";
import NavBarMain from "./../components/NavBarMain";
import hero from "./../assets/hero.png";

export default function Home() {
  return (
    <>
      <NavBarMain />
      <Header />
      {/* <h2 style="text-align: center ; color: red">Home Page</h2> */}
      <h2 style={{textAlign: "center", color:"red"}}>Home Page</h2>
      <p style={{textAlign: "center"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, accusamus,
        adipisci quam saepe explicabo, ratione ipsa enim necessitatibus
        molestias fuga eos nulla itaque ipsam quia et qui sint? Aperiam, fugit.
      </p>
      {/* การแสดงรูปจาก public */}
      <img src="super.png" alt="super" style={{width:"100px"}}/>

      {/* การแสดงรูปจาก assets */}
      <img src={hero} alt="hero" style={{width:"200px"}}/>
      <Footer />
    </>
  );
}