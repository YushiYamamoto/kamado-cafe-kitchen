
import { useRef, useEffect } from "react";

const Menu = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl md:text-5xl mb-12 text-center">お品書き</h1>
        
        {/* カテゴリーフィルター */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {["すべて", "定食", "丼もの", "一品料理"].map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-kamado-clay text-kamado-clay hover:bg-kamado-clay hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* メニューグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "季節の天ぷら定食",
              price: "1,680",
              description: "旬の野菜と魚介を使った天ぷら盛り合わせ",
              image: "https://images.unsplash.com/photo-1637381333507-80c641af07c7",
              category: "定食"
            },
            {
              name: "炭火焼き魚定食",
              price: "1,580",
              description: "その日仕入れた新鮮な魚を炭火で香ばしく",
              image: "https://images.unsplash.com/photo-1576877138403-8ec2f82cb1f3",
              category: "定食"
            },
            {
              name: "手打ち蕎麦",
              price: "1,280",
              description: "石臼挽きの蕎麦粉を使用した自家製蕎麦",
              image: "https://images.unsplash.com/photo-1519984388953-d2406bc725e1",
              category: "一品料理"
            }
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) => (sectionsRef.current[index] = el)}
              className="bg-white rounded-lg overflow-hidden shadow-lg opacity-0"
            >
              <div className="relative h-64">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl mb-2">{item.name}</h3>
                <p className="text-kamado-clay font-medium mb-2">¥{item.price}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
