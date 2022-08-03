export const getProducts = (num = 10) => {
  return Array.from(new Array(num).keys()).map((item) => ({
    id: `pid_${item + 1}`,
    image: null,
    name: `Product name ${item + 1}`,
    desc: "Description"
  }));
};
