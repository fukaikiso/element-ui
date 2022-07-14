//耗时代码
function fb(n) {
  return n < 3 ? 1 : fb(n - 1) + fb(n - 2);
}
// console.log('异步计算：', fb(45));

onmessage = function (data) {
  console.log(fb(data.data));
};
