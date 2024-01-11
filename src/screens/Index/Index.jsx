import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Button } from "../../components/Button";
import { CarouselIndicator } from "../../components/CarouselIndicator";
import { CsirButton } from "../../components/CsirButton";
import { Footer } from "../../components/Footer";
import { IconCheck } from "../../components/IconCheck";
import { NavBar } from "../../components/NavBar";
import { StatusBarIos } from "../../components/StatusBarIos";
import { StyleTextStateWrapper } from "../../components/StyleTextStateWrapper";
import { Titles } from "../../components/Titles";
import { Icon33 } from "../../icons/Icon33";
import { IconsArrowBack24Px } from "../../icons/IconsArrowBack24Px";
import { IconsArrowForward24Px1 } from "../../icons/IconsArrowForward24Px1";
import { IconsMenu24Px } from "../../icons/IconsMenu24Px";
import { IconsPlayArrow } from "../../icons/IconsPlayArrow";
import "./style.css";

export const Index = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="index">
      <div
        className="div-2"
        style={{
          height:
            screenWidth < 834
              ? "5474px"
              : screenWidth >= 834 && screenWidth < 1440
              ? "4774px"
              : screenWidth >= 1440
              ? "4280px"
              : undefined,
          width:
            screenWidth < 834
              ? "390px"
              : screenWidth >= 834 && screenWidth < 1440
              ? "834px"
              : screenWidth >= 1440
              ? "1440px"
              : undefined,
        }}
      >
        {((screenWidth >= 834 && screenWidth < 1440) || screenWidth < 834) && (
          <div
            className="frame-8"
            style={{
              gap:
                screenWidth >= 834 && screenWidth < 1440
                  ? "24px"
                  : screenWidth < 834
                  ? "16px"
                  : undefined,
              left:
                screenWidth >= 834 && screenWidth < 1440
                  ? "23px"
                  : screenWidth < 834
                  ? "0"
                  : undefined,
              top:
                screenWidth >= 834 && screenWidth < 1440
                  ? "117px"
                  : screenWidth < 834
                  ? "159px"
                  : undefined,
              width:
                screenWidth >= 834 && screenWidth < 1440
                  ? "787px"
                  : screenWidth < 834
                  ? "390px"
                  : undefined,
            }}
          >
            <p
              className="where-technology"
              style={{
                alignSelf:
                  screenWidth >= 834 && screenWidth < 1440
                    ? "stretch"
                    : undefined,
                fontSize:
                  screenWidth >= 834 && screenWidth < 1440
                    ? "66px"
                    : screenWidth < 834
                    ? "36px"
                    : undefined,
                width: screenWidth < 834 ? "350px" : undefined,
              }}
            >
              <span className="span">Where Technology Builds </span>
              <span className="text-wrapper-13">People!</span>
            </p>
            <p
              className="unlocking-the-future"
              style={{
                alignSelf:
                  screenWidth >= 834 && screenWidth < 1440
                    ? "stretch"
                    : undefined,
                fontSize:
                  screenWidth >= 834 && screenWidth < 1440
                    ? "36px"
                    : screenWidth < 834
                    ? "24px"
                    : undefined,
                width: screenWidth < 834 ? "349px" : undefined,
              }}
            >
              <span className="text-wrapper-13">Unlocking the Future: </span>
              <span className="span">
                The Learning Factory for 4IR Technologies
              </span>
            </p>
            <div
              className="embark-on-a-journey"
              style={{
                alignSelf:
                  screenWidth >= 834 && screenWidth < 1440
                    ? "stretch"
                    : undefined,
                width: screenWidth < 834 ? "348px" : undefined,
              }}
            >
              {screenWidth >= 834 && screenWidth < 1440 && (
                <p className="text-wrapper-37">
                  Embark on a journey of innovation and skill development at the
                  forefront of the fourth industrial revolution (4IR).
                  Established in March 2021 at the CSIR campus in Pretoria, the
                  Learning Factory (LF) is a groundbreaking initiative, a
                  collaboration between the CSIR and merSETA, dedicated to
                  advancing skills and fostering innovation in digital
                  technologies. Explore our offerings, from skills development
                  and technology localisation to serving as a research enabler
                  in 4IR applications. <br />
                  Join us in shaping the future at the epicentre of cutting-edge
                  education and technology.
                </p>
              )}

              {screenWidth < 834 && (
                <p className="text-wrapper-37">
                  Embark on a journey of innovation and skill development at the
                  forefront of the fourth industrial revolution (4IR).
                  Established in March 2021 at the CSIR campus in Pretoria, the
                  Learning Factory (LF) is a groundbreaking initiative, a
                  collaboration between the CSIR and merSETA, dedicated to
                  advancing skills and fostering innovation in digital
                  technologies. Explore our offerings, from skills development
                  and technology localisation to serving as a research enabler
                  in 4IR applications. <br />
                  <br />
                  Join us in shaping the future at the epicentre of cutting-edge
                  education and technology.
                </p>
              )}
            </div>
            <div
              className="CSIR-button-wrapper"
              style={{
                display:
                  screenWidth >= 834 && screenWidth < 1440
                    ? "inline-flex"
                    : screenWidth < 834
                    ? "flex"
                    : undefined,
                width: screenWidth < 834 ? "348px" : undefined,
              }}
            >
              <CsirButton
                className={`${
                  screenWidth >= 834 && screenWidth < 1440 && "button-2"
                } ${screenWidth < 834 && "class-9"}`}
                labelText="Explore courses"
                showIcon={false}
                stateProp="enabled"
                style="filled"
              />
            </div>
          </div>
        )}

        {(screenWidth >= 1440 ||
          (screenWidth >= 834 && screenWidth < 1440)) && (
          <div
            className="overlap"
            style={{
              height:
                screenWidth >= 834 && screenWidth < 1440
                  ? "396px"
                  : screenWidth >= 1440
                  ? "410px"
                  : undefined,
              left:
                screenWidth >= 834 && screenWidth < 1440
                  ? "16px"
                  : screenWidth >= 1440
                  ? "-202px"
                  : undefined,
              top:
                screenWidth >= 834 && screenWidth < 1440
                  ? "697px"
                  : screenWidth >= 1440
                  ? "3380px"
                  : undefined,
              width:
                screenWidth >= 834 && screenWidth < 1440
                  ? "803px"
                  : screenWidth >= 1440
                  ? "1843px"
                  : undefined,
            }}
          >
            {screenWidth >= 834 && screenWidth < 1440 && (
              <>
                <div className="group" />
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-3">
                    <div className="ellipse-6" />
                    <img
                      className="polygon"
                      alt="Polygon"
                      src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/polygon-1.svg"
                    />
                  </div>
                </div>
              </>
            )}

            {screenWidth >= 1440 && (
              <>
                <div className="testimonials">
                  <div className="card-testimonials">
                    <img
                      className="image"
                      alt="Image"
                      src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/--3@2x.png"
                    />
                    <p className="text-wrapper-14">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.”
                    </p>
                    <div className="avatar">
                      <div className="AB">JB</div>
                      <IconCheck />
                    </div>
                    <div className="frame-9">
                      <div className="text-wrapper-15">Jason Bourne</div>
                      <div className="text-wrapper-16">Software Developer</div>
                    </div>
                  </div>
                  <div className="card-testimonials-2">
                    <img
                      className="image-2"
                      alt="Image"
                      src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/--3@2x.png"
                    />
                    <p className="text-wrapper-14">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.”
                    </p>
                    <div className="avatar">
                      <div className="AB">JB</div>
                      <IconCheck />
                    </div>
                    <div className="frame-9">
                      <div className="text-wrapper-15">Jason Bourne</div>
                      <div className="text-wrapper-16">Software Developer</div>
                    </div>
                  </div>
                  <div className="card-testimonials-3">
                    <img
                      className="image-3"
                      alt="Image"
                      src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/--9.svg"
                    />
                    <p className="text-wrapper-14">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.”
                    </p>
                    <div className="avatar">
                      <div className="AB">JB</div>
                      <IconCheck />
                    </div>
                    <div className="frame-9">
                      <div className="text-wrapper-15">Nolwazi Khumalo</div>
                      <div className="text-wrapper-16">Software Developer</div>
                    </div>
                  </div>
                  <div className="card-testimonials-4">
                    <img
                      className="image-3"
                      alt="Image"
                      src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/--9.svg"
                    />
                    <p className="text-wrapper-14">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.”
                    </p>
                    <div className="avatar">
                      <div className="AB-2">MG</div>
                      <IconCheck />
                    </div>
                    <div className="frame-9">
                      <div className="text-wrapper-15">Mike George</div>
                      <div className="text-wrapper-16">Mining Engineer</div>
                    </div>
                  </div>
                  <div className="card-testimonials-3">
                    <img
                      className="image-3"
                      alt="Image"
                      src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/--9.svg"
                    />
                    <p className="text-wrapper-14">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.”
                    </p>
                    <div className="avatar">
                      <div className="AB">JB</div>
                      <IconCheck />
                    </div>
                    <div className="frame-9">
                      <div className="text-wrapper-15">Nolwazi Khumalo</div>
                      <div className="text-wrapper-16">Software Developer</div>
                    </div>
                  </div>
                  <div className="card-testimonials-5">
                    <img
                      className="image-3"
                      alt="Image"
                      src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/--9.svg"
                    />
                    <p className="text-wrapper-14">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.”
                    </p>
                    <div className="avatar">
                      <div className="AB">JB</div>
                      <IconCheck />
                    </div>
                    <div className="frame-9">
                      <div className="text-wrapper-15">Nolwazi Khumalo</div>
                      <div className="text-wrapper-16">Software Developer</div>
                    </div>
                  </div>
                  <div className="card-testimonials-6">
                    <img
                      className="image-4"
                      alt="Image"
                      src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/--3@2x.png"
                    />
                    <p className="text-wrapper-14">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.”
                    </p>
                    <div className="avatar">
                      <div className="AB">JB</div>
                      <IconCheck />
                    </div>
                    <div className="frame-9">
                      <div className="text-wrapper-15">Nolwazi Khumalo</div>
                      <div className="text-wrapper-16">Software Developer</div>
                    </div>
                  </div>
                </div>
                <StyleTextStateWrapper
                  className="button-4"
                  hasLabelText={false}
                  icon={
                    <IconsArrowForward24Px1
                      className="icon-3"
                      color="#012E5E"
                    />
                  }
                  showIcon
                  stateLayerClassName="button-3"
                  stateProp="enabled"
                  style="outlined"
                />
                <StyleTextStateWrapper
                  className="button-5"
                  hasLabelText={false}
                  icon={
                    <IconsArrowBack24Px className="icon-3" color="#012E5E" />
                  }
                  showIcon
                  stateLayerClassName="button-3"
                  stateProp="enabled"
                  style="outlined"
                />
              </>
            )}
          </div>
        )}

        {((screenWidth >= 834 && screenWidth < 1440) || screenWidth < 834) && (
          <div
            className="desktop-2"
            style={{
              height:
                screenWidth < 834
                  ? "685px"
                  : screenWidth >= 834 && screenWidth < 1440
                  ? "640px"
                  : undefined,
              top:
                screenWidth < 834
                  ? "1076px"
                  : screenWidth >= 834 && screenWidth < 1440
                  ? "1153px"
                  : undefined,
              width:
                screenWidth < 834
                  ? "390px"
                  : screenWidth >= 834 && screenWidth < 1440
                  ? "835px"
                  : undefined,
            }}
          >
            {screenWidth < 834 && <div className="ellipse-7" />}

            <div
              className="overlap-group-4"
              style={{
                height:
                  screenWidth < 834
                    ? "987px"
                    : screenWidth >= 834 && screenWidth < 1440
                    ? "779px"
                    : undefined,
                left:
                  screenWidth < 834
                    ? "-310px"
                    : screenWidth >= 834 && screenWidth < 1440
                    ? "27px"
                    : undefined,
                top:
                  screenWidth < 834
                    ? "-350px"
                    : screenWidth >= 834 && screenWidth < 1440
                    ? "236px"
                    : undefined,
                width:
                  screenWidth < 834
                    ? "1068px"
                    : screenWidth >= 834 && screenWidth < 1440
                    ? "957px"
                    : undefined,
              }}
            >
              <div
                className="ellipse-8"
                style={{
                  left:
                    screenWidth >= 834 && screenWidth < 1440
                      ? "423px"
                      : screenWidth < 834
                      ? "0"
                      : undefined,
                  top:
                    screenWidth >= 834 && screenWidth < 1440
                      ? "245px"
                      : screenWidth < 834
                      ? "0"
                      : undefined,
                }}
              />
              {screenWidth < 834 && (
                <>
                  <div className="ellipse-9" />
                  <div className="text-wrapper-17">
                    Experience Innovation in Action
                  </div>
                </>
              )}

              <div
                className="frame-10"
                style={{
                  gap:
                    screenWidth >= 834 && screenWidth < 1440
                      ? "24px"
                      : screenWidth < 834
                      ? "16px"
                      : undefined,
                  left:
                    screenWidth >= 834 && screenWidth < 1440
                      ? "0"
                      : screenWidth < 834
                      ? "335px"
                      : undefined,
                  top:
                    screenWidth >= 834 && screenWidth < 1440
                      ? "0"
                      : screenWidth < 834
                      ? "508px"
                      : undefined,
                  width:
                    screenWidth >= 834 && screenWidth < 1440
                      ? "784px"
                      : screenWidth < 834
                      ? "345px"
                      : undefined,
                }}
              >
                <p
                  className="text-wrapper-18"
                  style={{
                    fontSize:
                      screenWidth >= 834 && screenWidth < 1440
                        ? "36px"
                        : screenWidth < 834
                        ? "16px"
                        : undefined,
                  }}
                >
                  Schedule Your CSIR Learning Factory Tour
                </p>
                <p className="step-into-the-future">
                  Step into the future of technology and education with a guided
                  tour of the CSIR Learning Factory. Witness firsthand the
                  intersection of skills development and 4IR technologies. Our
                  immersive tours provide an in-depth exploration of our
                  state-of-the-art facilities, research labs, and hands-on
                  training areas. <br />
                  <br />
                  To schedule your exclusive tour and discover the
                  transformative potential of the Learning Factory, fill out the
                  form below. Our team looks forward to showcasing the exciting
                  possibilities that lie ahead.
                </p>
                <div className="frame-11">
                  {screenWidth >= 834 && screenWidth < 1440 && (
                    <CsirButton
                      className="instance-node-2"
                      labelText="Book a lab visit"
                      labelTextClassName="CSIR-button-5"
                      showIcon={false}
                      stateProp="enabled"
                      style="filled"
                    />
                  )}

                  {screenWidth < 834 && (
                    <Button
                      className="instance-node-2"
                      labelText="Book a lab visit"
                      labelTextClassName="span"
                      showIcon={false}
                      stateProp="enabled"
                      style="filled"
                    />
                  )}
                </div>
              </div>
            </div>
            {screenWidth >= 834 && screenWidth < 1440 && (
              <>
                <div className="overlap-2">
                  <div className="ellipse-10" />
                  <div className="frame-12">
                    <div className="text-wrapper-19">
                      Experience Innovation in Action
                    </div>
                  </div>
                </div>
                <div className="ellipse-11" />
              </>
            )}
          </div>
        )}

        {screenWidth >= 834 && screenWidth < 1440 && (
          <>
            <div className="overlap-3">
              <div className="desktop-3">
                <div className="overlap-4">
                  <div className="text-wrapper-20">Training covers</div>
                </div>
                <CsirButton
                  className="CSIR-button-6"
                  labelText="Explore courses"
                  showIcon={false}
                  stateProp="enabled"
                  style="filled"
                />
              </div>
              <div className="frame-13">
                <div className="div-3">
                  <img
                    className="frame-14"
                    alt="Frame"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-100-4.svg"
                  />
                  <div className="text-wrapper-21">Artificial Intelligence</div>
                </div>
                <div className="div-3">
                  <img
                    className="frame-15"
                    alt="Frame"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-108-4.svg"
                  />
                  <div className="text-wrapper-21">Augmented Reality</div>
                </div>
                <div className="div-3">
                  <img
                    className="frame-15"
                    alt="Frame"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-104.svg"
                  />
                  <div className="text-wrapper-21">Robotics</div>
                </div>
                <div className="div-3">
                  <img
                    className="frame-16"
                    alt="Frame"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-103-1.svg"
                  />
                  <div className="text-wrapper-22">Additive Manufacturing</div>
                </div>
              </div>
              <div className="frame-17">
                <div className="div-3">
                  <img
                    className="frame-14"
                    alt="Frame"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-103-3.svg"
                  />
                  <div className="text-wrapper-22">Additive Manufacturing</div>
                </div>
                <div className="div-3">
                  <img
                    className="frame-15"
                    alt="Frame"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-108.svg"
                  />
                  <div className="text-wrapper-21">The Internet of Things</div>
                </div>
                <div className="div-3">
                  <img
                    className="frame-15"
                    alt="Frame"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-100.svg"
                  />
                  <div className="text-wrapper-21">Big Data Analytics</div>
                </div>
                <div className="frame-18">
                  <img
                    className="frame-19"
                    alt="Frame"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-100-1.svg"
                  />
                  <div className="cloud-computing-edge">
                    Cloud Computing
                    <br />
                    &amp; Edge Processing
                  </div>
                </div>
              </div>
              <div className="frame-20">
                <div className="div-3">
                  <img
                    className="frame-14"
                    alt="Frame"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-108-6.svg"
                  />
                  <div className="text-wrapper-21">System Integration</div>
                </div>
                <div className="div-3">
                  <img
                    className="frame-15"
                    alt="Frame"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-102.svg"
                  />
                  <div className="text-wrapper-21">Digital Twinning</div>
                </div>
                <div className="div-3">
                  <img
                    className="frame-15"
                    alt="Frame"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-108-8.svg"
                  />
                  <div className="text-wrapper-21">Simulation</div>
                </div>
                <div className="div-3">
                  <img
                    className="frame-16"
                    alt="Frame"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-103.svg"
                  />
                  <div className="text-wrapper-21">Cyber Security</div>
                </div>
              </div>
              <div className="ellipse-12" />
              <div className="frame-21">
                <div className="frame-22">
                  <img
                    className="image-3"
                    alt="Image"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/-.svg"
                  />
                  <p className="text-wrapper-14">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.”
                  </p>
                  <img
                    className="ellipse-13"
                    alt="Ellipse"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/ellipse-12@2x.png"
                  />
                  <div className="frame-9">
                    <div className="text-wrapper-15">Jason Bourne</div>
                    <div className="text-wrapper-16">Software Developer</div>
                  </div>
                </div>
                <div className="frame-22">
                  <img
                    className="image-3"
                    alt="Image"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/-.svg"
                  />
                  <p className="text-wrapper-14">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.”
                  </p>
                  <img
                    className="ellipse-13"
                    alt="Ellipse"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659f93d47cfae80bc3a834ef/img/ellipse-11@2x.png"
                  />
                  <div className="frame-9">
                    <div className="text-wrapper-15">Nolwazi Khumalo</div>
                    <div className="text-wrapper-16">Student</div>
                  </div>
                </div>
                <div className="frame-22">
                  <img
                    className="image-3"
                    alt="Image"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/-.svg"
                  />
                  <p className="text-wrapper-14">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.”
                  </p>
                  <img
                    className="ellipse-13"
                    alt="Ellipse"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659f93d47cfae80bc3a834ef/img/ellipse-12@2x.png"
                  />
                  <div className="frame-9">
                    <div className="text-wrapper-15">Mike George</div>
                    <div className="text-wrapper-16">Mining Engineer</div>
                  </div>
                </div>
                <div className="frame-22">
                  <img
                    className="image-5"
                    alt="Image"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/--3@2x.png"
                  />
                  <p className="text-wrapper-14">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.”
                  </p>
                  <img
                    className="ellipse-14"
                    alt="Ellipse"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/--3@2x.png"
                  />
                  <div className="frame-9">
                    <div className="text-wrapper-15">Thomas Mahlangu</div>
                    <div className="text-wrapper-16">Student</div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-23">Testimonials</div>
              <div className="rectangle-4" />
            </div>
            <div className="frame-23">
              <div className="ellipse-15" />
              <div className="ellipse-16" />
              <div className="ellipse-16" />
              <div className="ellipse-16" />
              <div className="ellipse-16" />
            </div>
          </>
        )}

        {((screenWidth >= 834 && screenWidth < 1440) || screenWidth < 834) && (
          <>
            <div
              className="frame-24"
              style={{
                left:
                  screenWidth < 834
                    ? "21px"
                    : screenWidth >= 834 && screenWidth < 1440
                    ? "24px"
                    : undefined,
                top:
                  screenWidth < 834
                    ? "1801px"
                    : screenWidth >= 834 && screenWidth < 1440
                    ? "1841px"
                    : undefined,
                width:
                  screenWidth < 834
                    ? "349px"
                    : screenWidth >= 834 && screenWidth < 1440
                    ? "786px"
                    : undefined,
              }}
            >
              <p
                className="text-wrapper-24"
                style={{
                  fontSize:
                    screenWidth < 834
                      ? "34px"
                      : screenWidth >= 834 && screenWidth < 1440
                      ? "36px"
                      : undefined,
                }}
              >
                Explore a World of Possibilities with our main offerings
              </p>
              <div
                className="frame-25"
                style={{
                  gap:
                    screenWidth < 834
                      ? "14px"
                      : screenWidth >= 834 && screenWidth < 1440
                      ? "32px"
                      : undefined,
                }}
              >
                <div
                  className="frame-26"
                  style={{
                    alignItems:
                      screenWidth < 834
                        ? "flex-start"
                        : screenWidth >= 834 && screenWidth < 1440
                        ? "center"
                        : undefined,
                  }}
                >
                  <img
                    className="arrow-forward"
                    alt="Arrow forward"
                    src={
                      screenWidth < 834
                        ? "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/arrow-forward-fill0-wght500-grad0-opsz24-2-1.svg"
                        : screenWidth >= 834 && screenWidth < 1440
                        ? "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/arrow-forward-fill0-wght500-grad0-opsz24-2.svg"
                        : undefined
                    }
                  />
                  <p
                    className="text-wrapper-25"
                    style={{
                      color:
                        screenWidth < 834
                          ? "#5c5d5e"
                          : screenWidth >= 834 && screenWidth < 1440
                          ? "#003669"
                          : undefined,
                      fontSize:
                        screenWidth < 834
                          ? "14px"
                          : screenWidth >= 834 && screenWidth < 1440
                          ? "16px"
                          : undefined,
                    }}
                  >
                    Skills development (training, upskilling, reskilling,
                    cross-skilling) and innovation platform for the operation,
                    implementation, research and design of key 4IR technologies;
                  </p>
                </div>
                <div
                  className="frame-27"
                  style={{
                    alignItems:
                      screenWidth < 834
                        ? "flex-start"
                        : screenWidth >= 834 && screenWidth < 1440
                        ? "center"
                        : undefined,
                  }}
                >
                  <img
                    className="arrow-forward"
                    alt="Arrow forward"
                    src={
                      screenWidth < 834
                        ? "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/arrow-forward-fill0-wght500-grad0-opsz24-2-1.svg"
                        : screenWidth >= 834 && screenWidth < 1440
                        ? "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/arrow-forward-fill0-wght500-grad0-opsz24-2.svg"
                        : undefined
                    }
                  />
                  <p
                    className="text-wrapper-26"
                    style={{
                      color:
                        screenWidth < 834
                          ? "#5c5d5e"
                          : screenWidth >= 834 && screenWidth < 1440
                          ? "#003669"
                          : undefined,
                      fontSize:
                        screenWidth < 834
                          ? "14px"
                          : screenWidth >= 834 && screenWidth < 1440
                          ? "16px"
                          : undefined,
                      marginTop: screenWidth < 834 ? "-1.00px" : undefined,
                    }}
                  >
                    Test-bed platform for de-risking of 4IR technologies applied
                    to all stakeholders
                  </p>
                </div>
                <div
                  className="frame-28"
                  style={{
                    alignItems:
                      screenWidth < 834
                        ? "flex-start"
                        : screenWidth >= 834 && screenWidth < 1440
                        ? "center"
                        : undefined,
                  }}
                >
                  <img
                    className="arrow-forward"
                    alt="Arrow forward"
                    src={
                      screenWidth < 834
                        ? "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/arrow-forward-fill0-wght500-grad0-opsz24-2-1.svg"
                        : screenWidth >= 834 && screenWidth < 1440
                        ? "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/arrow-forward-fill0-wght500-grad0-opsz24-2.svg"
                        : undefined
                    }
                  />
                  <p
                    className="text-wrapper-27"
                    style={{
                      color:
                        screenWidth < 834
                          ? "#5c5d5e"
                          : screenWidth >= 834 && screenWidth < 1440
                          ? "#003669"
                          : undefined,
                      fontSize:
                        screenWidth < 834
                          ? "14px"
                          : screenWidth >= 834 && screenWidth < 1440
                          ? "16px"
                          : undefined,
                      marginTop: screenWidth < 834 ? "-1.00px" : undefined,
                    }}
                  >
                    Support of technology localisation using 4IR technologies;
                  </p>
                </div>
                <div
                  className="frame-29"
                  style={{
                    alignItems:
                      screenWidth < 834
                        ? "flex-start"
                        : screenWidth >= 834 && screenWidth < 1440
                        ? "center"
                        : undefined,
                  }}
                >
                  <img
                    className="arrow-forward"
                    alt="Arrow forward"
                    src={
                      screenWidth < 834
                        ? "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/arrow-forward-fill0-wght500-grad0-opsz24-2-1.svg"
                        : screenWidth >= 834 && screenWidth < 1440
                        ? "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/arrow-forward-fill0-wght500-grad0-opsz24-2.svg"
                        : undefined
                    }
                  />
                  <p
                    className="text-wrapper-28"
                    style={{
                      color:
                        screenWidth < 834
                          ? "#5c5d5e"
                          : screenWidth >= 834 && screenWidth < 1440
                          ? "#003669"
                          : undefined,
                      fontSize:
                        screenWidth < 834
                          ? "14px"
                          : screenWidth >= 834 && screenWidth < 1440
                          ? "16px"
                          : undefined,
                    }}
                  >
                    Technology transfer to stakeholders, including small, medium
                    and micro enterprises (SMMEs), in support of
                    re-industrialisation pertaining to 4IR technologies;
                  </p>
                </div>
                <div
                  className="frame-30"
                  style={{
                    alignItems:
                      screenWidth < 834
                        ? "flex-start"
                        : screenWidth >= 834 && screenWidth < 1440
                        ? "center"
                        : undefined,
                  }}
                >
                  <img
                    className="arrow-forward"
                    alt="Arrow forward"
                    src={
                      screenWidth < 834
                        ? "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/arrow-forward-fill0-wght500-grad0-opsz24-2-1.svg"
                        : screenWidth >= 834 && screenWidth < 1440
                        ? "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/arrow-forward-fill0-wght500-grad0-opsz24-2.svg"
                        : undefined
                    }
                  />
                  <p
                    className="text-wrapper-29"
                    style={{
                      color:
                        screenWidth < 834
                          ? "#5c5d5e"
                          : screenWidth >= 834 && screenWidth < 1440
                          ? "#003669"
                          : undefined,
                      fontSize:
                        screenWidth < 834
                          ? "14px"
                          : screenWidth >= 834 && screenWidth < 1440
                          ? "16px"
                          : undefined,
                    }}
                  >
                    Support platform for LFs that will be established at TVETS
                    in terms of technologies, curriculum, best practices, etc.;
                    and
                  </p>
                </div>
                <div
                  className="frame-31"
                  style={{
                    alignItems:
                      screenWidth < 834
                        ? "flex-start"
                        : screenWidth >= 834 && screenWidth < 1440
                        ? "center"
                        : undefined,
                  }}
                >
                  <img
                    className="arrow-forward"
                    alt="Arrow forward"
                    src={
                      screenWidth < 834
                        ? "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/arrow-forward-fill0-wght500-grad0-opsz24-2-1.svg"
                        : screenWidth >= 834 && screenWidth < 1440
                        ? "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/arrow-forward-fill0-wght500-grad0-opsz24-2.svg"
                        : undefined
                    }
                  />
                  <p
                    className="text-wrapper-30"
                    style={{
                      color:
                        screenWidth < 834
                          ? "#5c5d5e"
                          : screenWidth >= 834 && screenWidth < 1440
                          ? "#003669"
                          : undefined,
                      fontSize:
                        screenWidth < 834
                          ? "14px"
                          : screenWidth >= 834 && screenWidth < 1440
                          ? "16px"
                          : undefined,
                    }}
                  >
                    Platform to serve as a research enabler applied to
                    innovation in 4IR applications – i.e. Applied research
                    informed by stakeholder needs.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="overlap-5"
              style={{
                height:
                  screenWidth >= 834 && screenWidth < 1440
                    ? "536px"
                    : screenWidth < 834
                    ? "220px"
                    : undefined,
                left:
                  screenWidth >= 834 && screenWidth < 1440
                    ? "24px"
                    : screenWidth < 834
                    ? "21px"
                    : undefined,
                top:
                  screenWidth >= 834 && screenWidth < 1440
                    ? "2418px"
                    : screenWidth < 834
                    ? "2570px"
                    : undefined,
                width:
                  screenWidth >= 834 && screenWidth < 1440
                    ? "786px"
                    : screenWidth < 834
                    ? "349px"
                    : undefined,
              }}
            >
              <div
                className="overlap-wrapper"
                style={{
                  backgroundImage:
                    screenWidth >= 834 && screenWidth < 1440
                      ? "url(https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/rectangle-66.png)"
                      : screenWidth < 834
                      ? "url(https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/rectangle-66-1@2x.png)"
                      : undefined,
                  height:
                    screenWidth >= 834 && screenWidth < 1440
                      ? "536px"
                      : screenWidth < 834
                      ? "220px"
                      : undefined,
                  width:
                    screenWidth >= 834 && screenWidth < 1440
                      ? "786px"
                      : screenWidth < 834
                      ? "349px"
                      : undefined,
                }}
              >
                <div
                  className="rectangle-wrapper"
                  style={{
                    backgroundImage:
                      screenWidth >= 834 && screenWidth < 1440
                        ? "url(https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/rectangle-72.png)"
                        : screenWidth < 834
                        ? "url(https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/rectangle-72-1@2x.png)"
                        : undefined,
                    height:
                      screenWidth >= 834 && screenWidth < 1440
                        ? "516px"
                        : screenWidth < 834
                        ? "214px"
                        : undefined,
                    top:
                      screenWidth >= 834 && screenWidth < 1440
                        ? "20px"
                        : screenWidth < 834
                        ? "6px"
                        : undefined,
                    width:
                      screenWidth >= 834 && screenWidth < 1440
                        ? "766px"
                        : screenWidth < 834
                        ? "342px"
                        : undefined,
                  }}
                >
                  <div
                    className="rectangle-5"
                    style={{
                      borderRadius:
                        screenWidth >= 834 && screenWidth < 1440
                          ? "16px"
                          : screenWidth < 834
                          ? "9px"
                          : undefined,
                      height:
                        screenWidth >= 834 && screenWidth < 1440
                          ? "48px"
                          : screenWidth < 834
                          ? "20px"
                          : undefined,
                      top:
                        screenWidth >= 834 && screenWidth < 1440
                          ? "468px"
                          : screenWidth < 834
                          ? "195px"
                          : undefined,
                    }}
                  />
                </div>
              </div>
              <div
                className="frame-32"
                style={{
                  left:
                    screenWidth >= 834 && screenWidth < 1440
                      ? "335px"
                      : screenWidth < 834
                      ? "124px"
                      : undefined,
                  top:
                    screenWidth >= 834 && screenWidth < 1440
                      ? "512px"
                      : screenWidth < 834
                      ? "196px"
                      : undefined,
                  width:
                    screenWidth >= 834 && screenWidth < 1440
                      ? "117px"
                      : screenWidth < 834
                      ? "99px"
                      : undefined,
                }}
              >
                <div className="ellipse-17" />
                <div className="ellipse-18" />
                <div className="ellipse-18" />
                <div className="ellipse-18" />
                <div className="ellipse-18" />
              </div>
            </div>
          </>
        )}

        {screenWidth >= 834 && screenWidth < 1440 && (
          <>
            <NavBar
              CSIRButtonIcon={
                <IconsMenu24Px className="icon-3" color="white" />
              }
              className="nav-bar-instance"
              override={<Icon33 className="icon-3" color="#012E5E" />}
              platform="tablet"
              type="default"
            />
            <div className="rectangle-6" />
          </>
        )}

        {screenWidth >= 1440 && (
          <>
            <div className="overlap-6">
              <div className="rectangle-7" />
              <div className="icon-row-group">
                <Titles
                  className="titles-instance"
                  divClassName="titles-2"
                  size="thirty-six"
                  title="Training covers"
                />
                <div className="icon-row">
                  <div className="div-3">
                    <img
                      className="icon-4"
                      alt="Icon"
                      src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/icon-309.svg"
                    />
                    <div className="text-wrapper-21">
                      Artificial Intelligence
                    </div>
                  </div>
                  <div className="div-3">
                    <img
                      className="icon-4"
                      alt="Icon"
                      src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/icon-312.svg"
                    />
                    <div className="text-wrapper-21">Augmented Reality</div>
                  </div>
                  <div className="div-3">
                    <img
                      className="icon-4"
                      alt="Icon"
                      src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/icon-313.svg"
                    />
                    <div className="text-wrapper-21">Robotics</div>
                  </div>
                  <div className="div-3">
                    <img
                      className="icon-4"
                      alt="Icon"
                      src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/icon-314.svg"
                    />
                    <div className="text-wrapper-21">
                      Additive Manufacturing
                    </div>
                  </div>
                  <div className="div-3">
                    <img
                      className="icon-4"
                      alt="Icon"
                      src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/icon-310.svg"
                    />
                    <div className="text-wrapper-21">
                      The Internet of Things
                    </div>
                  </div>
                  <div className="div-3">
                    <img
                      className="icon-4"
                      alt="Icon"
                      src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/icon-302.svg"
                    />
                    <div className="text-wrapper-21">Big Data Analytics</div>
                  </div>
                </div>
                <div className="icon-row-2">
                  <div className="div-3">
                    <img
                      className="icon-5"
                      alt="Icon"
                      src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/icon-303.svg"
                    />
                    <div className="cloud-computing-edge">
                      Cloud Computing
                      <br />
                      &amp; Edge Processing
                    </div>
                  </div>
                  <div className="div-3">
                    <img
                      className="icon-6"
                      alt="Icon"
                      src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/icon-315.svg"
                    />
                    <div className="text-wrapper-21">System Integration</div>
                  </div>
                  <div className="div-3">
                    <img
                      className="icon-6"
                      alt="Icon"
                      src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/icon-308.svg"
                    />
                    <div className="text-wrapper-21">Digital Twinning</div>
                  </div>
                  <div className="div-3">
                    <img
                      className="icon-6"
                      alt="Icon"
                      src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/icon-316.svg"
                    />
                    <div className="text-wrapper-21">Simulation</div>
                  </div>
                  <div className="div-3">
                    <img
                      className="icon-6"
                      alt="Icon"
                      src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/icon-311.svg"
                    />
                    <div className="text-wrapper-21">Cyber Security</div>
                  </div>
                </div>
                <StyleTextStateWrapper
                  className="button-6"
                  labelText="Explore courses"
                  showIcon={false}
                  stateProp="enabled"
                  style="filled"
                />
              </div>
            </div>
            <CarouselIndicator
              className="carousel-indicator-instance"
              position="one"
              size="sixteen"
            />
            <div className="banner">
              <div className="ellipse-19" />
              <div className="overlap-group-5">
                <div className="ellipse-10" />
                <div className="ellipse-20" />
                <div className="banner-contents">
                  <Titles
                    className="titles-3"
                    divClassName="titles-4"
                    size="sixty-six"
                    title="Experience Innovation in Action"
                  />
                  <div className="text-and-CTA">
                    <p className="text-wrapper-31">
                      Schedule Your CSIR Learning Factory Tour
                    </p>
                    <p className="step-into-the-future">
                      Step into the future of technology and education with a
                      guided tour of the CSIR Learning Factory. Witness
                      firsthand the intersection of skills development and 4IR
                      technologies. Our immersive tours provide an in-depth
                      exploration of our state-of-the-art facilities, research
                      labs, and hands-on training areas. <br />
                      <br />
                      To schedule your exclusive tour and discover the
                      transformative potential of the Learning Factory, fill out
                      the form below. Our team looks forward to showcasing the
                      exciting possibilities that lie ahead.
                    </p>
                    <StyleTextStateWrapper
                      className="button-6"
                      labelText="Book a lab visit"
                      showIcon={false}
                      stateProp="enabled"
                      style="filled-alternative"
                    />
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer-2">
              <div className="overlap-7">
                <p className="join-our-news-letter-2">
                  Join our news letter and <br />
                  keep up to date with us!
                </p>
                <div className="emailer-input-field-2">
                  <div className="text-field-wrapper">
                    <div className="text-field-3">
                      <div className="content-wrapper">
                        <div className="content-3">
                          <input className="input-text-3" id="input-2" />
                          <input
                            className="label-text-16"
                            htmlFor="input-2"
                            placeholder="Email address"
                            type="email"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <StyleTextStateWrapper
                    className="button-7"
                    labelText="Subscribe"
                    showIcon={false}
                    stateProp="enabled"
                    style="filled"
                  />
                </div>
              </div>
              <div className="frame-33">
                <img
                  className="img-4"
                  alt="Img"
                  src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/d32dc50b03535fd11938fdab01bae2f1-3.png"
                />
                <div className="frame-34">
                  <StyleTextStateWrapper
                    className="button-2"
                    labelText="Who we are"
                    showIcon={false}
                    stateProp="enabled"
                    style="text"
                  />
                  <StyleTextStateWrapper
                    className="button-2"
                    labelText="Explore courses"
                    showIcon={false}
                    stateProp="enabled"
                    style="text"
                  />
                  <StyleTextStateWrapper
                    className="button-2"
                    labelText="Book a lab visit"
                    showIcon={false}
                    stateProp="enabled"
                    style="text"
                  />
                </div>
              </div>
              <img
                className="vector-2"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/vector-2.svg"
              />
              <div className="frame-35">
                <p className="text-wrapper-32">
                  © Copyright CSIR Learning Factory 2023
                </p>
                <div className="frame-36">
                  <div className="text-wrapper-32">Terms of service</div>
                  <div className="text-wrapper-32">Privacy policy</div>
                  <div className="text-wrapper-32">Cookies</div>
                </div>
              </div>
            </footer>
            <Titles
              className="titles-5"
              divClassName="titles-2"
              size="thirty-six"
              title="Testimonials"
            />
            <div className="above-the-fold-text">
              <div className="title-wrapper">
                <p className="title-2">
                  <span className="span">Where Technology Builds </span>
                  <span className="text-wrapper-13">People! </span>
                </p>
              </div>
              <div className="titles-6">
                <p className="title-3">
                  <span className="text-wrapper-13">
                    Unlocking the Future:{" "}
                  </span>
                  <span className="span">
                    The Learning Factory for 4IR Technologies
                  </span>
                </p>
              </div>
              <p className="embark-on-a-journey-2">
                Embark on a journey of innovation and skill development at the
                forefront of the fourth industrial revolution (4IR). Established
                in March 2021 at the CSIR campus in Pretoria, the Learning
                Factory (LF) is a groundbreaking initiative, a collaboration
                between the CSIR and merSETA, dedicated to advancing skills and
                fostering innovation in digital technologies. Explore our
                offerings, from skills development and technology localisation
                to serving as a research enabler in 4IR applications. <br />
                Join us in shaping the future at the epicentre of cutting-edge
                education and technology.
              </p>
              <div className="CTA">
                <StyleTextStateWrapper
                  className="button-8"
                  labelText="Explore courses"
                  showIcon={false}
                  stateProp="enabled"
                  style="filled"
                />
              </div>
            </div>
            <div className="nav-bar-2">
              <img
                className="img-5"
                alt="Img"
                src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/d32dc50b03535fd11938fdab01bae2f1-3.png"
              />
              <div className="search-bar-2">
                <div className="text-field-4">
                  <div className="state-layer-7">
                    <div className="leading-icon-3">
                      <div className="container-4">
                        <div className="icons-search-24px-wrapper">
                          <Icon33 className="instance-node-3" color="#3A3E44" />
                        </div>
                      </div>
                    </div>
                    <div className="content-3">
                      <input className="input-text-3" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-37">
                <StyleTextStateWrapper
                  className="button-2"
                  labelText="Who we are"
                  showIcon={false}
                  stateProp="enabled"
                  style="text"
                />
                <StyleTextStateWrapper
                  className="button-2"
                  labelText="Explore courses"
                  showIcon={false}
                  stateProp="enabled"
                  style="text"
                />
              </div>
              <StyleTextStateWrapper
                className="button-9"
                showIcon={false}
                stateProp="enabled"
                style="book-a-visit"
              />
            </div>
          </>
        )}

        {(screenWidth >= 1440 || screenWidth < 834) && (
          <div
            className="overlap-8"
            style={{
              height:
                screenWidth < 834
                  ? "1438px"
                  : screenWidth >= 1440
                  ? "564px"
                  : undefined,
              left:
                screenWidth < 834
                  ? "-82px"
                  : screenWidth >= 1440
                  ? "137px"
                  : undefined,
              top:
                screenWidth < 834
                  ? "2830px"
                  : screenWidth >= 1440
                  ? "659px"
                  : undefined,
              width:
                screenWidth < 834
                  ? "554px"
                  : screenWidth >= 1440
                  ? "1165px"
                  : undefined,
            }}
          >
            {screenWidth < 834 && (
              <>
                <div className="desktop-4">
                  <div className="overlap-9">
                    <div className="rectangle-8" />
                    <div className="text-wrapper-33">Training covers</div>
                    <div className="frame-38">
                      <div className="div-3">
                        <img
                          className="frame-39"
                          alt="Frame"
                          src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-100-5.svg"
                        />
                        <div className="text-wrapper-21">
                          Artificial Intelligence
                        </div>
                      </div>
                      <div className="div-3">
                        <img
                          className="frame-40"
                          alt="Frame"
                          src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-108-1.svg"
                        />
                        <div className="text-wrapper-21">Augmented Reality</div>
                      </div>
                    </div>
                    <div className="frame-41">
                      <div className="div-3">
                        <img
                          className="frame-39"
                          alt="Frame"
                          src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-104-1.svg"
                        />
                        <div className="text-wrapper-21">Robotics</div>
                      </div>
                      <div className="div-3">
                        <img
                          className="frame-42"
                          alt="Frame"
                          src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-103-2.svg"
                        />
                        <div className="text-wrapper-34">
                          Additive Manufacturing
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-43">
                    <div className="div-3">
                      <img
                        className="frame-44"
                        alt="Frame"
                        src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-108-2.svg"
                      />
                      <div className="text-wrapper-34">
                        The Internet of Things
                      </div>
                    </div>
                    <div className="div-3">
                      <img
                        className="frame-40"
                        alt="Frame"
                        src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-100-2.svg"
                      />
                      <div className="text-wrapper-21">Big Data Analytics</div>
                    </div>
                  </div>
                  <div className="frame-45">
                    <div className="div-3">
                      <img
                        className="frame-44"
                        alt="Frame"
                        src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-100-3.svg"
                      />
                      <div className="cloud-computing-edge">
                        Cloud Computing
                        <br />
                        &amp; Edge Processing
                      </div>
                    </div>
                    <div className="div-3">
                      <img
                        className="frame-40"
                        alt="Frame"
                        src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-108-7.svg"
                      />
                      <div className="text-wrapper-21">System Integration</div>
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="div-3">
                      <img
                        className="frame-39"
                        alt="Frame"
                        src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-102-1.svg"
                      />
                      <div className="text-wrapper-21">Digital Twinning</div>
                    </div>
                    <div className="div-3">
                      <img
                        className="frame-40"
                        alt="Frame"
                        src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-108-5.svg"
                      />
                      <div className="text-wrapper-21">Simulation</div>
                    </div>
                  </div>
                  <div className="frame-47">
                    <img
                      className="frame-39"
                      alt="Frame"
                      src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/frame-108-3.svg"
                    />
                    <div className="text-wrapper-21">Cyber Security</div>
                  </div>
                  <CsirButton
                    className="CSIR-button-7"
                    labelText="Explore courses"
                    showIcon={false}
                    stateProp="enabled"
                    style="filled"
                  />
                </div>
                <div className="ellipse-21" />
                <div className="text-wrapper-35">Testimonials</div>
              </>
            )}

            {screenWidth >= 1440 && (
              <>
                <div className="video-placeholder" />
                <StyleTextStateWrapper
                  className="button-10"
                  hasLabelText={false}
                  icon={<IconsPlayArrow className="icon-3" color="white" />}
                  showIcon
                  stateLayerClassName="button-11"
                  stateProp="enabled"
                  style="filled"
                />
              </>
            )}
          </div>
        )}

        {screenWidth >= 1440 && (
          <>
            <div className="overlap-10">
              <div className="image-carousel">
                <div className="overlap-11">
                  <div className="rectangle-9" />
                </div>
              </div>
              <CarouselIndicator
                className="carousel-indicator-4"
                divClassName="carousel-indicator-3"
                divClassNameOverride="carousel-indicator-3"
                ellipseClassName="carousel-indicator-2"
                ellipseClassName1="carousel-indicator-3"
                ellipseClassNameOverride="carousel-indicator-3"
                position="one"
                size="sixteen"
              />
            </div>
            <div className="offerings-text">
              <Titles
                className="titles-7"
                divClassName="titles-8"
                size="thirty-six"
                title="Explore a World of Possibilities with our main offerings"
              />
              <div className="list-group">
                <div className="list">
                  <IconsArrowForward24Px1
                    className="instance-node-3"
                    color="#FEC34E"
                  />
                  <p className="text-wrapper-36">
                    Skills development (training, upskilling, reskilling,
                    cross-skilling) and innovation platform for the operation,
                    implementation, research and design of key 4IR technologies;
                  </p>
                </div>
                <div className="list">
                  <IconsArrowForward24Px1
                    className="instance-node-3"
                    color="#FEC34E"
                  />
                  <p className="text-wrapper-36">
                    Test-bed platform for de-risking of 4IR technologies applied
                    to all stakeholders
                  </p>
                </div>
                <div className="list">
                  <IconsArrowForward24Px1
                    className="instance-node-3"
                    color="#FEC34E"
                  />
                  <p className="text-wrapper-36">
                    Support of technology localisation using 4IR technologies;
                  </p>
                </div>
                <div className="list">
                  <IconsArrowForward24Px1
                    className="instance-node-3"
                    color="#FEC34E"
                  />
                  <p className="text-wrapper-36">
                    Technology transfer to stakeholders, including small, medium
                    and micro enterprises (SMMEs), in support of
                    re-industrialisation pertaining to 4IR technologies;
                  </p>
                </div>
                <div className="list">
                  <IconsArrowForward24Px1
                    className="instance-node-3"
                    color="#FEC34E"
                  />
                  <p className="text-wrapper-36">
                    Support platform for LFs that will be established at TVETS
                    in terms of technologies, curriculum, best practices, etc.;
                    and
                  </p>
                </div>
                <div className="list">
                  <IconsArrowForward24Px1
                    className="instance-node-3"
                    color="#FEC34E"
                  />
                  <p className="text-wrapper-36">
                    Platform to serve as a research enabler applied to
                    innovation in 4IR applications – i.e. Applied research
                    informed by stakeholder needs.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {screenWidth < 834 && (
          <>
            <div className="frame-48">
              <div className="frame-49">
                <img
                  className="image-3"
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/-.svg"
                />
                <p className="text-wrapper-14">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.”
                </p>
                <img
                  className="ellipse-13"
                  alt="Ellipse"
                  src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659f93d47cfae80bc3a834ef/img/ellipse-11@2x.png"
                />
                <div className="frame-9">
                  <div className="text-wrapper-15">Nolwazi Khumalo</div>
                  <div className="text-wrapper-16">Student</div>
                </div>
              </div>
              <div className="frame-50">
                <img
                  className="image-3"
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/-.svg"
                />
                <p className="text-wrapper-14">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.”
                </p>
                <img
                  className="ellipse-22"
                  alt="Ellipse"
                  src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659f93d47cfae80bc3a834ef/img/ellipse-12@2x.png"
                />
                <div className="frame-51">
                  <div className="text-wrapper-15">Mike George</div>
                  <div className="text-wrapper-16">Mining Engineer</div>
                </div>
              </div>
              <div className="frame-50">
                <img
                  className="image-6"
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/--3@2x.png"
                />
                <p className="text-wrapper-14">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.”
                </p>
                <img
                  className="ellipse-23"
                  alt="Ellipse"
                  src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659f93d47cfae80bc3a834ef/img/ellipse-12@2x.png"
                />
                <div className="frame-51">
                  <div className="text-wrapper-15">Mike George</div>
                  <div className="text-wrapper-16">Mining Engineer</div>
                </div>
              </div>
            </div>
            <div className="frame-52">
              <div className="ellipse-24" />
              <div className="ellipse-25" />
              <div className="ellipse-25" />
              <div className="ellipse-25" />
              <div className="ellipse-25" />
            </div>
            <div className="overlap-12">
              <div className="group-2">
                <div className="overlap-13">
                  <img
                    className="rectangle-10"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/rectangle-66-2@2x.png"
                  />
                  <img
                    className="rectangle-11"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/rectangle-67@2x.png"
                  />
                  <div className="rectangle-12" />
                </div>
              </div>
              <div className="group-3">
                <div className="overlap-14">
                  <div className="ellipse-26" />
                  <img
                    className="polygon-2"
                    alt="Polygon"
                    src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/polygon-1-1.svg"
                  />
                </div>
              </div>
            </div>
            <Footer className="footer-instance" platform="mobile" />
            <NavBar
              CSIRButtonIcon={
                <IconsMenu24Px className="icon-3" color="white" />
              }
              className="nav-bar-3"
              override={<Icon33 className="icon-3" color="#012E5E" />}
              platform="mobile"
              type="default"
            />
          </>
        )}
      </div>
    </div>
  );
};
