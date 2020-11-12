const URL = "https://v1.jinrishici.com/all.json";

const dataPrase = ({ content, origin, author }) => {
  return [origin, author, content];
};

// export const getPoetry = () => {
//   return fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//       return dataPrase(data);
//     })
//     .catch(() => {
//       throw new Error();
//     });
// };

export const getPoetry = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return dataPrase(data);
  } catch (e) {
    throw new Error(e);
  }
};
