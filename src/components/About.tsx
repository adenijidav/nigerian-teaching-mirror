
import { Users, Target, Heart, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Community",
      description: "Building strong educational communities that support every child's growth and development."
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "Excellence",
      description: "Striving for the highest standards in education and continuously improving our impact."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Passion",
      description: "Driven by deep commitment to educational equity and transformation in Nigeria."
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: "Leadership",
      description: "Developing leaders who will continue to champion educational change long-term."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Teach for Nigeria</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We recruit, train, and support exceptional individuals to teach in high-need schools 
            and become lifelong leaders in the movement to end educational inequity in Nigeria.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-6">
              Teach for Nigeria works to ensure that every child in Nigeria has access to quality education. 
              We believe that education is the most powerful tool for breaking the cycle of poverty and 
              creating opportunities for all children to reach their full potential.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Through our Fellowship program, we place exceptional recent graduates and young professionals 
              in high-need schools across Nigeria, where they serve as full-time teachers for two years.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <p className="text-blue-900 font-semibold">
                "Education is the foundation upon which we build our future. Every child deserves 
                the opportunity to learn, grow, and succeed."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
              alt="Teacher with students"
              className="rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
              alt="Students learning"
              className="rounded-lg shadow-lg mt-8"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
