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
          <span className="contact-icon text-3xl text-neutral-400 transition-colors duration-300 material-symbols-outlined">
            {' '}
            code{' '}
          </span>
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
          <span className="contact-icon text-3xl text-neutral-400 transition-colors duration-300 material-symbols-outlined">
            {' '}
            mail{' '}
          </span>
          <span className="contact-label text-lg font-medium text-neutral-300 transition-colors duration-300">
            Google Email
          </span>
        </a>
        <a
          className="contact-link group flex items-center gap-4 border border-transparent p-3 transition-all duration-300 hover:border-[var(--primary-color)] hover:bg-green-900/20 hover:shadow-[0_0_15px_rgba(5,199,5,0.5)]"
          href="mailto:evstafiadi.shura@yandex.ru"
          target="_blank"
        >
          <span className="contact-icon text-3xl text-neutral-400 transition-colors duration-300 material-symbols-outlined">
            {' '}
            mail_outline{' '}
          </span>
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
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>LeetCode</title>
            <path d="M13.48 0L15.34 3.09H9.06L10.92 0h2.56zM21.9 8.24L17.58 12l4.32 3.76-2.04 3.53L13.48 14.5v9.5h-2.56v-9.5L4.54 19.29l-2.04-3.53L6.82 12 2.5 8.24l2.04-3.53L10.92 9.5V0h2.56v9.5l6.38-4.79 2.04 3.53z"></path>
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
