import React, { useEffect, useRef, useState, memo } from "react";
import "./index.scss";
import Section from "../../components/section";
import { Button } from "react-bootstrap";

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
    <Section heading="summary">
      <p className={[state.showMore ? "more" : ""].join(" ")} ref={contentRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et dui
        ullamcorper, hendrerit dui ut, tristique urna. Sed ultricies ornare est
        at pulvinar. Ut id ante maximus, sollicitudin sem vel, faucibus lacus.
        Duis efficitur sem et viverra rhoncus. Nunc rutrum felis mi, vitae
        elementum justo mollis sed. Sed condimentum condimentum tellus.
        Vestibulum gravida iaculis erat nec luctus. Vivamus finibus sem vel
        magna rhoncus placerat. Pellentesque vestibulum malesuada risus vel
        pharetra. Integer sodales leo tristique libero porta venenatis. Aliquam
        placerat, nibh vitae pulvinar dapibus, urna urna lacinia enim, sed
        elementum tellus ipsum vel enim. Quisque imperdiet a nisl id vulputate.
      </p>
      {state.hasOverflowingContent && (
        <Button
          variant="light"
          className="d-block mr-auto  m-0 more-btn"
          onClick={toggleOverflow}
        >
          {state.showMore ? "Less" : "Show More"}
        </Button>
      )}
    </Section>
  );
});
