
const Contact = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl md:text-5xl mb-12 text-center">ご予約・お問い合わせ</h1>
        
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            {/* お名前 */}
            <div>
              <label htmlFor="name" className="block font-medium mb-2">
                お名前
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-kamado-clay focus:ring-1 focus:ring-kamado-clay"
              />
            </div>

            {/* 電話番号 */}
            <div>
              <label htmlFor="phone" className="block font-medium mb-2">
                電話番号
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-kamado-clay focus:ring-1 focus:ring-kamado-clay"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label htmlFor="email" className="block font-medium mb-2">
                メールアドレス
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-kamado-clay focus:ring-1 focus:ring-kamado-clay"
              />
            </div>

            {/* 予約日時 */}
            <div>
              <label htmlFor="datetime" className="block font-medium mb-2">
                ご予約希望日時
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="datetime-local"
                id="datetime"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-kamado-clay focus:ring-1 focus:ring-kamado-clay"
              />
            </div>

            {/* 人数 */}
            <div>
              <label htmlFor="people" className="block font-medium mb-2">
                人数
                <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                id="people"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-kamado-clay focus:ring-1 focus:ring-kamado-clay"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num}名
                  </option>
                ))}
                <option value="9">9名以上（要相談）</option>
              </select>
            </div>

            {/* お問い合わせ内容 */}
            <div>
              <label htmlFor="message" className="block font-medium mb-2">
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-kamado-clay focus:ring-1 focus:ring-kamado-clay"
              ></textarea>
            </div>

            {/* 送信ボタン */}
            <button
              type="submit"
              className="w-full bg-kamado-clay text-white py-3 rounded-lg hover:bg-kamado-earth transition-colors"
            >
              送信する
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
