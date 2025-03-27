import React, { useEffect, useState, useRef } from 'react';
import { surahNames, surahPdfs, sectionAudio } from './Data';

const Quran = ({ activeSurahIndex, showSurah, closeSurah }) => {
  const firstTenSectionImages = [
    "img/mostafa.jpg",
    "img/abdoo.jpg",
    "img/Sedeq.jpg",
    "img/hosery.jpg",
    "img/bana.jpg",
    "img/agmy1.jpg",
    "img/sodes.jpg",
    "img/moeqlyi.jpeg",
    "img/bloshy . jpg",
    "/img/mshary.jpg",
  ];
  const sectionImages = Array(114).fill(firstTenSectionImages);

  const [isLoading, setIsLoading] = useState(true);
  const audioRefs = useRef([]); // لتخزين مراجع عناصر الصوت

  const checkResourcesLoaded = () => {
    if (activeSurahIndex !== null) {
      const currentSurahImages = sectionImages[activeSurahIndex];
      const currentSurahAudio = sectionAudio[activeSurahIndex];
      const currentSurahPdf = surahPdfs[activeSurahIndex];

      if (
        currentSurahImages &&
        currentSurahAudio &&
        currentSurahAudio.length > 0 &&
        currentSurahPdf
      ) {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    checkResourcesLoaded();

    const timeoutId = setTimeout(() => {
      if (isLoading) {
        checkResourcesLoaded();
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [activeSurahIndex]);

  // دالة لإيقاف جميع المقاطع الصوتية باستثناء المقطع الحالي
  const handlePlay = (currentIndex) => {
    audioRefs.current.forEach((audio, index) => {
      if (index !== currentIndex && audio) {
        audio.pause();
        audio.currentTime = 0; // إعادة المقطع إلى البداية (اختياري)
      }
    });
  };

  return (
    <div>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-70 z-50">
          <div className="text-white text-2xl font-bold mb-4">جارٍ التحميل...</div>
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-yellow-500"></div>
        </div>
      )}

      {activeSurahIndex === null && !isLoading && (
        <div className="mt-4 p-4 bg-white bg-opacity-10 text-center shadow-md">
          <h2 className="text-2xl mb-4 text-white">القرآن الكريم</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {surahNames.map((surah, index) => (
              <div
                key={index}
                className="section p-2 bg-gray-900 bg-opacity-80 rounded cursor-pointer text-center text-white"
                onClick={() => showSurah(index)}
              >
                {surah}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSurahIndex !== null && !isLoading && (
        <div className="mt-4 p-4 bg-white bg-opacity-10 shadow-md relative">
          <button className="close-button" onClick={closeSurah}>
            ×
          </button>
          <h2 className="text-2xl text-white mb-4 text-center">{surahNames[activeSurahIndex]}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4">
            {sectionImages[activeSurahIndex].map((image, index) => (
              <div key={index} className="relative cursor-pointer">
                <img
                  src={image}
                  alt={`Section ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg aspect-[16/9]"
                />
                <audio
                  controls
                  className="w-full mt-2"
                  ref={(el) => (audioRefs.current[index] = el)} // ربط العنصر بـ ref
                  onPlay={() => handlePlay(index)} // تشغيل المقطع الحالي وإيقاف الباقي
                >
                  <source src={sectionAudio[activeSurahIndex][index]} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center h-screen">
            <iframe
              src={`https://drive.google.com/file/d/${surahPdfs[activeSurahIndex].split('/d/')[1].split('/view')[0]}/preview`}
              width="95%"
              height="600px"
              className="border mx-auto block"
              title="Surah Preview"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quran;