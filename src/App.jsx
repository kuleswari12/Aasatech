import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";


import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import ExpertHelp from "./components/ExpertHelp";
import ContactUs from "./components/ContactUs";
import Section from "./components/Section";
import GetInTouch from "./components/GetInTouch";
import EmailSubscription from "./components/EmailSubscription";

const App = () => (
  <div>
    <Navbar />
    <HeroSection />
    <EmailSubscription/>
    

    
    <GetInTouch/>
    <ContactUs />
    <Section/>
    

    
    <PricingSection />
    <ExpertHelp />
    <FAQSection />
    <EmailSubscription/>
    
   <Footer/>
   
   
  </div>
);

export default App;
