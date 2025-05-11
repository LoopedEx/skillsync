import React from "react";

type myprop = {
  text: string;
  num: number;
};
const Widget: React.FC<React.PropsWithChildren<myprop>> = ({
  children,
  text,
  num,
}) => {
  return (
    <>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">{children}</div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {text}
                </dt>
                <dd className="text-lg font-medium text-gray-900">{num}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Widget;
