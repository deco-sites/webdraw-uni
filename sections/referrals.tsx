import type { FunctionalComponent } from "preact";

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
    {
      name: "Universidade Federal do Paraná",
      abbreviation: "UFPR",
      score: 1230,
    },
    { name: "Universidade Federal do Ceará", abbreviation: "UFC", score: 1198 },
    {
      name: "Universidade Federal do Rio de Janeiro",
      abbreviation: "UFRJ",
      score: 897,
    },
    { name: "Universidade de São Paulo", abbreviation: "USP", score: 695 },
    { name: "Universidade de Brasília", abbreviation: "UnB", score: 593 },
    {
      name: "Instituto Tecnológico de Aeronáutica",
      abbreviation: "ITA",
      score: 491,
    },
    {
      name: "Universidade Federal de Minas Gerais",
      abbreviation: "UFMG",
      score: 389,
    },
  ],
}) => {
  return (
    <div
      style={{
        backgroundImage: "radial-gradient(#C9CFCF 1.5px, transparent 0)",
        backgroundSize: "30px 30px",
        backgroundPosition: "-19px 0px",
      }}
      class="max-w-full p-8"
    >
      <div class="flex items-center flex-col pb-4 bg-base">
        <h2 class="text-6xl font-bold mb-6 text-center tracking-tighter text-secondary">
          Referrals
        </h2>
        <svg
          width="378"
          height="34"
          viewBox="0 0 378 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.70173 1.9872C59.1607 3.46287 116.519 4.4151 173.899 5.18666C218.424 5.78534 265.13 4.50336 309.999 6.87014C339.735 8.43866 251.912 10.9911 222.641 12.3476C158.231 15.3327 92.7034 15.2488 28.4907 18.6426C-19.7332 21.1913 126.645 22.8462 175.661 24.1584C239.44 25.8657 303.227 27.2363 367.041 29.3077C369.55 29.3891 372.391 28.8383 374.575 29.6974C381.814 32.5449 358.166 30.3918 349.924 30.595C315.654 31.44 281.278 31.5182 246.928 31.9731"
            stroke="#27AE6B"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <div class="space-y-4 md:px-8 lg:mx-24 xl:mx-36">
        {universities.map((university) => (
          <div
            key={university.name}
            class="flex text-2xl pl-2 justify-between tracking-tighter border-t border-secondary py-3"
          >
            <div class="text-green-600 tracking-tighter font-extrabold">
              {university.score}
              <span class="text-green-600 tracking-tighter font-semibold text-xl">
                <br />/{maxScore}
              </span>
            </div>
            <div class="text-right pr-2">
              <div class="text-[24px] md:text-[32px]">{university.name}</div>
              <div class="text-gray-500 text-[12px] md:text-[20px]">
                ({university.abbreviation})
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Referrals;
