import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { useMediaQuery } from 'react-responsive';
import Zoom from 'react-reveal/Zoom';
import Icon from "../../components/Icon";
import { MemoFade as Fade } from '../../components/reveal-memoized';
import { COLOR_PRIMARY_LIGHTER, MOBILE_MODE } from '../../utils/const';
import { ButtonMore, EdDuration, EdSubheading, EdTitle } from './time-line-components';
import "./timeline-item.scss";

const lineStyles = {
  width: "1px",
  background: COLOR_PRIMARY_LIGHTER,
  opacity: ".6",
}

const iconStyle = {
  color: "#17b794",
}
const bubbleStyle = {
  padding: "1rem",
  border: `1px solid ${COLOR_PRIMARY_LIGHTER}`,
  display: "flex",
  background: "rgb(27,34,41)",
  justifyContent: "center",
  boxShadow: "0px 1px 16px rgba(11,19,21,.6)"
}

export default function ({ children, institution, location, role, roleSub, icon = "fa-university", type, datefrom, dateTo, className, logo, delay = 1000 }) {
  const [isShowDetails, setShowDetails] = useState(false);
  const isMobileMode = useMediaQuery({ maxWidth: MOBILE_MODE });

  function handleToggleShowDetails() {
    setShowDetails(prev => (!prev))
  }

  let revealDirection = className === "left" && !isMobileMode ? { left: true } : { right: true };
  return (
    <Container className="timeline_item" fluid>
      <Timeline lineStyle={lineStyles}>
        <Fade {...revealDirection} distance="1.5rem" delay={delay}>
          <TimelineEvent
            iconStyle={iconStyle}
            bubbleStyle={bubbleStyle}
            className={["timeline_item_content card rounded shadow ", children && "pb-5", className === "left" ? "left" : ""].join(" ")}
            title={<EdTitle
              institution={institution}
              location={location} />}
            subtitle={<EdSubheading
              main={role}
              sec={roleSub} />}
            createdAt={<EdDuration
              to={dateTo} from={datefrom} />}
            icon={
              <Icon
                icon={icon}
                fontSize=".8rem" />}
            buttons={children && <ButtonMore
              className="btn-circle shadow-sm"
              title={isShowDetails ? "Hide Description" : "Show Description"}
              text={isShowDetails ? <Icon icon="fa-ellipsis-v" fontSize=".8rem" /> : <Icon icon="fa-ellipsis-h" fontSize=".8rem" />}
              handleClick={handleToggleShowDetails}
            />}
            contentStyle={{
              background: "#1f262d",
              width: "100%"
            }}
          >
            <Zoom when={isShowDetails} timeout={400} collapse>

              {children}
            </Zoom>
          </TimelineEvent>
        </Fade>
      </Timeline>
    </Container >
  );
}
