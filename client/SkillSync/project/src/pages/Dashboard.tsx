import React from "react";
import { useAuth } from "../hooks/useAuth";
import {
  BarChart as ChartBar,
  BriefcaseIcon,
  FileText,
  Star,
} from "lucide-react";

import Widget from "../components/widgets";
import Tab from "../components/Tabs";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <section>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
          <div className="text-sm text-gray-500">{user?.email}</div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Widget text="Profile Strength" num={85}>
            <ChartBar className="h-6 w-6 text-indigo-600" />
          </Widget>

          <Widget text="Job Matches" num={24}>
            <BriefcaseIcon className="h-6 w-6 text-indigo-600" />
          </Widget>

          <Widget text="Applications" num={24}>
            <FileText className="h-6 w-6 text-indigo-600" />
          </Widget>

          <Widget text="Saved Jobs" num={8}>
            <Star className="h-6 w-6 text-indigo-600" />
          </Widget>
        </div>

        <div className="">
          <article className="bg-white shadow rounded-lg w-full">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Recent Activity
              </h3>
              <div className="mt-6 flow-root">
                <ul className="-my-5 divide-y divide-gray-200">
                  <Tab
                    head="Your profile matched 3 new jobs"
                    desc="Based on your skills in React, TypeScript, and Node.js"
                  />
                  <Tab
                    head="Application viewed by recruiter"
                    desc="Your application for Senior Frontend Developer at
                        TechCorp was viewed"
                  />
                  <Tab
                    head="Profile strength increased"
                    desc="Adding your recent project experience improved your
                        profile strength"
                  />
                </ul>
              </div>
            </div>
          </article>

          <article className="bg-white shadow rounded-lg  w-full my-5  ">
            <div className="text-lg font-medium max-w-sm py-2  px-5">
              Resumes
            </div>
            <hr className="mx-2" />
            <div></div>
            <div className="grid grid-cols-3 "></div>
          </article>
        </div>
      </div>
    </section>
  );
}
