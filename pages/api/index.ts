import type { NextApiRequest, NextApiResponse } from 'next'

export const handler: (req: NextApiRequest, res: NextApiResponse) => void = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    Name: "Lennon Correa",
    Job: "Bllog",
    Role: "Software Engineer Intern",
    Skills: [
      "C#",
      "Java",
      "Javascript"
    ],
    Languages: [
      "Portuguese",
      "English"
    ]
  }
  if (req.method === 'GET') {
    res.status(200).json(data);
  } else {
    res.status(405).json({
      "Request:": req.method,
      "Error": "Method Not Allowed"
    });
  }
}

export default handler;