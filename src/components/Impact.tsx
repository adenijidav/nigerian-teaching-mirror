
import { useEffect, useState } from "react";
import { TrendingUp, Users, School, MapPin } from "lucide-react";

const Impact = () => {
  const [counts, setCounts] = useState({
    fellows: 0,
    students: 0,
    schools: 0,
    states: 0
  });

  const finalCounts = {
    fellows: 500,
    students: 50000,
    schools: 200,
    states: 12
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        fellows: Math.floor(finalCounts.fellows * progress),
        students: Math.floor(finalCounts.students * progress),
        schools: Math.floor(finalCounts.schools * progress),
        states: Math.floor(finalCounts.states * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(finalCounts);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const impactStats = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      count: counts.fellows,
      label: "Fellows Trained",
      suffix: "+"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      count: counts.students,
      label: "Students Reached",
      suffix: "+"
    },
    {
      icon: <School className="h-8 w-8 text-purple-600" />,
      count: counts.schools,
      label: "Partner Schools",
      suffix: "+"
    },
    {
      icon: <MapPin className="h-8 w-8 text-orange-600" />,
      count: counts.states,
      label: "States Covered",
      suffix: ""
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-r from-blue-900 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Measuring success through the lives we've touched and the communities we've transformed 
            across Nigeria's educational landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2">
                {stat.count.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Stories of Transformation</h3>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <p className="text-lg mb-4 text-blue-100">
                  "Through Teach for Nigeria, I discovered my passion for education and leadership. 
                  The experience transformed not just my students' lives, but my own path as well."
                </p>
                <div className="font-semibold">- Amina Ahmed, TFN Fellow 2019</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <p className="text-lg mb-4 text-blue-100">
                  "Our school has seen remarkable improvement in student engagement and academic 
                  performance since partnering with Teach for Nigeria."
                </p>
                <div className="font-semibold">- Principal Okafor, Partner School</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h4 className="text-xl font-semibold mb-3">Academic Achievement</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Reading Proficiency</span>
                  <span className="font-semibold">+45%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full w-[45%]"></div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h4 className="text-xl font-semibold mb-3">Student Engagement</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Attendance Rate</span>
                  <span className="font-semibold">+38%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full w-[38%]"></div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h4 className="text-xl font-semibold mb-3">Math Scores</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Performance Improvement</span>
                  <span className="font-semibold">+52%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-purple-400 h-2 rounded-full w-[52%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
