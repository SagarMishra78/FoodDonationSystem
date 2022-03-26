import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

// Images Import
import img1 from "../images/carousel-1.jpg";
import img2 from "../images/carousel-2.jpg";
import img3 from "../images/carousel-3.jpg";

const About = () => {
  return (
    <>
      <div className="app2" style={{alignItems: "center"}}>
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
            <Carousel.Caption>
              <p className="caption" style={{ color: "white" }}>
                Don't be rude, donate some food.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Second slide" />

            <Carousel.Caption>
              <p className="caption">We're hungry for donations.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />

            <Carousel.Caption>
              <p className="caption">Look what we can do together.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h2 class="impact_heading">Our Work</h2>
        <div class="col-md-8 col-sm-8 col-xs-12 project_all_content">
          <p>
            In 2001, the Supreme Court passed an order stating "A basic
            entitlement of every child in every Government and
            Government-assisted Primary Schools with a prepared mid day meal
            with a minimum content of 300 calories and 8–12 grams of protein
            each day of school for a minimum of 200 days."
          </p>
          <p>
            The mid day meal Scheme is a school meal program of the Government
            of India designed to improve the nutritional status of school-age
            children nationwide.
          </p>
          <ul>
            <li>
              The roots of the programme can be traced back to the
              Pre-Independence era, when a mid day meal Programme was introduced
              in 1925 in Madras Corporation by the British administration. The
              Government of India initiated the National Programme of
              Nutritional Support to Primary Education (NP-NSPE) on 15th August,
              1995.
            </li>
            <li>
              As one of the top food NGOs in India Annamrita carries out the mid
              day meal programme in Government aided as well as non-aided
              Schools. In Government aided schools, the Education Inspectors of
              the Education Department of the Government of Maharashtra allocate
              the schools. The same is approved by the Parent Teacher
              Association and the management of these schools.
            </li>
            <li>
              The facility is available only for schools that have secular
              policy for admissions. For primary section each meal provides 12
              grams of protein and 450 cal energy and for secondary section each
              meal provides 20 grams of protein and 700 cal energy. The
              government provides the raw rice and a minimum cooking charge of
              Rs 4.49 per child, while the remainder of the expenses are borne
              by us.
            </li>
            <li>
              We are only able to provide mid day meals to non-aided schools
              with donor support because non-aided schools are not covered under
              the Government's mid day meal scheme. So, non-aided school meal
              project is completely managed and funded by the NGO, Annamrita,
              through fundraising.
            </li>
          </ul>
          <h3 class="project_content_orange">
            <b>The objectives of the scheme are:</b>
          </h3>
          <ul>
            <li>
              Improve the effectiveness of primary education by improving the
              nutritional status of children thereby reducing malnutrition.
            </li>
            <li>
              Attract children from disadvantaged sections, especially girls
              from Dalits and Adivasi tribes to school, thereby increasing
              attendance, reducing dropout rates & promoting women empowerment
              through literacy.
            </li>
            <li>
              Promote a feeling of oneness and secularism amongst various
              religions and cultures.
            </li>
          </ul>
          <p>
            A majority of the population in India is still unable to get at
            least one complete square meal a day. As one of the most active food
            NGOs in India, Annamrita has resolved to liberate the
            underprivileged children from the vicious cycle of poverty and
            illiteracy by serving them sanctified and nutritious mid day meals.
            We aim to provide the children with 'satvik ahaar' that helps them
            with the right nutrition in their formative years.
          </p>
          <div class="project_all_content our_meals">
            <h2 class="impact_heading">Our Meals</h2>
            <p>
              The recipients of the mid day meal primarily consist of children
              from slum and tribal areas. For many the food we provide may be
              the only meal they receive during the entire day. So, we strive to
              ensure that the mid day meal is healthy, nutritious and packed
              with all the important fibers, vitamins and nutrients required for
              the healthy growth of the child. Our food is customized as per the
              regional or local taste and provisions by the government.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
