export function formatCurrency(num: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num).slice(0, -3)
}