export const getOriginalPrice = (productPrice, discountPercentage) => {
  const originalPrice =
    productPrice + (productPrice * discountPercentage) / 100;
  return originalPrice.toFixed(2);
};

export const getCapitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
