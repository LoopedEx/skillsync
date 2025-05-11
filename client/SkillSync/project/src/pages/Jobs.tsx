import React from 'react';
import { Search, MapPin, DollarSign, Clock, Bookmark, BriefcaseIcon } from 'lucide-react';

export default function Jobs() {
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $180k',
      posted: '2 days ago',
      description: 'We are looking for an experienced Frontend Developer proficient in React, TypeScript, and modern web technologies.',
      match: 95,
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      company: 'InnovateLabs',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100k - $160k',
      posted: '3 days ago',
      description: 'Join our team to build scalable web applications using React, Node.js, and cloud technologies.',
      match: 88,
    },
    {
      id: 3,
      title: 'React Native Developer',
      company: 'MobileFirst',
      location: 'New York, NY',
      type: 'Contract',
      salary: '$90k - $140k',
      posted: '1 week ago',
      description: 'Looking for a React Native developer to help build our next-generation mobile applications.',
      match: 82,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Job Matches</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
        {jobs.map((job) => (
          <div key={job.id} className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {job.match}% Match
                  </span>
                </div>
                <div className="mt-2 text-lg text-gray-700">{job.company}</div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <BriefcaseIcon className="h-4 w-4 mr-2" />
                    {job.type}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-2" />
                    {job.salary}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {job.posted}
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{job.description}</p>
              </div>
              <button
                className="ml-4 p-2 text-gray-400 hover:text-indigo-600 focus:outline-none"
                aria-label="Bookmark job"
              >
                <Bookmark className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-4 flex justify-end space-x-4">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save for Later
              </button>
              <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}