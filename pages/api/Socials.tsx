// api/Socials.tsx
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../lib/dbConnect'
import Social from '../../models/Social'

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
    ) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const social = await Social.find({})
        res.status(200).json({ success: true, data: social })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const social = await Social.create(req.body)
        res.status(201).json({ success: true, data: social })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}