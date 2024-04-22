import "./homePage.scss";
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="textcontainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            debitis? Repudiandae molestias ab error iste incidunt, deserunt,
            ipsum quos sed minima sint voluptatibus reprehenderit, non at
            delectus. Harum, quae iste.
          </p>
          <searchBar />
          <div className="boxes">
            <div className="box">
              <h1>16</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imagecontainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
