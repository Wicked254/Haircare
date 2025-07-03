import React, { useState } from 'react';
import type { JSX } from 'react/jsx-runtime';

type LessonType = 'link' | 'modal' | 'quiz';

type Lesson = {
  title: string;
  subtitle: string;
  img: string;
  link?: string;
  type: LessonType;
  content?: JSX.Element;
};

const generalQuiz = [
  {
    question: "How often do you moisturize your hair?",
    options: ["Daily", "Every few days", "Rarely"],
  },
  {
    question: "Do you use heat on your hair?",
    options: ["Yes, frequently", "Occasionally", "Never"],
  },
  {
    question: "How often do you deep condition?",
    options: ["Every week", "Once a month", "Never"],
  },
  {
    question: "Do you sleep with a satin bonnet or scarf?",
    options: ["Always", "Sometimes", "No"],
  },
  {
    question: "How often do you clarify your scalp?",
    options: ["Monthly", "Rarely", "Never"],
  },
  {
    question: "Do you trim your ends regularly?",
    options: ["Every 2-3 months", "Once or twice a year", "Never"],
  },
  {
    question: "What’s your typical wash day routine?",
    options: ["Cleanse + Deep condition + Moisturize", "Just shampoo + rinse", "I skip wash days often"],
  },
  {
    question: "Do you do protective styling?",
    options: ["Yes, regularly", "Sometimes", "Not really"],
  },
];

