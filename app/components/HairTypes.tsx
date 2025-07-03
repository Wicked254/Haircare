import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const hairData = [
	{
		type: 'Type 1',
		description: 'Straight hair, usually shiny and hard to curl.',
		subtypes: [],
		img: '/components/assets/type1.jpg',
	},
	{
		type: 'Type 2',
		description: 'Wavy hair, forms an S shape and is prone to frizz.',
		subtypes: ['2A', '2B', '2C'],
		img: '/components/assets/type2.jpg',
	},
	{
		type: 'Type 3',
		description: 'Curly hair with defined curls and lots of volume.',
		subtypes: ['3A', '3B', '3C'],
		img: '/components/assets/type3.jpg',
	},
	{
		type: 'Type 4',
		description:
			'Coily or kinky hair with tight curls or zig-zag patterns — rich, fragile, and beautiful.',
		subtypes: ['4A', '4B', '4C'],
		img: '/components/assets/type4.jpg',
		isHighlighted: true,
	},
];

const quizQuestions = [
	{
		category: 'curl',
		question: 'How does your hair look after air drying?',
		options: [
			{ text: 'Very straight', value: 'Type 1' },
			{ text: 'Slightly wavy', value: 'Type 2' },
			{ text: 'Defined curls', value: 'Type 3' },
			{ text: 'Tight coils or zig-zags', value: 'Type 4' },
		],
	},
	{
		category: 'curl',
		question: 'How does your hair feel to the touch?',
		options: [
			{ text: 'Smooth and fine', value: 'Type 1' },
			{ text: 'Soft with slight waves', value: 'Type 2' },
			{ text: 'Springy with bounce', value: 'Type 3' },
			{ text: 'Dense and cotton-like', value: 'Type 4' },
		],
	},
	{
		category: 'porosity',
		question: 'How does your hair absorb water?',
		options: [
			{ text: 'Water sits on top', value: 'Low Porosity' },
			{ text: 'Absorbs after a while', value: 'Medium Porosity' },
			{ text: 'Absorbs instantly', value: 'High Porosity' },
		],
	},
	{
		category: 'porosity',
		question: 'How long does your hair take to dry after washing?',
		options: [
			{ text: 'A very long time', value: 'Low Porosity' },
			{ text: 'Moderate drying time', value: 'Medium Porosity' },
			{ text: 'Dries very fast', value: 'High Porosity' },
		],
	},
];

const getTopResult = (scores: Record<string, number>) => {
	const entries = Object.entries(scores);
	if (entries.length === 0) return 'N/A';
	return entries.sort((a, b) => b[1] - a[1])[0][0];
};

export default function HairTypes() {
	const navigate = useNavigate();
	const [showQuiz, setShowQuiz] = useState(false);
	const [step, setStep] = useState(0);
	const [scores, setScores] = useState<{
		curlScore: Record<string, number>;
		porosityScore: Record<string, number>;
	}>({
		curlScore: {},
		porosityScore: {},
	});
	const [showResult, setShowResult] = useState(false);

	const handleOption = (option: any, category: string) => {
		const key = category === 'curl' ? 'curlScore' : 'porosityScore';
		setScores((prev) => ({
			...prev,
			[key]: {
				...prev[key],
				[option.value]: (prev[key][option.value] || 0) + 1,
			},
		}));

		if (step + 1 < quizQuestions.length) {
			setStep(step + 1);
		} else {
			setShowResult(true);
		}
	};

	const resetQuiz = () => {
		setStep(0);
		setScores({ curlScore: {}, porosityScore: {} });
		setShowResult(false);
		setShowQuiz(false);
	};

	return (
		<section className="py-16 bg-yellow-50 min-h-screen">
			<div className="max-w-6xl mx-auto px-4 md:px-8">
				{/* Back Button */}
				<button
					onClick={() => navigate('/')}
					className="mb-6 flex items-center text-yellow-700 hover:text-yellow-900 font-semibold transition"
				>
					<svg
						className="w-5 h-5 mr-2"
						fill="none"
						stroke="currentColor"
						strokeWidth={2}
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
					Back
				</button>

				<h1 className="text-3xl md:text-5xl font-extrabold text-yellow-900 mb-6 text-center">
					What’s Your Curl Type?
				</h1>
				<p className="text-center text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
					Understanding your hair type is the first step to learning how to care
					for it. Meet your curl cousins and discover what makes your crown
					unique.
				</p>

				<div className="grid gap-10 md:grid-cols-2">
					{hairData.map((item) => (
						<div
							key={item.type}
							className={`bg-white rounded-lg shadow-md overflow-hidden border ${
								item.isHighlighted
									? 'border-yellow-600'
									: 'border-gray-200'
							}`}
						>
							<img
								src={item.img}
								alt={item.type}
								className="w-full h-60 object-cover"
							/>
							<div className="p-6">
								<h2 className="text-2xl font-bold text-yellow-800 mb-2">
									{item.type}
								</h2>
								<p className="text-gray-700 mb-4">{item.description}</p>
								{item.subtypes.length > 0 && (
									<div className="flex flex-wrap gap-2">
										{item.subtypes.map((sub) => (
											<span
												key={sub}
												className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium"
											>
												{sub}
											</span>
										))}
									</div>
								)}
							</div>
						</div>
					))}
				</div>

				{/* Call to Action */}
				<div className="mt-16 text-center">
					<h3 className="text-xl font-semibold mb-2">
						Still unsure of your type?
					</h3>
					<button
						className="bg-yellow-600 text-white px-6 py-3 rounded-full hover:bg-yellow-700 transition"
						onClick={() => setShowQuiz(true)}
					>
						Take the Porosity & Curl Type Quiz
					</button>
				</div>
			</div>

			{/* Quiz Modal */}
			{showQuiz && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
					<div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 relative">
						<button
							onClick={resetQuiz}
							className="absolute top-2 right-2 text-gray-500 hover:text-yellow-700 text-2xl font-bold"
							aria-label="Close"
						>
							&times;
						</button>

						{!showResult ? (
							<>
								<h2 className="text-xl font-bold mb-4 text-yellow-800">
									{quizQuestions[step].question}
								</h2>
								<div className="flex flex-col gap-4">
									{quizQuestions[step].options.map((option, idx) => (
										<button
											key={idx}
											onClick={() =>
												handleOption(option, quizQuestions[step].category)
											}
											className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-4 py-2 rounded transition text-left"
										>
											{option.text}
										</button>
									))}
								</div>
							</>
						) : (
							<div className="text-center">
								<h2 className="text-2xl font-bold text-yellow-800 mb-4">
									Your Results
								</h2>
								<p className="mb-2">
									<span className="font-semibold">Curl Type:</span>{' '}
									{getTopResult(scores.curlScore)}
								</p>
								<p className="mb-6">
									<span className="font-semibold">Porosity:</span>{' '}
									{getTopResult(scores.porosityScore)}
								</p>
								<button
									onClick={resetQuiz}
									className="bg-yellow-600 text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition"
								>
									Retake Quiz
								</button>
							</div>
						)}
					</div>
				</div>
			)}
		</section>
	);
}
