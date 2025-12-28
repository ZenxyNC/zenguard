import Navbar from "../navbar/navbar"
import "./download.css"

import GradientBubble from "../landing/components/gradientBubble/gradientBubble"
import LogoLoop from "./components/logoloop/logoloop";
import { SiReact, SiJavascript, SiPython, SiNodedotjs } from 'react-icons/si';
import LandingButton from "../landing/components/landingButton/landingButton";
import AnimatedContent from "./components/popupanim/popupanim";

export default function Download() {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://javascript.com" },
    { node: <SiNodedotjs />, title: "NodeJS", href: "https://nodejs.org" },
    { node: <SiPython />, title: "Python", href: "https://python.org" },
  ];
  return (
    <>
      <Navbar />
      <div id="download-mainbody">
        <GradientBubble
          className={"download-bubble-upper"}
        />
        <GradientBubble
          className={"download-bubble-lower"}
        />
        <div id="landing-dotted"/>

        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.3}
          id="download-box-wrapper"
        >
          <div id="download-box">
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={40}
              hoverSpeed={5}
              scaleOnHover
              fadeOut={false}
              fadeOutColor="var(--background2)"
            />
            <div id="downloadbox-content">
              Get <span className="gradient">ZenGuard</span>,<br/>
              Get <span className="gradient">Protected</span>.<br />
              <div id="downloadbox-buttons">
                <LandingButton
                  navigation=""
                  className={"download-button"}
                  downloadurl="https://github.com/ZenxyNC/zenguard/archive/refs/tags/v2.0.0.zip"
                >
                  Download
                </LandingButton>
                <LandingButton 
                  className={"docs-button download-button"}
                  navigation="https://zenxync.github.io/zendocs/docs/zenguard"
                >
                  Learn More
                </LandingButton>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </>
  )
}