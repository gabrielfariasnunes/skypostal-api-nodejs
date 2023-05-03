module.exports = {
  toLocaleTime(time) {
    return new Date(time).toLocaleTimeString().substring(0, 5);
  },
  toLocaleDate(date) {
    return new Date(date).toLocaleDateString();
  },
};
