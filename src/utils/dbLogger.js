module.exports = {
  logger: (debug) => {
    return (queryString, queryObject) => {
      if (queryObject.bind) {
        debug([queryString, JSON.stringify(queryObject.bind)].join(' - '));
      } else {
        debug(queryString);
      }
    };
  },
};
