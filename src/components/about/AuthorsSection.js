const authors = [
    { name: "Floyd Miles", role: "Content Writer", image: "/authors/floyd.jpg" },
    { name: "Dianne Russell", role: "Content Writer", image: "/authors/dianne.jpg" },
    { name: "Jenny Wilson", role: "Content Writer", image: "/authors/jenny.jpg" },
    { name: "Leslie Alexander", role: "Content Writer", image: "/authors/leslie.jpg" },
    { name: "Guy Hawkins", role: "Content Writer", image: "/authors/guy.jpg" },
    { name: "Eleanor Pena", role: "Content Writer", image: "/authors/eleanor.jpg" },
    { name: "Robert Fox", role: "Content Writer", image: "/authors/robert.jpg" },
    { name: "Jacob Jones", role: "Content Writer", image: "/authors/jacob.jpg" },
  ];
  
  export default function AuthorsSection() {
    return (
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h3 className="text-center font-bold text-2xl mb-10">List of Authors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {authors.map((author, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
              <img src={author.image} alt={author.name} className="w-20 h-20 mx-auto rounded-full mb-4" />
              <h4 className="font-semibold">{author.name}</h4>
              <p className="text-sm text-gray-500">{author.role} @Company</p>
              <div className="mt-2 flex justify-center gap-2 text-sm text-gray-600">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  