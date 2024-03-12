import ListComponent from "../components/ListComponent";
import "./App.css";

let data = [
  {
    imgSrc: "https://i.imgur.com/CzXTtJV.jpg",
    title: "Meow",
    text: "Some quick example text for Card 1.",
    buttonText: "Learn More",
    buttonLink: "https://example.com/card1",
  },
  {
    imgSrc: "https://i.imgur.com/OB0y6MR.jpg",
    title: "Bhow",
    text: "Some quick example text for Card 2.",
    buttonText: "View Details",
    buttonLink: "https://example.com/card2",
  },
  {
    imgSrc: "https://i.imgur.com/OnwEDW3.jpg",
    title: "Shik Shak Shoo",
    text: "Some quick example text for Card 3.",
    buttonText: "Explore",
    buttonLink: "https://example.com/card3",
  },
  {
    imgSrc:
      "https://farm2.staticflickr.com/1533/26541536141_41abe98db3_z_d.jpg",
    title: "Sheeerr",
    text: "Some quick example text for Card 4.",
    buttonText: "Read More",
    buttonLink: "https://example.com/card4",
  },
  {
    imgSrc: "https://farm3.staticflickr.com/2220/1572613671_7311098b76_z_d.jpg",
    title: "Laal Tibba",
    text: "Some quick example text for Card 5.",
    buttonText: "Go to Page",
    buttonLink: "https://example.com/card5",
  },
];

function App() {
  return (
    <>
      <ListComponent listOfItems={data}></ListComponent>
    </>
  );
}

export default App;
