import React from "react";
//import { useNavigate } from "react-router-dom";
import PageHeaderContent from "../../Components/pageHeaderContent";
//import { BsInfoCircleFill } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { data } from "./utils";
//import { MdWork } from "react-icons/md";
import "react-vertical-timeline-component/style.min.css";
import { Animate } from "react-simple-animate";
import './styles.scss';
import { DiNodejsSmall } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiBukalapak } from "react-icons/si";


const Resume=()=>{

        //const navigate = useNavigate();
    
        const handleNavigatetoContact=()=>{
            window.location.href = "https://drive.google.com/file/d/1oWEqR7VwaC9Xy8ergatFj-zW3ifzo59m/view?usp=sharing";
        }
    return(
        <section id="resume" className="resume">
            <PageHeaderContent headerText = "My Resume" icon={<SiBukalapak size={40}/>}/>
            <div className="timeline">
                <div className="timeline__projects">
                    <h3 className="timeline__projects__header-text">
                        Projects
                    </h3>
                    <VerticalTimeline

                    layout={"1-column"}
                    lineColor="var(--yellow-theme-main-color)"
                    >
                        {
                            data.Projects.map((item,i)=>(
                                <VerticalTimelineElement
                                key={i}
                                className="timeline__projects__vertical-timeline-element"
                                contentStyle={{
                                    background:'none',
                                    color:"var(--yellow-theme-sub-text-color)",
                                    border:"1.5px solid var(--yellow-theme-main-color)",
                                }}

                                // date="2023 - 2024"
                                icon={<DiNodejsSmall/>}
                                iconStyle={{
                                    background:"#181818",
                                    color:'var(--yellow-theme-main-color)',
                                }}
                                >

                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3>
                                            {item.title}
                                        </h3>

                                        {/* <h4>
                                            {
                                                item.subTitle
                                            }
                                        </h4> */}
                                        
                                        
                                    </div>
                                    <h4 style={{fontSize:"13px",marginTop:"4px"}}>
                                            {
                                                item.subTitle
                                            }
                                        </h4>
                                    <p className="vertical-timeline-element-title-wrapper-description">{item.address}</p>
                                    <p style={{fontSize:"12px",marginTop:"4px"}}>{item.cgpa}</p>
                                    <p style={{fontSize:"12px"}}>{item.date}</p>
                                </VerticalTimelineElement>
                            ))
                        }

                    </VerticalTimeline>
                </div>
                {/* <div><button>Resume</button></div> */}
                <div className="timeline__education">
                    <h3 className="timeline__education__header-text">
                        Education
                    </h3>
                    <VerticalTimeline

                    layout={"1-column"}
                    lineColor="var(--yellow-theme-main-color)"
                    >
                    {
                            data.Education.map((item,i)=>(
                                <VerticalTimelineElement
                                key={i}
                                className="timeline__projects__vertical-timeline-element"
                                contentStyle={{
                                    background:'none',
                                    color:"var(--yellow-theme-sub-text-color)",
                                    border:"1.5px solid var(--yellow-theme-main-color)",
                                }}
                                icon={<DiMongodb/>}
                                iconStyle={{
                                    background:"#181818",
                                    color:'var(--yellow-theme-main-color)',
                                }}
                                >

                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3>
                                            {item.title}
                                        </h3>

                                        {/* <h4>
                                            {
                                                item.subTitle
                                            }
                                        </h4> */}
                                        
                                        
                                    </div>
                                    <h4 style={{fontSize:"15px",marginTop:"5px"}}>
                                            {
                                                item.subTitle
                                            }
                                        </h4>
                                    <p className="vertical-timeline-element-title-wrapper-description" style={{fontSize:"12px"}}>{item.address}</p>
                                    <p style={{fontSize:"12px",marginBottom:"2px"}}>{item.cgpa}</p>
                                    <p style={{fontSize:"12px"}}>{item.date}</p>
                                </VerticalTimelineElement>
                            ))
                        }
                        </VerticalTimeline>
                </div>
            </div>
            <Animate 
            play
            duration={1.1}
            delay={0.1}
            start={{
                transform :'translateY(550px)',
            }}
            end={{
                transform:'translatex(0px)',
            }}
            >

            <div className="home__contact-me">
                <button onClick={handleNavigatetoContact}>Resume</button>
            </div>
            </Animate>
        </section>
    )
}

export default Resume;