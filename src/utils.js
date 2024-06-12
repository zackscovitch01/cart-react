export const getTotals = (cart) => {
  let totalAmount = 0;
  let totalCost = 0;
  for (let { amount, price } of cart.values()) {
    totalCost += amount * price;
    totalAmount += amount;
  }
  return { totalAmount, totalCost };
};
