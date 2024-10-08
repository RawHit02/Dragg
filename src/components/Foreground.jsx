import React, { useRef } from "react";
import Card from "./card";

import { GiCaptainHatProfile } from "react-icons/gi";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { GiRamProfile } from "react-icons/gi";


function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Akshay ",
      designation: "SDE-1",
      phone: "918791145418",
      icon: <GiRamProfile />, // Different icon for Alan// Add a phone number
      profileImage:
        "https://imgs.search.brave.com/OWcTw37s_1gxcPstHrHt5BANW_urrkwRvRY8K7wZuzQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8x/MC8yOS8yMS80Ni9o/dW1hbi0zNzgyMTg5/XzY0MC5qcGc", // URL to John's profile picture
      tag: { isOpen: true, tagTitle: "Call Now", tagColor: "green" },
    },
    {
      desc: "Alan ",
      designation: "Sales Manager",
      phone: "918791145418",
      icon: <GiCaptainHatProfile />, // Dynamically assigned icon// Add a phone number
      profileImage:
        "https://imgs.search.brave.com/5sq8xfjZiLBU1XkkVE7VXetWB9uUntrpNiX0Ed6_BbQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/MS8wNC8wOC8wNC9w/ZW9wbGUtMzA2MDEw/N182NDAuanBn", // URL to Jane's profile picture
      tag: { isOpen: true, tagTitle: "Call Now", tagColor: "green" },
    },
    {
      desc: "Hydra",
      designation: "AI-copilot",
      phone: "918791145418",
      icon: <GiRamProfile />, // Different icon for Alan// Add a phone number
      profileImage:
        "https://imgs.search.brave.com/Z0Wplsr299wW69n1ioinLb55z6zdR6e7IqeeMM15kSU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2dhbGxl/cnkvM0QtY3V0ZS1j/YXJ0b29uLWdpcmwt/ZmFjZS1wb3J0cmFp/dC1tYWRlLWJ5LUZv/dG9yLmpwZw", // URL to Alice's profile picture
      tag: { isOpen: true, tagTitle: "Call Now", tagColor: "green" },
    },
    {
      desc: "Noobie",
      designation: "SDE-2",
      phone: "918791145418",
      icon: <GiRamProfile />, // Different icon for Alan// Add a phone number
      profileImage:
        "https://imgs.search.brave.com/H8IfC8BwluAKa6NNj50KQBqWCVqGh6DsOjfavGoUs_s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/MTg3NzgyOC9waG90/by90b290aHktc21p/bGluZy1taW1lLW1h/bi1tYWtpbmctZmlu/Z2Vycy1mcmFtZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/a0tGRFh4VERBbEV2/MlJhNFVXOUJHQ2p3/WEFfa3lCbzRJTVJs/Z1ZnN2I2TT0", // URL to John's profile picture
      tag: { isOpen: true, tagTitle: "Call Now", tagColor: "green" },
    },
    {
      desc: "Rohit",
      designation: "SDE-2",
      phone: "918791145418",
      icon: <GiPlagueDoctorProfile />, // Different icon for Alan // Add a phone number
      profileImage:
        "https://imgs.search.brave.com/NUo3c08hWTRIOZ9KIi-umyCIMPkd8FTXRKp9LwH2h04/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by8zZC1tYW4taGVh/ZC1jaGFyYWN0ZXJf/MTI4OTU3Ny0yMTEu/anBnP3NpemU9NjI2/JmV4dD1qcGc", // URL to John's profile picture
      tag: { isOpen: true, tagTitle: "Call Now", tagColor: "green" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full p-2 flex flex-wrap justify-center items-center gap-5"
    >
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
