export const formatDateWithKanji = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatDateWithHyphen = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};
