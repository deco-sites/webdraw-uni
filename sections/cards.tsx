export interface card {
  icon: "Register" | "Share" | "Earn";
  title: string;
  description: string;
}

export interface Props {
  title?: string;
  cards?: card[];
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function BlogPosts({
  title = "Here's a component for you to showcase your blogposts",
  cards = [
    {
      icon: "Register",
      title: "Passo 1",
      description:
        "Cadastre-se agora e ganhe 1 mês inteiro de acesso gratuito ao Webdraw Pro.",
    },
    {
      icon: "Share",
      title: "Passo 2",
      description:
        "Convide seus amigos para aumentar a pontuação do seu curso e concorrer a prêmios exclusivos.",
    },
    {
      icon: "Earn",
      title: "Passo 3",
      description:
        "Com 500 sign-ups, seu curso desbloqueia um ano de acesso grátis ao Webdraw Pro!",
    },
  ],
}: Props) {
  return (
    <div
      class="flex flex-col items-center px-3 sm:px-8 py-40"
      style={{
        background: "white",
        backgroundImage: "radial-gradient(#C9CFCF 1.5px, transparent 0)",
        backgroundSize: "30px 30px",
        backgroundPosition: "-19px -19px",
      }}
    >
      <div class="relative w-full z-10">
        <div class="absolute -left-40 -top-16 md:-left-36 md:-top-20 lg:-left-20 lg:-top-16">
          <svg
            width="350"
            height="299"
            viewBox="0 0 350 299"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M193.989 124.594C194.266 118.414 193.823 112.137 192.572 105.771C188.188 83.4305 163.697 67.8165 136.944 62.9139C110.201 58.0121 81.7449 63.9286 69.8258 82.4391C63.0084 93.0223 61.6033 102.406 63.6602 110.507C65.709 118.566 71.2863 125.474 79.0785 131.059C100.805 146.618 140.147 151.842 158.522 146.948C167.021 144.679 175.36 141.835 183.515 138.499C177.52 163.116 159.24 185.698 135.444 205.616C83.7265 248.908 5.61808 279.488 -36.5554 289.942C-38.8213 290.503 -40.1951 292.794 -39.6335 295.06C-39.072 297.326 -36.7814 298.711 -34.5155 298.149C8.49277 287.488 88.1252 256.25 140.865 212.099C168.111 189.295 188.115 163 192.944 134.405C253.141 106.642 304.394 52.8741 348.168 7.66313C349.793 5.99564 349.748 3.31122 348.07 1.68499C346.391 0.0694191 343.718 0.104845 342.091 1.78299C300.103 45.1435 251.294 96.79 193.989 124.594ZM185.238 128.621C185.965 121.698 185.697 114.609 184.272 107.389C180.48 88.0532 158.58 75.4652 135.42 71.2222C121.224 68.6267 106.435 69.2124 94.602 73.6894C87.1614 76.5009 80.9126 80.8459 76.9391 87.0232C71.7203 95.1253 70.2778 102.231 71.859 108.424C73.4377 114.66 77.9623 119.861 84.0018 124.179C103.8 138.364 139.616 143.232 156.341 138.775C166.207 136.148 175.831 132.717 185.238 128.621Z"
              fill="#9900E6"
            />
          </svg>
        </div>
      </div>

      <div
        style={{ width: "fit-content" }}
        class="sm:px-2 bg-[#FAFAFA] rounded-lg m-8 z-0"
      >
        <div
          style={{ width: "fit-content" }}
          class="flex flex-col text-left items-center justify-center justify-between md:py-6 lg:p-12 gap-x-6"
        >
          <p class="pl-4 py-4 text-5xl font-bold w-full tracking-tighter">{title}</p>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2 py-4 px-4 sm:p-4">
            {(cards || []).map((card) => (
              <div class="bg-white border border-[#C9CFCF] rounded-lg px-8 md:pt-6 md:pb-12 lg:pt-12 lg:pb-24 transition duration-300 hover:scale-95 hover:rotate-[-3deg]">
                <div class="px-6 pt-6 pb-2 space-y-4">
                  {card.icon === "Register" && (
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_4_407)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.01104 29.1385C4.10347 28.6855 2.74462 28.4724 15.3474 25.8879C21.6888 24.5824 32.1333 22.2376 38.901 21.0653C39.1341 21.03 39.3437 20.9035 39.4837 20.7136C39.6237 20.5237 39.6824 20.286 39.6469 20.0528C39.6117 19.8196 39.485 19.61 39.2952 19.4701C39.1053 19.3302 38.8677 19.2714 38.6346 19.3068C33.3056 19.9729 7.19422 23.8363 1.8387 26.181C0.373265 26.6873 0.000244141 27.4865 0.000244141 28.4991C0.760063 37.3844 2.13105 46.2068 4.10347 54.9036C4.1655 55.0983 4.29974 55.262 4.47862 55.3607C4.65747 55.4596 4.86739 55.486 5.06523 55.4348C5.26307 55.3836 5.43379 55.2588 5.54235 55.0855C5.65088 54.9124 5.68899 54.7044 5.64886 54.5039C4.33256 46.0999 3.45214 37.6335 3.01104 29.1385Z"
                          fill="#27AE6B"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M57.3654 34.6809C57.2982 34.506 57.1719 34.3604 57.0081 34.2694C56.8447 34.1782 56.6543 34.1476 56.4705 34.1825C56.2865 34.2172 56.1207 34.3156 56.0017 34.4604C55.8828 34.6049 55.8185 34.7868 55.8201 34.974C56.4329 38.8374 56.9391 42.3278 57.1257 44.0062C21.9018 50.2412 9.43222 53.918 7.99342 53.6516C7.77353 53.6332 7.55444 53.6956 7.37726 53.827C7.20012 53.9588 7.0771 54.1505 7.03132 54.3662C6.98553 54.5822 7.02009 54.8073 7.12857 54.9996C7.23705 55.1918 7.41193 55.3377 7.62041 55.4102C10.2848 56.023 58.0316 47.0172 59.0972 45.4452C59.6569 44.6457 58.6177 40.8622 57.3654 34.6809Z"
                          fill="#27AE6B"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M60.1098 9.28857C58.4578 8.64911 55.5272 7.983 54.3013 9.28857C51.2373 7.55671 48.5728 9.28857 46.7077 12.3793C46.3613 12.9389 45.2157 15.0437 44.4696 16.4825C43.7237 17.9213 43.457 18.2411 43.5104 18.7207C43.4944 18.8637 43.5197 19.0084 43.584 19.1372C43.6483 19.266 43.7483 19.3736 43.8723 19.4468C43.9963 19.52 44.1387 19.5558 44.2824 19.5499C44.4264 19.544 44.5653 19.4966 44.6829 19.4134C44.896 19.4134 47.9069 15.6832 48.0667 15.4701C49.532 13.6316 51.7701 9.87476 53.3954 10.9139C51.6976 13.5325 50.2354 16.2966 49.0259 19.1736C49.0259 19.4934 48.12 19.1736 53.7418 23.0904L54.5413 23.6232C52.4629 26.9272 45.8019 36.4658 45.1357 37.2917C44.4157 37.9669 43.5627 38.4842 42.6312 38.8106C41.9848 37.5765 41.5864 36.2277 41.4589 34.8405L48.3597 23.1969C48.4659 23.0132 48.4944 22.7949 48.4395 22.59C48.3845 22.3852 48.2504 22.2105 48.0667 22.1045C47.8829 21.9985 47.6645 21.9699 47.4597 22.0248C47.2549 22.0798 47.0803 22.2139 46.9741 22.3976C45.3755 25.062 39.1675 32.7357 38.7411 34.1744C38.5037 36.5842 39.1267 39.0005 40.4997 40.9954C40.8579 41.3106 41.2939 41.5237 41.7627 41.6128C42.2315 41.7018 42.7155 41.6634 43.164 41.5016C44.804 41.0413 46.3171 40.212 47.5872 39.077C48.7061 37.5317 56.2997 24.689 56.4064 24.0496C58.0051 23.6765 59.2573 21.6249 61.8685 18.2144C62.7944 17.0368 63.4987 15.7006 63.9467 14.2711C64.3464 11.5533 62.4546 10.2744 60.1098 9.28857ZM60.8026 14.1911C60.5896 14.8306 56.5128 22.3443 54.9141 21.3851L50.9976 18.9871C51.1573 18.4809 50.7045 19.5467 55.6336 12.1662C56.3797 11.0471 55.3138 10.9938 57.3922 11.5001C58.4821 11.7907 59.5234 12.2395 60.4829 12.8323C60.6864 12.9859 60.8299 13.2058 60.8883 13.454C60.9467 13.7021 60.9162 13.9629 60.8026 14.1911Z"
                          fill="#27AE6B"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M34.0785 43.5268C34.235 43.5049 34.3838 43.4446 34.5113 43.3516C34.639 43.2585 34.7417 43.1353 34.8102 42.9929C34.8787 42.8505 34.911 42.6934 34.9043 42.5356C34.8974 42.3777 34.8518 42.2238 34.7713 42.0878C34.4702 41.6926 34.0889 41.3657 33.6521 41.1286C32.5107 40.9606 31.3454 41.1564 30.3217 41.6884C29.6022 38.411 28.1635 35.8798 24.9928 36.759C23.754 37.2054 22.6565 37.974 21.8136 38.9857C20.9706 39.9972 20.4125 41.2153 20.1968 42.5142C19.8771 44.0596 19.3708 46.5374 20.9162 46.271C21.0258 46.2622 21.1322 46.23 21.2284 46.1766C21.3245 46.1233 21.4082 46.05 21.4738 45.9617C21.5394 45.8734 21.5853 45.7721 21.6087 45.6646C21.632 45.5572 21.6321 45.446 21.609 45.3385C21.7266 44.5556 21.8957 43.7812 22.1152 43.0204C22.4127 42.1993 22.8975 41.4585 23.5312 40.8574C24.1648 40.2561 24.9298 39.8108 25.7655 39.5566C26.7779 39.2902 27.4441 41.555 27.7638 42.5942C27.7638 42.9406 27.9769 44.699 29.1494 44.9121C29.3521 44.9702 29.5657 44.9814 29.7734 44.9444C29.9814 44.9076 30.1779 44.8236 30.3483 44.699C31.5606 44.2158 32.8075 43.8238 34.0785 43.5268Z"
                          fill="#27AE6B"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.1733 31.7499C20.0634 31.0571 18.8377 30.9237 24.9926 29.8848C25.2242 29.8395 25.429 29.7053 25.5634 29.5112C25.6978 29.3173 25.7511 29.0784 25.712 28.8456C25.6145 28.6101 25.4475 28.4099 25.2332 28.2717C25.019 28.1339 24.7677 28.0643 24.513 28.0728C21.0063 28.0869 17.509 28.4349 14.0684 29.112C11.5689 29.8344 9.12093 30.7245 6.74117 31.7765C6.65445 31.9069 6.60661 32.0592 6.60322 32.216C6.59983 32.3725 6.64103 32.5269 6.72202 32.6608C6.80303 32.7949 6.92047 32.9032 7.06069 32.9731C7.20087 33.0429 7.35805 33.0715 7.51386 33.0555C8.20661 32.9755 15.5338 31.8563 16.1733 31.7499Z"
                          fill="#27AE6B"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.9936 37.8248C7.72717 38.0645 7.62059 38.9704 8.7663 39.1568C11.1902 39.4035 13.629 38.8613 15.7205 37.6115C15.8344 37.5893 15.9428 37.5445 16.0395 37.4803C16.1361 37.4157 16.219 37.3331 16.2834 37.2363C16.3478 37.1397 16.3924 37.0312 16.4147 36.9173C16.437 36.8035 16.4365 36.6861 16.4132 36.5725C16.2001 35.0536 10.3117 35.9064 7.9936 37.8248Z"
                          fill="#27AE6B"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M38.9277 24.5559C36.2437 24.7582 33.5743 25.123 30.9343 25.6483C30.5482 25.7376 30.2122 25.9742 29.9981 26.3078C29.7842 26.6413 29.709 27.0452 29.7887 27.4334C31.4671 34.5209 31.8669 34.4676 35.4906 33.5617C35.6061 33.5441 35.717 33.5041 35.817 33.4438C35.9167 33.3836 36.0039 33.3041 36.0733 33.21C36.1426 33.1158 36.1927 33.0092 36.2207 32.8958C36.2487 32.7825 36.2541 32.6646 36.2365 32.5492C36.2191 32.4337 36.1791 32.3228 36.1186 32.2228C36.0583 32.1228 35.9789 32.0358 35.8847 31.9665C35.7909 31.8972 35.6842 31.847 35.5706 31.819C35.4573 31.791 35.3397 31.7857 35.2242 31.8033C34.5847 31.8033 33.8919 31.67 33.5722 31.8033C33.1191 28.5793 33.2258 29.3518 33.0391 28.3126C35.1442 27.6998 36.7695 27.034 39.2207 26.1812C39.4362 26.1424 39.6274 26.0195 39.7525 25.8396C39.8773 25.6597 39.9258 25.4375 39.8869 25.222C39.8479 25.0065 39.725 24.8152 39.5453 24.6903C39.3653 24.5654 39.1431 24.5171 38.9277 24.5559Z"
                          fill="#27AE6B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4_407">
                          <rect width="64" height="64" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                  {card.icon === "Share" && (<svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.2781 38.088C19.9948 38.1808 20.7205 38.1808 21.4373 38.088C22.1361 37.9853 22.8235 37.8157 23.4898 37.5816C24.983 37.0125 26.4124 36.2888 27.7549 35.4224C27.956 35.3192 28.1099 35.1427 28.1843 34.9293C28.2587 34.7157 28.248 34.4819 28.1547 34.276C28.0469 34.0795 27.8701 33.9299 27.6584 33.856C27.4467 33.7821 27.2152 33.7893 27.0085 33.8763C25.5929 34.3731 24.14 34.7565 22.6635 35.0224C21.7827 35.2032 20.8928 35.3365 19.9978 35.4224H18.665C20.2206 33.3843 21.1554 30.9408 21.3573 28.3848C21.8904 23.0536 19.2514 17.7222 13.067 17.1891C11.0795 17.1773 9.11765 17.6376 7.34272 18.532C5.56781 19.4264 4.03059 20.7294 2.85752 22.3338C1.54722 23.8715 0.764965 25.789 0.625808 27.8043C0.486651 29.8197 0.997939 31.8267 2.08447 33.5296C2.77325 34.5547 3.68443 35.4112 4.75013 36.0355L5.76309 36.5685C3.71832 38.6592 2.16961 41.1827 1.23145 43.9525C0.531072 46.1 0.127487 48.3331 0.0318978 50.5899C-0.0871432 53.8819 0.127202 57.1776 0.671659 60.4264C0.678064 60.5469 0.7092 60.6648 0.763131 60.7728C0.817064 60.8808 0.892637 60.9765 0.985149 61.0539C1.07766 61.1315 1.18514 61.1891 1.30089 61.2232C1.41663 61.2576 1.53818 61.2675 1.65796 61.2528C1.87476 61.2259 2.07303 61.1171 2.2119 60.9483C2.35076 60.7797 2.41965 60.5643 2.40435 60.3464C2.2398 57.1627 2.33787 53.9709 2.69757 50.8032C2.93011 48.7741 3.33136 46.768 3.89712 44.8056C4.64293 42.0685 5.92005 39.5053 7.65573 37.2616C8.37547 37.4483 9.0952 37.6349 9.81493 37.768C10.0093 37.8069 10.2113 37.7669 10.3762 37.6571C10.5412 37.5472 10.6557 37.376 10.6946 37.1816C10.7335 36.9872 10.6935 36.7853 10.5835 36.6203C10.4736 36.4555 10.3026 36.3408 10.1081 36.3019C4.7768 35.0757 3.81715 32.5968 3.79051 32.5168C3.03272 31.1531 2.73496 29.5813 2.94147 28.0352C3.14797 26.4887 3.84768 25.0503 4.93675 23.9333C5.86776 22.6936 7.07579 21.6888 8.46432 20.9992C9.85285 20.3095 11.3834 19.9541 12.9338 19.9614C17.4921 20.228 19.3047 24.1998 19.0648 28.1451C19.0918 30.2083 18.434 32.2221 17.1944 33.8717C15.9548 35.5213 14.2033 36.7136 12.214 37.2616C11.9949 37.3008 11.7988 37.4216 11.6652 37.5997C11.5317 37.7779 11.4706 38 11.4943 38.2213C11.5335 38.4384 11.6554 38.632 11.8343 38.7613C12.0133 38.8907 12.2354 38.9453 12.4539 38.9144C13.8961 38.7072 15.2624 38.1387 16.4258 37.2616C17.3288 37.6811 18.2907 37.9597 19.2781 38.088Z"
                    fill="#9900E6"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M28.208 39.1275C27.12 40.1573 25.9117 41.0523 24.6094 41.7933C23.3208 42.5061 21.9633 43.0867 20.5576 43.5259C19.476 43.7923 18.4084 44.1125 17.3588 44.4856C16.6154 44.7592 15.9861 45.276 15.5728 45.9517C14.9724 47.4203 14.7171 49.0072 14.8264 50.5899C14.8264 53.9221 15.9193 58.0272 16.0793 60.1331C16.0826 60.244 16.1083 60.3531 16.1547 60.4539C16.2011 60.5547 16.2673 60.6451 16.3494 60.7197C16.4315 60.7941 16.5278 60.8515 16.6325 60.8883C16.7372 60.9248 16.8482 60.94 16.9589 60.9328C17.0675 60.9293 17.1743 60.9045 17.2732 60.8597C17.3722 60.8149 17.4613 60.7512 17.5356 60.672C17.6099 60.5928 17.6678 60.4997 17.7061 60.3981C17.7443 60.2965 17.7622 60.1883 17.7586 60.0797C17.7586 58.2672 17.4654 54.9349 17.4654 51.8696C17.4654 44.9653 19.0915 46.9115 21.5439 45.9517C23.009 45.26 24.4095 44.4395 25.729 43.4992C27.072 42.5445 28.2901 41.4251 29.3544 40.1672C29.4288 40.0997 29.4883 40.0173 29.5288 39.9256C29.5696 39.8339 29.5907 39.7344 29.5907 39.6341C29.5907 39.5336 29.5696 39.4344 29.5288 39.3424C29.4883 39.2507 29.4288 39.1683 29.3544 39.1008C29.2824 39.0187 29.1931 38.9531 29.0931 38.9091C28.9928 38.8648 28.8843 38.8435 28.7749 38.8459C28.6656 38.8485 28.5581 38.8749 28.4603 38.9237C28.3621 38.9723 28.2763 39.0419 28.208 39.1275Z"
                    fill="#9900E6"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M55.0514 34.9424C53.7842 35.076 52.5066 35.076 51.2394 34.9424C47.4541 34.4093 42.3093 31.104 44.1221 25.6926C44.7333 24.1124 45.712 22.7006 46.9776 21.5741C48.2432 20.4476 49.7589 19.6389 51.3994 19.215C53.1312 18.6903 54.9872 18.7447 56.6853 19.3701C58.3834 19.9955 59.8312 21.1577 60.809 22.6804C61.2949 23.4593 61.621 24.3269 61.7685 25.2329C61.9162 26.1388 61.8824 27.0651 61.669 27.9579C61.4557 28.8507 61.0674 29.6923 60.5261 30.4336C59.985 31.1749 59.3018 31.8016 58.5168 32.2768C58.3349 32.4059 58.2109 32.6008 58.1712 32.8197C58.1314 33.0389 58.1789 33.2651 58.3034 33.4499C58.3621 33.5456 58.4405 33.628 58.5336 33.6917C58.6264 33.7552 58.7314 33.7984 58.8421 33.8187C58.9528 33.8387 59.0666 33.8352 59.176 33.8085C59.285 33.7816 59.3874 33.732 59.4762 33.6629C60.4994 33.0896 61.3984 32.3187 62.1208 31.3949C62.8432 30.4715 63.3749 29.4133 63.685 28.2821C63.9952 27.1512 64.0773 25.9699 63.9266 24.8069C63.7762 23.6439 63.3962 22.5223 62.8085 21.5075C61.62 19.4508 59.7912 17.8397 57.601 16.9203C55.4109 16.0009 52.98 15.8238 50.6797 16.4161C48.5914 16.9617 46.6698 18.0132 45.0845 19.4777C43.4992 20.9421 42.2989 22.7745 41.5896 24.813C41.1442 26.1762 41.065 27.6325 41.3597 29.036C41.6546 30.4397 42.313 31.7411 43.269 32.8099C42.829 32.6557 42.4013 32.4688 41.9896 32.2501C40.597 31.3235 39.453 30.0696 38.6573 28.5981C38.0045 27.4232 37.1778 26.3537 36.205 25.4261C35.424 24.6418 34.4565 24.069 33.3933 23.7612C32.3304 23.4535 31.2064 23.421 30.1272 23.6667C29.2429 24.0405 28.4656 24.6286 27.8653 25.3778C27.265 26.127 26.8605 27.0139 26.6885 27.9584C26.5304 28.5613 26.5304 29.1949 26.6885 29.7979C26.9698 30.5341 27.2901 31.2547 27.6482 31.9571C28.0066 32.6475 28.4072 33.3152 28.8477 33.9563C29.9432 35.6379 31.2314 37.1853 32.6864 38.5677C34.1568 39.9544 35.8064 41.1379 37.5912 42.0864C39.0197 42.6875 40.4789 43.2123 41.9629 43.6592C42.4061 43.8181 42.8272 44.0331 43.2157 44.2989C43.4912 45.2832 43.6698 46.2923 43.7488 47.3112C43.9485 48.9024 44.0285 50.5064 43.9888 52.1093C43.929 54.5619 43.7333 57.0093 43.4024 59.44C43.3706 59.6381 43.4186 59.8405 43.5362 60.0029C43.6536 60.1653 43.8309 60.2747 44.0288 60.3064C44.2266 60.3381 44.4293 60.2901 44.5917 60.1725C44.7541 60.0552 44.8632 59.8779 44.8952 59.68C45.2949 57.2275 45.6949 54.7219 45.8546 52.216C45.9746 50.5211 45.9746 48.8197 45.8546 47.1245C45.8234 46.0256 45.7165 44.9301 45.5349 43.8459C45.4224 43.3728 45.1826 42.9395 44.8418 42.5931C44.2557 42.0925 43.6002 41.6797 42.896 41.3667C41.5629 40.7536 39.9904 40.3539 38.844 39.7141C37.2949 38.8291 35.8624 37.7544 34.5789 36.5152C33.2978 35.2659 32.1458 33.8904 31.1402 32.4101C30.7669 31.8237 30.4205 31.2373 30.1005 30.624C28.981 28.5981 29.2477 28.7048 29.4074 28.1451C29.4757 27.7227 29.6445 27.3229 29.8997 26.9797C30.1549 26.6363 30.489 26.3595 30.8736 26.1725C31.78 25.8259 32.9794 26.1725 34.6856 27.372C36.3917 28.5715 37.6178 32.2235 40.9498 33.9829C42.524 34.7835 44.2765 35.1688 46.0413 35.1024C46.2986 35.2691 46.5658 35.4205 46.841 35.5557C48.153 36.1501 49.5621 36.5024 50.9994 36.5952C52.3794 36.6656 53.7632 36.6032 55.1312 36.4085C55.2285 36.3989 55.3229 36.3696 55.4085 36.3221C55.4941 36.2747 55.569 36.2104 55.629 36.1331C55.6888 36.0557 55.7322 35.9669 55.7568 35.8723C55.781 35.7776 55.7861 35.6789 55.7712 35.5824C55.7573 35.4032 55.6746 35.2363 55.5405 35.1171C55.4061 34.9976 55.2309 34.9352 55.0514 34.9424Z"
                    fill="#9900E6"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M57.4504 33.8496C57.3832 33.7645 57.2982 33.6952 57.2011 33.6464C57.1043 33.5976 56.9979 33.5707 56.8894 33.5672C56.7811 33.5637 56.6731 33.584 56.5734 33.6264C56.4736 33.6688 56.3843 33.7325 56.3115 33.8131C56.239 33.8936 56.1846 33.9891 56.1526 34.0928C56.1206 34.1963 56.1115 34.3056 56.1259 34.4133C56.1406 34.5208 56.1784 34.6237 56.2368 34.7152C56.2952 34.8067 56.3728 34.8843 56.4643 34.9424C58.68 37.4499 60.0752 40.5755 60.4627 43.8992C60.8102 45.8907 61.0238 47.9035 61.1024 49.9235C61.2014 53.0533 61.1214 56.1861 60.8627 59.3067C60.8478 59.4155 60.8544 59.5259 60.8827 59.632C60.911 59.7379 60.96 59.8373 61.027 59.924C61.0939 60.0109 61.1776 60.0835 61.2728 60.1376C61.3683 60.192 61.4734 60.2267 61.5824 60.2397C61.8008 60.2709 62.023 60.216 62.2019 60.0867C62.3808 59.9576 62.5027 59.764 62.5419 59.5467C63.2259 56.3792 63.6448 53.1605 63.795 49.9235C63.8827 47.704 63.6856 45.4821 63.2083 43.3128C62.4126 39.5987 60.3832 36.2635 57.4504 33.8496Z"
                    fill="#9900E6"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.0648 12.3376C19.194 12.7873 19.3635 13.2245 19.5713 13.6438C19.758 14.0572 19.9717 14.4579 20.2111 14.8433C20.8245 15.7772 21.5014 16.6679 22.237 17.509C22.3373 17.677 22.4977 17.8007 22.6857 17.8551C22.8737 17.9095 23.0753 17.8906 23.2499 17.8022C23.423 17.7066 23.5511 17.5463 23.606 17.3564C23.661 17.1665 23.6384 16.9625 23.5431 16.7892C23.1966 15.7496 23.01 14.7367 22.6635 13.7237C22.5133 13.2949 22.3352 12.8764 22.1303 12.4708C21.9435 12.0661 21.7298 11.6742 21.4906 11.298C20.9308 10.365 20.3177 9.4853 19.7046 8.63229C19.6054 8.43344 19.4325 8.28114 19.2227 8.20781C19.0129 8.1345 18.7828 8.14597 18.5813 8.23976C18.3798 8.33354 18.2229 8.50226 18.1439 8.70999C18.065 8.91773 18.0702 9.14807 18.1585 9.35202C18.4784 10.3117 18.6916 11.3246 19.0648 12.3376Z"
                    fill="#9900E6"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M31.1403 12.9773C31.1403 13.1708 31.2152 13.3567 31.3493 13.4959C31.4837 13.6352 31.6667 13.7168 31.86 13.7237C31.9589 13.7311 32.0584 13.7179 32.152 13.685C32.2453 13.6522 32.3312 13.6003 32.4037 13.5328C32.4765 13.4652 32.5341 13.3833 32.5736 13.2923C32.6131 13.2013 32.6333 13.1032 32.6331 13.004C32.8731 11.8844 33.1661 10.8448 33.2995 9.69857C33.3267 9.22803 33.3267 8.7563 33.2995 8.28577C33.3253 7.81518 33.3253 7.34353 33.2995 6.87297C33.2995 5.78003 32.9797 4.71377 32.8197 3.59417C32.82 3.37689 32.7376 3.16761 32.5891 3.0091C32.4403 2.85057 32.2368 2.75473 32.02 2.74115C31.9093 2.73758 31.7989 2.75633 31.6955 2.79625C31.5923 2.83617 31.4979 2.89646 31.4184 2.97355C31.3387 3.05065 31.2755 3.14297 31.2323 3.24499C31.1891 3.34705 31.1669 3.45673 31.1669 3.56753C30.9803 4.6871 30.7672 5.75337 30.6605 6.87297C30.6341 7.34353 30.6341 7.81521 30.6605 8.28577C30.6344 8.75633 30.6344 9.22801 30.6605 9.69857C30.7139 10.8181 30.9803 11.8578 31.1403 12.9773Z"
                    fill="#9900E6"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.8432 16.656C41.628 16.0923 42.3678 15.4684 43.0558 14.7901C43.3251 14.4932 43.5659 14.172 43.7755 13.8304C43.9888 13.5105 44.1755 13.164 44.3622 12.8175C44.7619 11.9645 45.0819 11.1381 45.455 10.3117C45.5931 10.1357 45.659 9.91371 45.6392 9.69086C45.6192 9.46801 45.5152 9.26107 45.3483 9.11219C45.1638 8.98753 44.9376 8.94006 44.7184 8.97993C44.4992 9.01977 44.3043 9.14377 44.1755 9.32545C43.4824 9.99185 42.8427 10.605 42.203 11.3247C41.963 11.6179 41.723 11.9112 41.5099 12.231C41.2507 12.558 41.0187 12.9057 40.8168 13.2706C40.4168 14.097 40.1502 14.9234 39.7238 15.723C39.6555 15.796 39.6024 15.8819 39.5678 15.9757C39.5334 16.0695 39.5179 16.1693 39.5227 16.2692C39.5275 16.369 39.5523 16.4669 39.5958 16.5569C39.639 16.647 39.7 16.7275 39.775 16.7936C39.8499 16.8597 39.9374 16.91 40.0323 16.9416C40.1272 16.9732 40.2272 16.9855 40.327 16.9776C40.4267 16.9697 40.5238 16.942 40.6123 16.8959C40.7011 16.8498 40.7798 16.7864 40.8432 16.7094V16.656Z"
                    fill="#9900E6"
                  />
                </svg>)}
                {card.icon === "Earn" && (<svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M58.3543 19.9734C57.1215 17.9599 55.1079 17.2202 49.6425 14.3849C35.548 9.00183 34.8495 8.34435 33.8223 9.20729C33.6942 9.33344 33.5925 9.48378 33.5233 9.64956C33.4537 9.81534 33.4183 9.99325 33.4183 10.1729C33.4183 10.3527 33.4537 10.5306 33.5233 10.6963C33.5925 10.8621 33.6942 11.0125 33.8223 11.1386C38.5135 13.6112 43.3587 15.7799 48.3278 17.6312C48.6565 17.8777 54.3682 22.028 54.6969 22.1102C55.0256 22.1924 40.1914 29.0958 39.4109 29.4246C38.2083 30.3085 36.7878 30.8484 35.3013 30.9861C34.9319 30.9861 15.1665 24.0005 13.4403 22.7677C14.9609 21.9869 7.85215 26.4249 28.7267 13.1932C29.0006 13.0326 29.202 12.7726 29.2889 12.4672C29.3762 12.1618 29.3416 11.8346 29.1934 11.5538C29.0451 11.2731 28.7943 11.0604 28.4928 10.96C28.1917 10.8597 27.863 10.8795 27.5764 11.0153L15.0021 17.3435C11.4271 18.9872 6.78377 21.2062 9.45472 24.2881C8.83445 30.0741 8.68329 35.9008 9.00249 41.7111C7.9234 42.0171 6.9444 42.6025 6.16432 43.4082C5.38384 44.2139 4.83029 45.2114 4.55928 46.2997C4.28828 47.388 4.30928 48.5286 4.62065 49.6063C4.93202 50.6838 5.52223 51.6599 6.33154 52.4363C9.61905 56.0524 16.358 55.8057 17.7143 50.7925C18.005 49.867 18.1014 48.8916 17.9968 47.9272C17.8922 46.9628 17.5895 46.0306 17.1068 45.189C16.6245 44.3476 15.9729 43.6151 15.1932 43.0377C14.414 42.4603 13.5231 42.0507 12.5775 41.8344C13.3711 36.9721 13.5367 32.028 13.0709 27.1234C15.2896 28.3562 19.2756 29.8355 28.3981 33.4516C30.3293 34.1091 33.74 36.6568 36.2877 35.7938C43.8698 32.7286 51.1474 28.9591 58.0256 24.5346C58.5907 23.9249 58.9309 23.1409 58.9906 22.3118C59.0503 21.4826 58.8258 20.6579 58.3543 19.9734ZM13.4403 45.3272C14.5499 46.6833 14.0981 50.998 12.2076 51.08C10.3176 51.1624 8.09844 47.8339 8.55067 46.108C9.41353 43.0672 13.1529 44.9985 13.4403 45.3272Z"
                    fill="#76CAD0"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M49.766 32.3422C47.8348 32.3422 48.369 34.3968 47.9168 36.4514C47.4649 38.506 45.0403 38.4649 42.3282 39.6976C39.616 40.9304 36.8219 42.8617 34.3565 43.8069C30.2593 42.8307 26.2679 41.4543 22.4396 39.6976C21.8642 36.8212 22.4396 35.2597 20.7551 35.2597C20.428 35.2597 20.1146 35.3896 19.8831 35.6208C19.6521 35.852 19.5223 36.1655 19.5223 36.4925V40.6017C19.538 41.0976 19.7439 41.5685 20.0973 41.9166C22.2341 44.0945 32.4253 49.4365 35.055 48.7379C38.338 47.5145 41.4142 45.7962 44.1774 43.6425C46.2701 42.7341 48.189 41.4688 49.848 39.9031C51.2043 38.1772 50.9164 36.6157 50.9576 34.3968C51.0828 34.1889 51.1495 33.9512 51.1515 33.7086C51.1536 33.466 51.0902 33.2274 50.9687 33.0175C50.8468 32.8077 50.6709 32.6343 50.4596 32.5155C50.2479 32.3967 50.0086 32.3369 49.766 32.3422Z"
                    fill="#76CAD0"
                  />
                </svg>)}
                </div>
                <div class="p-6 space-y-4">
                  <p class="text-4xl font-bold tracking-tighter">{card.title}</p>
                  <p class="text-accent max-w-64 tracking-tighter">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div class="relative w-full ">
        <div class="absolute bottom-0 right-0">
          <svg
            width="296"
            height="90"
            viewBox="0 0 296 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_4_469)">
              <path
                d="M199.613 49.2732L197.247 37.0859L208.107 43.1014L202.758 44.6704L199.613 49.2732Z"
                fill="#2E6ED9"
              />
              <path
                d="M199.613 49.2732L197.247 37.0859L208.107 43.1014L202.758 44.6704L199.613 49.2732Z"
                stroke="white"
                stroke-width="0.75"
              />
            </g>
            <g filter="url(#filter1_d_4_469)">
              <rect
                x="206.5"
                y="49"
                width="79"
                height="30"
                rx="15"
                fill="#2E6ED9"
                shape-rendering="crispEdges"
              />
              <rect
                x="207.25"
                y="49.75"
                width="77.5"
                height="28.5"
                rx="14.25"
                stroke="#205CBF"
                stroke-width="1.5"
                shape-rendering="crispEdges"
              />
              <path
                d="M224.219 61.5653C224.173 61.1619 223.986 60.8494 223.656 60.6278C223.327 60.4034 222.912 60.2912 222.412 60.2912C222.054 60.2912 221.744 60.348 221.483 60.4616C221.222 60.5724 221.019 60.7259 220.874 60.9219C220.732 61.1151 220.661 61.3352 220.661 61.5824C220.661 61.7898 220.709 61.9687 220.805 62.1193C220.905 62.2699 221.034 62.3963 221.193 62.4986C221.355 62.598 221.528 62.6818 221.713 62.75C221.898 62.8153 222.075 62.8693 222.246 62.9119L223.098 63.1335C223.376 63.2017 223.662 63.294 223.955 63.4105C224.247 63.527 224.519 63.6804 224.769 63.8707C225.019 64.0611 225.22 64.2969 225.374 64.5781C225.53 64.8594 225.608 65.196 225.608 65.5881C225.608 66.0824 225.48 66.5213 225.224 66.9048C224.972 67.2884 224.604 67.5909 224.121 67.8125C223.641 68.0341 223.06 68.1449 222.378 68.1449C221.724 68.1449 221.159 68.0412 220.682 67.8338C220.205 67.6264 219.831 67.3324 219.561 66.9517C219.291 66.5682 219.142 66.1136 219.114 65.5881H220.435C220.46 65.9034 220.563 66.1662 220.742 66.3764C220.923 66.5838 221.155 66.7386 221.436 66.8409C221.72 66.9403 222.031 66.9901 222.369 66.9901C222.742 66.9901 223.073 66.9318 223.362 66.8153C223.655 66.696 223.885 66.5312 224.053 66.321C224.22 66.108 224.304 65.8594 224.304 65.5753C224.304 65.3168 224.23 65.1051 224.082 64.9403C223.938 64.7756 223.74 64.6392 223.49 64.5312C223.243 64.4233 222.963 64.3281 222.651 64.2457L221.619 63.9645C220.921 63.7741 220.367 63.4943 219.957 63.125C219.551 62.7557 219.348 62.267 219.348 61.6591C219.348 61.1562 219.484 60.7173 219.757 60.3423C220.03 59.9673 220.399 59.6761 220.865 59.4688C221.331 59.2585 221.857 59.1534 222.442 59.1534C223.033 59.1534 223.554 59.2571 224.006 59.4645C224.46 59.6719 224.818 59.9574 225.08 60.321C225.341 60.6818 225.477 61.0966 225.489 61.5653H224.219ZM228.353 64.1136V68H227.079V59.2727H228.336V62.5199H228.417C228.571 62.1676 228.805 61.8878 229.12 61.6804C229.436 61.473 229.848 61.3693 230.356 61.3693C230.805 61.3693 231.197 61.4616 231.532 61.6463C231.87 61.831 232.132 62.1065 232.316 62.473C232.504 62.8366 232.598 63.2912 232.598 63.8366V68H231.324V63.9901C231.324 63.5099 231.2 63.1378 230.953 62.8736C230.706 62.6065 230.362 62.473 229.922 62.473C229.62 62.473 229.351 62.5369 229.112 62.6648C228.876 62.7926 228.69 62.9801 228.554 63.2273C228.42 63.4716 228.353 63.767 228.353 64.1136ZM234.869 70.4545C234.679 70.4545 234.505 70.4389 234.349 70.4077C234.193 70.3793 234.076 70.348 234 70.3139L234.307 69.2699C234.539 69.3324 234.747 69.3594 234.929 69.3509C235.111 69.3423 235.271 69.2741 235.41 69.1463C235.552 69.0185 235.677 68.8097 235.785 68.5199L235.943 68.0852L233.548 61.4545H234.912L236.569 66.5341H236.637L238.295 61.4545H239.663L236.966 68.8736C236.841 69.2145 236.682 69.5028 236.488 69.7386C236.295 69.9773 236.065 70.1563 235.798 70.2756C235.531 70.3949 235.221 70.4545 234.869 70.4545ZM251.387 62.1108H250.058C250.006 61.8267 249.911 61.5767 249.772 61.3608C249.633 61.1449 249.462 60.9616 249.261 60.8111C249.059 60.6605 248.833 60.5469 248.583 60.4702C248.336 60.3935 248.073 60.3551 247.795 60.3551C247.292 60.3551 246.842 60.4815 246.444 60.7344C246.049 60.9872 245.737 61.358 245.506 61.8466C245.279 62.3352 245.166 62.9318 245.166 63.6364C245.166 64.3466 245.279 64.946 245.506 65.4347C245.737 65.9233 246.05 66.2926 246.448 66.5426C246.846 66.7926 247.293 66.9176 247.791 66.9176C248.066 66.9176 248.327 66.8807 248.575 66.8068C248.825 66.7301 249.05 66.6179 249.252 66.4702C249.454 66.3224 249.624 66.142 249.764 65.929C249.906 65.7131 250.004 65.4659 250.058 65.1875L251.387 65.1918C251.316 65.6207 251.178 66.0156 250.974 66.3764C250.772 66.7344 250.512 67.044 250.194 67.3054C249.879 67.5639 249.518 67.7642 249.112 67.9062C248.705 68.0483 248.262 68.1193 247.782 68.1193C247.026 68.1193 246.353 67.9403 245.762 67.5824C245.171 67.2216 244.705 66.706 244.364 66.0355C244.026 65.3651 243.857 64.5653 243.857 63.6364C243.857 62.7045 244.028 61.9048 244.369 61.2372C244.71 60.5668 245.175 60.0526 245.766 59.6946C246.357 59.3338 247.029 59.1534 247.782 59.1534C248.245 59.1534 248.677 59.2202 249.077 59.3537C249.481 59.4844 249.843 59.6776 250.164 59.9332C250.485 60.1861 250.751 60.4957 250.961 60.8622C251.171 61.2259 251.313 61.642 251.387 62.1108ZM254.765 68.1449C254.351 68.1449 253.976 68.0682 253.64 67.9148C253.305 67.7585 253.039 67.5327 252.843 67.2372C252.65 66.9418 252.554 66.5795 252.554 66.1506C252.554 65.7812 252.625 65.4773 252.767 65.2386C252.909 65 253.101 64.8111 253.342 64.6719C253.584 64.5327 253.853 64.4276 254.152 64.3565C254.45 64.2855 254.754 64.2315 255.064 64.1946C255.456 64.1491 255.774 64.1122 256.018 64.0838C256.262 64.0526 256.44 64.0028 256.551 63.9347C256.662 63.8665 256.717 63.7557 256.717 63.6023V63.5724C256.717 63.2003 256.612 62.9119 256.402 62.7074C256.194 62.5028 255.885 62.4006 255.473 62.4006C255.044 62.4006 254.706 62.4957 254.459 62.6861C254.214 62.8736 254.045 63.0824 253.951 63.3125L252.754 63.0398C252.896 62.642 253.103 62.321 253.376 62.0767C253.652 61.8295 253.968 61.6506 254.326 61.5398C254.684 61.4261 255.061 61.3693 255.456 61.3693C255.717 61.3693 255.994 61.4006 256.287 61.4631C256.582 61.5227 256.858 61.6335 257.113 61.7955C257.372 61.9574 257.584 62.1889 257.748 62.4901C257.913 62.7884 257.995 63.1761 257.995 63.6534V68H256.751V67.1051H256.7C256.618 67.2699 256.494 67.4318 256.329 67.5909C256.164 67.75 255.953 67.8821 255.694 67.9872C255.436 68.0923 255.126 68.1449 254.765 68.1449ZM255.042 67.1222C255.395 67.1222 255.696 67.0526 255.946 66.9134C256.199 66.7741 256.39 66.5923 256.521 66.3679C256.655 66.1406 256.721 65.8977 256.721 65.6392V64.7955C256.676 64.8409 256.588 64.8835 256.457 64.9233C256.329 64.9602 256.183 64.9929 256.018 65.0213C255.853 65.0469 255.693 65.071 255.537 65.0938C255.38 65.1136 255.25 65.1307 255.145 65.1449C254.897 65.1761 254.672 65.2287 254.467 65.3026C254.265 65.3764 254.103 65.483 253.981 65.6222C253.862 65.7585 253.802 65.9403 253.802 66.1676C253.802 66.483 253.919 66.7216 254.152 66.8835C254.385 67.0426 254.682 67.1222 255.042 67.1222ZM259.693 70.4545V61.4545H260.937V62.5156H261.043C261.117 62.3793 261.224 62.2216 261.363 62.0426C261.502 61.8636 261.695 61.7074 261.943 61.5739C262.19 61.4375 262.516 61.3693 262.923 61.3693C263.451 61.3693 263.923 61.5028 264.337 61.7699C264.752 62.0369 265.077 62.4219 265.313 62.9247C265.552 63.4276 265.671 64.0327 265.671 64.7401C265.671 65.4474 265.553 66.054 265.318 66.5597C265.082 67.0625 264.758 67.4503 264.346 67.723C263.934 67.9929 263.464 68.1278 262.935 68.1278C262.538 68.1278 262.212 68.0611 261.96 67.9276C261.71 67.794 261.514 67.6378 261.372 67.4588C261.229 67.2798 261.12 67.1207 261.043 66.9815H260.967V70.4545H259.693ZM260.941 64.7273C260.941 65.1875 261.008 65.5909 261.141 65.9375C261.275 66.2841 261.468 66.5554 261.721 66.7514C261.974 66.9446 262.283 67.0412 262.65 67.0412C263.031 67.0412 263.349 66.9403 263.604 66.7386C263.86 66.5341 264.053 66.2571 264.184 65.9077C264.318 65.5582 264.384 65.1648 264.384 64.7273C264.384 64.2955 264.319 63.9077 264.188 63.5639C264.06 63.2202 263.867 62.9489 263.609 62.75C263.353 62.5511 263.033 62.4517 262.65 62.4517C262.281 62.4517 261.968 62.5469 261.712 62.7372C261.46 62.9276 261.268 63.1932 261.137 63.5341C261.006 63.875 260.941 64.2727 260.941 64.7273ZM267.682 70.4545C267.491 70.4545 267.318 70.4389 267.162 70.4077C267.005 70.3793 266.889 70.348 266.812 70.3139L267.119 69.2699C267.352 69.3324 267.559 69.3594 267.741 69.3509C267.923 69.3423 268.084 69.2741 268.223 69.1463C268.365 69.0185 268.49 68.8097 268.598 68.5199L268.755 68.0852L266.361 61.4545H267.724L269.382 66.5341H269.45L271.108 61.4545H272.476L269.778 68.8736C269.653 69.2145 269.494 69.5028 269.301 69.7386C269.108 69.9773 268.878 70.1563 268.611 70.2756C268.343 70.3949 268.034 70.4545 267.682 70.4545Z"
                fill="white"
              />
            </g>
            <path
              d="M2.09793 71.173C0.517751 71.6712 -0.359366 73.3561 0.138835 74.9363C0.637035 76.5164 2.32189 77.3935 3.90207 76.8953L2.09793 71.173ZM189.732 17.3853C190.497 15.9157 189.926 14.1041 188.457 13.339L164.507 0.871391C163.038 0.106316 161.226 0.677479 160.461 2.14711C159.696 3.61675 160.267 5.42834 161.737 6.19341L183.025 17.2757L171.943 38.5638C171.178 40.0334 171.749 41.845 173.218 42.6101C174.688 43.3752 176.5 42.804 177.265 41.3344L189.732 17.3853ZM3.90207 76.8953L187.973 18.8612L186.169 13.1388L2.09793 71.173L3.90207 76.8953Z"
              fill="#2E6ED9"
            />
            <defs>
              <filter
                id="filter0_d_4_469"
                x="195.226"
                y="35.6185"
                width="15.3484"
                height="16.8577"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.75" />
                <feGaussianBlur stdDeviation="0.75" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_4_469"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_4_469"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_4_469"
                x="202"
                y="44.5"
                width="94"
                height="45"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="3" dy="3" />
                <feGaussianBlur stdDeviation="3.75" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.415686 0 0 0 0 0.466667 0 0 0 0 0.588235 0 0 0 0.16 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_4_469"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_4_469"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
