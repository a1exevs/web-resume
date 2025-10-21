import React from 'react';

import { CommonInfoData } from 'src/store/store.types';

type SectionData = {
  title: string;
  items: { label: string; value: string }[];
};

const sections: SectionData[] = [
  {
    title: 'Personal_Info',
    items: [
      { label: 'Age', value: '29' },
      { label: 'Date_of_birthday', value: 'February 22, 1996' },
      { label: 'Relocation', value: 'Open to offers' },
      { label: 'Business_trips', value: 'Willing to travel' },
    ],
  },
  {
    title: 'Education',
    items: [
      { label: 'University', value: 'Voronezh State University' },
      { label: 'Degree', value: "Master's degree" },
      { label: 'Field_of_study', value: 'Radio Physical Sciences' },
      { label: 'Website', value: 'https://vsu.ru' },
    ],
  },
  {
    title: 'Contact_Details',
    items: [
      { label: 'Phone', value: '+7 (960)-125-41-38' },
      { label: 'Email', value: 'aleksandrevstafiadi@gmail.com' },
      { label: 'Linkedin', value: 'https://www.linkedin.com/in/alexander-evstafiadi' },
    ],
  },
];

type Props = {
  commonInfoData: CommonInfoData;
};

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
        {sections.map(({ title, items }) => (
          <div key={title}>
            <h3 className="glitch mb-4 text-lg font-bold uppercase tracking-widest text-[var(--primary-color)]">
              {title}
            </h3>
            <div className="space-y-3 border-l-2 border-[var(--primary-color)]/30 pl-4 text-sm">
              {items.map(({ label, value }) => (
                <p key={label}>
                  <span className="w-32 inline-block text-neutral-400 uppercase">{label}</span>{' '}
                  <span className="text-white">: {value}</span>
                </p>
              ))}
            </div>
          </div>
        ))}
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
