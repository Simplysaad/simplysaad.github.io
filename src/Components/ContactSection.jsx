import { Mail, MapPinIcon, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section id="contactSection" className="py-16">
      <div className="container">
        <div className="heading text-center my-6">
          <h2 className="font-bold text-3xl md:text-4xl mb-4">
            <span className="">Get In </span>
            <span className="text-primary"> Touch</span>
          </h2>
          <p className="text-foreground text-lg">
            Have a project in mind? Feel free to reach out! i'm always open to
            discussing new opportunities
          </p>
        </div>

        <div className="main-content px-3 text-start md:flex-row flex flex-col gap-5 justify-center">
          <div className="contact-info flex flex-col gap-6 w-full">
            <h2 className="text-2xl font-semibold text-center mb-2 mt-4">
              Contact Information
            </h2>
            <div className="flex gap-4  rounded shadow px-8 py-4 justify-start items-center">
              <span className="icon-container">
                <Mail className="text-primary bg-primary/50 p-1 rounded-full" />
              </span>
              <div className="">
                <h3 className="text-foreground text-lg font-bold">
                  Email Address
                </h3>
                <p>
                  <a href="mailto:saadidris23@gmail.com" className="">
                    saadidris23@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-4  rounded shadow px-8 py-4 justify-start items-center">
              <span className="icon-container">
                <Phone className="text-primary bg-primary/50 p-1 rounded-full" />
              </span>
              <div className="">
                <h3 className="text-foreground text-lg font-bold">
                  Phone Number
                </h3>
                <p>
                  <a href="tel:+234(0)9076147178" className="">
                    +234 (0) 907 614 7178
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-4  rounded shadow px-8 py-4 justify-start items-center">
              <span className="icon-container">
                <MapPinIcon className="text-primary bg-primary/50 p-1 rounded-full" />
              </span>
              <div className="">
                <h3 className="text-foreground text-lg font-bold">Location</h3>
                <p>OAGF quarters, Kubwa, Abuja</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
