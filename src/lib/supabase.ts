import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nntgakewzmflfbpajkuh.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5udGdha2V3em1mbGZicGFqa3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwMjA0MDgsImV4cCI6MjA4NDU5NjQwOH0.6nac4ByhADkFUmVkmn56aCmlMgRE68t61wv3x7Kv04A'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
