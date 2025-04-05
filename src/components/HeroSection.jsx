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
    <div className="flex items-center justify-between px-8 py-16 bg-blue-50">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold">
          Maximize Growth with the best <span className="text-blue-600">Online CRM</span>
        </h1>
        <p className="text-gray-600 mt-4">
          DSolutions all-in-one CRM empowers you to align your marketing, sales, and support teams.
        </p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">Get Started Free</button>
      </div>
      <div>
        <img
          src={robot}
          alt=" Image"
          className="w-full h-auto rounded-lg "
        />
      </div>
    </div>

    <div className="flex flex-col items-center justify-center bg-gray-50 py-12 px-6">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-5xl text-center">
        <h2 className="text-lg font-semibold mb-4">See why customers love DSolutions</h2>
        <div className="flex justify-center space-x-6">
          <img src={img1} alt="Leader Award" className="h-16" />
          <img src={img2} alt="Front Runners" className="h-16" />
          <img src={img3} alt="High Performer" className="h-16" />
          <img src={img4} alt="Category Leader" className="h-16" />
          <img src={img5} alt="Capterra Shortlist" className="h-16" />
          <img src={img6} alt="Easiest to Do Business With" className="h-16" />
        </div>
      </div>


      <div className="flex flex-col md:flex-row items-center mt-12 max-w-5xl w-full bg-white rounded-2xl shadow-md p-6">

        <div className="md:w-1/2 text-left px-6">
          <h2 className="text-2xl font-bold mb-3 border-l-4 border-blue-500 pl-3">Who are we</h2>
          <p className="text-gray-600 mb-4">
            DSolutions is an AI-powered customer platform with all the software, integrations,
            and resources you need to connect your marketing, sales, and customer service.
            HubSpot's connected platform enables you to grow your business faster by focusing
            on what matters most: your customers.
          </p>
          <p className="text-gray-600 mb-6">
            Get a demo to learn about our premium software, or get started with our full suite
            of free tools and upgrade as you grow.
          </p>


          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600">
              Get Demo
            </button>
            <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-blue-100">
              Know more
            </button>
          </div>
        </div>


        <div className="md:w-1/2 relative mt-6 md:mt-0">
          <img
            src={saq}
            alt="Office Team"
            className="rounded-xl shadow-md"
          />

        </div>
      </div>
    </div>


    <div className="w-full px-8 py-16 bg-blue-50 items-center justify-center">
      <div>
        <h3 className="text-2xl sm:text-3xl  text-center font-bold">CRM that's packed with sales, marketing, and analytics tools</h3>
        <p className="text-gray-600 mt-4 text-center font-semibold mr-96 ml-96 mb-5 ">
          DSolutions brings your marketing, sales, and service teams together on the same AI-powered customer platform. It's easy to use, provides value fast, and gives all teams a unified view of the customer at every stage in their journey. Each product in the platform is powerful on its own, but the real magic happens when you use them together.
        </p>
      </div>
      <div className='flex items-center justify-center'>
        <img
          src={crmimg}
          alt="Image"
          className=" h-auto rounded-lg items-center justify-between"
        />
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600">
          Get Demo
        </button>
        <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-blue-100">
          Know more
        </button>
      </div>


      <div className="px-8 py-16">
        <div className="mt-6 grid grid-cols-1  sm:grid-cols-2 gap-6">
          <div>
            <img
              src={crmimg2}
              alt="Marketing CRM"
              className=" h-auto rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold"><span className="text-blue-600 cursor-pointer m-2">|</span>MARKETING CRM</h3>
            <p className="text-gray-600 mt-4">
              Manage marketing activities across all channels to attract ideal customers. With One View you get marketing and sales aligned on a common view of the customer. Maximize ROI on your lead generation campaigns. Leverage powerful social and email marketing capabilities to engage prospects.
            </p> <span className="text-blue-600 cursor-pointer">Learn more →</span>

          </div>
        </div>


        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-semibold"><span className="text-blue-600 cursor-pointer m-2">|</span>Sales CRM</h3>
            <p className="text-gray-600 mt-4">
              Deliver an outstanding sales experience for your potential customers with advanced lead routing, segmentation, and integrations with tools your sales teams already use. Build playbooks and track progress along the entire timeline with advanced automation and artificial intelligence-driven insights.
            </p><span className="text-blue-600 cursor-pointer">Learn more →</span>

          </div>
          <div>
            <img
              src={crmimg3}
              alt="Sales CRM"
              className=" h-auto rounded-lg"
            />
          </div>
        </div>


        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <img
              src={crmimg4}
              alt="Help Desk CRM"
              className=" h-auto rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl  font-semibold"><span className="text-blue-600 cursor-pointer m-2">|</span>Help Desk CRM</h3>
            <p className="text-gray-600 mt-4">
              Deliver exceptional support by engaging with your customers across multiple channels. With One View, support teams get a complete view of all transactions the customer has had with the organization. Empower your support team to drive customer delight and close tickets faster.
            </p> <span className="text-blue-600 cursor-pointer">Learn more →</span>

          </div>
          <div>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">
              Explore All
            </button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="mt-6">
        <h3 className="text-2xl  text-center font-semibold">Work from where you are</h3>
        <p className="text-gray-600  text-center mt-4">
          In addition to purely sales and marketing tools, DSolutions features everything your team needs to collaborate and communicate efficiently: chat, video calls and conferencing, file storage, calendar, online documents, mobile sales app, tasks, work time tracking, and more.
        </p>
      </div>
      <div className="px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          <div className="space-y-6">
            <div>
              <h5 className="text-2xl text-blue font-semibold">Help Desk CRM</h5>
              <p className="text-gray-600">View meeting details and get navigation details from within the app.</p>
            </div>
            <div>
              <h5 className="text-2xl text-blue font-semibold">Take Voice Notes</h5>
              <p className="text-gray-600">Record calls and take notes for review and action at a later time.</p>
            </div>
            <div>
              <h5 className="text-2xl text-blue font-semibold">Scan Business Cards</h5>
              <p className="text-gray-600">Save time by quickly scanning business cards to capture information directly.</p>
            </div>
            <div>
              <h5 className="text-2xl  text-blue font-semibold">Video Calls and Chat</h5>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur. Dolor pharetra senectus rutrum ultricies sapien.</p>
            </div>
          </div>

          <div>
            <img
              src={crmimg5}
              alt="Help Desk CRM"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>



    {/* <div className="text-center m-5">
        <h5 className="text-3xl font-bold">For teams of all sizes</h5>
        <p className="text-lg text-gray-600">Everyone from start-ups to large enterprises prefer Atlassian</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 shadow-2xl hover:shadow-2xl transition-shadow duration-300 m-30">
        <img src={g1} alt="CRM Image" className="w-full h-auto rounded-lg" />
        <img src={g2} alt="CRM Image" className="w-full h-auto rounded-lg" />
        <img src={g3} alt="CRM Image" className="w-full h-auto rounded-lg" />
        <img src={g4} alt="CRM Image" className="w-full h-auto rounded-lg" />
        <img src={g5} alt="CRM Image" className="w-full h-auto rounded-lg" />
        <img src={g6} alt="CRM Image" className="w-full h-auto rounded-lg" />
      </div>
      <div className=" sm:px-0 lg:px-0">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <img src={crmimg8} alt="Help Desk CRM" className="h-auto rounded-lg shadow-lg" />
    
    <div className="mr-0 flex flex-col justify-center">
      <p className="text-xl font-semibold">Large enterprise</p>
      <p className="text-2xl font-bold mt-2">
        “By leveraging Jira and Confluence for automated reporting, we’re saving over 800 hours and $500k per year in management consulting costs.”
      </p>
      <p className="text-xl font-semibold mt-4">Wais Mojaddidi</p>
      <p className="text-lg">Director of Agile Delivery, Global E-commerce, Royal Caribbean</p>
    </div>
  </div>
  </div>
      </div> */}
    <div className="text-center m-5">
      <h5 className="text-3xl font-bold">For teams of all sizes</h5>
      <p className="text-lg text-gray-600">Everyone from start-ups to large enterprises prefer Atlassian</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img src={g1} alt="CRM Image" className="w-full h-auto rounded-lg" />
        <img src={g2} alt="CRM Image" className="w-full h-auto rounded-lg" />
        <img src={g3} alt="CRM Image" className="w-full h-auto rounded-lg" />
        <img src={g4} alt="CRM Image" className="w-full h-auto rounded-lg" />
        <img src={g5} alt="CRM Image" className="w-full h-auto rounded-lg" />
        <img src={g6} alt="CRM Image" className="w-full h-auto rounded-lg" />
      </div>
      <div className="sm:px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          <img src={crmimg8} alt="Help Desk CRM" className="h-auto rounded-lg shadow-lg" />
          <div className="text-left">
            <p className="text-xl font-semibold">Large enterprise</p>
            <p className="text-2xl font-bold mt-2">
              “By leveraging Jira and Confluence for automated reporting, we’re saving over 800 hours and $500k per year in management consulting costs.”
            </p>
            <p className="text-xl font-semibold mt-4">Wais Mojaddidi</p>
            <p className="text-lg">Director of Agile Delivery, Global E-commerce, Royal Caribbean</p>
          </div>
        </div>
      </div>
    </div>


  </>
);

export default HeroSection;

