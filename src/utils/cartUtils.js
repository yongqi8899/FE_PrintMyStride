export const formatCurrency = amount =>
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(amount);

export const addToCart = (cart, item) => {
  const existing = cart.find(p => p.id === item.id);
  let newCart = [];
  if (existing) {
    newCart = cart.map(p => (p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p));
  } else {
    newCart = [...cart, { ...item, quantity: 1 }];
  }
  localStorage.setItem('cart', JSON.stringify(newCart));
  return newCart;
};

export const removeFromCart = (cart, item) => {
  const existing = cart.find(p => p.id === item.id);
  let newCart = [];
  if (existing.quantity === 1) {
    newCart = cart.filter(p => p.id !== item.id);
  } else {
    newCart = cart.map(p => (p.id === item.id ? { ...p, quantity: p.quantity - 1 } : p));
  }
  localStorage.setItem('cart', JSON.stringify(newCart));
  return newCart;
};

export const resetCart = () => {
  localStorage.removeItem('cart');
  return [];
};
