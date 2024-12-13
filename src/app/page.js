// src/app/page.js
import HeroTitle from "../components/HeroTitle";
import BackgroundVideo from "../components/BackgroundVideo";

export default function Home() {
  return (
    <div className="min-h-screen">
      <BackgroundVideo />
      <HeroTitle />
    </div>
  );
}
