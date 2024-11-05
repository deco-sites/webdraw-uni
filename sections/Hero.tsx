// import type { ImageWidget } from "apps/admin/widgets.ts";
// import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */

  description?: string;
  // image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title = "Faça seu curso",
  description =
  "This text is fully editable and ready for your personal touch.",
  // image,
  placement = "left",
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
}: Props) {
  return (
    <div
      style={{
        background: "white",
        backgroundImage: "radial-gradient(#C9CFCF 1.5px, transparent 0)",
        backgroundSize: "30px 30px",
        backgroundPosition: "-19px -19px",
      }}
    >
      <nav class="container mx-auto mx-4 pb-[20px]">
        <div class="flex flex-col items-center gap-8">
          <div
            class="text-center py-36 md:py-32 xs:pt-56 xs:pb-34"
          >
            <div
              class={`mx-6 lg:mx-auto lg:w-full space-y-4 gap-4 flex flex-col items-center justify-center lg:max-w-3xl`}
            >
              <div
                class="inline-block text-[64px] md:text-[96px] font-bold"
                style={{
                  lineHeight: "86.4px"
                }}
                dangerouslySetInnerHTML={{
                  __html: title,
                }}
              >
              </div>
              <p style={{
                  lineHeight: "28.8px"
                }} class="leading-[150%] max-w-2xl text-accent">
                {description}
              </p>
              <div class="flex items-center gap-3">
                {cta?.map((item) => (
                  <a
                    key={item?.id}
                    id={item?.id}
                    href={item?.href}
                    target={item?.href.includes("http") ? "_blank" : "_self"}
                    class={`rounded-full font-bold btn btn-md btn-primary text-xl text-white px-12 py-7 content-center ${item.outline && "btn-outline"
                      }`}
                  >
                    {item?.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
