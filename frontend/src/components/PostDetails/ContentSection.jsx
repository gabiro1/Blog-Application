const ContentSection = ({ title, content, imageUrl }) => (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover rounded-lg my-4" />
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </section>
  );
  
  export default ContentSection;
  