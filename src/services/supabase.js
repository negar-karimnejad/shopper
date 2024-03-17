import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ayulkvcrjcgqgntevopt.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5dWxrdmNyamNncWdudGV2b3B0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2NjE4NjUsImV4cCI6MjAyNjIzNzg2NX0.Hmtia-WEXJj_KLQedbyUsWiIyYX-FzTYtWWnirYQCr0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
