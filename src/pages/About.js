import Footer from "../components/UI/Footer";
import HeroSection from "../components/about/HeroSection";
import StatsSection from "../components/about/StatsSection";
import MissionVisionSection from "../components/about/MissionVisionSection";
import TeamSection from "../components/about/TeamSection";
import BlogStartSection from "../components/about/BlogStartSection";
import JoinTeamSection from "../components/about/JoinTeamSection";
import Authors from "../components/Authors";

export default function About() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <MissionVisionSection />
      <TeamSection />
      <BlogStartSection />
      <Authors/>
      <JoinTeamSection />
      <Footer />
    </div>
  );
}
