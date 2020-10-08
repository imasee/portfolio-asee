import React, { memo } from "react";
import { Container, ProgressBar, ListGroup } from "react-bootstrap";
import Icon from "../../components/Icon";
import SkillProgress from "./SkillProgress";

export default memo(function (props) {
  return (
    <Container fluid className="text-left p-0">
      <div className="section_subheading">
        <span className="mr-2">
          <Icon icon="fa-chart-bar" fontSize="1.2rem" />
        </span>
        <span className="section_subheading_p1 mr-1">Top</span>
        <span className="section_subheading_p2">Skills</span>
      </div>
      {/* TODO:Use with array */}
      <ListGroup className="w-100 my-3 mx-0">
        <ListGroup.Item variant="light" as="li" className="px-1">
          <SkillProgress label="React, Redux" progress={85} />
        </ListGroup.Item>
        <ListGroup.Item variant="light" as="li" className="px-1">
          <SkillProgress
            label="Dotnet Core, C#, Entity Framework"
            progress={90}
          />
        </ListGroup.Item>
        <ListGroup.Item variant="light" as="li" className="px-1">
          <SkillProgress label="HTML, CSS, Javascript" progress={80} />
        </ListGroup.Item>
        <ListGroup.Item variant="light" as="li" className="px-1">
          <SkillProgress label="MySQL, MongoDB, MS SQL" progress={78} />
        </ListGroup.Item>
        <ListGroup.Item variant="light" as="li" className="px-1">
          <SkillProgress label="JSON" progress={90} />
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
});
