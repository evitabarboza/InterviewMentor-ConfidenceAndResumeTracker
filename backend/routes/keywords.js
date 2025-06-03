const express = require("express");
const router = express.Router();
// const { createClient } = require("@supabase/supabase-js");

// // Initialize Supabase
// const supabaseUrl = "https://your-project-id.supabase.co";
// const supabaseKey = "your-anon-or-service-role-key";
// const supabase = createClient(supabaseUrl, supabaseKey);

// GET /api/keywords?user_id=123 (optional user filter)
router.get("/", async (req, res) => {
  let query = supabase.from("user_keywords").select("keyword");

  query = query.eq("user_id", "1");

  const { data, error } = await query;

  if (error) return res.status(500).json({ error: error.message });

  const keywords = data.map((row) => row.keyword);
  res.json(keywords);
});

module.exports = router;
