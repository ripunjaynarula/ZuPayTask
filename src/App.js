import { Button, Col, Row, Container } from "react-bootstrap";
import "./App.css";
import one from "./assets/img/1.png";
import two from "./assets/img/2.png";
import three from "./assets/img/3.png";

function App() {
  return (
    <>
      <div className="App">
        <Container>
          <div className="hero">
            <h1>
              Build Super Smart
              <br />
              Money Habits
            </h1>
            <Button className="learn-now">Learn Now</Button>
          </div>
          <div className="ZuAcademy">
            <h2>At ZuAcademy</h2>
            <p>
              Est Lorem anim fugiat aute aliquip adipisicing ea in ea et id
              deserunt nisi non.
            </p>
          </div>
          <div className="pay-to-learn">
            <h2>Pay to Learn</h2>
            <p>
              Est Lorem anim fugiat aute aliquip adipisicing ea in ea et id
              deserunt nisi non.
            </p>
            <Container>
              <Row style={{ margin: "auto" }}>
                <Col sm={4}>
                  <img
                    src={one}
                    alt=""
                    style={{ width: "20vw", height: "100%", fit: "cover" }}
                  />
                </Col>
                <Col sm={4}>
                  <img
                    src={two}
                    alt=""
                    style={{ width: "20vw", height: "100%", fit: "cover" }}
                  />
                </Col>
                <Col sm={4}>
                  <img
                    src={three}
                    alt=""
                    style={{ width: "20vw", height: "100%", fit: "cover" }}
                  />
                </Col>
              </Row>
            </Container>
          </div>
          <Container>
            {" "}
            <div className="practice">
              <h2>Practice on the App</h2>
              <p>
                Exercitation nostrud excepteur ipsum enim sint aliquip voluptate
                aute mollit pariatur do pariatur.
              </p>
              <div style={{ display: "flex" }}>
                {" "}
                <Button className="download">Download App</Button>
              </div>
            </div>
          </Container>

          <Container className="tweetsec">
            <h2>Here from Parents</h2>
            <div className="tweets">
              <Row style={{ margin: "auto" }}>
                <Col sm={4}>
                  <blockquote className="twitter-tweet">
                    <p lang="en" dir="ltr">
                      &quot;Knowledge is discovered by all of us, each adding to
                      the whole. Wisdom is rediscovered by each of us, one at a
                      time.&quot; -{" "}
                      <a href="https://twitter.com/naval?ref_src=twsrc%5Etfw">
                        @naval
                      </a>
                    </p>
                    &mdash; Naval Ravikant Bot (@NavalBot){" "}
                    <a href="https://twitter.com/NavalBot/status/1523754752898646016?ref_src=twsrc%5Etfw">
                      May 9, 2022
                    </a>
                  </blockquote>
                </Col>
                <Col sm={4}>
                  <blockquote className="twitter-tweet">
                    <p lang="en" dir="ltr">
                      &quot;Wondering how long until social media induced mental
                      illnesses start getting recognized and treated.&quot; -{" "}
                      <a href="https://twitter.com/naval?ref_src=twsrc%5Etfw">
                        @naval
                      </a>
                    </p>
                    &mdash; Naval Ravikant Bot (@NavalBot){" "}
                    <a href="https://twitter.com/NavalBot/status/1521218102977077248?ref_src=twsrc%5Etfw">
                      May 2, 2022
                    </a>
                  </blockquote>
                </Col>
                <Col sm={4}>
                  <blockquote className="twitter-tweet">
                    <p lang="en" dir="ltr">
                      &quot;Ruminating on the past is largely a waste of time.
                      It’s illusory.&quot; -{" "}
                      <a href="https://twitter.com/naval?ref_src=twsrc%5Etfw">
                        @naval
                      </a>
                    </p>
                    &mdash; Naval Ravikant Bot (@NavalBot){" "}
                    <a href="https://twitter.com/NavalBot/status/1520130931436277760?ref_src=twsrc%5Etfw">
                      April 29, 2022
                    </a>
                  </blockquote>
                </Col>
              </Row>
            </div>
          </Container>
        </Container>
        <Container className="community">
          <h2>Join our Community</h2>
          <Button className="learn-now">Join</Button>
        </Container>
      </div>
    </>
  );
}

export default App;
