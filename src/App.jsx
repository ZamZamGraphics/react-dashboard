import Accordian, { AccordianItem } from "./components/Accordian";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Accordian className="max-w-lg">
        <AccordianItem
          className="border-b bg-white"
          value="1"
          trigger="Hello Item One"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          similique, consequatur facere rem doloremque velit quibusdam nemo
          nostrum recusandae voluptas. Minus omnis, similique alias unde quidem
          tempore molestiae facere quas.
        </AccordianItem>
        <AccordianItem
          className="border-b bg-white"
          value="2"
          trigger="Hello Item Tow"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          similique, consequatur facere rem doloremque velit quibusdam nemo
          nostrum recusandae voluptas. Minus omnis, similique alias unde quidem
          tempore molestiae facere quas.
        </AccordianItem>
        <AccordianItem
          className="border-b bg-white"
          value="3"
          trigger="Hello Item Three"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          similique, consequatur facere rem doloremque velit quibusdam nemo
          nostrum recusandae voluptas. Minus omnis, similique alias unde quidem
          tempore molestiae facere quas.
        </AccordianItem>
      </Accordian>
    </div>
  );
}

export default App;
