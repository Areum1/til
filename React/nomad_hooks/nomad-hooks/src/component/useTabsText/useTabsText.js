import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  //최상위 레벨에서만 hook 호출 가능
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) return;

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const useTabsText = () => {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </>
  );
};

export default useTabsText;
