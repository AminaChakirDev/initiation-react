import {useState} from "react";

function Teachers() {

    const [search, setSearch] = useState("");

    const teachersWcs = [
        {
            name: "Moi",
            spe: "JS"
        },
        {
            name: "Thomas",
            spe: "PHP"
        },
        {
            name: "Nico",
            spe: "JS"
        },
        {
            name: "Jerem",
            spe: "data"
        },
    ]

    return (
      <div>
          <input
            type="text"
            onChange={(event) => setSearch(event.target.value)}
          ></input>
          {
              teachersWcs
                .filter((teacher) => search ?teacher.spe.toLowerCase().includes(search.toLowerCase()) : true)
                .map((teacher) => {
                    return <div>
                        Je m'appelle {teacher.name} et ma spé est {teacher.spe}
                    </div>
                })
          }
      </div>
    );
  }
  
  export default Teachers;