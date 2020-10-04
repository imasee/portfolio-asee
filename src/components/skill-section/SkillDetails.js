import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import React from 'react';
import SkillDetailItem from './SkillDetailItem';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    inline: {
        display: 'inline',
    },
    icon: {
        fontSize: "2.8rem"
    }
}));

export default function () {
    const classes = useStyles();

    return (
        <div className="container-fluid">
            <div className="skillsub__details mt-3 card shadow">
                <div className="card-header text-center">
                    <h4>
                        Details
                    </h4>
                </div>
                <img className="skillsub__details-bg" alt="Skill details svg background" src="/svg-assets/skill-detail.svg" />
                <List className={classes.root}>
                    <SkillDetailItem
                        heading="Technical Skill"
                        content=".NET Framework, .NET Core, Node.js, React, Redux,
                    jQuery, Entity Framework"
                        icon={
                            <SvgIcon classes={{ root: classes.icon }}>
                                <path d="M13 8.58c.78 0 1.44.61 1.44 1.42s-.66 1.44-1.44 1.44s-1.42-.66-1.42-1.44s.61-1.42 1.42-1.42M13 3c3.88 0 7 3.14 7 7c0 2.8-1.63 5.19-4 6.31V21H9v-3H8c-1.11 0-2-.89-2-2v-3H4.5c-.42 0-.66-.5-.42-.81L6 9.66A7.003 7.003 0 0 1 13 3m3 7c0-.16 0-.25-.06-.39l.89-.66c.05-.04.09-.18.05-.28l-.8-1.36c-.05-.09-.19-.14-.28-.09l-.99.42c-.18-.19-.42-.33-.65-.42L14 6.19c-.03-.14-.08-.19-.22-.19h-1.59c-.1 0-.19.05-.19.19l-.14 1.03c-.23.09-.47.23-.66.42l-1.03-.42c-.09-.05-.17 0-.23.09l-.8 1.36c-.05.14-.05.24.05.28l.84.66c0 .14-.03.28-.03.39c0 .13.03.27.03.41l-.84.65c-.1.05-.1.14-.05.24l.8 1.4c.06.1.14.1.23.1l.99-.43c.23.19.42.29.7.38l.14 1.08c0 .09.09.17.19.17h1.59c.14 0 .19-.08.22-.17l.16-1.08c.23-.09.47-.19.65-.37l.99.42c.09 0 .23 0 .28-.1l.8-1.4c.04-.1 0-.19-.05-.24l-.83-.65V10z" fill="white" />
                            </SvgIcon>
                        }
                    />
                    <Divider variant="inset" component="li" />

                    <SkillDetailItem
                        heading="Programming Languages"
                        content="C#, Java, JavaScript, HTML, CSS, SQL, XML"
                        icon={
                            <i className="fas fa-file-code pl-2 fa-2x"></i>
                        }
                    />
                    <Divider variant="inset" component="li" />

                    <SkillDetailItem
                        heading="Source Control/ Version Control"
                        content="GitHub, Bitbucket"
                        icon={
                            <i className="fas fa-code-branch pl-2 fa-2x"></i>
                        }
                    />
                    <Divider variant="inset" component="li" />

                    <SkillDetailItem
                        heading="Other Skills"
                        content="XML, JSON, Ajax, REST, Design patterns, Software development, Web
                        development, Website optimization, Agile workflow, Software best practices"
                        icon={
                            <i className="fas fa-tasks pl-2 fa-2x"></i>
                        }
                    />
                    <Divider variant="inset" component="li" />

                    <SkillDetailItem
                        heading="Software"
                        content="Microsoft visual studio, Microsoft visual studio code, Eclipse, MS Office (Word,
                            Excel, PowerPoint), MySQL Workbench, Postman"
                        icon={
                            <i class="fas fa-desktop pl-2 fa-2x"></i>
                        }
                    />
                    <Divider variant="inset" component="li" />
                </List>
            </div>
        </div>
    )
}

