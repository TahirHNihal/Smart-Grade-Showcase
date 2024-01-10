import React from "react";
import Avatar from "../assets/avatar.png";
import { studentsData } from "../data/data1";

const StudentsDataTable = () => {
  // Class One Students Data
  const classOneData = studentsData[0].classOne;
  const classOneStudents = classOneData.map((item, index) => (
    <tr className="border-b border-[#7ECEB529]" key={item.id}>
      <td className="p-5 text-sm md:text-xl">{index + 1}</td>
      <td className="p-5 text-sm md:text-xl">
        <div className="flex space-x-3 items-center">
          <img
            className="w-8 h-8"
            src={Avatar}
            width={32}
            height={32}
            alt="John Smith"
          />
          <span className="whitespace-nowrap">{item.name}</span>
        </div>
      </td>
      <td className="p-5 text-sm md:text-xl text-center">{item.scores}</td>
      <td className="p-5 text-sm md:text-xl text-center">{item.percentage}%</td>
    </tr>
  ));

  // Class Two Students Data
  const classTwoData = studentsData[1].classTwo;
  const classTwoStudents = classTwoData.map((item, index) => (
    <tr className="border-b border-[#7ECEB529]" key={item.id}>
      <td className="p-5 text-sm md:text-xl">{index + 1}</td>
      <td className="p-5 text-sm md:text-xl">
        <div className="flex space-x-3 items-center">
          <img
            className="w-8 h-8"
            src={Avatar}
            width={32}
            height={32}
            alt="John Smith"
          />
          <span className="whitespace-nowrap">{item.name}</span>
        </div>
      </td>
      <td className="p-5 text-sm md:text-xl text-center">{item.scores}</td>
      <td className="p-5 text-sm md:text-xl text-center">{item.percentage}%</td>
    </tr>
  ));

  return (
    <>
      <div className="max-w-[848px] mx-auto overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#FFFFFF0D]">
              <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                ID
              </th>
              <th className="p-5 text-sm md:text-xl font-semibold text-left">
                Name
              </th>
              <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
              <th className="p-5 text-sm md:text-xl font-semibold">
                Percentage
              </th>
            </tr>
          </thead>
          <tbody>
            {/* class one */}
            <tr className="bg-white/5">
              <td className="p-5 text-sm md:text-xl text-center" colSpan={4}>
                Class One
              </td>
            </tr>
            {classOneStudents}

            {/* class two */}
            <tr className="bg-white/5">
              <td className="p-5 text-sm md:text-xl text-center" colSpan={4}>
                Class Two
              </td>
            </tr>
            {classTwoStudents}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentsDataTable;
