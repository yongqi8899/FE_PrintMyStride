import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const products = [
    {
      id: 1,
      title: 'Premium coffee beans',
      price: 109.95,
      description:
        'Roasted to perfection, our premium coffee beans are the foundation of a great cup of coffee.',
      category: 'produce',
      image: '/premium-beans.webp'
    },
    {
      id: 2,
      title: 'Coffee filters',
      price: 12.95,
      description:
        'Our high-quality filters ensure optimal extraction and a smooth, rich cup of coffee.',
      category: 'equipment',
      image: '/filters.webp'
    },
    {
      id: 3,
      title: 'Coffee machine',
      price: 299.95,
      description: 'Our state-of-the-art coffee machine delivers the perfect brew every time.',
      category: 'equipment',
      image: '/machine.webp'
    },
    {
      id: 4,
      title: 'Coffee grinder',
      price: 300,
      description: 'Grind your beans to perfection with our top-of-the-line coffee grinder.',
      category: 'equipment',
      image: '/grinder.webp'
    },
    {
      id: 5,
      title: 'Portafiler and tamper',
      price: 100,
      description: 'Craft the perfect espresso with our portafilter and tamper set.',
      category: 'equipment',
      image: '/portafilter.webp'
    },
    {
      id: 6,
      title: 'Coffee course',
      price: 50,
      description: 'Learn the art of coffee-making from our expert baristas in our coffee course.',
      category: 'service',
      image: '/course.webp'
    }
  ];

  return (
    <CartContext.Provider value={{ cart, setCart, products }}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
