/**
 * CfpForm – formularz zgłoszenia referatu na CC4ES 2026.
 * Wysyła e-mail przez EmailJS (browser SDK, zero backendu).
 * Stany: idle → submitting → success | error
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// ── Pola tematyczne (zgodne z topics w index.astro) ──────────────────────────
const TOPICS = [
  'OT/ICS Threat Intelligence & Attribution',
  'Incident Response in Critical Infrastructure',
  'Network Segmentation & Zero Trust for OT',
  'Secure Remote Access & Vendor Management',
  'NIS2 / IEC 62443 Compliance',
  'AI/ML Applications in OT Security',
  'SCADA & HMI Vulnerability Research',
  'Supply Chain Security for Energy Sector',
  'Inne / Other',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

// ── Pomocniczy komponent pola ─────────────────────────────────────────────────
function Field({
  label, required = false, error, children,
}: {
  label: string; required?: boolean; error?: string; children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-xs tracking-widest text-gray-400 uppercase">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      {children}
      {error && (
        <span className="font-mono text-xs text-red-400">&gt; {error}</span>
      )}
    </div>
  );
}

const inputClass =
  'w-full bg-void border border-surface rounded px-3 py-2.5 font-mono text-sm text-gray-100 ' +
  'placeholder-gray-600 focus:outline-none focus:border-accent/70 focus:ring-1 focus:ring-accent/30 ' +
  'transition-colors duration-200';

// ── Główny komponent ──────────────────────────────────────────────────────────
export default function CfpForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  type FormFields = {
    title: string; abstract: string; authors: string;
    affiliation: string; topic: string; email: string; comments: string;
  };

  // Wartości formularza
  const [form, setForm] = useState<FormFields>({
    title: '', abstract: '', authors: '',
    affiliation: '', topic: '', email: '', comments: '',
  });

  // Błędy walidacji
  const [errors, setErrors] = useState<Partial<Record<keyof FormFields, string>>>({});

  function update(field: keyof FormFields, value: string) {
    setForm(f => ({ ...f, [field]: value }));
    if (errors[field]) setErrors(e => ({ ...e, [field]: undefined }));
  }

  // ── Walidacja ────────────────────────────────────────────────────────────
  function validate(): boolean {
    const e: typeof errors = {};

    if (!form.title.trim())
      e.title = 'Tytuł jest wymagany';
    if (form.abstract.trim().split(/\s+/).length < 50)
      e.abstract = 'Abstrakt powinien mieć co najmniej 50 słów';
    if (form.abstract.trim().split(/\s+/).length > 500)
      e.abstract = 'Abstrakt nie może przekraczać 500 słów';
    if (!form.authors.trim())
      e.authors = 'Podaj imię i nazwisko co najmniej jednego autora';
    if (!form.affiliation.trim())
      e.affiliation = 'Afiliacja jest wymagana';
    if (!form.topic)
      e.topic = 'Wybierz kategorię tematyczną';
    if (!form.email.trim())
      e.email = 'E-mail kontaktowy jest wymagany';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Nieprawidłowy format adresu e-mail';

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  // ── Submit ────────────────────────────────────────────────────────────────
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setErrorMsg('');

    try {
      await emailjs.send(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          cfp_title:       form.title.trim(),
          cfp_authors:     form.authors.trim(),
          cfp_affiliation: form.affiliation.trim(),
          cfp_topic:       form.topic,
          cfp_email:       form.email.trim().toLowerCase(),
          cfp_abstract:    form.abstract.trim(),
          cfp_comments:    form.comments?.trim() || '—',
        },
        import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
    } catch (err) {
      console.error('EmailJS error:', err);
      setErrorMsg('Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub napisz na cfp@cc4es.pl');
      setStatus('error');
    }
  }

  // ── Ekran potwierdzenia ───────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 rounded border border-accent/40 bg-accent/5 text-center space-y-4"
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-accent/40 bg-accent/10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-mono font-bold text-xl text-white">Zgłoszenie przyjęte</h3>
        <p className="font-mono text-sm text-gray-400 max-w-md mx-auto">
          Dziękujemy za przesłanie abstraktu. Komitet programowy skontaktuje się z Tobą do <span className="text-accent">30 czerwca 2026</span>.
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setForm({ title: '', abstract: '', authors: '', affiliation: '', topic: '', email: '', comments: '' });
          }}
          className="font-mono text-xs text-gray-500 hover:text-accent transition-colors"
        >
          &gt; Wyślij kolejne zgłoszenie
        </button>
      </motion.div>
    );
  }

  // ── Formularz ─────────────────────────────────────────────────────────────
  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      noValidate
      className="space-y-6"
    >
      {/* Tytuł */}
      <Field label="Tytuł referatu" required error={errors.title}>
        <input
          type="text"
          value={form.title}
          onChange={e => update('title', e.target.value)}
          placeholder="np. Zero Trust Architecture in OT Environments"
          className={inputClass}
          maxLength={200}
        />
      </Field>

      {/* Autorzy */}
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Autorzy" required error={errors.authors}>
          <input
            type="text"
            value={form.authors}
            onChange={e => update('authors', e.target.value)}
            placeholder="Jan Kowalski, Anna Nowak"
            className={inputClass}
          />
        </Field>
        <Field label="Afiliacja / Organizacja" required error={errors.affiliation}>
          <input
            type="text"
            value={form.affiliation}
            onChange={e => update('affiliation', e.target.value)}
            placeholder="CERT PSE / Politechnika Warszawska"
            className={inputClass}
          />
        </Field>
      </div>

      {/* Temat + E-mail */}
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Kategoria tematyczna" required error={errors.topic}>
          <select
            value={form.topic}
            onChange={e => update('topic', e.target.value)}
            className={inputClass + ' cursor-pointer'}
          >
            <option value="" disabled>-- wybierz --</option>
            {TOPICS.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field label="E-mail kontaktowy" required error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={e => update('email', e.target.value)}
            placeholder="autor@example.com"
            className={inputClass}
          />
        </Field>
      </div>

      {/* Abstrakt */}
      <Field label="Abstrakt (50–500 słów)" required error={errors.abstract}>
        <textarea
          value={form.abstract}
          onChange={e => update('abstract', e.target.value)}
          rows={7}
          placeholder="Opisz cel, metodę i główne wnioski swojego referatu..."
          className={inputClass + ' resize-y min-h-[140px]'}
        />
        {/* Licznik słów */}
        <span className="self-end font-mono text-[10px] text-gray-600">
          {form.abstract.trim() ? form.abstract.trim().split(/\s+/).length : 0} / 500 słów
        </span>
      </Field>

      {/* Komentarze (opcjonalne) */}
      <Field label="Uwagi dla komitetu (opcjonalne)">
        <textarea
          value={form.comments}
          onChange={e => update('comments', e.target.value)}
          rows={3}
          placeholder="Dodatkowe informacje, wymagania sprzętowe, itp."
          className={inputClass + ' resize-y'}
        />
      </Field>

      {/* Błąd globalny */}
      <AnimatePresence>
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-mono text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded px-4 py-3"
          >
            &gt; {errorMsg}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Submit */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="font-mono text-[11px] text-gray-600">
          * Pola obowiązkowe. Dane przetwarzane zgodnie z RODO.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center gap-2.5 px-7 py-3 rounded
                     bg-accent text-void font-mono font-bold text-sm
                     hover:bg-accent-dim transition-colors duration-200
                     disabled:opacity-50 disabled:cursor-not-allowed
                     focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        >
          {status === 'submitting' ? (
            <>
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
              </svg>
              Wysyłanie...
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Wyślij zgłoszenie
            </>
          )}
        </button>
      </div>
    </motion.form>
  );
}
