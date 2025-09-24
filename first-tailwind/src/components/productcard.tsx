import React, { useState } from 'react';

interface Product {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(product);
    setTimeout(() => {
      setIsAdding(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden">
      <div className="p-4">
        <img 
          src={product.imageUrl} 
          alt={product.title}
          className="w-full h-48 object-cover rounded-lg mb-3"
        />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-blue-600">฿{product.price.toLocaleString()}</span>
          <span className="text-sm text-gray-500 line-through">฿{product.originalPrice.toLocaleString()}</span>
        </div>
        <button 
          onClick={handleAddToCart}
          className={`w-full font-medium py-2 px-4 rounded-lg transition-colors duration-200 ${
            isAdding 
              ? 'bg-green-500 text-white' 
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {isAdding ? 'เพิ่มแล้ว!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

const ProductGrid: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const products: Product[] = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1585515656618-3ee3dd2c2263?w=300&h=200&fit=crop&crop=center",
      title: "เครื่องชงกาแฟ รุ่น 1",
      description: "เครื่องชงกาแฟอัตโนมัติคุณภาพสูง เหมาะสำหรับใช้ในบ้านและออฟฟิส",
      price: 1299,
      originalPrice: 1599
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop&crop=center",
      title: "สมาร์ทโฟน รุ่น 2",
      description: "สมาร์ทโฟนสเปคสูง หน้าจอใส ถ่ายภาพสวย แบตเตอรี่ทนทาน",
      price: 8999,
      originalPrice: 9999
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop&crop=center",
      title: "เมาส์คอมพิวเตอร์ รุ่น 3",
      description: "เมาส์ไร้สายสำหรับเล่นเกม ดีไซน์สวย จับถนัดมือ",
      price: 899,
      originalPrice: 1199
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1585515656618-3ee3dd2c2263?w=300&h=200&fit=crop&crop=center",
      title: "เครื่องชงกาแฟ รุ่น 2",
      description: "เครื่องชงกาแฟขนาดเล็ก เหมาะสำหรับคนที่รักกาแฟ",
      price: 2499,
      originalPrice: 2999
    },
    {
      id: 5,
      imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop&crop=center",
      title: "สมาร์ทโฟน รุ่น 3",
      description: "สมาร์ทโฟนรุ่นใหม่ล่าสุด กล้องคุณภาพสูง ประสิทธิภาพดีเยี่ยม",
      price: 12999,
      originalPrice: 14999
    },
    {
      id: 6,
      imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop&crop=center",
      title: "เมาส์คอมพิวเตอร์ รุ่น 4",
      description: "เมาส์เกมมิ่งสำหรับมืออาชีพ DPI สูง การตอบสนองเร็ว",
      price: 1599,
      originalPrice: 1899
    }
  ];

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => [...prev, product]);
    console.log(`เพิ่ม ${product.title} ราคา ฿${product.price} ลงในตะกร้า`);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">รายการสินค้าของเรา</h1>
          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            ตะกร้า: {cartItems.length} รายการ
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {cartItems.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">สินค้าในตะกร้า ({cartItems.length} รายการ)</h2>
            <div className="space-y-2">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">{item.title}</span>
                  <span className="font-bold text-blue-600">฿{item.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>รวมทั้งหมด:</span>
                <span className="text-blue-600">
                  ฿{cartItems.reduce((sum, item) => sum + item.price, 0).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;