export default function ContactSectionHeader({ title, subtitle }) {
    return (
      <div className="text-center g-5 mt-20">
        <h4 className="text-sm text-gray-500 tracking-widest">CONTACT US</h4>
        <h2 className="text-2xl font-bold mt-4">{title}</h2>
        <p className="text-gray-600 mt-4">{subtitle}</p>
      </div>
    );
  }
  