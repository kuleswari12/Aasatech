import robot from '../assets/robot.svg';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
// import img7 from '../assets/robot.svg'
import saq from '../assets/saq.png'
import crmimg from '../assets/crm1.svg'
import crmimg2 from '../assets/home1.svg'
import crmimg3 from '../assets/home2.png'
import crmimg4 from '../assets/home3.svg'
import crmimg5 from '../assets/home4.svg'
import g1 from '../assets/g11.svg'
import g2 from '../assets/g12.svg'
import g3 from '../assets/g13.svg'
import g4 from '../assets/g4.svg'
import g5 from '../assets/g15.svg'
import g6 from '../assets/g6.svg'
import crmimg8 from '../assets/g18.svg'
const HeroSection = () => (
  <>
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 bg-blue-50 gap-8">
      <div className="w-full md:w-1/2 text-center md:text-left max-w-xl">
        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold">
          Maximize Growth with the best <span className="text-blue-600">Online CRM</span>
        </h1>
        <p className="text-gray-600 mt-4">
          DSolutions all-in-one CRM empowers you to align your marketing, sales, and support teams.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Get Started Free
        </button>
      </div>

      <div className="w-full md:w-1/2">
        <img
          src={robot}
          alt="CRM Illustration"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>

    <div className="flex flex-col items-center justify-center bg-gray-50 py-12 px-6">
      <div className="bg-white rounded-2xl shadow-2xl  p-4 sm:p-6 w-full max-w-5xl text-center">
        <h2 className="text-lg font-semibold mb-4">See why customers love DSolutions</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <img src={img1} alt="Leader Award" className="h-16" />
          <img src={img2} alt="Front Runners" className="h-16" />
          <img src={img3} alt="High Performer" className="h-16" />
          <img src={img4} alt="Category Leader" className="h-16" />
          <img src={img5} alt="Capterra Shortlist" className="h-16" />
          <img src={img6} alt="Easiest to Do Business With" className="h-16" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-12 max-w-5xl w-full bg-white rounded-2xl shadow-md p-6">
        <div className="md:w-1/2 text-left px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-3 border-l-4 border-blue-500 pl-3">Who are we</h2>
          <p className="text-gray-600 mb-4 text-sm sm:text-base lg:text-lg max-w-prose">
            DSolutions is an AI-powered customer platform with all the software, integrations,
            and resources you need to connect your marketing, sales, and customer service.
            HubSpot's connected platform enables you to grow your business faster by focusing
            on what matters most: your customers.
          </p>
          <p className="text-gray-600 mb-6 text-sm sm:text-base lg:text-lg max-w-prose">
            Get a demo to learn about our premium software, or get started with our full suite
            of free tools and upgrade as you grow.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600">
              Get Demo
            </button>
            <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-blue-100">
              Know more
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative mt-6 md:mt-0 px-4 sm:px-6">
          <img src={saq} alt="Office Team" className="rounded-xl shadow-md w-full h-auto" />
        </div>
      </div>
    </div>

    <div className="w-full px-4 sm:px-8 py-16 bg-blue-50 flex flex-col items-center justify-center">
      <div className="text-center">
        <h3 className="text-2xl sm:text-3xl font-bold">
          CRM that's packed with sales, marketing, and analytics tools
        </h3>
        <p className="text-gray-600 mt-4 font-semibold max-w-4xl mx-auto mb-5">
          DSolutions brings your marketing, sales, and service teams together on the same AI-powered customer platform. It's easy to use, provides value fast, and gives all teams a unified view of the customer at every stage in their journey.
        </p>
      </div>
      <div className="flex items-center justify-center w-full mt-6">
        <img
          src={crmimg}
          alt="CRM Overview"
          className="w-full max-w-3xl h-auto rounded-lg"
        />
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600">
          Get Demo
        </button>
        <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-blue-100">
          Know more
        </button>
      </div>


      <div className="px-0 sm:px-8 py-16 w-full max-w-6xl">
        <div className="space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div>
              <img src={crmimg2} alt="Marketing CRM" className="w-full h-auto rounded-lg" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">
                <span className="text-blue-500 m-2">|</span>MARKETING CRM
              </h3>
              <p className="text-gray-600 mt-4">
                Manage marketing activities across all channels to attract ideal customers...
              </p>
              <span className="text-blue-500 cursor-pointer block mt-2">Learn more →</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="sm:order-1 order-2">
              <h3 className="text-2xl font-semibold">
                <span className="text-blue-500 m-2">|</span>Sales CRM
              </h3>
              <p className="text-gray-600 mt-4">
                Deliver an outstanding sales experience for your potential customers...
              </p>
              <span className="text-blue-500 cursor-pointer block mt-2">Learn more →</span>
            </div>
            <div className="sm:order-2 order-1">
              <img src={crmimg3} alt="Sales CRM" className="w-full h-auto rounded-lg" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div>
              <img src={crmimg4} alt="Help Desk CRM" className="w-full h-auto rounded-lg" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">
                <span className="text-blue-500 m-2">|</span>Help Desk CRM
              </h3>
              <p className="text-gray-600 mt-4">
                Deliver exceptional support by engaging with your customers...
              </p>
              <span className="text-blue-500 cursor-pointer block mt-2">Learn more →</span>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Explore All
          </button>
        </div>
      </div>
    </div>


    <div className="bg-white w-full px-4 sm:px-8 py-16">
      <div className="text-center">
        <h3 className="text-2xl font-semibold">Work from where you are</h3>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          In addition to purely sales and marketing tools, DSolutions features everything your team needs to collaborate and communicate efficiently: chat, video calls and conferencing, file storage, calendar, online documents, mobile sales app, tasks, work time tracking, and more.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="space-y-6">
          {[
            { title: "Help Desk CRM", desc: "View meeting details and get navigation details from within the app." },
            { title: "Take Voice Notes", desc: "Record calls and take notes for review and action at a later time." },
            { title: "Scan Business Cards", desc: "Save time by quickly scanning business cards to capture information directly." },
            { title: "Video Calls and Chat", desc: "Collaborate with your team via secure video and instant messaging tools." }
          ].map((item, index) => (
            <div key={index}>
              <h5 className="text-xl text-blue-500 font-semibold">{item.title}</h5>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div>
          <img
            src={crmimg5}
            alt="Work Anywhere CRM"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>





    <div className="text-center px-4 sm:px-6 lg:px-12 py-16 bg-white">
      <h5 className="text-3xl font-bold">For teams of all sizes</h5>
      <p className="text-lg text-gray-600 mt-2">
        Everyone from start-ups to large enterprises prefer Atlassian
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 bg-white rounded-lg">
        {[g1, g2, g3, g4, g5, g6].map((img, idx) => (
          <img key={idx} src={img} alt={`CRM Logo ${idx + 1}`} className="w-full h-auto object-contain" />
        ))}
      </div>
      <div className="mt-16 sm:px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div>
            <img
              src={crmimg8}
              alt="Help Desk CRM"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-left px-2 sm:px-6">
            <p className="text-xl font-semibold text-gray-800">Large enterprise</p>
            <p className="text-2xl font-bold mt-3 text-gray-900 leading-snug max-w-2xl">
              “By leveraging Jira and Confluence for automated reporting, we’re saving over 800 hours and $500k per year in management consulting costs.”
            </p>
            <div className="mt-4">
              <p className="text-xl font-semibold text-gray-800">Wais Mojaddidi</p>
              <p className="text-lg text-gray-600">Director of Agile Delivery, Global E-commerce, Royal Caribbean</p>
            </div>
          </div>
        </div>
      </div>
    </div>



  </>
);

export default HeroSection;

