import React from "react";
import { Container } from "react-bootstrap";
import { Timeline, TimelineEvent } from "react-event-timeline";
import Icon from "../../components/Icon";
import { COLOR_PRIMARY, COLOR_PRIMARY_LIGHTER } from '../../utils/const';
import { EdDuration, EdSubheading, EdTitle } from './time-line-components';
import "./timeline-item.scss";

const lineStyles = {
  width: "1px",
  background: COLOR_PRIMARY_LIGHTER,
  opacity: ".6",
  boxShadow: "0px 1px 16px rgba(0,0,0,.9)"
}

const iconStyle = {
  color: COLOR_PRIMARY
}
const bubbleStyle = {
  padding: "1rem",
  border: `1px solid ${COLOR_PRIMARY_LIGHTER}`,
  display: "flex",
  justifyContent: "center",
  boxShadow: "0px 1px 16px rgba(200,200,200,.6)"
}

export default function ({ institution, location, role, roleSub, icon = "fa-university", datefrom, dateTo, }) {
  return (
    <Container className="timeline_item">
      <Timeline lineStyle={lineStyles}>
        <TimelineEvent
          iconStyle={iconStyle}
          bubbleStyle={bubbleStyle}
          className="timeline_item_content card rounded shadow"
          title={<EdTitle
            institution={institution}
            location={location} />}
          subtitle={<EdSubheading
            main={role}
            sec={roleSub} />}
          createdAt={<EdDuration
            to={dateTo} from={datefrom} />}
          icon={<Icon
            icon={icon}
            fontSize=".8rem" />}
        >
        </TimelineEvent>
      </Timeline>
    </Container>
  );
}
