import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const NavLink = React.memo(({ to, className, children, pathname }) => {
    // const match = useLocation();
    const [active,
        //  setActive
    ] = useState(false);

    function handleScrollToElement(element) {
        const offset = 66;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    // useEffect(() => {
    //     if (match.hash) {
    //         // var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
    //         setActive(match.hash.substr(1) === to);
    //         console.log(match.hash);
    //         console.log(to);
    //     }
    // }, [match]);

    return (<NavHashLink
        className={[className, active ? "link-active" : ""].join(" ")}
        to={{
            pathname: pathname,
            hash: to
        }}
        exact={true}
        smooth
        scroll={handleScrollToElement}
    >{children}</NavHashLink>)
});

export default React.memo(() => {
    const match = useLocation();

    return (
        <ul className="navbar-nav ml-auto pr-2">
            <NavLink
                pathname={match.pathname || '/'}
                to="summary"
                className="mr-3"
            >Summary</NavLink>

            <NavLink
                pathname={match.pathname || '/'}
                to="technical-skills"
                className="mr-3"
            >Technical Skills</NavLink>

            <NavLink
                pathname={match.pathname || '/'}
                to="experience"
                className="mr-3"
            >Experience</NavLink>

            <NavLink
                pathname={match.pathname || '/'}
                to="education"
                className="mr-3"
            >Education</NavLink>

            <NavLink
                pathname={match.pathname || '/'}
                to="projects"
                className="mr-3"
            >Projects</NavLink>

            <NavLink
                pathname={match.pathname || '/'}
                to="contact"
            >contact</NavLink>
        </ul>
    );
})