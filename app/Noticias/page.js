import React from "react";
import SeccionPage from "../SeccionPage";
import Article from "./Article";

const Noticias = () => {
  const Data = [
    {
      id: 1,
      title: "U.S. startup Figure raises $70 million to make a humanoid robot",
      description:
        "A U.S. startup named Figure, which aims to create general – purpose humanoid robots, said on Wednesday that it has raised $70 million in its ...\nThe post U.S. startup Figure raises $70 million to make a humanoid robot appeared first on Gizchina.com.",
      img: "https://www.gizchina.com/wp-content/uploads/images/2022/12/Humanoid-Robot-scaled-1-1200x750.jpg",
      source: "Gizchina.com",
      published: "2023-05-24",
    },
    {
      id: 2,
      title: "U.S. startup Figure raises $70 million to make a humanoid robot",
      description:
        "A U.S. startup named Figure, which aims to create general – purpose humanoid robots, said on Wednesday that it has raised $70 million in its ...\nThe post U.S. startup Figure raises $70 million to make a humanoid robot appeared first on Gizchina.com.",
      img: "https://www.gizchina.com/wp-content/uploads/images/2022/12/Humanoid-Robot-scaled-1-1200x750.jpg",
      source: "Gizchina.com",
      published: "2023-05-24",
    },
    {
      id: 3,
      title: "U.S. startup Figure raises $70 million to make a humanoid robot",
      description:
        "A U.S. startup named Figure, which aims to create general – purpose humanoid robots, said on Wednesday that it has raised $70 million in its ...\nThe post U.S. startup Figure raises $70 million to make a humanoid robot appeared first on Gizchina.com.",
      img: "https://www.gizchina.com/wp-content/uploads/images/2022/12/Humanoid-Robot-scaled-1-1200x750.jpg",
      source: "Gizchina.com",
      published: "2023-05-24",
    },
    {
      id: 4,
      title: "U.S. startup Figure raises $70 million to make a humanoid robot",
      description:
        "A U.S. startup named Figure, which aims to create general – purpose humanoid robots, said on Wednesday that it has raised $70 million in its ...\nThe post U.S. startup Figure raises $70 million to make a humanoid robot appeared first on Gizchina.com.",
      img: "https://www.gizchina.com/wp-content/uploads/images/2022/12/Humanoid-Robot-scaled-1-1200x750.jpg",
      source: "Gizchina.com",
      published: "2023-05-24",
    },
  ];
  return (
    <div>
      <SeccionPage title={"Noticias"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
        {Data.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
};

export default Noticias;
