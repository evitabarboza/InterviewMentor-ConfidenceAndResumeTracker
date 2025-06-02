const express = require('express');
const router = express.Router();
const supabase = require('../database/db'); // your Supabase client

// POST /api/login
router.post('/', async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Both name and email are required' });
  }

  try {
    // Check if the user already exists
    const { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      // PGRST116 = no rows returned, which is fine
      throw fetchError;
    }

    if (existingUser) {
      return res.status(200).json({ message: 'User logged in', user: existingUser });
    }

    // Create new user if not found
    const { data: newUser, error: insertError } = await supabase
      .from('users')
      .insert([{ name, email }])
      .select()
      .single();

    if (insertError) throw insertError;

    res.status(201).json({ message: 'New user created and logged in', user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
