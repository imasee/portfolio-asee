import React, { memo } from "react";
import { Container, ListGroup } from "react-bootstrap";
import SkillProgress from "./SkillProgress";

export default memo(function ({ data = [] }) {
  return (
    <Container fluid className="text-left p-0">
      <ListGroup className="w-100 my-0 mx-0">
        {data && data.map((tSkill, i) =>
          <ListGroup.Item variant="light" as="li" className="px-1" key={i}>
            <SkillProgress label={tSkill.skill} progress={tSkill.progress} />
          </ListGroup.Item>
        )}
      </ListGroup>
    </Container>
  );
});
