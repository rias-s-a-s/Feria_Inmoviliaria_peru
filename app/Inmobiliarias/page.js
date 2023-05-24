import ContactCard from "./ContactCard";

const Inmobiliarias = () => {
  const contactData = [
    {
      name: "Inmobiliaria 1",
      phone: "123-456-7890",
      email: "info@inmobiliaria1.com",
      address: "Calle Principal 123, Ciudad",
      logo: "/puesta-sol.jpg",
      numProperties: 10,
    },
    {
      name: "Inmobiliaria 2",
      phone: "987-654-3210",
      email: "info@inmobiliaria2.com",
      address: "Avenida Central 456, Ciudad",
      logo: "/puesta-sol.jpg",
      numProperties: 5,
    },
  ];
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Information</h1>
      <div className="grid grid-cols-2 gap-4">
        {contactData.map((contact, index) => (
          <ContactCard key={index} {...contact} />
        ))}
      </div>
    </div>
  );
};

export default Inmobiliarias;
