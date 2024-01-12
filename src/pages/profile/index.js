function index() {
  return (
    <dl className="my-6">
      <h1 className="text-xl font-bold mb-6">プロフィール</h1>

      <hr />
      <div className="m-10 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
        <dt className="mb-2 text-sm font-bold  sm:mb-0">Account</dt>{" "}
        <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
          <div class="space-y-3 text-lg sm:space-y-1 sm:text-sm">
            <p>Twitter</p>
            <p>GitHub</p>
            <p>Zenn</p>
          </div>
        </dd>
      </div>
      <hr />
      <div className="flex m-10 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
        <dt className="mb-2 text-sm font-bold  sm:mb-0">Job</dt>{" "}
        <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
          <p>Frontend Engineer</p>
        </dd>
      </div>
      <hr />
      <div className="flex m-10 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
        <dt className="mb-2 text-sm font-bold  sm:mb-0">About</dt>
        <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
          <p>
            Next.js（React）、TypeScript。OOP、TDDとペア・モブプロでテストを書きつつ、クリーンな設計のコードを目指すのが好き。
          </p>
        </dd>
      </div>
      <hr />
      <div className="flex m-10 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
        <dt className="mb-2 text-sm font-bold  sm:mb-0"> Articles</dt>
        <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
          <p>ソフトウェアデザイン 2022年3月号(Amazon)</p>
          <p>第2特集「そろそろはじめるテスト駆動開発」の第2、3章を執筆</p>
          <p>寄稿の経緯を記事にしました↓ 「TDDの勉強会に参加したらSoftware</p>
          <p>Designに寄稿することになった話」</p>
        </dd>
      </div>
    </dl>
  );
}

export default index;
