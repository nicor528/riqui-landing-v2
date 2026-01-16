import RiquiTechNavBar from "components/Navbars/riquitech-navbar";
import AutomationBots from "components/landing/AutomationBots";
import RiquiFooter from "components/Footers/RiquiFooter.jsx";
import ImplementationOffer from "components/landing/ImplementationOffer";
import LandingPageHeader2 from "../../components/landing/LandingPageHeader2";

export default function Automation() {
    return(
        <>
            <RiquiTechNavBar />
            <LandingPageHeader2/>
            <AutomationBots />
            <ImplementationOffer />
            <RiquiFooter />
        </>
    )
}