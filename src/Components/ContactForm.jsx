import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <form action="/message" className="bg-card py-6 px-4 rounded shadow">
      <h2 className="text-2xl font-semibold text-center mb-2 mt-4">
        Send a Message
      </h2>
      <div className="form-control py-4 flex flex-col gap-2">
        <label htmlFor="name" className="text-muted form-label">
          Your name
        </label>
        <input
          type="text"
          className="form-control placeholder:text-muted/50 border p-2 rounded focus:outline-0 focus:shadow"
          id="name"
          placeholder="John Doe"
        />
      </div>
      <div className="form-control py-4 flex flex-col gap-2">
        <label htmlFor="email" className="text-muted form-label">
          Your email address
        </label>
        <input
          type="email"
          className="form-control placeholder:text-muted/50 border p-2 rounded focus:outline-0 focus:shadow"
          id="email"
          placeholder="email@example.com"
        />
      </div>
      <div className="form-control py-4 flex flex-col gap-2">
        <label htmlFor="email" className="text-muted form-label">
          Your message
        </label>
        <textarea
          className="form-control border p-2 placeholder:text-muted/50 resize-none h-30 rounded focus:outline-0 focus:shadow"
          id="message"
          placeholder="Hey saad, I would like to ..."
        ></textarea>
      </div>

      <button className="inline-flex justify-center my-4 btn-primary mx-auto w-full text-center"> Send message <Send /> </button>
    </form>
  );
};

export default ContactForm;
