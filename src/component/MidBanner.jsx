const MidBanner = () => {
  return (
    <div className="w-full flex justify-center py-10">
      <div
        className="relative w-[90%] md:w-[70%] h-[400px] bg-center bg-cover rounded-2xl shadow-2xl overflow-hidden"
        style={{ backgroundImage: "url('https://picsum.photos/1200/600?random=1')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
            Mega Sale is Live!
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-xl">
            Up to 70% off on your favorite products. Limited time offer!
          </p>
          <button className="mt-6 cursor-pointer px-6 py-3 bg-red-500 hover:bg-red-600 rounded-full shadow-lg transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