const lessons: Lesson[] = [
  {
    title: 'What is your hair type?',
    subtitle: 'Meet your curl cousins',
    img: '/components/assets/Hairtypes.jpg',
    link: '/hair-types',
    type: 'link',
  },
  {
    title: 'Porosity 101',
    subtitle: 'Does your hair drink water or stare at it?',
    img: '/components/assets/Porosity.jpg',
    type: 'modal',
    content: (
      <>
        <p className="mb-4">Hair porosity refers to your hair's ability to absorb and retain moisture.</p>
        <h5 className="font-semibold text-yellow-800 mb-2">Types of Porosity:</h5>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li><strong>Low Porosity:</strong> Water beads up and doesn’t absorb easily. Use lightweight, water-based products.</li>
          <li><strong>Medium Porosity:</strong> Hair absorbs moisture well and retains it. Minimal maintenance needed.</li>
          <li><strong>High Porosity:</strong> Absorbs quickly but loses moisture fast. Use leave-ins, oils, and protein treatments.</li>
        </ul>
        <h5 className="font-semibold text-yellow-800 mb-2">Quick Porosity Test:</h5>
        <p>Drop a clean strand of hair into a glass of water. If it sinks quickly, you have high porosity. If it floats, it's low.</p>
      </>
    ),
  },
  {
    title: 'Breakage Be Gone',
    subtitle: 'Why your hair is breaking + DIY fixes',
    img: '/components/assets/Diy.jpg',
    type: 'modal',
    content: (
      <>
        <p className="mb-4">Hair breakage is common but fixable with the right care.</p>
        <h5 className="font-semibold text-yellow-800 mb-2">Common Causes:</h5>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Lack of moisture</li>
          <li>Rough detangling or combing dry hair</li>
          <li>Excessive heat styling or chemical treatments</li>
        </ul>
        <h5 className="font-semibold text-yellow-800 mb-2">DIY Fixes:</h5>
        <ul className="list-disc list-inside space-y-1">
          <li>Deep condition weekly</li>
          <li>Use a satin bonnet at night</li>
          <li>Switch to finger detangling</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Protective Styles That Work',
    subtitle: 'Slay and protect',
    img: '/components/assets/workinghairstyles.jpg',
    type: 'modal',
    content: (
      <>
        <p className="mb-4">Protective styles help reduce breakage and retain length while letting you look fabulous.</p>
        <h5 className="font-semibold text-yellow-800 mb-2">Top Styles:</h5>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Braids (box braids, knotless)</li>
          <li>Twists (Marley, Senegalese)</li>
          <li>Low manipulation buns</li>
        </ul>
        <h5 className="font-semibold text-yellow-800 mb-2">Tips for Success:</h5>
        <ul className="list-disc list-inside space-y-1">
          <li>Don’t keep styles in longer than 6–8 weeks</li>
          <li>Moisturize your scalp weekly</li>
          <li>Protect your edges from tension</li>
        </ul>
      </>
    ),
  },
  {
    title: 'The Wash Day Ritual',
    subtitle: 'Make your wash day your spa day',
    img: '/components/assets/washdayritual.jpg',
    type: 'modal',
    content: (
      <>
        <p className="mb-4">Wash day is your hair’s reset button. Make it nourishing and enjoyable.</p>
        <h5 className="font-semibold text-yellow-800 mb-2">Step-by-Step:</h5>
        <ol className="list-decimal list-inside mb-4 space-y-1">
          <li>Detangle before washing</li>
          <li>Cleanse with a sulfate-free shampoo or clay wash</li>
          <li>Condition + detangle with fingers or wide-tooth comb</li>
          <li>Deep condition under heat (30 mins)</li>
          <li>Moisturize + seal with oil or butter</li>
          <li>Style in a low-manipulation or protective style</li>
        </ol>
        <p>💡 Tip: Play your favorite music and light a candle — make wash day feel like self-care, not a chore!</p>
      </>
    ),
  },
];

export default function HairSchoolPreview() {
  const [openLesson, setOpenLesson] = useState<Lesson | null>(null);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const handleQuizAnswer = (answer: string) => {
    setQuizAnswers((prev) => [...prev, answer]);
    if (quizStep < generalQuiz.length - 1) {
      setQuizStep((prev) => prev + 1);
    } else {
      setOpenLesson(null);
      setTimeout(() => setShowQuizResult(true), 300);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setShowQuizResult(false);
  };

  return (
    <section className="py-20 bg-yellow-50" id="hair-school">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-900 mb-2">
          Hair School: Learn to Love Your Crown
        </h2>
        <h3 className="text-xl md:text-2xl text-yellow-800 mb-4 font-semibold">
          Because your hair deserves answers and applause
        </h3>
        <p className="text-gray-700 max-w-3xl mb-12">
          Most girls are never taught how to care for their natural hair — we're here to change that. Nywele Nation exists to teach, empower, and affirm every 4C queen. Whether you’re starting fresh or reclaiming your crown, this space is yours.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson) => {
            if (lesson.type === 'link') {
              return (
                <a key={lesson.title} href={lesson.link} className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition bg-white">
                  <div className="aspect-video overflow-hidden">
                    <img src={lesson.img} alt={lesson.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-yellow-800 group-hover:text-yellow-600 transition-colors">{lesson.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{lesson.subtitle}</p>
                  </div>
                </a>
              );
            }
            // Default for modal lessons
            return (
              <button
                key={lesson.title}
                onClick={() => setOpenLesson(lesson)}
                className="text-left group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition bg-white"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={lesson.img} alt={lesson.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-yellow-800 group-hover:text-yellow-600 transition-colors">{lesson.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{lesson.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* 2. Add the quiz button at the bottom */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => {
              setOpenLesson({ type: 'quiz', title: '', subtitle: '', img: '' });
              resetQuiz();
            }}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition"
          >
            🎯 Take the Hair Health Quiz
          </button>
        </div>
      </div>

      {/* Modal */}
      {openLesson?.type === 'modal' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setOpenLesson(null)} className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl font-bold">×</button>
            <h4 className="text-2xl font-bold text-yellow-800 mb-4">{openLesson.title}</h4>
            {openLesson.content}
          </div>
        </div>
      )}

      {/* Quiz Question */}
      {openLesson?.type === 'quiz' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button onClick={() => setOpenLesson(null)} className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl font-bold">×</button>
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">Quick Hair Habits Quiz</h2>
            <p className="mb-4 font-semibold text-gray-800">{generalQuiz[quizStep].question}</p>
            <div className="flex flex-col gap-2">
              {generalQuiz[quizStep].options.map((opt) => (
                <button key={opt} onClick={() => handleQuizAnswer(opt)} className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-4 py-2 rounded transition">{opt}</button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Quiz Results */}
      {showQuizResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 sm:p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-xs sm:max-w-md p-4 sm:p-6 relative text-center max-h-[90vh] overflow-y-auto">
            <button
              onClick={resetQuiz}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              ×
            </button>
            <h4 className="text-2xl font-bold text-yellow-800 mb-4">Your Hair Habits Summary</h4>
            <ul className="text-gray-700 mb-6 space-y-3 text-left list-disc list-inside">
              {quizAnswers.map((ans, i) => {
                const q = generalQuiz[i].question;
                let tip = "";

                if (q.includes("moisturize")) tip = ans === "Daily" ? "Great job keeping your hair hydrated!" : ans === "Every few days" ? "Try refreshing with a spray mix mid-week." : "Moisturize more frequently to reduce dryness.";
                else if (q.includes("heat")) tip = ans === "Yes, frequently" ? "Minimize heat or use a heat protectant." : ans === "Occasionally" ? "Use heat wisely and deep condition." : "Good job avoiding heat damage!";
                else if (q.includes("deep condition")) tip = ans === "Every week" ? "Awesome! Deep conditioning keeps hair soft." : "Try weekly deep conditioning to restore moisture.";
                else if (q.includes("satin")) tip = ans === "Always" ? "Great night care routine!" : "Switching to satin will reduce dryness and breakage.";
                else if (q.includes("clarify")) tip = ans === "Monthly" ? "Perfect — clarifying monthly is ideal!" : "Try monthly clarifying to remove buildup.";
                else if (q.includes("trim")) tip = ans === "Every 2-3 months" ? "Yes! Regular trims = healthy ends." : "Aim to trim every 2–3 months.";
                else if (q.includes("wash day")) tip = ans.includes("Deep") ? "Well-rounded wash day routine!" : "Add deep conditioning to nourish your strands.";
                else if (q.includes("protective")) tip = ans === "Yes, regularly" ? "Protective styles help retain length!" : "Try them for less breakage and more growth.";

                return (
                  <li key={i}>
                    <span className="font-medium">{q}</span>: {ans}
                    <br />
                    <span className="text-sm italic text-gray-600">{tip}</span>
                  </li>
                );
              })}
            </ul>
            <button
              onClick={resetQuiz}
              className="bg-yellow-600 text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
