export default function StatsSection() {
    const stats = [
      { number: '12+', label: 'Blogs Published' },
      { number: '18K+', label: 'Views' },
      { number: '30K+', label: 'Total active Users' },
    ];
  
    return (
      <section className="bg-gray-900 text-white py-8">
        <div className="flex justify-center gap-12 max-w-4xl mx-auto">
          {stats.map(({ number, label }, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl font-bold">{number}</h3>
              <p className="text-sm text-gray-300">{label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  