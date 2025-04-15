import React from "react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    users: "2 Users",
    storage: "10GB Storage",
    features: [
      "Unlimited Projects & Tasks",
      "Unlimited Contact",
      "Invoicing & Online Payments",
      "Expense Tracking",
      "1 Project Templates",
      "1 Knowledge Base",
    ],
  },
  {
    name: "Team",
    price: "₹1,990",
    users: "8 Users",
    storage: "100GB Storage",
    features: [
      "Client Portal",
      "3 Project Templates",
      "2 Knowledge Base",
      "Task Automation",
      "API and Webhooks",
      "Email Integration",
      "Time Tracking",
      "CRM Automation",
    ],
  },
  {
    name: "Business",
    price: "₹4,990",
    users: "16 Users",
    storage: "500GB Storage",
    features: [
      "Custom Fields",
      "Time Billing",
      "Task Automation",
      "Click & Open Trackin for Email",
      "Telephony Integration",
      "Mailchimp Integration",
      "Advanced Reports",
    ],
    recommended: true,
  },
  {
    name: "Professional",
    price: "₹9,990",
    users: "25 Users",
    storage: "1000GB Storage",
    features: [
      "20 Project Templates",
      "Unlimited Knowledge Base",
      "Change History",
      "Advanced Reports",
      "Custom Logo",
      "Report:Project Cash Flow",
      "Additional Transactions Reports",
      "External User Roles",
      "User Roles",
    ],
  },
  {
    name: "Enterprise",
    price: "₹19,990",
    users: "Unlimited Users",
    storage: "1000GB Storage",
    features: [
      "Formula Fields",
      "Custom Domain",
      "Unlimited External Users",
      "Ip Whitelist",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Pricing</h2>
        <p className="text-gray-600 mt-4 px-4 py-4 text-lg max-w-2xl mx-auto">
          With tools for work management and collaboration all in one place,
          start for free—no credit card required.
        </p>
        <div className="flex justify-center items-center flex-wrap gap-4 w-1/4 bg-white border border-gray-300 rounded-full p-2 py-1 max-w-md mx-auto mt-6">
          <button className="bg-blue-500 hover:shadow-lg transition-shadow duration-300 text-white px-6 py-2 rounded-full font-medium border border-blue-500 hover:bg-blue-600">
            Monthly
          </button>
          <button className="bg-gray-200 hover:shadow-lg transition-shadow duration-300 text-gray-800 px-6 py-2 rounded-full font-medium border border-gray-300 hover:bg-gray-300">
            Yearly
          </button>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 px-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 flex flex-col border border-gray-300 rounded-xl shadow-lg bg-white transition-all hover:shadow-2xl ${plan.recommended ? "border-blue-500 scale-105" : ""
                }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-xs font-bold py-1 px-3 rounded">
                  Recommended
                </div>
              )}
              <div className="flex items-center justify-center mt-4 space-x-2">
                <div className="w-3 h-3 rounded-full border-2 border-blue-500"></div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {plan.name}
                </h3>
              </div>
              <p className="text-center text-gray-700 text-lg mt-2">
                {plan.users}
              </p>
              <p className="text-center text-gray-700">{plan.storage}</p>
              <p className="text-center text-xl font-bold mt-4 text-gray-900">
                {plan.price}/month
              </p>
              <button className="bg-blue-500 text-white w-full py-2 mt-4 rounded-lg font-medium hover:bg-blue-600">
                {plan.name === "Free" ? "Sign Up" : "Start free trial"}
              </button>

              <ul className="mt-6 space-y-3 text-gray-700 text-left flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-green-500 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300">
                Show all features
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default PricingSection;
