export default function ContactSectionHeader({ title, subtitle }) {
    return (
      <div className="text-center mt-12">
        <h4 className="text-sm text-gray-500 tracking-widest">CONTACT US</h4>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-2">{subtitle}</p>
      </div>
    );
  }
  