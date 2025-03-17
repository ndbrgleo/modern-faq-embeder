
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FAQHeader = () => {
  const navigate = useNavigate();
  
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        Just the FX FAQs
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        Where we share our knowledge about how FX works
      </p>
      <div className="relative max-w-xl mx-auto mb-12">
        <img 
          src="/lovable-uploads/2e98a221-a1dd-4362-8414-46668220da5e.png" 
          alt="FX Analytics Illustration" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button 
          className="bg-just-orange hover:bg-just-darkOrange text-white py-2 px-6 rounded-md transition-all"
          onClick={() => navigate("/demo")}
        >
          Book a demo
        </Button>
        <Button 
          variant="outline" 
          className="border-just-orange text-just-orange hover:bg-just-orange/10 py-2 px-6 rounded-md transition-all"
          onClick={() => navigate("/contact")}
        >
          Contact support
        </Button>
      </div>
    </div>
  );
};

export default FAQHeader;
