const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Initialize Supabase client with service role key
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// POST /login
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // 1. Check if user already exists
    const { data: existingUser, error: fetchError } = await supabase
      .from('students')
      .select('*')
      .eq('email', email)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      // Some real fetch error other than "no rows"
      return res.status(500).json({ error: 'Database error while checking user.' });
    }

    if (existingUser) {
      // Email already exists
      return res.status(409).json({ error: 'Email already exists.' });
    }

    // 2. Insert new user
    const { data: newUser, error: insertError } = await supabase
      .from('students')
      .insert([{ name, email, password }])
      .select()
      .single();

    if (insertError) {
      return res.status(500).json({ error: 'Failed to create user.' });
    }

    res.status(200).json({ message: 'User created successfully.', user: newUser });
  } catch (err) {
    console.error('Unexpected error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

module.exports = router;
