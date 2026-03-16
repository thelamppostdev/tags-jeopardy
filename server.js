import express from 'express';
import { readFileSync, writeFileSync, existsSync } from 'fs';

const app = express();
const PORT = 3001;
const FEEDBACK_FILE = './feedback.json';

app.use(express.json());

function readFeedback() {
  if (!existsSync(FEEDBACK_FILE)) return [];
  try {
    return JSON.parse(readFileSync(FEEDBACK_FILE, 'utf8'));
  } catch {
    return [];
  }
}

function writeFeedback(records) {
  writeFileSync(FEEDBACK_FILE, JSON.stringify(records, null, 2));
}

app.post('/api/feedback', (req, res) => {
  const records = readFeedback();
  const record = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    ...req.body,
    timestamp: new Date().toISOString(),
  };
  records.push(record);
  writeFeedback(records);
  res.json({ ok: true });
});

app.get('/api/feedback', (req, res) => {
  res.json(readFeedback());
});

app.listen(PORT, () => {
  console.log(`Feedback server running on http://localhost:${PORT}`);
});
