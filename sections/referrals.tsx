import type { FunctionalComponent } from 'preact';

interface University {
  name: string;
  abbreviation: string;
  score: number;
}

interface Props {
  maxScore?: number;
  universities?: University[];
}

const Referrals: FunctionalComponent<Props> = ({
  maxScore = 500,
  universities = [
    { name: 'Universidade Federal do Paraná', abbreviation: 'UFPR', score: 1230 },
    { name: 'Universidade Federal do Ceará', abbreviation: 'UFC', score: 1198 },
    { name: 'Universidade Federal do Rio de Janeiro', abbreviation: 'UFRJ', score: 897 },
    { name: 'Universidade de São Paulo', abbreviation: 'USP', score: 695 },
    { name: 'Universidade de Brasília', abbreviation: 'UnB', score: 593 },
    { name: 'Instituto Tecnológico de Aeronáutica', abbreviation: 'ITA', score: 491 },
    { name: 'Universidade Federal de Minas Gerais', abbreviation: 'UFMG', score: 389 },
  ],
}) => {
  return (
    <div class="max-w-full mx-16 p-8">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Referrals</h2>
      <div class="space-y-4">
        {universities.map((university) => (
          <div key={university.name} class="flex justify-between border-b border-gray-200 py-3">
            <div class="text-green-600 font-bold">
              {university.score}
              <span class="text-green-600 font-semibold text-sm">/{maxScore}</span>
            </div>
            <div class="text-right">
              <div class="text-gray-800 font-semibold">{university.name}</div>
              <div class="text-gray-500 text-sm">({university.abbreviation})</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Referrals;
