const BenefitsSection = () => {
    return (
      <div className="py-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid gap-6 md:grid-cols-3 px-4">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Easy Booking</h3>
            <p className="mt-2 text-gray-600">Book tickets in just a few clicks.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Secure Payments</h3>
            <p className="mt-2 text-gray-600">Your transactions are safe with us.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Exclusive Deals</h3>
            <p className="mt-2 text-gray-600">Get the best prices for top events.</p>
          </div>
        </div>
      </div>
    );
  };
  export default BenefitsSection;
  