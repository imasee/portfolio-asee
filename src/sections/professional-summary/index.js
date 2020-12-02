import React, { memo, useState } from "react";
import { Button, Image } from "react-bootstrap";
import { MemoFade as Fade } from '../../components/reveal-memoized';
import Truncate from 'react-truncate';
import Section from "../../components/section";
import "./index.scss";
import SummaryShowcaseItem from './SummaryShowcaseItem';
import withScrollElement from '../../hoc/withScrollElement';

const ProfileImage = memo(() => (<Image
  className="avatar my-4"
  src="/assets/images/user.jpeg"
  roundedCircle
  height="100px"
  width="100px"
/>));


export default withScrollElement(memo(function ({ firstName, lastName, description, summary, title }) {
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
          <ProfileImage />
          <span className="name mt-2">{firstName}&nbsp;{lastName}</span>
          <span className="role mb-2">{title}</span>
          <div className="summary_showcase mb-3">
            {[{ title: "Responsive", icon: "fa-mobile" },
            { title: "Server dev", icon: "fa-tv" },
            { title: "Ui design", icon: "fa-gem" }].map((showcaseItem, i) =>
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
            trimWhitespace={false}
            lines={state.showMore ? 0 : 2}
            ellipsis={<span>...</span>}>
            {summary}
          </Truncate>
          <Button
            variant="light"
            className="d-block m-auto more-btn"
            onClick={toggleOverflow}
          >
            {state.showMore ? "Less" : "Read more"}
          </Button>
        </Fade>

      </div>
    </Section>
  );
}));
