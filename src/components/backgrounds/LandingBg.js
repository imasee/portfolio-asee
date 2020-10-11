import * as React from "react";

function Landing(props) {
    return (
        <svg width={854} height={665} fill="none" {...props} preserveAspectRatio="none">
            <path
                d="M14.302 67.61C-15.136 20.881 4.912-8.266 59.078 2.51L995.79 188.833c54.17 10.774 121.94 57.39 151.38 104.119l245.9 390.323c29.43 46.729 9.39 75.876-44.78 65.101L643.534 608.192c-182.273-36.257-410.337-193.118-509.397-350.361L14.302 67.611z"
                fill="url(#prefix__paint0_linear)"
            />
            <defs>
                <linearGradient
                    id="prefix__paint0_linear"
                    x1={630.825}
                    y1={716.666}
                    x2={847.663}
                    y2={455.42}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0D1D21" />
                    <stop offset={1} stopColor="#061A20" stopOpacity={0} />
                </linearGradient>
            </defs>
        </svg>
    );
}

const MemoLanding = React.memo(Landing);
export default MemoLanding;
