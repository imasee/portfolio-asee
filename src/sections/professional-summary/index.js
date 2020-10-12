import React, { memo, useEffect, useRef, useState } from "react";
import { Button, Image } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import Section from "../../components/section";
import "./index.scss";

export default memo(function () {
  const contentRef = useRef();
  const [state, setState] = useState({
    hasOverflowingContent: false,
    showMore: false
  });

  const hasOverflowingChildren = (element) =>
    element.offsetHeight < element.scrollHeight ||
    element.offsetWidth < element.scrollWidth;

  const toggleOverflow = () => {
    setState((p) => ({ ...p, showMore: !p.showMore }));
  };

  useEffect(() => {
    if (contentRef && contentRef.current) {
      let element = contentRef.current;
      if (hasOverflowingChildren(element)) {
        setState((p) => ({ ...p, hasOverflowingContent: true }));
      } else {
        setState((p) => ({ ...p, hasOverflowingContent: false }));
      }
    }
  }, []);

  return (
    <Section className="about-me" headingFirst="About" headingSecond="Me">
      <div className="about-me_wrapper">
        <Fade bottom distance=".5em">
          <Image
            className="avatar my-4"
            src="/assets/images/user.png"
            roundedCircle
            height="100px"
            width="100px"
          />
          <span className="name mt-2">Mohammed Asif</span>
          <span className="role mb-2">Full stack developer</span>
          <Image
            className="test my-3"
            src="/assets/test/aboutme.svg"
            height="100px"
            width="100%"
          />
        </Fade>
        <Fade bottom delay={100} distance=".5em">
          <p
            className={[state.showMore ? "more" : ""].join(" ")}
            ref={contentRef}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et dui
            ullamcorper, hendrerit dui ut, tristique urna. Sed ultricies ornare
            est at pulvinar. Ut id ante maximus, sollicitudin sem vel, faucibus
            lacus. Duis efficitur sem et viverra rhoncus. Nunc rutrum felis mi,
            vitae elementum justo mollis sed. Sed condimentum condimentum tellus.
            Vestibulum gravida iaculis erat nec luctus. Vivamus finibus sem vel
            magna rhoncus placerat. Pellentesque vestibulum malesuada risus vel
            pharetra. Integer sodales leo tristique libero porta venenatis.
            Aliquam placerat, nibh vitae pulvinar dapibus, urna urna lacinia enim,
            sed elementum tellus ipsum vel enim. Quisque imperdiet a nisl id
            vulputate.
        </p>
        </Fade>
        {state.hasOverflowingContent && (
          <Button
            variant="light"
            className="d-block m-auto  m-0 more-btn"
            onClick={toggleOverflow}
          >
            {state.showMore ? "Less" : "Show More"}
          </Button>
        )}
      </div>
    </Section>
  );
});
