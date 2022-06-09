import { useState } from "react";
import Student from "./Student";

const studentsWcs = [
    {
        name: "Loulou",
        age: 21
    },
    {
        name: "Xavier",
        age: 40
    },
    {
        name: "Laurent",
        age: 21
    },
    {
        name: "Naim",
        age: 40
    },
    {
        name: "Elina",
        age: 21
    },
    {
        name: "Flo",
        age: 21
    },
    {
        name: "Sonia",
        age: 40
    },
];

function Students(props) {

    const [showYoung, setShowYoung] = useState(false);

  return (
    <div>
        {
            studentsWcs
                .filter((student) => !showYoung || student.age < 30)
                .map((student) => {
                return <Student name={student.name} age={student.age}/>
            })
        }
        <button
            onClick={()=> setShowYoung(!showYoung)}
        >
            Affiche que les jeunes
        </button>
    </div>
  );
}

export default Students;