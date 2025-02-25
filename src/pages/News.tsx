
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, ChevronRight } from "lucide-react";

const News = () => {
  const newsRef = useRef<HTMLDivElement>(null);

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

    if (newsRef.current) {
      observer.observe(newsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const news = [
    {
      id: 1,
      title: "年末年始の営業時間について",
      date: "2024-03-15",
      excerpt: "年末年始の営業時間についてお知らせいたします。12月30日から1月3日までは...",
      category: "お知らせ",
    },
    {
      id: 2,
      title: "春の新メニュー登場",
      date: "2024-03-10",
      excerpt: "桜の季節に合わせて、春を感じる新メニューが登場します。桜鯛の炊き込みご飯や...",
      category: "メニュー",
    },
    {
      id: 3,
      title: "料理教室開催のご案内",
      date: "2024-03-05",
      excerpt: "好評につき、和食の基本が学べる料理教室を開催いたします。日本の家庭料理の...",
      category: "イベント",
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl md:text-5xl mb-12 text-center">お知らせ</h1>

        {/* カテゴリーフィルター */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {["すべて", "お知らせ", "メニュー", "イベント"].map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-kamado-clay text-kamado-clay hover:bg-kamado-clay hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* ニュース一覧 */}
        <div
          ref={newsRef}
          className="grid gap-8 max-w-4xl mx-auto opacity-0"
        >
          {news.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="inline-block px-3 py-1 text-sm bg-kamado-clay text-white rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-2" />
                      {item.date}
                    </div>
                  </div>
                  <h2 className="text-xl font-serif group-hover:text-kamado-clay transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-gray-600">{item.excerpt}</p>
                </div>
                <ChevronRight className="text-kamado-clay group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
