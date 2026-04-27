/**
 * Supabase client – używa zmiennych PUBLIC_ dostępnych po stronie przeglądarki.
 * Klucz `anon` jest bezpieczny do publicznego ujawnienia — dostęp kontrolują
 * Row Level Security (RLS) policies ustawione w panelu Supabase.
 */
import { createClient } from '@supabase/supabase-js';

// Zmienne są dostępne tylko w przeglądarce (PUBLIC_*).
// Podczas SSR/build Astro nie ma .env — klient tworzymy leniwie,
// żeby błąd pojawił się dopiero przy faktycznym wywołaniu, nie przy imporcie.
function getClient() {
  const url  = import.meta.env.PUBLIC_SUPABASE_URL  as string | undefined;
  const anon = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string | undefined;

  if (!url || !anon) {
    throw new Error(
      'Brak zmiennych środowiskowych Supabase. Skopiuj .env.example → .env i uzupełnij wartości.'
    );
  }

  return createClient(url, anon);
}

// Singleton — tworzony raz przy pierwszym użyciu po stronie klienta
let _client: ReturnType<typeof createClient> | null = null;

export function getSupabase() {
  if (!_client) _client = getClient();
  return _client;
}

// Typ wiersza tabeli cfp_submissions
export interface CfpSubmission {
  id?:          string;
  created_at?:  string;
  title:        string;
  abstract:     string;
  authors:      string;
  affiliation:  string;
  topic:        string;
  email:        string;
  comments?:    string;
}
