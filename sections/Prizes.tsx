
interface PrizeCardProps {
  title: string;
  imageUrl: string;
  referralsRequired: number;
  isUnlocked?: boolean;
}

export default function PrizeGrid() {
  const prizes: PrizeCardProps[] = [
    { title: 'Capy buddy', imageUrl: '/images/capy.jpg', referralsRequired: 10, isUnlocked: true },
    { title: 'Capy buddy', imageUrl: '/images/capy.jpg', referralsRequired: 10 },
    { title: 'Capy buddy', imageUrl: '/images/capy.jpg', referralsRequired: 10 },
    { title: 'Capy buddy', imageUrl: '/images/capy.jpg', referralsRequired: 10 },
    { title: 'Capy buddy', imageUrl: '/images/capy.jpg', referralsRequired: 10 },
  ];

  return (
    <div class="bg-white py-10 px-4">
      <h1 class="text-3xl font-bold text-center mb-6">
        Compartilhe mais <span class="text-green-600">e ganhe prêmios</span>
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {prizes.map((prize, index) => (
          <div key={index} class="relative border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg">
            {prize.isUnlocked && (
              <div class="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                Prêmio Liberado
              </div>
            )}
            <img src={prize.imageUrl} alt={prize.title} class="w-full h-40 object-cover mb-4 rounded-md" />
            <h2 class="text-green-600 font-semibold text-lg mb-1">{prize.referralsRequired} referrals</h2>
            <p class="text-gray-800 font-bold text-md">{prize.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}