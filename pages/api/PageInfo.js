import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Portfolio");
  switch (req.method) {
    case "POST":
      const bodyObject = JSON.parse(req.body);
      const newPageInfo = await db.collection("pageInfo").insertOne(bodyObject);
      res.json(newPageInfo.ops[0]);
      break;
    case "GET":
      const pageInfo = await db.collection("pageInfo").find({}).toArray();
      res.json(pageInfo);
      break;
  }
}