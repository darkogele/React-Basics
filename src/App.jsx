import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selected button => 'Components' , 'jsx', 'Props', 'State'
    setSelectedTopic(selectedButton);
  }

  let content = <p>Please select a topic.</p>;
  if (selectedTopic) {
    content = (
      <div tab="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts
                key={concept.title}
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              label="Components"
              onSelect={() => handleSelect("components")}
              isSelected={selectedTopic === "components"}
            />
            <TabButton
              label="Jsx"
              onSelect={() => handleSelect("jsx")}
              isSelected={selectedTopic === "jsx"}
            />
            <TabButton
              label="Props"
              onSelect={() => handleSelect("props")}
              isSelected={selectedTopic === "props"}
            />
            <TabButton
              label="State"
              onSelect={() => handleSelect("state")}
              isSelected={selectedTopic === "state"}
            />
          </menu>
          {content}
        </section>
      </main>
    </>
  );
}

export default App;
