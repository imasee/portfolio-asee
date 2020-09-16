import React, { useEffect, useRef, useState } from 'react';
import debounced from 'lodash.debounce';
import { NavHashLink } from 'react-router-hash-link';
import { useRouteMatch } from 'react-router-dom';

const NavLink = React.memo(({ to, className, children }) => {
    const match = useRouteMatch();
    function handleScrollToElement(element) {
        const offset = 55;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        if (window.location.hash) {
            var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
            alert(hash);
            // hash found
        } else {
            // No hash found
        }
    })
    return (<NavHashLink
        className={className}
        to={to}
        smooth
        scroll={handleScrollToElement}
    >{children}</NavHashLink>)
});

export default () => {
    const [sticky, setSticky] = useState(false);
    const navOffset = useRef(0);
    const navRef = useRef();

    const handleWindowScroll = (navbar) => {
        if (navRef.current) {
            var sticky = navOffset.current || 0;
            console.log("scroll");
            console.log(window.pageYOffset);
            if (window.pageYOffset >= sticky) {
                navRef.current.classList.add("sticky");
            } else {
                navRef.current && navRef.current.classList.remove("sticky");
            }
        }
    }
    const debouncedHandleWindowScroll = useRef(debounced(handleWindowScroll, 300)).current;




    useEffect(() => {
        // if (navRef.current) {
        //     var num = navRef.current.offsetTop;
        //     navOffset.current = num;
        // }
        // window.addEventListener("scroll", debouncedHandleWindowScroll);
        // return () => {
        //     window.removeEventListener("scroll", debouncedHandleWindowScroll);
        // }
    });

    return (
        <nav className={["navbar navbar-expand-sm bg-dark sticky"].join(" ")} ref={navRef}>

            <ul className="navbar-nav">

                <NavLink
                    to="/#summary"
                    className="mr-2"
                >summary</NavLink>
                <NavLink
                    to="/#cont-0"
                    className="mr-2"
                >Cont-0</NavLink>
                <NavLink
                    to="/#cont-1"
                >Cont-1</NavLink>

            </ul>

        </nav>
    );
}