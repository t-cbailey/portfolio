import "../styling/projects.css";
import React from "react";
import { getFile, getProjects } from "../../Utils/utils";
import { ProjectProps, ProjectRes } from "../../types/CustomTypes";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Projects({ setCurrentPage }: ProjectProps) {
  const [projects, setProjects] = React.useState<ProjectRes[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [loadErr, setLoadErr] = React.useState(false);

  React.useEffect(() => {
    setCurrentPage("Projects");
  });

  React.useEffect(() => {
    setLoading(true);
    getProjects()
      .then((res) => {
        if (res.data && res.data.data) {
          const projArr = res.data.data;
          return projArr;
        } else {
          setLoadErr(true);
          return [];
        }
      })
      .then((projArr) => {
        return Promise.all(
          projArr.map((proj: ProjectRes) => {
            return Promise.all([
              getFile(proj.imgURLwebm),
              getFile(proj.imgURLmp4),
            ]).then((urls) => {
              if (urls[0]) {
                proj.imgURLwebm = urls[0];
              }
              if (urls[1]) {
                proj.imgURLmp4 = urls[1];
              }
              return proj;
            });
          })
        );
      })
      .then((projArr) => {
        setProjects(projArr);
        setLoading(false);
      });
  }, []);

  if (loadErr) {
    return <h3 className="error">Error- reload the page and try again.</h3>;
  }
  if (loading) {
    return <h3 className="loading">Loading...</h3>;
  } else if (projects.length < 1) {
    return <h3 className="error">No projects</h3>;
  } else
    return (
      <>
        <h3 id="projectTitle">select a project...</h3>
        <div id="carouselContainer">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={true}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 10,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {projects.map((project: ProjectRes) => {
              return (
                <div className="projectContainer" key={project.id}>
                  <Link key={project.id} to={project.id}>
                    <video autoPlay loop muted playsInline key={project.id}>
                      <source src={project.imgURLwebm} type="video/webm" />
                      <source src={project.imgURLmp4} type="video/mp4" />
                    </video>
                    <h3 className="projectName"> {project.name}</h3>
                  </Link>
                </div>
              );
            })}
          </Carousel>
        </div>
      </>
    );
}

export default Projects;
