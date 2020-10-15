export const userInfoFallback = {
    firstName: "Mohammed",
    lastName: "Asif",
    description: "I am a full stack web developer",
    summary: "Driven full-stack software developer, familiar with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Excellent communication and organizational abilities with a resourceful approach to solving diverse problems. Deadline-driven and knowledgeable professional with a strong desire to learn and contribute to team success.",
}

export const userResumeFallback = {
    title: "Full Stack Developer",
    skills: {
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et dui ullamcorper, hendrerit dui ut, tristique urna. Sed ultricies ornare est at pulvinar..",
        showcase: [
            {
                id: "sc_1",
                heading: "",
                description: ""
            }
        ]
        ,
        topSkills: [
            {
                id: "tps_1",
                skill: "Dotnet Core",
                progress: 90
            },
            {
                id: "tps_2",
                skill: "React",
                progress: 88
            },
            {
                id: "tps_3",
                skill: "Javascript",
                progress: 92
            },
            {
                id: "tps_4",
                skill: "C#",
                progress: 90
            },
            {
                id: "tps_5",
                skill: "HTML, CSS",
                progress: 85
            },
        ],
        allSkills: [
            {
                id: "as_1",
                skill: "Redux"
            },
            {
                id: "as_2",
                skill: "Dotnet Core"
            },
            {
                id: "as_3",
                skill: "C#"
            },
            {
                id: "as_4",
                skill: "EF Core"
            },
            {
                id: "as_5",
                skill: "Net Framework"
            }, {
                id: "as_6",
                skill: "Node.js"
            },
            {
                id: "as_7",
                skill: "JQuery"
            },
            {
                id: "as_8",
                skill: "Java"
            },
            {
                id: "as_9",
                skill: "Javascript"
            },
            {
                id: "as_10",
                skill: "HTML"
            },
            {
                id: "as_11",
                skill: "CSS"
            },
            {
                id: "as_12",
                skill: "SQL"
            },
            {
                id: "as_13",
                skill: "XML"
            },
            {
                id: "as_14",
                skill: "MY SQL"
            },
            {
                id: "as_15",
                skill: "MS SQL"
            },
            {
                id: "as_16",
                skill: "Github"
            },
            {
                id: "as_17",
                skill: "Bitbucket"
            }
        ]
    },
    experiences: [
        {
            id: "ex_1",
            institution: "Maplebots Inc",
            location: "Kitchener, ON",
            role: "Web Developer",
            duration: {
                from: { month: "January", year: 2020 },
                "to": {}
            },
            details: [
                "Developed user interfaces for deployment on Amazon Web Services (AWS) platforms",
                "Collaborated with developers and performance engineers to enhance supportability and identify performance bottlenecks",
                "Researched new technologies, software packages and hardware products for use in website projects",
                "Employed coding practices based on commonly accepted standards to establish site layout and user interface",
                "Designed REST calls using React to streamline user interface performance",
                "Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs and enhancements"
            ]
        }
    ],
    educations: [
        {
            id: "ed_1",
            institution: "Humber College",
            location: "Toronto, ON",
            degree: "Postgraduate Diploma",
            major: "Information Technology Solutions",
            duration: {
                from: { month: "January", year: 2018 },
                to: { month: "August", year: 2019 }
            },
            details: [
                "GPA: 3.2/4.0"
            ]
        },
        {
            id: "ed_2",
            institution: "University of Calicut",
            location: "India",
            degree: "Bachelor of Science",
            major: "Computer Applications",
            duration: {
                from: { month: "July", year: 2013 },
                to: { month: "July", year: 2016 }
            },
            details: [
                "CGPA: 2.89/4.0",
                "Member of Microsoft Student Associate (MSA), Microsoft Student Partner (MSP) program for the year 2014- 2015"
            ]
        }
    ],
    projects: [
        {
            id: "pr_1",
            title: "Library Management System",
            type: "Academic Project",
            institution: "Humber College",
            location: "Toronto, ON",
            imageUrl: "/assets/images/library-mgmt.jpg",
            duration: {
                from: { month: "January", year: 2019 },
                to: { month: "April", year: 2019 }
            },
            mainTechnologies: [
                {
                    id: "mt_1",
                    title: "ASP.NET",
                    icon: ""
                },
                {
                    id: "mt_2",
                    title: "HTML5",
                    icon: ""
                },
                {
                    id: "mt_3",
                    title: "Javascript",
                    icon: ""
                },
                {
                    id: "mt_4",
                    title: "Javascript",
                    icon: ""
                }
            ],
            details: [
                "Developed system to enable day to day operations of library, resulting in simplified management of data and services online",
                "Created layout and user interface using HTML and CSS practices, including crossbrowser compatibility",
                "Devised, implemented database designs and data models",
                "Generated, updated, Organized SQL database to manage application data",
                "Reduced traffic travels between server and client 20%, using AJAX",
                "Tested application for issues and performed necessary modifications",
                "Used programming capabilities in C#, Asp.Net, SQL, HTML, CSS, Entity Framework, JavaScript, LINQ, and other libraries as needed"
            ]
        },
        {
            id: "pr_2",
            title: "User Portal, The Bridge",
            type: "Capstone Project",
            institution: "Humber College",
            location: "Toronto, ON",
            imageUrl: "/assets/images/bridge.jpg",
            duration: {
                from: { month: "May", year: 2019 },
                to: { month: "July", year: 2019 }
            },
            mainTechnologies: [
                {
                    id: "mt_1",
                    title: "Java",
                    icon: ""
                },
                {
                    id: "mt_2",
                    title: "HTML5",
                    icon: ""
                },
                {
                    id: "mt_3",
                    title: "Javascript",
                    icon: ""
                },
                {
                    id: "mt_4",
                    title: "Spring",
                    icon: ""
                }
            ],
            details: [
                "Developed web portal to manage employees, products, orders, and customers",
                "Created web interface for hardware embedded with local tomcat server to start/stop internal application, accessed from remote devices",
                "Managed critical networking data dynamically and facilitated connection between devices",
                "Met with sponsor and mentor weekly to provide detailed project reports and milestone updates",
                "Collaborated with team on all stages of systems development lifecycle, from requirements, gathering to production releases",
                "Increased development speed by 25%, attributing right task to right person"
            ]
        }
    ]

}