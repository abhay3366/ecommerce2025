import { FaTruck, FaUndo, FaShieldAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaTruck className="w-10 h-10 text-red-500" />,
      title: "Free Shipping",
      desc: "Enjoy free delivery on all orders above $50.",
    },
    {
      icon: <FaUndo className="w-10 h-10 text-red-500" />,
      title: "Easy Returns",
      desc: "30-day return policy for hassle-free shopping.",
    },
    {
      icon: <FaShieldAlt className="w-10 h-10 text-red-500" />,
      title: "Secure Payment",
      desc: "100% safe and secure checkout guaranteed.",
    },
  ];

  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 cursor-pointer">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-xl transition"
          >
            {item.icon}
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
