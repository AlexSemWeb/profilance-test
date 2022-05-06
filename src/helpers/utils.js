export const converDate = (ms) => {
  var date = new Date(ms);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  m = m < 10 ? "0" + m : m;
  d = d < 10 ? "0" + d : d;
  return [d, m, y].join(".");
};

export const searchFilter = (news, search) => {
  let re = new RegExp(`${search}`, "gi");
  return re.test(news.title) || re.test(news.text);
};
