const express = require('express');
const XLSX = require('xlsx');
const supabase = require('../database/db');
const { generatePassword } = require('../utils/passwordUtil');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { fileData } = req.body;
    const buffer = Buffer.from(fileData, 'base64');
    const workbook = XLSX.read(buffer);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    const users = jsonData.map(({ name, email }) => ({
      name,
      email,
      password: 'password',
    }));

    let success = 0;
    let failed = 0;

    for (let user of users) {
      const { error: authError } = await supabase.auth.admin.createUser({
        email: user.email,
        password: user.password,
        user_metadata: { name: user.name },
        email_confirm: false,
      });

      if (authError) {
        console.error('Auth error:', authError.message);
        failed++;
        continue;
      }

      const { error: insertError } = await supabase
        .from('students')
        .insert([{ name: user.name, email: user.email, password: user.password }]);

      if (insertError) {
        console.error('Insert error:', insertError.message);
        failed++;
      } else {
        success++;
      }
    }

    res.json({ status: `✅ ${success} succeeded, (default password: 'password') | ❌ ${failed} failed` });
  } catch (err) {
    console.error('Unhandled error:', err);
    res.status(500).json({ error: 'Excel processing failed' });
  }
});

module.exports = router;
