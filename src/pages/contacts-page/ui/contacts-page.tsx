import React from 'react';

const ContactsPage: React.FC = () => {
  return (
    <div>
      <h2 className="glitch mb-8 text-center text-3xl font-bold uppercase tracking-widest text-[var(--primary-color)]">
        Contacts
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
        <a
          className="contact-link group flex items-center gap-4 border border-transparent p-3 transition-all duration-300 hover:border-[var(--primary-color)] hover:bg-green-900/20 hover:shadow-[0_0_15px_rgba(5,199,5,0.5)]"
          href="https://github.com/a1exevs"
          target="_blank"
        >
          <svg
            className="contact-icon h-8 w-8 text-neutral-400 transition-colors duration-300 group-hover:text-[var(--primary-color)]"
            fill="currentColor"
            role="img"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Github</title>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="currentColor">
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                    id="github-[#142]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <span className="contact-label text-lg font-medium text-neutral-300 transition-colors duration-300">
            Github
          </span>
        </a>
        <a
          className="contact-link group flex items-center gap-4 border border-transparent p-3 transition-all duration-300 hover:border-[var(--primary-color)] hover:bg-green-900/20 hover:shadow-[0_0_15px_rgba(5,199,5,0.5)]"
          href="https://voronezh.hh.ru/resume/10aa6646ff077b3cb70039ed1f47394e4f476f"
          target="_blank"
        >
          <span className="contact-icon text-3xl font-bold text-neutral-400 transition-colors duration-300">hh</span>
          <span className="contact-label text-lg font-medium text-neutral-300 transition-colors duration-300">
            hh.ru
          </span>
        </a>
        <a
          className="contact-link group flex items-center gap-4 border border-transparent p-3 transition-all duration-300 hover:border-[var(--primary-color)] hover:bg-green-900/20 hover:shadow-[0_0_15px_rgba(5,199,5,0.5)]"
          href="https://www.linkedin.com/in/alexander-evstafiadi/"
          target="_blank"
        >
          <svg
            className="contact-icon h-8 w-8 text-neutral-400 transition-colors duration-300 group-hover:text-[var(--primary-color)]"
            fill="currentColor"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>LinkedIn</title>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
          </svg>
          <span className="contact-label text-lg font-medium text-neutral-300 transition-colors duration-300">
            LinkedIn
          </span>
        </a>
        <a
          className="contact-link group flex items-center gap-4 border border-transparent p-3 transition-all duration-300 hover:border-[var(--primary-color)] hover:bg-green-900/20 hover:shadow-[0_0_15px_rgba(5,199,5,0.5)]"
          href="mailto:aleksandrevstafiadi@gmail.com"
          target="_blank"
        >
          <svg
            className="contact-icon h-8 w-8 text-neutral-400 transition-colors duration-300 group-hover:text-[var(--primary-color)]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="currentColor"
          >
            <title>Google Email</title>
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
          </svg>
          <span className="contact-label text-lg font-medium text-neutral-300 transition-colors duration-300">
            Google Email
          </span>
        </a>
        <a
          className="contact-link group flex items-center gap-4 border border-transparent p-3 transition-all duration-300 hover:border-[var(--primary-color)] hover:bg-green-900/20 hover:shadow-[0_0_15px_rgba(5,199,5,0.5)]"
          href="mailto:evstafiadi.shura@yandex.ru"
          target="_blank"
        >
          <svg
            className="contact-icon h-8 w-8 text-neutral-400 transition-colors duration-300 group-hover:text-[var(--primary-color)]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="currentColor"
          >
            <title>Yandex Email</title>
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
          </svg>
          <span className="contact-label text-lg font-medium text-neutral-300 transition-colors duration-300">
            Yandex Email
          </span>
        </a>
        <a
          className="contact-link group flex items-center gap-4 border border-transparent p-3 transition-all duration-300 hover:border-[var(--primary-color)] hover:bg-green-900/20 hover:shadow-[0_0_15px_rgba(5,199,5,0.5)]"
          href="https://www.youtube.com/channel/UCVrwEd4-3guB5NFQ_oidREg"
          target="_blank"
        >
          <svg
            className="contact-icon h-8 w-8 text-neutral-400 transition-colors duration-300 group-hover:text-[var(--primary-color)]"
            fill="currentColor"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>YouTube</title>
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
          </svg>
          <span className="contact-label text-lg font-medium text-neutral-300 transition-colors duration-300">
            YouTube
          </span>
        </a>
        <a
          className="contact-link group flex items-center gap-4 border border-transparent p-3 transition-all duration-300 hover:border-[var(--primary-color)] hover:bg-green-900/20 hover:shadow-[0_0_15px_rgba(5,199,5,0.5)]"
          href="https://leetcode.com/u/a1exevs/"
          target="_blank"
        >
          <svg
            className="contact-icon h-8 w-8 text-neutral-400 transition-colors duration-300 group-hover:text-[var(--primary-color)]"
            fill="currentColor"
            viewBox="0 0 24 24"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>LeetCode</title>
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
          </svg>
          <span className="contact-label text-lg font-medium text-neutral-300 transition-colors duration-300">
            LeetCode
          </span>
        </a>
        <a
          className="contact-link group flex items-center gap-4 border border-transparent p-3 transition-all duration-300 hover:border-[var(--primary-color)] hover:bg-green-900/20 hover:shadow-[0_0_15px_rgba(5,199,5,0.5)]"
          href="https://www.instagram.com/alexevs_gb"
          target="_blank"
        >
          <svg
            className="contact-icon h-8 w-8 text-neutral-400 transition-colors duration-300 group-hover:text-[var(--primary-color)]"
            fill="currentColor"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Instagram</title>
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.936 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.148-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.314.936 20.644.523 19.86.227 19.094-.06 18.225-.262 16.947-.32 15.667-.385 15.26-.399 12-.399h0zm0 2.16c3.203 0 3.585.012 4.85.07 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.012 3.585-.07 4.85c-.055 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.012-4.85-.07c-1.17-.055-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.012-3.585.07-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"></path>
          </svg>
          <span className="contact-label text-lg font-medium text-neutral-300 transition-colors duration-300">
            Instagram
          </span>
        </a>
        <a
          className="contact-link group flex items-center gap-4 border border-transparent p-3 transition-all duration-300 hover:border-[var(--primary-color)] hover:bg-green-900/20 hover:shadow-[0_0_15px_rgba(5,199,5,0.5)]"
          href="https://api.whatsapp.com/send?phone=79601254138"
          target="_blank"
        >
          <svg
            className="contact-icon h-8 w-8 text-neutral-400 transition-colors duration-300 group-hover:text-[var(--primary-color)]"
            fill="currentColor"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>WhatsApp</title>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
          </svg>
          <span className="contact-label text-lg font-medium text-neutral-300 transition-colors duration-300">
            WhatsApp
          </span>
        </a>
        <a
          className="contact-link group flex items-center gap-4 border border-transparent p-3 transition-all duration-300 hover:border-[var(--primary-color)] hover:bg-green-900/20 hover:shadow-[0_0_15px_rgba(5,199,5,0.5)]"
          href="https://t.me/AlexanderEvstafiadi"
          target="_blank"
        >
          <svg
            className="contact-icon h-8 w-8 text-neutral-400 transition-colors duration-300 group-hover:text-[var(--primary-color)]"
            fill="currentColor"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Telegram</title>
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.17.91-.494 1.208-.822 1.23-.696.047-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.04-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.662 3.488-1.513 5.823-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path>
          </svg>
          <span className="contact-label text-lg font-medium text-neutral-300 transition-colors duration-300">
            Telegram
          </span>
        </a>
      </div>
    </div>
  );
};

export default ContactsPage;
