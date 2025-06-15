const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.FB13_API_KEY) {
    return res.status(403).json({ message: '🔒 Access denied: invalid API key' });
  }

  // توليد سريع (محاكي)
  setTimeout(() => {
    res.json({
      status: 'success',
      message: '🎬 تم إنشاء حلقة أنمي احترافية في 11 دقيقة!',
      video_url: 'https://fb13-anime.ai/episode1.mp4'
    });
  }, 500); // تمثيل سرعة الرد المبدئي (اختبار فقط)
});

module.exports = router;
