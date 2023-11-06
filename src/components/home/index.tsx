import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
const socket: Socket = io("https://dev-api-odds.wolfden.bet", {
  transports: ["polling", "flashsocket"],
  extraHeaders: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjEiLCJ1dWlkIjoiYmRkNjM2YWMtYjU3NS0xMWVjLTg1YTEtMC0xMjEiLCJyb2xlSWQiOiIyIiwiYWN0aXZlIjoiMSIsImlhdCI6MTY5ODg5OTIyMn0.mka4dgmJ4wPwwv31JPDBuDqlK7byG-JynomN85tySjU",
  },
  // withCredentials: true,
});
interface OddsDTO {
  win: number;
  place: number;
  sourceType: number;
}

interface EventCompsToCheckDTO {
  odds: OddsDTO[];
  raceId: string;
  number: number;
  meetingId: string;
  runnerId: string;
}
export class ErrorCustom {}
const Home = () => {
  const meetingId = "bWVldGluZzo0ODU0MzgxMzA1ODU4NjY1MDQ=";
  const raceId = "cmFjZToxMTYzNDY1";
  const [user, setUser] = useState<string>("");
  const [event, setEvent] = useState<EventCompsToCheckDTO[]>();

  useEffect(() => {
    // Err Connection
    socket.on("connect_error", (err: Error) => {
      console.log(err);
      // handle err
    });

    // Errors Emit data
    socket.on("error", (err: ErrorCustom) => {
      // handle emit data err
    });

    // Runner
    socket.on("bet-maker/get-runners", (data: any) => {
      console.log(data);
      const res = data?.data as EventCompsToCheckDTO[];
      if (res) {
        const f = res.filter(
          (e) => e.runnerId === "aG9yc2U6NDg1NDM4MTMwNjM4MTAxMjUy"
        );
        setEvent(f);
      }
    });

    socket.on("bet-maker/get-runners/update", (data: any) => {
      console.log("update");
      const res = data?.data as EventCompsToCheckDTO[];
      if (res) {
        const f = res.filter(
          (e) => e.runnerId === "aG9yc2U6NDg1NDM4MTMwNjM4MTAxMjUy"
        );
        setEvent(f);
      }
    });
  });
  useEffect(() => {
    socket.emit("bet-maker/get-runners", {
      meetingId: meetingId,
      raceId: raceId,
    });
  }, []);
  const handleClick = () => {
    console.log("leave-rooms");
    socket.emit("bet-maker/leave-room", {
      meetingId: meetingId,
      raceId: raceId,
      user: socket.id,
    });
  };
  return (
    <>
      <div className="flex justify-center items-center"></div>
      {/* <div>Event: {JSON.stringify(event?.comps)}</div> */}
      {event?.map((runner, i) => (
        <>
          <div>RaceId : {runner.raceId}</div>
          <div>RunnerId : {runner.runnerId}</div>

          <div>Number : {runner.number}</div>
          <div style={{ marginLeft: "100px" }}>
            Odds :{" "}
            {runner.odds.map((odds, i) => (
              <>
                <div style={{ marginLeft: "100px" }}>
                  <div>Win : {odds.win}</div>
                  <div>place : {odds.place}</div>
                  <div>sourceType : {odds.sourceType}</div>
                  <div> ------------------------- </div>
                </div>
              </>
            ))}
          </div>
        </>
      ))}
      <button onClick={handleClick}>leave rooms</button>
    </>
  );
};
export default Home;
