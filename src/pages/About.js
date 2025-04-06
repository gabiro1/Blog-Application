import Footer from "../components/Footer";
import HeroSection from "../components/about/HeroSection";
import StatsSection from "../components/about/StatsSection";
import MissionVisionSection from "../components/about/MissionVisionSection";
import TeamSection from "../components/about/TeamSection";
import BlogStartSection from "../components/about/BlogStartSection";
import AuthorsSection from "../components/about/AuthorsSection";
import JoinTeamSection from "../components/about/JoinTeamSection";

export default function About() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <MissionVisionSection />
      <TeamSection />
      <BlogStartSection />
      <AuthorsSection />
      <JoinTeamSection />
      <Footer />
    </div>
  );
}
