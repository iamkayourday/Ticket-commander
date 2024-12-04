const Testimonials = () => {
    return (
      <div className="py-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
        <div className="grid gap-6 md:grid-cols-3 px-4">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-gray-600">"Amazing experience, super easy to get tickets!"</p>
            <h3 className="mt-4 text-xl font-semibold">- Alex</h3>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-gray-600">"Great deals and awesome events!"</p>
            <h3 className="mt-4 text-xl font-semibold">- Maria</h3>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-gray-600">"I'll definitely book here again!"</p>
            <h3 className="mt-4 text-xl font-semibold">- John</h3>
          </div>
        </div>
      </div>
    );
  };
  export default Testimonials;
  