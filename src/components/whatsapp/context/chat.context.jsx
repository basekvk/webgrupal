import React, { createContext, useState } from 'react';

export const ChatContext = createContext({
    isChatOpen: false,
    setIsChatOpen: () => {},
});

export function ChatProvider({ children }) {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const value = {
        isChatOpen,
        setIsChatOpen,
    };

    return (
        <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
    );
}
