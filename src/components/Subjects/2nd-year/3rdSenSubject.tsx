"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

type CardProps = {
  subject: string;
  name: string;
  code: string;
  credit: number;
};

const Card: React.FC<CardProps> = ({ subject, name, code, credit }) => {
  const router = useRouter();

  const handleClick = () => {
    const route = `/cse-notes/2nd-year/3rdSem/${subject.toLowerCase().replace(' ', '-')}`;
    router.push(route);
  };

  return (
    <div
      onClick={handleClick}
      className="flex subject-card px-5 rounded-xl p-4 shadow-lg m-5 cursor-pointer"
    >
      <div className="flex w-28 mr-6 rounded-xl items-center bg-white justify-center ">
        <div className="  rounded-full flex items-center justify-center">
          <span className="text-3xl font-bold text-purple-500">👤</span>
        </div>
      </div>
      <div className="text-start px-4">
        <h2 className="text-2xl font-bold text-white">{subject}</h2>
        <p className="text-white">{name}</p>
        <div className="mt-4">
          <p className="text-white">Code: {code}</p>
          <p className="text-white">Credit: {credit}</p>
        </div>
      </div>
    </div>
  );
};

const ThirdSemSubject: React.FC = () => {
  const cardData = [
    { subject: 'subject1', name: 'Full Name 1', code: 'CS0001', credit: 3 },
    { subject: 'subject2', name: 'Full Name 2', code: 'CS0002', credit: 4 },
    { subject: 'subject3', name: 'Full Name 3', code: 'CS0003', credit: 2 },

    { subject: 'subject1', name: 'Full Name 1', code: 'CS0001', credit: 3 },
    { subject: 'subject2', name: 'Full Name 2', code: 'CS0002', credit: 4 },
    { subject: 'subject3', name: 'Full Name 3', code: 'CS0003', credit: 2 },

  ];

  return (
    <div className="flex flex-wrap justify-center items-center">
      {cardData.map((data, index) => (
        <Card
          key={index}
          subject={data.subject}
          name={data.name}
          code={data.code}
          credit={data.credit}
        />
      ))}
    </div>
  );
};

export default ThirdSemSubject;
