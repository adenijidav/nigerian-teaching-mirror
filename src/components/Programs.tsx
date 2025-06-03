
import { GraduationCap, Users, BookOpen, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const Programs = () => {
  const programs = [
    {
      icon: <GraduationCap className="h-12 w-12 text-blue-600" />,
      title: "Fellowship Program",
      description: "Our flagship two-year teaching fellowship places exceptional graduates in high-need schools across Nigeria.",
      features: ["2-year commitment", "Training & support", "Leadership development", "Alumni network"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: "Leadership Development",
      description: "Comprehensive training program that develops teaching excellence and leadership skills.",
      features: ["5-week institute", "Ongoing coaching", "Professional development", "Mentorship"],
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-purple-600" />,
      title: "Alumni Network",
      description: "Connecting our growing network of alumni who continue to champion educational equity.",
      features: ["Career opportunities", "Continued advocacy", "Professional network", "Impact scaling"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-orange-600" />,
      title: "Innovation Lab",
      description: "Developing innovative solutions to address systemic challenges in Nigerian education.",
      features: ["Research projects", "Policy advocacy", "Technology integration", "Scalable solutions"],
      color: "bg-orange-50 border-orange-200"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to create lasting change in Nigerian education through 
            exceptional teaching, leadership development, and systemic innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <div key={index} className={`p-8 rounded-lg border-2 ${program.color} hover:shadow-lg transition-shadow`}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {program.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-700 mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Join our community of changemakers who are transforming education across Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Apply for Fellowship
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
