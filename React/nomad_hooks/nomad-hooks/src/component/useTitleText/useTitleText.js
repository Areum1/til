import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector('title');
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title]);
    return setTitle;
}

const useTitleText = () => {
    const titleUpdater = useTitle('Loading...');
    setTimeout(() => titleUpdater('Home'), 5000);
  return (
    <>
      <div>Hi</div>
    </>
  );
};

export default useTitleText;