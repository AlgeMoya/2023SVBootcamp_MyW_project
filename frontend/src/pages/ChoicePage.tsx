import React, { useState, useEffect } from "react";
import Choice from "../components/Choice";
import data from "../data/choice-data.json";
import axios from "axios";

interface StoryResponse {
    "story": string,
    "choices": string[],
    "image": string
}

export default function ChociePage() {
    
    const [visible, setVisible] = useState(false);
    const [resposeData, setResponseData] = useState<StoryResponse>();
    const url = 'http://www.techeer-team-a.store/api/v1/novels/'+ 43
    const GetData = async () => {
        try {
            const response = await axios.get<StoryResponse>(url, {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": `` // 추후 관리하는 Token 삽입 할 것
                    }
                }
            );
            setResponseData(response.data);
            console.log(response.data)
        } catch(err) {
          console.log(err);
        }
    };

  useEffect(() => {
    GetData();
  }, []);

    return(
        <div className="w-screen h-screen min-h-screen relative overflow-scroll">
            <div
                className="w-screen h-screen min-h-screen relative overflow-scroll bg-scroll bg-no-repeat bg-top bg-cover hover:bg-fixed" 
                style={{
                    backgroundImage: `url(${!(resposeData == null) && resposeData.image})`,
                    backgroundSize: "cover",
                }}
            >
                <button 
                        className="animate-pulse animate-infinite text-left text-7xl text-white flex w-screen h-screen items-center justify-center"
                        onClick={() => {
                            setVisible(!visible)
                        }}
                    > 
                    {!visible && "click!"}
                </button>             
                {!visible && (
                    <>
                        <div className="w-full h-16 absolute left-0 top-3.5 md:bg-white/60" />
                        <div className="w-full h-16 absolute left-0 bottom-0 bg-white/60" />
                    </>
                )}
            </div>
            {!(resposeData == null) && visible && <Choice story={resposeData.story} question="어떤 선택을 하시겠습니까?" choices={resposeData.choices} novel_id={43} />}
        </div>
    );
}
