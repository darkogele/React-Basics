import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";
import TabButton from "./TabButton";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selected button => 'Components' , 'jsx', 'Props', 'State'
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
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
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
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
          </>
        }
      >{tabContent}</Tabs>
    </Section>
  )
}