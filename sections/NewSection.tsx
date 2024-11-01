interface ReferralCardProps {
  score: number;
  total: number;
  university: string;
  referralCount: number;
}

export default function ReferralSection({
  score = 1230,
  total = 500,
  university = 'Harvard University',
  referralCount = 1,
}: ReferralCardProps) {
  return (
    <div class="bg-secondary p-6 rounded-lg shadow-md max-w-4xl mx-auto p-16 mb-24">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card de Pontuação */}
        <div class="bg-[#FAFAFA] border border-gray-200 rounded-lg p-12">
          <h2 class="text-green-600 border-b pb-4 border-[#C9CFCF] text-3xl font-bold mb-1">{score}<span class="text-gray-400 text-xl">/{total}</span></h2>
          <h3 class="text-2xl pt-4 font-bold text-gray-800 mb-2">{university}</h3>
          <p class="text-gray-500 text-sm">
            Com 500 sign-ups, seu curso desbloqueia um ano de acesso grátis! grátis!
          </p>
        </div>

        {/* Card de Referências */}
        <div class="bg-[#FAFAFA] border border-gray-200 rounded-lg p-12">
          <h2 class="text-green-600 border-b pb-4 border-[#C9CFCF] text-3xl font-bold mb-1">{referralCount.toString().padStart(2, '0')}</h2>
          <h3 class="text-2xl pt-4 font-bold text-gray-800 mb-2">Your Referrals</h3>
          <p class="text-gray-500 text-sm">Pessoas que se cadastraram através do seu link. Compartilhe mais para ganhar prêmios.</p>
        </div>
      </div>
    </div>
  );
}