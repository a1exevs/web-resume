import React from 'react';
import { CommonInfoData } from 'src/store/store.types';

// TODO: [REDESIGN] Rewrite without tailwing

type Props = { commonInfoData: CommonInfoData };

const HomePage: React.FC<Props> = ({ commonInfoData }) => {
  return (
    <main className="flex-1 px-4 py-8 sm:px-10 md:px-20 lg:px-40">
      <div className="mx-auto max-w-5xl">
        <div className="border border-[#273a27] bg-black/50 p-6 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <img
              alt=""
              className="h-32 w-32 min-w-32 rounded-full border-2 border-[var(--primary-color)] bg-cover bg-center shadow-[0_0_15px_rgba(5,199,5,0.5)]"
              src={commonInfoData.photoPath}
            />
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold text-white">Alexander Evstafiadi</h2>
              <p className="text-[var(--primary-color)]">&gt;Senior Software Engineer</p>
              <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-neutral-400 sm:justify-start">
                <span>
                  <span className="text-green-500/70">//</span> STATUS: Not looking for a job
                </span>
                <span>
                  <span className="text-green-500/70">//</span> LOCATION: Voronezh, Russia
                </span>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="glitch mb-4 text-lg font-bold uppercase tracking-widest text-[var(--primary-color)]">
                Personal_Info
              </h3>
              <div className="space-y-3 border-l-2 border-[var(--primary-color)]/30 pl-4 text-sm">
                <p>
                  <span className="w-28 inline-block text-neutral-400">AGE</span>{' '}
                  <span className="text-white">: 29</span>
                </p>
                <p>
                  <span className="w-28 inline-block text-neutral-400">DATE_OF_BIRTH</span>{' '}
                  <span className="text-white">: February 22, 1996</span>
                </p>
                <p>
                  <span className="w-28 inline-block text-neutral-400">RELOCATION</span>{' '}
                  <span className="text-white">: Open to offers</span>
                </p>
                <p>
                  <span className="w-28 inline-block text-neutral-400">BUSINESS_TRIPS</span>{' '}
                  <span className="text-white">: Willing to travel</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="glitch mb-4 text-lg font-bold uppercase tracking-widest text-[var(--primary-color)]">
                Contact_Details
              </h3>
              <div className="space-y-3 border-l-2 border-[var(--primary-color)]/30 pl-4 text-sm">
                <p>
                  <span className="w-20 inline-block text-neutral-400">PHONE</span>{' '}
                  <span className="text-white">: +7 (960)-125-41-38</span>
                </p>
                <p>
                  <span className="w-20 inline-block text-neutral-400">EMAIL</span>{' '}
                  <span className="text-white">: aleksandrevstafiadi@gmail.com</span>
                </p>
                <p>
                  <span className="w-20 inline-block text-neutral-400">LINKEDIN</span>{' '}
                  <span className="text-white">: https://www.linkedin.com/in/alexander-evstafiadi</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-right text-xs text-neutral-500">
            <p>
              LAST UPDATE: <span className="text-[var(--primary-color)]/80">July 26, 2024</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
