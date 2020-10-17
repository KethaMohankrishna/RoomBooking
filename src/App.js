import React, { useState } from "react";

const App = () => {
  let [room, setRooms] = useState(1); //use state for ROOM

  const [adult, setAdults] = useState(1); //use state for Adult

  const [child, setChild] = useState(0); //use state for Children

  const incRoom = () => {
    // Increment for room
    if (room < 5) {
      setRooms(room + 1);
    }
  };

  const decRoom = () => {
    // Decrement for room
    if (room > 1) {
      setRooms(room - 1);
    }
  };

  const incAdult = () => {
    // Increment for Adult
    setAdults(adult + 1);
  };

  const decAdult = () => {
    //Decrement for Adult
    if (adult > 1) {
      setAdults(adult - 1);
    }
  };

  const incChild = () => {
    // Increment for Children
    setChild(child + 1);
  };

  const decChild = () => {
    // Decrement for room
    if (child > 0) {
      setChild(child - 1);
    }
  };

  var count = 1;
  if (room > adult) {
    count = room;
  } else {
    count = adult;
  }

  if (adult > room * 4) {
    setRooms(room + 1);
  }

  console.log(room);

  return (
    <div className="ui container">
      <div style={{ color: "blue" }} className="ui segment">
        <p>
          <i style={{ marginRight: "1em" }} className=" users icon blue "></i>
          Choose number of <strong>people</strong>
        </p>

        <div className="ui segment">
          <div className="room_div">
            <i style={{ marginRight: "1em" }} className=" blue bed icon" />
            ROOMS
            <span>
              <div style={{ float: "right" }} className="btn_div">
                <div style={{ float: "right", paddingLeft: "5px" }}>
                  <i className="plus circle icon" onClick={incRoom} />
                </div>
                <div style={{ float: "right" }}>
                  <h4>
                    {adult + child > room * 5
                      ? setRooms((room = room + 1)) && setRooms(room <= 5)
                      : room}
                  </h4>
                </div>

                <div style={{ float: "right", paddingRight: "5px" }}>
                  <i className="  minus circle red icon" onClick={decRoom} />
                </div>
              </div>
            </span>
          </div>

          <hr />

          <div className="adults_div">
            <i style={{ marginRight: "1em" }} className="user icon blue" />
            ADULTS
            <span>
              <div style={{ float: "right" }} className="btn_div">
                <div style={{ float: "right", paddingLeft: "5px" }}>
                  <i className="plus circle icon" onClick={incAdult} />
                </div>
                <div style={{ float: "right" }}>
                  <h4>{count}</h4>
                </div>

                <div style={{ float: "right", paddingRight: "5px" }}>
                  <i className="minus circle red icon" onClick={decAdult} />
                </div>
              </div>
            </span>
          </div>

          <hr />

          <div className="adults_div">
            <i style={{ marginRight: "1em" }} className="child icon blue" />
            CHILDREN
            <span>
              <div style={{ float: "right" }} className="btn_div">
                <div style={{ float: "right", paddingLeft: "5px" }}>
                  <i className="plus circle icon" onClick={incChild} />
                </div>
                <div style={{ float: "right" }}>
                  <h4>{child}</h4>
                </div>

                <div style={{ float: "right", paddingRight: "5px" }}>
                  <i className="minus circle red icon" onClick={decChild} />
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
