import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://jtoqeyulatxyjnyvlyrb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0b3FleXVsYXR4eWpueXZseXJiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDg3MDczMywiZXhwIjoyMDYwNDQ2NzMzfQ.hTSG_jmGKmUJx4QT855Jf2_1zRCBF-OHGieNAXUbfiA')