const HeroSection = () => {
    return (
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-6 text-center"
        style={{ backgroundImage: "url('LionKingSU2019JP_08247_RT_Sm.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div> {/* Overlay */}
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold">Experience the Best Live Shows!</h1>
          <p className="mt-4 text-lg md:text-xl italic">"Where every moment becomes a memory"</p>
          <button className="mt-6 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-lg">
            Get Tickets Now
          </button>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  