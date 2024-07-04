export default function getData(url) {
  try {
    const res = fetch(url);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
