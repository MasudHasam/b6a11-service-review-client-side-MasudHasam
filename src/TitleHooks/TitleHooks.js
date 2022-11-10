import { useEffect } from "react";

const TitleHooks = (title) => {
    useEffect(() => {
        document.title = `${title}-Hungry-chef;`;
    }, [title]);
};

export default TitleHooks;