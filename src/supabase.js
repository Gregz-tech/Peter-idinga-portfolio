import { createClient } from '@supabase/supabase-js';

// We use dummy values here to prevent the app from crashing.
// Since you are just building the portfolio frontend right now, 
// you don't need a real database connection yet.
const supabaseUrl = 'https://example.supabase.co';
const supabaseKey = '1234567890';

export const supabase = createClient(supabaseUrl, supabaseKey);