import React, { memo } from "react";
import { Badge, Container } from "react-bootstrap";
import { userResumeFallback } from '../../utils/fallbackData';

export default memo(function ({ data = [] }) {
  return (
    // TODO: Add  pt3, removed for commenting skill summary 
    <Container fluid className="text-left p-0 pt-3 pt-md-0">
      {/*TODO: Add  my-3 py-3, removed for commenting skill summary */}
      <Container fluid className="skills_pills pl-0 pr-0 pr-md-5">
        {userResumeFallback.skills.allSkills.map(((as, i) =>
          <Badge pill variant="secondary py-1" key={i}>
            {as.skill}
          </Badge>))}
      </Container>
    </Container>
  );
});

