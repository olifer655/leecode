/**
 * 买卖股票的最佳时机
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
 * 注意你不能在买入股票前卖出股票。    
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 * 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * 注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
 */
/* 比差法 */
var maxProfit = function(prices) {
  let curMin = prices[0];
  let result = 0;

  for (let i = 0;i < prices.length; i++) {
    if (prices[i] < curMin) {
      curMin = prices[i]
      continue;
    }
    result = Math.max(prices[i] - curMin, result)
  }
  return result
};

console.log(maxProfit([2,4,1]))