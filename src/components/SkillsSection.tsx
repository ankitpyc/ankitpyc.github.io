import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import skillsData from '../../data/skills.json';
import { Skills } from '@/types';

const skills: Skills = skillsData;

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 sm:py-20 animate-fade-in-up">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-foreground">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
        <Card className="hover:shadow-xl transition-shadow duration-300 bg-card border-border animate-fade-in-left">
          <CardHeader className="pb-4">
            <CardTitle className="text-primary text-xl sm:text-2xl">Data Science</CardTitle>
          </CardHeader>
          <CardContent>
            {skills.data_science.map((skill) => (
              <div key={skill.name} className="mb-4 sm:mb-6 group">
                <div className="flex justify-between items-center mb-1 sm:mb-2">
                  <span className="text-base sm:text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-200">{skill.name}</span>
                  <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-primary/80 transition-colors duration-200">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 bg-muted rounded-full [&>*]:bg-primary [&>*]:transition-all [&>*]:duration-500 [&>*]:ease-out" />
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="hover:shadow-xl transition-shadow duration-300 bg-card border-border animate-fade-in-right">
          <CardHeader className="pb-4">
            <CardTitle className="text-primary text-xl sm:text-2xl">Software Development</CardTitle>
          </CardHeader>
          <CardContent>
            {skills.software_development.map((skill) => (
              <div key={skill.name} className="mb-4 sm:mb-6 group">
                <div className="flex justify-between items-center mb-1 sm:mb-2">
                  <span className="text-base sm:text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-200">{skill.name}</span>
                  <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-primary/80 transition-colors duration-200">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 bg-muted rounded-full [&>*]:bg-primary [&>*]:transition-all [&>*]:duration-500 [&>*]:ease-out" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
