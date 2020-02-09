import axios from "axios";
import handleError from "./handleError/handleError";

const URI = "http://192.168.1.7:5000";

const getHeaders = () => {
  return {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
};

// HTTP GET Request - Returns Resolved or Rejected Promise
export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        URI + url,
        {
          params: params
        },
        getHeaders()
      )
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(handleError(error));
      });
  });
};

// HTTP PATCH Request - Returns Resolved or Rejected Promise
export const patch = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(URI + url, params, getHeaders())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(handleError(error));
      });
  });
};
// HTTP POST Request - Returns Resolved or Rejected Promise
export const post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .post(URI + url, params, getHeaders())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(handleError(error));
      });
  });
};
// HTTP DELETE Request - Returns Resolved or Rejected Promise
export const del = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(URI + url, getHeaders())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(handleError(error));
      });
  });
};
