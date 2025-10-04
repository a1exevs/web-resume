import React from 'react';

import { CommonInfoData } from 'src/store/store.types';

// TODO: [REDESIGN] Rewrite without tailwing

type Props = { commonInfoData: CommonInfoData };

const HomePage: React.FC<Props> = ({ commonInfoData }) => {
  return (
    <>
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
              <span className="w-32 inline-block text-neutral-400 uppercase">Age</span>{' '}
              <span className="text-white">: 29</span>
            </p>
            <p>
              <span className="w-32 inline-block text-neutral-400 uppercase">Date_of_birthday</span>{' '}
              <span className="text-white">: February 22, 1996</span>
            </p>
            <p>
              <span className="w-32 inline-block text-neutral-400 uppercase">Relocation</span>{' '}
              <span className="text-white">: Open to offers</span>
            </p>
            <p>
              <span className="w-32 inline-block text-neutral-400 uppercase">Business_trips</span>{' '}
              <span className="text-white">: Willing to travel</span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="glitch mb-4 text-lg font-bold uppercase tracking-widest text-[var(--primary-color)]">
            Education
          </h3>
          <div className="space-y-3 border-l-2 border-[var(--primary-color)]/30 pl-4 text-sm">
            <p>
              <span className="w-32 inline-block text-neutral-400 uppercase">University</span>{' '}
              <span className="text-white">: Voronezh State University</span>
            </p>
            <p>
              <span className="w-32 inline-block text-neutral-400 uppercase">Degree</span>{' '}
              <span className="text-white">: Master's degree</span>
            </p>
            <p>
              <span className="w-32 inline-block text-neutral-400 uppercase">Field_of_study</span>{' '}
              <span className="text-white">: Radio Physical Sciences</span>
            </p>
            <p>
              <span className="w-32 inline-block text-neutral-400 uppercase">Website</span>{' '}
              <span className="text-white">: https://vsu.ru</span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="glitch mb-4 text-lg font-bold uppercase tracking-widest text-[var(--primary-color)]">
            Contact_Details
          </h3>
          <div className="space-y-3 border-l-2 border-[var(--primary-color)]/30 pl-4 text-sm">
            <p>
              <span className="w-32 inline-block text-neutral-400 uppercase">Phone</span>{' '}
              <span className="text-white">: +7 (960)-125-41-38</span>
            </p>
            <p>
              <span className="w-32 inline-block text-neutral-400 uppercase">Email</span>{' '}
              <span className="text-white">: aleksandrevstafiadi@gmail.com</span>
            </p>
            <p>
              <span className="w-32 inline-block text-neutral-400 uppercase">Linkedin</span>{' '}
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
    </>
  );
};

export default HomePage;
