// const { createClient } = require( '@supabase/supabase-js')
// require('dotenv').config()
// const supabaseUrl = process.env.VITE_SUPABASE_URL
// const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY

// const supabase = createClient(supabaseUrl, supabaseKey)

// module.exports=supabase;

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // Not the anon key
);

module.exports = supabase;
