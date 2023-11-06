import { useState } from "react";
import JsonConvert from "react-json-view";
export interface a {
  a: number;
  b: string;
}
export const Convert = () => {
  const [json, setJson] = useState({});

  const handleKeyObject = (object: any) => {
    const newObject: any = {};
    for (const obj in object) {
      newObject[obj] = typeof object[obj];
    }
    return newObject;
  };

  const handleOnchangeTextarea = async (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    try {
      const json = JSON.parse(e.target.value);
      let object: any = json;
      if (Array.isArray(json) && json.length > 0) {
        object = json[0];

        // setJson(json);
      }
      let newObject: any = {};

      for (const obj in object) {
        if (typeof object[obj] === "object") {
          console.log();
          newObject[obj] = handleKeyObject(object[obj]);
        } else {
          newObject[obj] = typeof object[obj];
        }

        console.log(newObject);
        setJson(newObject);
      }
    } catch (error) {
      console.log(error);
      setJson({});
    }
  };

  return (
    <>
      <div className="flex justify-center mt-[10%] ">
        <button className="top-[100px]">Compare</button>
      </div>

      <div className="w-full flex justify-between">
        <section id="section-left" className="w-[48%] ml-[1%]">
          <textarea
            className="w-full border-solid border-[1px]"
            cols={30}
            rows={10}
            onChange={handleOnchangeTextarea}
          ></textarea>
        </section>
        <section id="section-left" className="w-[48%] mr-[1%]">
          <JsonConvert
            src={json}
            quotesOnKeys={false}
            name={false}
            displayDataTypes={false}
          />
        </section>
      </div>
    </>
  );
};
