// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const fechtRepos = await fetch("https://api.github.com/users/joao123433")
  const repos = await fechtRepos.json()

  res.status(200).json(repos);
}
