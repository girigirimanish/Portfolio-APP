import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Portfolio");
  switch (req.method) {
    // case "POST":
    //   let bodyObject = JSON.parse(req.body);
    //   let newSocial = await db.collection("socials").insertOne(bodyObject);
    //   res.json(newSocial.ops[0]);
    //   break;
    case "GET":
      const experiences = await db.collection("experiences").find({}).toArray();
      res.json(experiences);
      break;
  }
}