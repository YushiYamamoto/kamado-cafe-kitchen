import { useRef, useEffect } from "react";
import { ChevronsDown, MapPin, Clock, Phone } from "lucide-react";

const Index = () => {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617196701537-7329482cc9fe')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="font-serif text-5xl md:text-7xl mb-4 animate-fade-in">
            かまど食堂
          </h1>
          <p className="font-sans text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
            Authentic Japanese Cuisine
          </p>
          <ChevronsDown className="mx-auto mt-8 animate-bounce" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="py-24 px-6 md:px-12 max-w-4xl mx-auto opacity-0"
      >
        <span className="block text-kamado-clay font-medium mb-2">Our Story</span>
        <h2 className="font-serif text-3xl md:text-4xl mb-8">
          A Tradition of Excellence
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          At Kamado Shokudō, we honor the time-tested traditions of Japanese
          cuisine. Our restaurant takes its name from the kamado, a traditional
          clay cooking stove that has been at the heart of Japanese kitchens for
          centuries.
        </p>
        <p className="text-lg leading-relaxed">
          Every dish we serve is crafted with precision, patience, and deep
          respect for our culinary heritage, bringing you an authentic taste of
          Japan in every bite.
        </p>
      </section>

      {/* お知らせセクション */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="py-24 bg-gray-50 opacity-0"
      >
        <div className="px-6 md:px-12 max-w-4xl mx-auto">
          <span className="block text-kamado-clay font-medium mb-2">News</span>
          <h2 className="font-serif text-3xl md:text-4xl mb-12">お知らせ</h2>
          <div className="space-y-6">
            {[
              {
                id: 1,
                title: "年末年始の営業時間について",
                date: "2024-03-15",
                category: "お知らせ"
              },
              {
                id: 2,
                title: "春の新メニュー登場",
                date: "2024-03-10",
                category: "メニュー"
              },
              {
                id: 3,
                title: "料理教室開催のご案内",
                date: "2024-03-05",
                category: "イベント"
              }
            ].slice(0, 3).map((news) => (
              <a
                key={news.id}
                href={`/news/${news.id}`}
                className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="inline-block px-3 py-1 text-sm bg-kamado-clay text-white rounded-full">
                    {news.category}
                  </span>
                  <time className="text-gray-600 text-sm">{news.date}</time>
                </div>
                <h3 className="font-serif text-lg group-hover:text-kamado-clay transition-colors">
                  {news.title}
                </h3>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/news"
              className="inline-block px-6 py-2 border border-kamado-clay text-kamado-clay hover:bg-kamado-clay hover:text-white transition-colors rounded-lg"
            >
              お知らせ一覧へ
            </a>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="py-24 bg-white opacity-0"
      >
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <span className="block text-kamado-clay font-medium mb-2">Menu</span>
          <h2 className="font-serif text-3xl md:text-4xl mb-12">
            Featured Dishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "季節の天ぷら",
                english: "Seasonal Tempura",
                image:
                  "https://images.unsplash.com/photo-1637381333507-80c641af07c7",
              },
              {
                name: "炭火焼き魚",
                english: "Charcoal-Grilled Fish",
                image:
                  "https://images.unsplash.com/photo-1576877138403-8ec2f82cb1f3",
              },
              {
                name: "手打ち蕎麦",
                english: "Handmade Soba",
                image:
                  "https://images.unsplash.com/photo-1519984388953-d2406bc725e1",
              },
            ].map((dish, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${dish.image})` }} />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-serif text-2xl mb-2">{dish.name}</h3>
                  <p className="text-sm">{dish.english}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className="py-24 px-6 md:px-12 max-w-4xl mx-auto opacity-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <MapPin className="text-kamado-clay mr-3" />
              <h3 className="font-serif text-xl">Location</h3>
            </div>
            <p className="mb-2">123 Sakura Street</p>
            <p className="mb-6">Tokyo, Japan 123-4567</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 border border-kamado-clay text-kamado-clay hover:bg-kamado-clay hover:text-white transition-colors duration-300"
            >
              View Map
            </a>
          </div>
          <div>
            <div className="flex items-center mb-6">
              <Clock className="text-kamado-clay mr-3" />
              <h3 className="font-serif text-xl">Hours</h3>
            </div>
            <p className="mb-2">Lunch: 11:30 - 14:00</p>
            <p className="mb-2">Dinner: 17:30 - 22:00</p>
            <p className="mb-6">Closed on Mondays</p>
            <div className="flex items-center">
              <Phone className="text-kamado-clay mr-3" />
              <p>03-1234-5678</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
