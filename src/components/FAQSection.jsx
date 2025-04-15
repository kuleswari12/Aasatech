const FAQSection = () => (
  <>
    <section className="max-w-5xl mx-auto py-16 px-6">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Got Questions?</h2>
        <p className="text-gray-600 mt-2">
          You’ll find answers in our knowledge base, or reach out via live chat.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "Is there a discount on Annual plans?",
          "Can I have a trial?",
          "Is the 'free forever' plan really free?",
          "What plan should I choose?",
          "Do you offer any discount?",
          "What's the difference between annual and monthly billing?",
          "Can I change my plan?",
          "How can I manage my billing?",
          "How do I cancel the automatic subscription renewal option?",
          "How can I get assistance with my project implementation?",
        ].map((question, index) => (
          <details
            key={index}
            className="border rounded-md bg-white shadow hover:shadow-lg transition-shadow duration-300 p-4"
          >
            <summary className="cursor-pointer font-medium flex justify-between items-center">
              <span>{question}</span>
              <svg
                className="w-5 h-5 transform transition-transform duration-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="text-gray-600 mt-3 text-sm">
              This is a placeholder answer. You can replace this text with a real answer to the question.
            </p>
          </details>
        ))}
      </div>
    </section>


  </>
);

export default FAQSection;
