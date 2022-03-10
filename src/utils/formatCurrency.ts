/**
 * @ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 */
const formatCurrency = (price: string | undefined) => {
  if (typeof price !== "undefined") {
    return new Intl.NumberFormat("en-ID", {
      style: "currency",
      currency: "IDR",
      maximumSignificantDigits: 3
    }).format(+price);
  }
};

export default formatCurrency;
