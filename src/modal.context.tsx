import React, { createContext, useContext, useState } from "react";

type ModalContextType = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    modalduggle: () => void
};

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const modalduggle = () => setIsOpen(!isOpen)

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal, modalduggle }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) throw new Error("useModal must be used inside ModalProvider");
    return context;
};
