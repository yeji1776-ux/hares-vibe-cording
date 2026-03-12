import PageWrapper from '../components/layout/PageWrapper';

export default function YouTubePage() {
  return (
    <PageWrapper title="코드팩토리 유튜브" subtitle="Flutter & Dart 강의 채널">
      <div className="space-y-4">
        <a
          href="https://www.youtube.com/@codefactory_official"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-red-50 rounded-2xl p-4 text-center no-underline hover:bg-red-100 transition-colors"
        >
          <div className="text-4xl mb-2">📺</div>
          <h3 className="font-semibold text-red-600">코드팩토리 채널 바로가기</h3>
          <p className="text-sm text-gray-500 mt-1">YouTube에서 열기</p>
        </a>

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-3">추천 재생목록</h3>
          <div className="space-y-2">
            {[
              { title: 'Dart 기초 강의', emoji: '🎯' },
              { title: 'Flutter 입문', emoji: '💙' },
              { title: 'Flutter 실전 프로젝트', emoji: '🚀' },
            ].map((item) => (
              <a
                key={item.title}
                href="https://www.youtube.com/@codefactory_official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors no-underline"
              >
                <span className="text-xl">{item.emoji}</span>
                <span className="text-sm font-medium text-gray-700">{item.title}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div className="p-4 pb-2">
            <h3 className="font-semibold text-gray-800">최신 영상 미리보기</h3>
          </div>
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed?listType=user_uploads&list=codefactory_official"
              title="코드팩토리 유튜브"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
