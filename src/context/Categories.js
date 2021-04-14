import React, { createContext, useState, useContext } from "react"
import DATA from "../../data"

const CategoriesContext = createContext()

export default function CategoriesProvider({ children }) {

    const [category, setCategory] = useState(DATA)

    return (
        <CategoriesContext.Provider value={{ category, setCategory }}>
            {children}
        </CategoriesContext.Provider>
    )
}

export function useCategories() {
    const context = useContext(CategoriesContext)
    const { category, setCategory } = context;
    return { category, setCategory }
}