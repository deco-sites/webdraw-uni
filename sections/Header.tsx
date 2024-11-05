import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

export interface Logo {
  src?: ImageWidget;
  /** @description text alternative */
  alt?: string;
}

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Nav {
  logo?: Logo;
  navigation?: {
    rightLinks: {
      type: "Discord" | "Outros";
      label?: string;
      url?: string;
    }[];
    buttons: CTA[];
  };
}

export default function Header({
  logo = {
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  navigation = {
    rightLinks: [
      { type: "Discord", label: "Home", url: "/" },
      { type: "Outros", label: "About us", url: "/" },
      { type: "Outros", label: "Pricing", url: "/" },
      { type: "Outros", label: "Contact", url: "/" },
    ],
    buttons: [
      { id: "change-me-1", href: "/", text: "Change me", outline: false },
      { id: "change-me-2", href: "/", text: "Change me", outline: true },
    ],
  },
}: Nav) {
  return (
    <div
      style={{
        background: "white",
        backgroundImage: "radial-gradient(#C9CFCF 1.5px, transparent 0)",
        backgroundSize: "30px 30px",
        backgroundPosition: "-19px 0px",
      }}
      class="drawer drawer-end">
      <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

      {/* main content */}
      <div class="px-0 py-0">
        <div class="drawer drawer-center md:rounded-full">
          <div class="flex drawer-content items-center justify-between py-6">
            <a href="/">
              <div class="ml-16">
                <Image
                  src={logo.src || ""}
                  width={36}
                  height={36}
                  alt={logo.alt || ""}
                />
              </div>
            </a>
            <div class="hidden items-center justify-between lg:flex w-full">
              <ul class="flex justify-end flex-grow">
                {navigation.rightLinks.map((link, index) => (
                  <li class="flex flex-row items-center" key={`link-${index}`}>
                    {link.type === "Discord" && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4522 4.02249C13.8978 6.14491 14.6117 8.53893 14.3449 11.295C14.3437 11.3067 14.3377 11.3174 14.3281 11.3244C13.2333 12.1271 12.1727 12.6142 11.127 12.9373C11.1188 12.9398 11.1101 12.9396 11.102 12.9369C11.094 12.9342 11.087 12.929 11.082 12.9221C10.8404 12.5864 10.6209 12.2325 10.4286 11.8609C10.4175 11.839 10.4276 11.8127 10.4503 11.804C10.799 11.6729 11.1305 11.5157 11.4494 11.3295C11.4745 11.3148 11.4761 11.2789 11.4529 11.2616C11.3852 11.2114 11.3182 11.1587 11.254 11.106C11.242 11.0962 11.2258 11.0943 11.2122 11.1009C9.14199 12.0555 6.87416 12.0555 4.77944 11.1009C4.76584 11.0948 4.74968 11.0969 4.738 11.1065C4.674 11.1592 4.6068 11.2114 4.53976 11.2616C4.51656 11.2789 4.51848 11.3148 4.54376 11.3295C4.86264 11.5121 5.19416 11.6729 5.54232 11.8047C5.56488 11.8133 5.5756 11.839 5.5644 11.8609C5.37624 12.233 5.15672 12.5869 4.91064 12.9226C4.89992 12.9362 4.88232 12.9424 4.86568 12.9373C3.82488 12.6142 2.76425 12.1271 1.66953 11.3244C1.66041 11.3174 1.65385 11.3062 1.65289 11.2945C1.42985 8.91056 1.88441 6.49673 3.54376 4.02201C3.54776 4.01546 3.55384 4.01035 3.56088 4.00731C4.37736 3.63313 5.25208 3.35784 6.16632 3.20062C6.18296 3.19807 6.1996 3.20574 6.20824 3.22044C6.3212 3.42015 6.45032 3.67627 6.53768 3.88557C7.50136 3.73858 8.48008 3.73858 9.46391 3.88557C9.55127 3.68074 9.67591 3.42015 9.78839 3.22044C9.7924 3.21314 9.79861 3.2073 9.80614 3.20374C9.81366 3.20019 9.82213 3.19909 9.83031 3.20062C10.745 3.35832 11.6197 3.63361 12.4356 4.00731C12.4428 4.01035 12.4487 4.01546 12.4522 4.02249ZM7.0276 8.55523C7.03768 7.85048 6.52312 7.26731 5.8772 7.26731C5.23656 7.26731 4.72696 7.84536 4.72696 8.55523C4.72696 9.26494 5.24664 9.843 5.8772 9.843C6.518 9.843 7.0276 9.26494 7.0276 8.55523ZM11.2807 8.55523C11.2908 7.85048 10.7762 7.26731 10.1305 7.26731C9.48967 7.26731 8.98007 7.84536 8.98007 8.55523C8.98007 9.26494 9.49975 9.843 10.1305 9.843C10.7762 9.843 11.2807 9.26494 11.2807 8.55523Z" fill="#0D1717" />
                      </svg>)}
                    <a
                      href={link.url}
                      aria-label={link.label}
                      class="link text-sm font-medium no-underline hover:underline py-3 pr-3 pl-2"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul class="flex gap-2 mx-4">
                {navigation.buttons?.map((item) => (
                  <li key={item.id || item.text}>
                    <a
                      style={{
                        minHeight: "2.5rem",
                        height: "2.5rem"
                      }}
                      id={item.id}
                      href={item.href}
                      target={item.href.includes("http") ? "_blank" : "_self"}
                      class={`rounded-full font-bold btn px-4 ${item.outline ? "bg-white" : "btn-primary text-white"}`}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <label
              htmlFor="mobile-drawer-nav"
              class="flex lg:hidden btn btn-ghost drawer-button"
              style={{
                minHeight: "fit-content",
                height: "fit-content"
              }}
            >
              <Icon id="Bars3" size={24} strokeWidth={0.1} />
            </label>
          </div>
        </div>
      </div>

      {/* sidebar */}
      <div class="drawer-side z-50 overflow-x-hidden">
        <label
          htmlFor="mobile-drawer-nav"
          aria-label="close sidebar"
          class="drawer-overlay"
        />

        <div class="flex flex-col gap-8 min-h-full w-80 bg-base-100 text-base-content">
          <a class="p-4" href="/">
            <Image
              src={logo.src || ""}
              width={100}
              height={28}
              alt={logo.alt || ""}
            />
          </a>

          <ul class="menu">
            {navigation.rightLinks.map((link, index) => (
              <li key={`mobile-link-${index}`}>
                <a href={link.url} aria-label={link.label}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul class="p-4 flex items-center gap-3">
            {navigation.buttons?.map((item) => (
              <li key={item.id || item.text}>
                <a
                  id={item.id}
                  href={item.href}
                  target={item.href.includes("http") ? "_blank" : "_self"}
                  class={`font-bold btn ${item.outline ? "btn-secondary" : "btn-primary text-white"}`}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}