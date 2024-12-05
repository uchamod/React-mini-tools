"use client";
import { useState } from "react";

export default function Home() {
  //color
  const [color, setColor] = useState("#ffffff");

  const onColorChange = (event) => {
    setColor(event.target.value);
  };
  //updaters
  const [count, setCount] = useState(0);

  //increse
  const incrementCount = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  //decrease
  const decrementCount = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };

  //reset
  const resetCount = () => {
    setCount(0);
  };

  //object updater
  const [car, setCar] = useState({
    year: 2023,
    make: "masarati",
    model: "x200",
  });

  const setYear = (event) => {
    setCar((c) => ({ ...c, year: event.target.value }));
  };
  const setMake = (event) => {
    setCar((c) => ({ ...c, make: event.target.value }));
  };
  const setModel = (event) => {
    setCar((c) => ({ ...c, model: event.target.value }));
  };

  //food updater
  const [foods, setFoods] = useState(["rice", "noodles", "mango"]);

  const addFoods = () => {
    const newFood = document.getElementById("food").value;
    document.getElementById("food").value = "";
    setFoods((f) => [...f, newFood]);
  };
  //object array updater
  const [student, setStudent] = useState([]);
  const [name, setName] = useState("guest");
  const [age, setAge] = useState(10);
  const [address, setAddress] = useState("colombo");

  const addNewStudent = () => {
    const newStudent = { name: name, age: age, address: address };

    setStudent((s) => [...s, newStudent]);
  };

  const setStudentName = (event) => {
    setName(event.target.value);
  };
  const setStudentage = (event) => {
    setAge(event.target.value);
  };
  const setStudentAddress = (event) => {
    setAddress(event.target.value);
  };
  return (
    <div>
      {" "}
      {/* color picker */}
      <div className="m-24 align-middle justify-center">
        <h1 className="text-white text-center  text-2xl pb-4">Color Picker</h1>
        <div
          className="w-48 h-36  m-4"
          style={{ backgroundColor: color }}
        ></div>
        <input
          type="color"
          className="justify-center align-middle text-center"
          value={color}
          onChange={onColorChange}
        />
      </div>
      {/* updater */}
      <div className="m-24 align-middle justify-center">
        <h2 className="pb-4">Count: {count}</h2>
        <div className="flex-col-3 gap-4">
          <button
            className="p-2 mr-4 rounded-lg bg-white text-black"
            onClick={incrementCount}
          >
            increase
          </button>
          <button
            className="p-2 mr-4 rounded-lg bg-white text-black"
            onClick={decrementCount}
          >
            decrees
          </button>
          <button
            className="p-2 mr-4 rounded-lg bg-white text-black"
            onClick={resetCount}
          >
            reset
          </button>
        </div>
      </div>
      {/* object updater */}
      <div>
        <h2 className="pb-4">
          Car: {car.year} {car.make} {car.model}
        </h2>
        <div className="flex-row-3 gap-4">
          <input
            type="number"
            className="p-2 m-2 text-black"
            onChange={setYear}
          />
          <input
            type="text"
            className="p-2 m-2 text-black"
            onChange={setMake}
          />
          <input
            type="text"
            className="p-2 m-2 text-black"
            onChange={setModel}
          />
        </div>
      </div>
      {/* update array */}
      <div className="m-24 align-middle justify-center">
        <h2 className="text-xl">Food List</h2>
        <ul>
          {foods.map((food, index) => (
            <li key={index}>{food}</li>
          ))}
        </ul>
        <input type="text" id="food" className="mr-2 text-black" />
        <button
          className="p-2 mr-4 rounded-lg bg-white text-black"
          onClick={addFoods}
        >
          Add Food
        </button>
      </div>
      {/* set array object */}
      <div className="m-24 align-middle justify-center">
        <h2>Student</h2>
        <ul>
          {student.map((s, i) => (
            <li key={i}>
              {s.name} {s.age} {s.address}
            </li>
          ))}
        </ul>
        <div className="flex flex-col space-y-4 p-6 max-w-md mx-auto">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded text-black"
            onChange={setStudentName}
            value={name}
          />
          <input
            type="text"
            className="p-2 border border-gray-300 rounded text-black"
            onChange={setStudentage}
            value={age}
          />
          <input
            type="text"
            className="p-2 border border-gray-300 rounded text-black"
            onChange={setStudentAddress}
            value={address}
          />
          <button
            onClick={addNewStudent}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
