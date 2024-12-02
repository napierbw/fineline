const client = contentful.createClient({
  space: "9yhw5dafhh7t",
  environment: "master", // defaults to 'master' if not set
  accessToken: process.env.Contentful_AccessToken,
});

export default async function getContentfulEntry(req, res) {
  try {
    const entry = await client.getEntry(req.query);
    res.status(200).json(entry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch services" });
  }
}
