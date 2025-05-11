import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Find Your Perfect Match with
          <span className="text-indigo-600"> AI-Powered</span> Job Search
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          SkillSync uses advanced AI to match your skills and experience with the perfect job
          opportunities. Upload your resume and let our intelligent system do the work.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <Link
              to="/signup"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="flex justify-center">
              <Zap className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">AI-Powered Matching</h3>
            <p className="mt-2 text-base text-gray-500">
              Our advanced AI analyzes your resume and matches you with the most relevant job
              opportunities.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <Briefcase className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Smart Job Board</h3>
            <p className="mt-2 text-base text-gray-500">
              Browse through carefully curated job listings that match your skills and preferences.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <Users className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Career Growth</h3>
            <p className="mt-2 text-base text-gray-500">
              Get personalized insights and recommendations to advance your career.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}