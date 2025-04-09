export default function ContactForm() {
    return (
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-md"
        />
        <textarea
          placeholder="Message"
          rows="4"
          className="w-full p-3 border rounded-md"
        ></textarea>
        <button
          type="submit"
          className="bg-green-800 text-white py-2 px-4 rounded-md w-full"
        >
          Send Message
        </button>
      </form>
    );
  }
  