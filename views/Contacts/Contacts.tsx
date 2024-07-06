import EmailIcon from "@/components/Icons/EmailIcon";
import LinkedInIcon from "@/components/Icons/LinkedInIcon";
import TwitterIcon from "@/components/Icons/XIcon";
import { SendIcon } from "lucide-react";
import React from "react";

const Contacts: React.FC = () => {
  return (
    <div className="sm:p-10 my-auto" id="Contacts">
      <section className="mx-auto max-w-screen-xl md:rounded-md md:border-2 md:shadow-lg">
        <div className="grid grid-cols-4 text-foreground lg:grid-cols-3">
          <div className="col-span-4 bg-muted px-8 py-10 text-foreground md:col-span-2 md:border-r md:px-10 md:py-12 lg:col-span-1">
            <h2 className="mb-8 text-2xl font-primary">Contact me</h2>
            <ul>
              <li className="mb-6 flex items-start text-left">
                <EmailIcon className="shrink-0 mr-6 text-2xl text-muted-foreground" />
                <div>
                  <a
                    className="cursor-pointer font-serif text-base md:text-lg text-primary"
                    href="#"
                  >
                    penevmx@gmail.com
                  </a>
                  <span className="block text-xs uppercase text-muted-foreground">
                    email
                  </span>
                </div>
              </li>
              <li className="my-6 flex items-center text-left">
                <TwitterIcon className="shrink-0 mr-6 text-2xl text-muted-foreground" />
                <div>
                  <a
                    className="cursor-pointer font-serif text-base md:text-lg text-primary"
                    href="#"
                  >
                    toni boni
                  </a>
                  <span className="block text-xs uppercase text-muted-foreground">
                    x.com
                  </span>
                </div>
              </li>
              <li className="my-6 flex items-center text-left">
                <LinkedInIcon className="shrink-0 mr-6 text-2xl text-muted-foreground" />
                <div>
                  <p className="font-serif text-base md:text-lg text-primary">
                    Anton Penev
                  </p>
                  <span className="block text-xs uppercase text-muted-foreground">
                    LinkedIn
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="order-first col-span-4 max-w-screen-md px-8 py-10 md:order-last md:col-span-2 md:px-10 md:py-12 ">
            <h2 className="mb-8 text-2xl font-black">Get in touch</h2>
            <p className="mt-2 mb-4 font-sans text-sm tracking-normal">
              Don't be shy to ask me a question.
            </p>
            <form action="">
              <div className="md:col-gap-4 mb-5 grid md:grid-cols-2">
                <input
                  className="col-span-1 w-full border-b border-muted-foreground py-3 text-sm outline-none focus:border-b-2 focus:border-primary"
                  type="text"
                  placeholder="Name"
                  name="name"
                />
                <input
                  className="col-span-1 w-full border-b border-muted-foreground py-3 text-sm outline-none focus:border-b-2 focus:border-primary"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <textarea
                className="mb-10 w-full resize-y whitespace-pre-wrap border-b border-muted-foreground py-3 text-sm outline-none focus:border-b-2 focus:border-primary"
                id=""
                rows={6}
                placeholder="Question"
                name="question"
              ></textarea>
              <button
                type="submit"
                className="group flex cursor-pointer items-center rounded-xl bg-primary px-8 py-4 text-center font-semibold leading-tight text-primary-foreground"
              >
                Send
                <SendIcon className="group-hover:ml-8 ml-4 transition-all" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
