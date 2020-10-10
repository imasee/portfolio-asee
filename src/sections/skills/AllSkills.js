import React, { memo } from "react";
import { Container, Badge } from "react-bootstrap";
import Icon from "../../components/Icon";

export default memo(function (props) {
  return (
    <Container fluid className="text-left p-0 pt-3 pt-md-0">
      {/* <div className="section_subheading">
        <span className="mr-2">
          <Icon icon="fa-cogs" fontSize="1.2rem" />
        </span>
        <span className="section_subheading_p1 mr-1">All</span>
        <span className="section_subheading_p2">Skills</span>
      </div> */}
      <Container fluid className="skills_pills pl-0 pr-0 pr-md-5 my-3 py-3">
        <Badge pill variant="secondary py-1">
          React
        </Badge>
        <Badge pill variant="secondary py-1">
          Redux
        </Badge>
        <Badge pill variant="secondary py-1">
          Dotnet Core
        </Badge>
        <Badge pill variant="secondary py-1">
          C#
        </Badge>
        <Badge pill variant="secondary py-1">
          EF Core
        </Badge>
        <Badge pill variant="secondary py-1">
          Net Framework
        </Badge>
        <Badge pill variant="secondary py-1">
          Node.js
        </Badge>
        <Badge pill variant="secondary py-1">
          JQuery
        </Badge>
        <Badge pill variant="secondary py-1">
          Java
        </Badge>
        <Badge pill variant="secondary py-1">
          Javascript
        </Badge>
        <Badge pill variant="secondary py-1">
          HTML
        </Badge>
        <Badge pill variant="secondary py-1">
          CSS
        </Badge>
        <Badge pill variant="secondary py-1">
          SQL
        </Badge>
        <Badge pill variant="secondary py-1">
          XML
        </Badge>
        <Badge pill variant="secondary py-1">
          MySQL
        </Badge>
        <Badge pill variant="secondary py-1">
          MS SQL Server
        </Badge>
        <Badge pill variant="secondary py-1">
          Github
        </Badge>
        <Badge pill variant="secondary py-1">
          Bitbucket
        </Badge>
      </Container>
    </Container>
  );
});

/**
 * Technologies and Frameworks: .NET Framework, .NET Core, Node.js, React, Redux,
jQuery, Entity Framework
• Programming Languages: C#, Java, JavaScript, HTML, CSS, SQL, XML
• Databases: MySQL, MongoDB, MS SQL Server
• Software: Microsoft visual studio, Microsoft visual studio code, Eclipse, MS Office (Word,
Excel, PowerPoint), MySQL Workbench, Postman
• Source Control/ Version Control: GitHub, Bitbucket
• Other Skills: XML, JSON, Ajax, REST, Design patterns, Software development, Web
development, Website optimization, Agile workflow, Software best practices
 */
