import type { NextApiRequest, NextApiResponse } from 'next';

export function webhookMiddleware(req: NextApiRequest, res: NextApiResponse, next: Function) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Webhook method not allowed' });
  }

  if (!req.headers['content-type']?.includes('application/json')) {
    return res.status(400).json({ error: 'Webhook invalid content type' });
  }

  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Webhook missing data' });
  }

  next();
}
