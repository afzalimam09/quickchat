import React, { useState } from "react";
import Conversations from "./Conversations";
import Header from "./Header";
import Search from "./Search";

const Menu = () => {
    const [text, setText] = useState("");
    return (
        <>
            <Header />
            <Search setText={setText} />
            <Conversations text={text} />
        </>
    );
};

export default Menu;
