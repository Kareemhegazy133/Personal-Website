import { RedLine, SectionContainer } from "../../App.styles";
import { AboutMeText, AboutMeTitle} from "./AboutMe.styles";

function AboutMe() {

    return(
        <SectionContainer id="about-me" sx={{ mb: '150px'}}>
            <AboutMeTitle variant="h6">
                About Me
            </AboutMeTitle>
            <RedLine style={{ marginBottom: '25px', width: '240px'}}/>
            <AboutMeText>
                I am a website designer from Lousiana, with a strong focus in UI/UX design.
                I love to get new experiences and always learn from my surroundings.
                I've done more than 285 projects. You can check it through portfolio section on this website.
                I looking forward to any opportunities and challenges.
            </AboutMeText>
        </SectionContainer>
        
    );
}

export default AboutMe;