let CONFIG = {
  appEnv: "",
  API_ENDPOINT: "https://example.co/api/v2/",
};

if (process.env.REACT_APP_ENV === "production") {
  CONFIG = {
    appEnv: "production",
    API_ENDPOINT: CONFIG.API_ENDPOINT,
  };
}

if (process.env.REACT_APP_ENV === "staging") {
  CONFIG = {
    appEnv: "staging",
    API_ENDPOINT: CONFIG.API_ENDPOINT,
  };
}
if (process.env.REACT_APP_ENV === "development") {
  CONFIG = {
    appEnv: "development",
    API_ENDPOINT: CONFIG.API_ENDPOINT,
  };
}

export default Object.freeze(CONFIG);
