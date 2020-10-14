import React, { memo, useState } from "react";
import { Button, Image } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import Truncate from 'react-truncate';
import Section from "../../components/section";
import "./index.scss";
import SummaryShowcaseItem from './SummaryShowcaseItem';
import withScrollElement from '../../hoc/withScrollElement';

export default withScrollElement(memo(function () {
  const [state, setState] = useState({
    showMore: false
  });

  //toggle summary height
  function toggleOverflow() {
    setState(prev => ({ ...prev, showMore: !prev.showMore }));
  }

  return (
    <Section className="about-me" headingFirst="About" headingSecond="Me">
      <div className="about-me_wrapper">
        <Fade bottom distance=".5em">
          <Image
            className="avatar my-4"
            src="/assets/images/user.jpeg"
            roundedCircle
            height="100px"
            width="100px"
          />
          <span className="name mt-2">Mohammed Asif</span>
          <span className="role mb-2">Full stack developer</span>
          <div className="summary_showcase mb-3">
            {[{ title: "Mob design", icon: "fa-mobile" },
            { title: "Development", icon: "fa-tv" },
            { title: "Ui Design", icon: "fa-gem" }].map((showcaseItem, i) =>
              <SummaryShowcaseItem
                delay={(i + 1) * 300}
                key={i}
                title={showcaseItem.title}
                icon={showcaseItem.icon} />
            )}
          </div>
        </Fade>
        <Fade bottom delay={100} distance="1em">
          <Truncate
            className="summary"
            lines={state.showMore ? 0 : 4}
            ellipsis={<span>...</span>}>
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
            </Truncate>
          <Button
            variant="light"
            className="d-block m-auto more-btn"
            onClick={toggleOverflow}
          >
            {state.showMore ? "Less" : "Show More"}
          </Button>
        </Fade>

      </div>
    </Section>
  );
}));
