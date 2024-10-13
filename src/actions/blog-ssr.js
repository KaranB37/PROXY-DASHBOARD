import axios, { endpoints } from "src/utils/axios";

// ----------------------------------------------------------------------

export async function getPosts() {
  const res = await axios.get(endpoints.post.list);
  console.log("API Response:", res.data); // Log the response

  // Ensure the response is an object and contains the expected structure
  if (typeof res.data !== "object") {
    throw new Error("Expected an object from the API");
  }

  return res.data;
}

// ----------------------------------------------------------------------

export async function getPost(title) {
  const URL = title ? `${endpoints.post.details}?title=${title}` : "";

  const res = await axios.get(URL);

  return res.data;
}

// ----------------------------------------------------------------------

export async function getLatestPosts(title) {
  const URL = title ? `${endpoints.post.latest}?title=${title}` : "";

  const res = await axios.get(URL);

  return res.data;
}
