import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  const projects = [
    {
      title: "Instagram Growth",
      category: "Social Media Management",
      tools: "Content Strategy, Analytics, Engagement",
      image: "/images/work_instagram.png",
      link: "https://www.instagram.com",
    },
    {
      title: "Brand Strategy",
      category: "Brand Management",
      tools: "Brand Identity, Positioning, Storytelling",
      image: "/images/work_brand.png",
      link: "https://www.instagram.com",
    },
    {
      title: "Influencer Marketing",
      category: "Influencer Campaigns",
      tools: "Outreach, Campaign Planning, ROI Tracking",
      image: "/images/work_influencer.png",
      link: "https://www.instagram.com",
    },
    {
      title: "Content Creator",
      category: "Content Creation",
      tools: "Copywriting, Visual Design, Scheduling",
      image: "/images/work_content_creator.png",
      link: "https://www.instagram.com",
    },
    {
      title: "Digital Marketing",
      category: "Digital Campaigns",
      tools: "SEO, Paid Ads, Email Marketing",
      image: "/images/work_digital_marketing.png",
      link: "https://www.instagram.com",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
