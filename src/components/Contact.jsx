import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Send, Loader2, CheckCircle, XCircle } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError(false);

    emailjs
      .sendForm(
        "service_fqb04pj",
        "template_d0vumh9",
        form.current,
        "vgQn7l8C5n_uEJ31j"
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        form.current.reset();
        setTimeout(() => setSent(false), 5000);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
        setTimeout(() => setError(false), 5000);
      });
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <motion.section
      id="contact"
      className="px-6 max-w-xl mx-auto py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold mb-8 flex items-center justify-center gap-2 text-blue-700 dark:text-blue-400">
        <Mail className="w-6 h-6" /> Contactez-moi
      </h2>

      {sent && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-4 text-green-600 bg-green-100 border border-green-400 px-4 py-2 rounded-lg text-sm flex items-center gap-2 justify-center"
        >
          <CheckCircle className="w-4 h-4" />
          Message envoyé avec succès !
        </motion.div>
      )}

      {error && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-4 text-red-600 bg-red-100 border border-red-400 px-4 py-2 rounded-lg text-sm flex items-center gap-2 justify-center"
        >
          <XCircle className="w-4 h-4" />
          Une erreur est survenue. Veuillez réessayer.
        </motion.div>
      )}

      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 space-y-4"
      >
        {["user_name", "user_email", "message"].map((field, i) => (
          <motion.div
            key={field}
            custom={i}
            variants={inputVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {field === "message" ? (
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Votre message"
                className="w-full p-3 rounded-xl border dark:border-gray-700 dark:bg-gray-700 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <input
                type={field === "user_email" ? "email" : "text"}
                name={field}
                required
                placeholder={
                  field === "user_name" ? "Votre nom" : "Votre email"
                }
                className="w-full p-3 rounded-xl border dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          </motion.div>
        ))}

        {/* Bouton animé */}
        <motion.button
          whileHover={{ scale: !sent && !error && !loading ? 1.03 : 1 }}
          whileTap={{ scale: !sent && !error && !loading ? 0.97 : 1 }}
          type="submit"
          disabled={loading || sent}
          className={`w-full mt-2 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-xl transition-all
            ${
              loading
                ? "bg-blue-600 text-white cursor-not-allowed"
                : sent
                ? "bg-green-100 text-green-700 border border-green-400"
                : error
                ? "bg-red-100 text-red-700 border border-red-400"
                : "text-blue-600 dark:text-blue-300 border border-blue-300 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-800"
            }`}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Envoi...
            </>
          ) : sent ? (
            <>
              <CheckCircle className="w-4 h-4" /> Envoyé
            </>
          ) : error ? (
            <>
              <XCircle className="w-4 h-4" /> Échec
            </>
          ) : (
            <>
              <Send className="w-4 h-4" /> Envoyer
            </>
          )}
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;
