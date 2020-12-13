const Api = (url) => {
  const options = {
    headers: { "X-Auth-Token": "cb8f29c7705e44e0b795f3feb6546789" },
  };

  return fetch(url, options)
    .then((res) => res.json())
    .catch((error) => console.warn("fetch error:", error))
    .then((data) => data);
};

export default Api;
