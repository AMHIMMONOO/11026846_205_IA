import MainLayout from "./MainLayout";
import "../CSS/AboutPage.css"
import Header from "./Header";
import Footer from "./Footer";

// A component for the about section
const AboutPage = () => {
  return (
    <div>
      <Header />
        <section className="about">
          <div className="container">
            <h2>About Us</h2>
            <p>
              The Department of Computer Science was established in 1974 as a unit
              within the Faculty of Science. Since then, it has grown to become a
              full-fledged department with over 30 faculty members and more than 1000
              students. The department is committed to excellence in teaching,
              research, and service to the community.
            </p>
            <div className="about-mission">
              <h3>Our Mission</h3>
              <p>
                To provide high-quality education in computer science that prepares
                our graduates for diverse careers in the industry, academia, and
                public sector.
              </p>
            </div>
            <div className="about-vision">
              <h3>Our Vision</h3>
              <p>
                To be a leading department of computer science in Africa that
                contributes to the advancement of knowledge and innovation in the
                field of computing and its applications.
              </p>
            </div>
          </div>
        </section>
      <Footer />
    </div>
  );
};

export default AboutPage;