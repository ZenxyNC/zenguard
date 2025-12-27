import Navbar from "../navbar/navbar";
import Aurora from "./aurora/aurora";
import "./landing.css";
import "./landing-body.css";
import { ContainerLarge, ContainerSmall } from "./components/containerbox/containerbox";
import { ContainerContent, ContainerDate, ContainerTitle } from "./components/containerComponents/containerComponents";
import LandingButton from "./components/landingButton/landingButton";
import GradientBubble from "./components/gradientBubble/gradientBubble";
import Footer from "./components/footer/footer";

export default function Landing() {
  return (
    <>
      <div id="landing-mainbody">
        <div id="landing-dotted" />
        <Navbar />
        <Aurora
          colorStops={["#0422e0", "#007aff", "#b19eef"]}
          blend={0.4}
          amplitude={1.3}
          speed={0.6}
        />
        <div id="landing-headerText">
          <p>
            ======================================= :: .CREATE <span>ZenGuard</span> for JS; PY; NJS; RJS, ZenTech. ;Local String, Mapped: [HashMap] :: CODE_NAME: <span>ZenGuard</span>; :: BUILD_STAGE: RELEASE :: HASH_API: ZENGUARD:process.env.PORT HashMap:OK; HashProcessor:OK; EXT_Login:OK; BLID:06 prg ZENTECH:XXXXXXXXXXXXXXXX IBFL:2D SIKA:00 SRNM:[XXXXXXXXXX] :: .isProtected ~ TRUE -/
          </p>
        </div>
        <div id="landing-content">
          <h1 id="landing-title">
            ZenGuard
          </h1>
          <p id="landing-description">
            ZenGuard, ZenEcosystem main security protocol. Explore the latest security technology and secure your information seamlessly with ZenGuard. Being protected in seamless by ZenGuard.
          </p>
          <LandingButton>
            Explore
          </LandingButton>
        </div>
      </div>
      <div id="landing-body">
        <ContainerLarge isParent={false}>
          <ContainerTitle>Latest From Us</ContainerTitle>
          <ContainerDate>March 09, 2025</ContainerDate>
          <ContainerContent>
            The newest version of ZenGuard just released. In this version (1.3.3.1-RELEASE) we bring a lot of improvement.<br/>
            <br/>
            First thing first, we’ve updated the ZenGuard security. This security update will not let you use old, unsecure, and unoriginal ZenGuard version. So, don’t forget to update your ZenGuard and make sure you use the original one.<br/>
            <br/>
            Also, we bring some improvement to developer experience. We added return value response for easier debugging and management. Not just that, ZenGuard is now easier to use. One command doing all the function!
          </ContainerContent>
        </ContainerLarge>

        <ContainerLarge isParent={false}>
          <ContainerTitle>Our Mission</ContainerTitle>
          <ContainerContent className={"ourMission-content"}>
            ZenGuard main purpose is to be ZenEcosystem security system. It’s applied everywhere, in every ZenApps.<br/>
            <br/>
            ZenGuard also has public program, allowing everyone to apply ZenGuard in their programs, through “ZenGuard For Developer”.<br/>
            <br/>
            Need to mention, for security reason, ZenGuard For Developer and the one used in ZenEcosystem has different algorithm, but it works the same.
          </ContainerContent>
          <img src="/resources/icons/ZenGuard_blur.png" alt="" id="ourMission-img"/>
        </ContainerLarge>

        <ContainerLarge 
          isParent={true}
          >
          <ContainerSmall>
            <ContainerTitle>ZenGuard For Developer</ContainerTitle>
            <ContainerContent>
              Use ZenGuard as your security protocol. Seamless protection along with great experience and performance.
            </ContainerContent>
            <LandingButton 
              className={"ourMission-button"}
              navigation="/zenguard-for-developer"
            >
              Get Started
            </LandingButton>
            <GradientBubble
              color="#007AFF"
              opacity={0.9}
              posX="-50%"
              posY="-20%"
            />
            <GradientBubble
              color="#4E22E0"
              opacity={0.9}
              posX="140%"
              posY="-150%"
            />
          </ContainerSmall>

          <ContainerSmall>
            <ContainerTitle>ZenGuard Docs</ContainerTitle>
            <ContainerContent>
              Read ZenGuard full documentations in ZenDocs.
            </ContainerContent>
            <LandingButton 
              className={"docs-button"}
              navigation=""
            >
              Learn More
            </LandingButton>
            <GradientBubble
              color="#007AFF"
              opacity={0.9}
              posX="120%"
              posY="0%"
            />
          </ContainerSmall>
        </ContainerLarge>
        <Footer />
      </div>
    </>
  )
}