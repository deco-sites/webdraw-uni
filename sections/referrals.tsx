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
    <div 
    style={{
      background: "white",
      backgroundImage: "radial-gradient(#C9CFCF 1.5px, transparent 0)",
      backgroundSize: "30px 30px",
      backgroundPosition: "-19px 0px",
    }} 
    class="max-w-full p-8">
      <h2 class="text-5xl font-bold mb-6 text-center text-gray-800">Referrals</h2>
      <div class="space-y-4 mx-24 xl:mx-36">
        {universities.map((university) => (
          <div key={university.name} class="flex text-2xl pl-2 justify-between border-t border-black py-3">
            <div class="text-green-600 font-extrabold">
              {university.score}
              <span class="text-green-600 font-semibold text-xl"><br />/{maxScore}</span>
            </div>
            <div class="text-right pr-2">
              <div class="text-[24px] md:text-[32px]">{university.name}</div>
              <div class="text-gray-500 text-[12px] md:text-[20px]">({university.abbreviation})</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Referrals;
