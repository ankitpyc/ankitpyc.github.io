import Image from "next/image";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <section className="relative flex flex-col items-center justify-center h-[calc(100vh-4rem)] text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/codename.jpg"
            alt="Background"
            fill
            quality={75}
            className="opacity-10 object-cover"
          />
        </div>
        <div className="relative z-10">
          <Image
            src="/images/profile.jpg"
            alt="Ankit Mishra"
            width={160}
            height={160}
            className="rounded-full border-4 border-primary shadow-lg mb-6 aspect-square object-cover animate-fade-in-down"
          />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight leading-tight animate-fade-in-left">
            Ankit Mishra
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mt-4 font-light animate-fade-in-right">
            Aspiring Data Scientist and Web Developer
          </p>
        </div>
      </section>

      <section id="about" className="py-20 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hi there !! I am Ankit. I am passionate About technology with my intrests revolving around various feilds. I love Web Technology with digging my hands into machine learning, Neural Networks and Computer Vision.
          </p>
        </div>
      </section>

      <SkillsSection />
    </div>
  );
}
