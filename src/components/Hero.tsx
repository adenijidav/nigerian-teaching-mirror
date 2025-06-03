
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transforming Education
              <span className="block text-green-400">Across Nigeria</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Join our mission to ensure every child in Nigeria has access to quality education. 
              Together, we're building a brighter future through passionate teaching and innovative programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white group">
                Join Our Fellowship
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 group">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                alt="Students learning"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">500+</div>
                  <div className="text-sm text-blue-100">Fellows</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">50,000+</div>
                  <div className="text-sm text-blue-100">Students Reached</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">200+</div>
                  <div className="text-sm text-blue-100">Schools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
