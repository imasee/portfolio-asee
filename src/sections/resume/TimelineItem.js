import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Timeline, TimelineEvent } from "react-event-timeline";
import Icon from "../../components/Icon";
import { COLOR_PRIMARY, COLOR_PRIMARY_LIGHTER } from '../../utils/const';
import { EdDuration, EdSubheading, EdTitle, ButtonMore } from './time-line-components';
import "./timeline-item.scss";
import ToolTip from '../../components/Tooltip';

const lineStyles = {
  width: "1px",
  background: COLOR_PRIMARY_LIGHTER,
  opacity: ".6",
  boxShadow: "0px 1px 16px rgba(0,0,0,.9)"
}

const iconStyle = {
  color: COLOR_PRIMARY,
}
const bubbleStyle = {
  padding: "1rem",
  border: `1px solid ${COLOR_PRIMARY_LIGHTER}`,
  display: "flex",

  justifyContent: "center",
  boxShadow: "0px 1px 16px rgba(200,200,200,.6)"
}

export default function ({ children, institution, location, role, roleSub, icon = "fa-university", type, datefrom, dateTo, className, logo }) {

  const [isShowDetails, setShowDetails] = useState(false);

  function handleToggleShowDetails() {
    setShowDetails(prev => (!prev))
  }

  return (
    <Container className="timeline_item" fluid>
      <Timeline lineStyle={lineStyles}>
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
        >
          {isShowDetails && children}
        </TimelineEvent>
      </Timeline>
    </Container >
  );
}
