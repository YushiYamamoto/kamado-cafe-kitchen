
import { MapPin, Clock, Phone } from "lucide-react";

const Info = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl md:text-5xl mb-12 text-center">店舗情報</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* 店舗写真 */}
          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1617196701537-7329482cc9fe"
              alt="店舗外観"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1617196701537-7329482cc9fe"
                alt="店内1"
                className="w-full h-40 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1617196701537-7329482cc9fe"
                alt="店内2"
                className="w-full h-40 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* 店舗情報 */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="text-kamado-clay mr-3" />
                <h2 className="font-serif text-2xl">所在地</h2>
              </div>
              <p className="mb-2">〒123-4567</p>
              <p className="mb-4">東京都渋谷区神宮前X-X-X</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683564!2d139.7016359!3d35.6580339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM5JzI4LjkiTiAxMznCsDQyJzA1LjkiRQ!5e0!3m2!1sja!2sjp!4v1620000000000!5m2!1sja!2sjp"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Clock className="text-kamado-clay mr-3" />
                <h2 className="font-serif text-2xl">営業時間</h2>
              </div>
              <p className="mb-2">ランチ：11:30 - 14:00（L.O. 13:30）</p>
              <p className="mb-2">ディナー：17:30 - 22:00（L.O. 21:00）</p>
              <p className="text-kamado-clay">定休日：毎週月曜日</p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Phone className="text-kamado-clay mr-3" />
                <h2 className="font-serif text-2xl">お問い合わせ</h2>
              </div>
              <a
                href="tel:03-1234-5678"
                className="text-xl hover:text-kamado-clay transition-colors"
              >
                03-1234-5678
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
