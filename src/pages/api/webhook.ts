import type { NextApiRequest, NextApiResponse } from 'next';
import { webhookMiddleware } from '../../../lib/webhook-middleware';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  webhookMiddleware(req, res, () => {
    const payload = req.body;
    return res.status(200).json({ message: 'Webhook received', data: payload });
  });
}
