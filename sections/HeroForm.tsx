// import type { ImageWidget } from "apps/admin/widgets.ts";
// import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Social {
  network: "Facebook" | "Instagram" | "Linkedin" | "X - Twitter";
  href: string;
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
  social?: Social[];
  shareLink?: string;
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
  shareLink = 'https://webdraw.ai/am452-sdc',
  social = [
    { network: "Facebook", href: "" },
    { network: "Instagram", href: "" },
    { network: "X - Twitter", href: "" },
    { network: "Linkedin", href: "" },
  ],
}: Props) {
  return (
    <div
      style={{
        backgroundImage: `url("data:image/svg+xml,`,
        backgroundRepeat: "round",
      }}
    >
      <nav class="container mx-auto mx-4">
        <div class="flex flex-col items-center gap-8">
          <div
            class="text-center py-36 md:pt-20 md:pb-28"
          >
            <div
              class={`mx-6 lg:mx-auto lg:w-full space-y-4 gap-4 flex flex-col items-center justify-center lg:max-w-3xl`}
            >
              <div
                class="inline-block text-[32px] md:text-[64px] lg:text-[80px] font-semibold"
                style={{
                  lineHeight: 0.9
                }}
                dangerouslySetInnerHTML={{
                  __html: title,
                }}
              >
              </div>
              <p class="leading-[150%] text-accent">
                {description}
              </p>
              <div class="flex items-center space-x-3 bg-white rounded-full shadow-md p-4 px-6 mb-4">
                <span class="text-gray-600 truncate">{shareLink}</span>
                <button
                  onClick={() => navigator.clipboard.writeText(shareLink)}
                  class="bg-green-500 text-white p-2 rounded-full focus:outline-none"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18C8.45 18 7.97917 17.8042 7.5875 17.4125C7.19583 17.0208 7 16.55 7 16V4C7 3.45 7.19583 2.97917 7.5875 2.5875C7.97917 2.19583 8.45 2 9 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H9ZM9 16H18V4H9V16ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6H5V20H16V22H5Z" fill="#F6F7F7" />
                  </svg>
                </button>
              </div>
              <div class="flex gap-3">
                {social?.map((item) => (
                  <a class="block" href={item.href} target="_blank">
                    {item.network == "Facebook" && (
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 12.3311C22 6.77453 17.5229 2.27002 12 2.27002C6.47715 2.27002 2 6.77453 2 12.3311C2 17.3528 5.65684 21.5152 10.4375 22.27V15.2394H7.89844V12.3311H10.4375V10.1145C10.4375 7.59298 11.9305 6.20014 14.2146 6.20014C15.3088 6.20014 16.4531 6.39665 16.4531 6.39665V8.87263H15.1922C13.95 8.87263 13.5625 9.64824 13.5625 10.4439V12.3311H16.3359L15.8926 15.2394H13.5625V22.27C18.3432 21.5152 22 17.353 22 12.3311Z"
                          fill="#18181B"
                        />
                      </svg>
                    )}
                    {item.network == "Instagram" && (
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 3.27002H8C5.23858 3.27002 3 5.5086 3 8.27002V16.27C3 19.0314 5.23858 21.27 8 21.27H16C18.7614 21.27 21 19.0314 21 16.27V8.27002C21 5.5086 18.7614 3.27002 16 3.27002ZM19.25 16.27C19.2445 18.0626 17.7926 19.5145 16 19.52H8C6.20735 19.5145 4.75549 18.0626 4.75 16.27V8.27002C4.75549 6.47737 6.20735 5.02551 8 5.02002H16C17.7926 5.02551 19.2445 6.47737 19.25 8.27002V16.27ZM16.75 8.52002C17.3023 8.52002 17.75 8.0723 17.75 7.52002C17.75 6.96774 17.3023 6.52002 16.75 6.52002C16.1977 6.52002 15.75 6.96774 15.75 7.52002C15.75 8.0723 16.1977 8.52002 16.75 8.52002ZM12 7.77002C9.51472 7.77002 7.5 9.78474 7.5 12.27C7.5 14.7553 9.51472 16.77 12 16.77C14.4853 16.77 16.5 14.7553 16.5 12.27C16.5027 11.0757 16.0294 9.92959 15.1849 9.0851C14.3404 8.24061 13.1943 7.76736 12 7.77002ZM9.25 12.27C9.25 13.7888 10.4812 15.02 12 15.02C13.5188 15.02 14.75 13.7888 14.75 12.27C14.75 10.7512 13.5188 9.52002 12 9.52002C10.4812 9.52002 9.25 10.7512 9.25 12.27Z"
                          fill="#18181B"
                        />
                      </svg>
                    )}
                    {item.network == "Linkedin" && (
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.5 3.27002C3.67157 3.27002 3 3.94159 3 4.77002V19.77C3 20.5984 3.67157 21.27 4.5 21.27H19.5C20.3284 21.27 21 20.5984 21 19.77V4.77002C21 3.94159 20.3284 3.27002 19.5 3.27002H4.5ZM8.52076 7.27274C8.52639 8.22899 7.81061 8.81821 6.96123 8.81399C6.16107 8.80977 5.46357 8.17274 5.46779 7.27415C5.47201 6.42899 6.13998 5.74977 7.00764 5.76946C7.88795 5.78915 8.52639 6.43462 8.52076 7.27274ZM12.2797 10.0318H9.75971H9.7583V18.5916H12.4217V18.3919C12.4217 18.012 12.4214 17.632 12.4211 17.2519C12.4203 16.2381 12.4194 15.2232 12.4246 14.2097C12.426 13.9636 12.4372 13.7077 12.5005 13.4728C12.7381 12.5953 13.5271 12.0286 14.4074 12.1679C14.9727 12.2564 15.3467 12.5841 15.5042 13.1171C15.6013 13.4503 15.6449 13.8089 15.6491 14.1563C15.6605 15.2039 15.6589 16.2515 15.6573 17.2992C15.6567 17.669 15.6561 18.039 15.6561 18.4088V18.5902H18.328V18.3849C18.328 17.9329 18.3278 17.481 18.3275 17.0291C18.327 15.8996 18.3264 14.7701 18.3294 13.6402C18.3308 13.1297 18.276 12.6263 18.1508 12.1327C17.9638 11.3986 17.5771 10.7911 16.9485 10.3524C16.5027 10.0402 16.0133 9.83912 15.4663 9.81662C15.404 9.81403 15.3412 9.81064 15.2781 9.80723C14.9984 9.79211 14.7141 9.77675 14.4467 9.83068C13.6817 9.98396 13.0096 10.3341 12.5019 10.9514C12.4429 11.0222 12.3852 11.0941 12.2991 11.2014L12.2797 11.2257V10.0318ZM5.68164 18.5944H8.33242V10.0373H5.68164V18.5944Z"
                          fill="#18181B"
                        />
                      </svg>
                    )}
                    {item.network == "X - Twitter" && (
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.1761 4.27002H19.9362L13.9061 11.0474L21 20.27H15.4456L11.0951 14.6766L6.11723 20.27H3.35544L9.80517 13.0208L3 4.27002H8.69545L12.6279 9.38264L17.1761 4.27002ZM16.2073 18.6454H17.7368L7.86441 5.8093H6.2232L16.2073 18.6454Z"
                          fill="#18181B"
                        />
                      </svg>
                    )}
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
