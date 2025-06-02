import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

export default function Examples() {
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
  )
}