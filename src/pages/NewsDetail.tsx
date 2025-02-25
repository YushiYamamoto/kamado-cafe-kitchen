
import { useParams } from "react-router-dom";
import { Calendar } from "lucide-react";

const NewsDetail = () => {
  const { id } = useParams();

  // 実際のアプリケーションではAPIやデータベースから取得します
  const news = {
    id: 1,
    title: "年末年始の営業時間について",
    date: "2024-03-15",
    category: "お知らせ",
    content: `
      平素より「かまど食堂」をご愛顧いただき、誠にありがとうございます。

      年末年始の営業時間を下記の通りとさせていただきます。

      【年末年始営業時間】
      12月30日（土）: 通常営業
      12月31日（日）: 11:30-15:00（ランチのみ）
      1月1日（月）- 1月3日（水）: 休業
      1月4日（木）: 通常営業

      ご不便をおかけいたしますが、何卒ご理解いただきますようお願い申し上げます。
    `,
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <article className="max-w-3xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block px-3 py-1 text-sm bg-kamado-clay text-white rounded-full">
                {news.category}
              </span>
              <div className="flex items-center text-gray-600">
                <Calendar size={16} className="mr-2" />
                {news.date}
              </div>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl mb-8">{news.title}</h1>
            <div className="prose prose-stone max-w-none">
              {news.content.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <a
              href="/news"
              className="inline-block px-6 py-2 border border-kamado-clay text-kamado-clay hover:bg-kamado-clay hover:text-white transition-colors rounded-lg"
            >
              お知らせ一覧に戻る
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default NewsDetail;
