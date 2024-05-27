import React from "react";

export default function InfoGroup(props) {
    return (
        <div className="w-full mt-16 md:mt-20 flex flex-col items-center" >
            <div className="text-xl md:text-2xl font-bold font-Poppins">{props.title}</div>
            <div className="text-base mt-1 md:text-lg font-medium font-Poppins text-center">{props.subtitle}</div>
            <div className="w-full mt-10 font-Roboto flex gap-6 flex-wrap justify-center">
                {
                    (props.infos || []).map((info, index) => {
                        return (
                            <div className="w-full md:w-[20%] border-[2px] border-gray-400 border-solid rounded-lg p-3 md:p-5" key={index}>
                                <div className="flex flex-row justify-start items-center gap-2 font-Poppins">
                                    {
                                        info.icon
                                    }
                                    <div className="text-lg md:text-xl font-bold">{info.title}</div>
                                </div>
                                <div className="mt-4 font-Roboto shadow-sm text-justify">
                                    {info.content}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
