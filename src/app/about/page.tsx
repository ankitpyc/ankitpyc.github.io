import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ankit Mishra",
  description: "Learn more about Ankit Mishra's background, skills, and experience as an aspiring Data Scientist and Web Developer.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center my-8 animate-fade-in-down">About Me</h1>
      <div className="max-w-xl sm:max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground space-y-6 animate-fade-in-up px-4">
        <p>
          Hello! I'm Ankit Mishra, an aspiring Data Scientist and Web Developer with a deep passion for technology and innovation. My journey in the tech world is driven by a relentless curiosity to explore various fields and create impactful solutions.
        </p>
        <p>
          I thrive on the challenges of **Web Technology**, constantly digging my hands into modern frameworks and tools to build robust and scalable applications. My interests also extend deeply into the realm of **Machine Learning**, where I enjoy working with *Neural Networks* and **Computer Vision** to extract insights and build intelligent systems.
        </p>
        <p>
          I believe in continuous learning and am always eager to embrace new technologies and methodologies. This portfolio is a reflection of my dedication to crafting elegant and efficient solutions, showcasing my projects, skills, and insights through blog posts.
        </p>
      </div>
    </div>
  );
}
