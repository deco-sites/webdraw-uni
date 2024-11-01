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
      { label: "Home", url: "/" },
      { label: "About us", url: "/" },
      { label: "Pricing", url: "/" },
      { label: "Contact", url: "/" },
    ],
    buttons: [
      { id: "change-me-1", href: "/", text: "Change me", outline: false },
      { id: "change-me-2", href: "/", text: "Change me", outline: true },
    ],
  },
}: Nav) {
  return (
    <div class="drawer drawer-end">
      <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

      {/* main content */}
      <div class="px-0 py-0 md:py-6 md:px-16">
        <div class="container drawer drawer-center md:rounded-full">
          <div class="flex drawer-content items-center justify-between py-6">
            <a href="/">
              <div>
                <Image
                  src={logo.src || ""}
                  width={32}
                  height={32}
                  alt={logo.alt || ""}
                />
              </div>
            </a>
            <div class="hidden items-center justify-between lg:flex w-full">
              <ul class="flex justify-end flex-grow">
                {navigation.rightLinks.map((link, index) => (
                  <li key={`link-${index}`}>
                    <a
                      href={link.url}
                      aria-label={link.label}
                      class="link text-sm font-medium no-underline hover:underline p-3"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul class="flex gap-3 ml-8 mr-8">
                {navigation.buttons?.map((item) => (
                  <li key={item.id || item.text}>
                    <a
                      id={item.id}
                      href={item.href}
                      target={item.href.includes("http") ? "_blank" : "_self"}
                      class={`font-bold btn btn-sm px-4 ${item.outline ? "btn-secondary" : "btn-primary text-white"}`}
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