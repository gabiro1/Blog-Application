export default function ContactInfo() {
    return (
      <div className="bg-gray-900 text-white grid grid-cols-1 md:grid-cols-2 p-6 rounded-md mb-6 mt-10">
        <div>
          <h4 className="font-bold mb-2">Working hours</h4>
          <p className="text-sm">Monday To Friday</p>
          <p className="text-sm font-semibold">9:00 AM to 8:00 PM</p>
          <p className="text-xs mt-1 text-gray-400">Our Support Team is available 24/7</p>
        </div>
        <div className="mt-4 md:mt-0">
          <h4 className="font-bold mb-2">Contact Us</h4>
          <p className="text-sm">0788893421</p>
          <p className="text-sm">info@xof.rw</p>
        </div>
      </div>
    );
  }
  