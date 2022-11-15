import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Portfolio");
  switch (req.method) {
    case "POST":
      const bodyObject = JSON.parse(req.body);
      const newSocial = await db.collection("socials").insertOne(bodyObject);
      res.json(newSocial.ops[0]);
      break;
    case "GET":
      const socials = await db.collection("socials").find({}).toArray();
      res.json(socials);
      break;
  }
}