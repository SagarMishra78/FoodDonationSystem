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
      <div className="app2" style={{ alignItems: "center" }}>
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
        <div className="col-md-8 col-sm-8 col-xs-12 project_all_content" style={{width:"100%"}}>
          <h2 className="impact_heading">
            <b>Why Donate?</b>
          </h2>
          <p>
            Sustainability. We should work to reduce the harm we inflict on our
            environment. That 40% wasted is more than just the food you see on
            the table. It's the hours spent growing, nurturing and maintaining
            the food that's wasted too. By donating your extras, you're choosing
            a different route. Help others. There are other people who could use
            that food. Your leftovers could potentially be the only thing they
            eat that day.
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
          <h3 className="project_content_orange">
            <b>How?</b>
          </h3>
          <ul>
            <li>
              Plan ahead. If you want to donate your food then you should do
              your best to plan ahead. Get in touch with a local organization
              before your event and organize a pick-up. Research and ask around
              to find the best fit for you. Take action. If you didn't plan
              ahead, that's okay. If you start to notice you will have extras,
              start researching option. That might mean personally delivering
              your extras to the local homeless shelter.
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
          <div className="project_all_content our_meals">
            <h2 className="impact_heading">What's Next?</h2>
            <p>
              Talk about it. After you've successfully donated your food and set
              up a system to continue doing so, tell people about it! Inform
              your customers, co-workers, business partners, everyone! Let
              people know what you did, how you did it, and why it was so easy.
              The more you tell others, the better for everyone. Your company
              will build a respectable reputation while working to improve the
              environment and local communities. It's a no-brainer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
