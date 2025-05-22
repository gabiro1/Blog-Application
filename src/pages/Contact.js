import Footer from "../components/Footer/Footer";
import ContactSectionHeader from "../components/Contact/ContactSectionHeader";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";

export default function Contact() {
  return (
    <div>
      <ContactSectionHeader
        title="Let’s Start a Conversation"
        subtitle="Reach out to us for any inquiries, collaborations, or tech discussions!"
      />
      <div className="max-w-3xl mx-auto p-4">
        <ContactInfo />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
