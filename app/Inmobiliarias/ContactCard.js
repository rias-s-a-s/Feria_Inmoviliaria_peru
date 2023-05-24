const ContactCard = ({ name, phone, email, address, logo, numProperties }) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="px-6 py-4">
        <div className="flex items-center justify-center mb-4">
          <img src={logo} alt="Logo" className="w-16 h-16 rounded-full" />
        </div>
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Phone: {phone}</p>
        <p className="text-gray-700 text-base">Email: {email}</p>
        <p className="text-gray-700 text-base">Address: {address}</p>
        <p className="text-gray-700 text-base">
          Number of Properties: {numProperties}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
