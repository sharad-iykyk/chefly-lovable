import { Mail, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            We'd love to hear from you
          </p>
        </div>

        <div className="mt-12 flex justify-center space-x-6">
          <a
            href="mailto:contact@example.com"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};