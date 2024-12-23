import { Collapse } from "./Collapse.tsx";

/** @titleBy title */
export interface Question {
  title: string;
  /** @format html */
  answer: string;
}

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  title?: string;
  titlePosition: "aside" | "column";
  description?: string;
  cta?: CTA;
  questions: Question[];
}

function Faq({ questions, title, titlePosition, description, cta }: Props) {
  return (
    <div
      id="faq"
      class="flex flex-col items-center gap-4 py-16 md:px-16 lg:px-0"
      style={{
        backgroundImage: "radial-gradient(#C9CFCF 1.5px, transparent 0)",
        backgroundSize: "30px 30px",
        backgroundPosition: "-19px -19px"
      }}>
      <div class="bg-neutral/50 md:px-8 lg:px-32 py-16 border border-info rounded-lg">
        <div class="flex flex-col items-center">
          <p class="text-4xl tracking-tighter font-bold leading-snug">
            {title}
          </p>
          <p class="text-accent tracking-tighter text-md py-4">
            {description}
          </p>
        </div>
        <div
          class={`flex ${titlePosition === "aside"
            ? "flex-row justify-between items-start max-lg:flex-wrap"
            : "flex-col items-center justify-center"
            } w-full max-w-3xl pb-8`}
        >
          <div class="flex flex-col w-full gap-3">
            {questions.map(({ title, answer }, index) => (
              <div
                key={index}
                class="border-2 border-transparent transition-all duration-300"
              >
                <Collapse title={title}>
                  <div
                    class="mt-4 text-secondary leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
                </Collapse>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Faq;
