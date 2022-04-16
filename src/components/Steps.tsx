import * as React from "react";
import "../styles/costum.css";

export default function Steps() {
  return (
    <>
      <div className="ran">
        <div className="profilebox5">
          <div className="profileflexbox4">
            <div className="profiletext2">
              <h1 className="profiletitle">Steps</h1>
              <br />
            </div>
          </div>
          <hr />
          <div className="profileflexbox5">
            <button className="profileshowtasks5">Daily</button>
            <div className="profileshowadd5">
              <p>18</p>
            </div>
          </div>
          <div className="profileflexbox5">
            <button className="profileshowtasks5">Weekly</button>
            <div className="profileshowadd5">
              <p>18</p>
            </div>
          </div>
          <div className="profileflexbox5">
            <button className="profileshowtasks5">Monthy</button>
            <div className="profileshowadd5">
              <p>18</p>
            </div>
          </div>
        </div>
        <div className="profilebox5">
          <div className="profileflexbox4">
            <div className="profiletext2">
              <h1 className="profiletitle">Add steps</h1>
              <br />
            </div>
          </div>
          <hr />
          <div className="flexbuttons2">
            <input
              type="text"
              placeholder="Steps today"
              className="stepinput"
            />
            <button className="stepbutton">Add</button>
          </div>
          <br />
        </div>
      </div>
      <br />
    </>
  );
}