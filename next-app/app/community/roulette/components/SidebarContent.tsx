"use client"

import { useEffect, useRef, useState } from "react";

import { RouletteContentType } from "@/types/RouletteType";

type SidebarContentProps = {
    contents: RouletteContentType[]
    onClickCategory: (category: string) => void
}
export const SidebarContent = (props: SidebarContentProps) => {
    const { contents, onClickCategory } = props
    const ref = useRef<HTMLDivElement>(null);


    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category === selectedCategory ? null : category);
        onClickCategory(category);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, []);


    return (<>
        <div
            className={`absolute left-0 h-full overflow-x-hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-16'}`}
            onClick={toggleSidebar}
            ref={ref}
        >

            {/* Sidebar content */}
            <div className="h-full overflow-y-auto px-4 py-6">
                {isOpen ? (
                    // Expanded sidebar content
                    <div className="space-y-6">
                        <h2 className="mb-4 whitespace-nowrap text-xl font-bold text-gray-800">カテゴリー</h2>

                        {contents.map((item) => (
                            <div key={item.category} className="mb-4">
                                <button
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        handleCategoryClick(item.category)
                                    }}
                                    className={`w-full whitespace-nowrap rounded-md px-3 py-2 text-left font-medium transition-colors 
                                        ${selectedCategory === item.category
                                            ? 'bg-indigo-500 text-white'
                                            : 'text-gray-700 hover:bg-gray-100'}
                                    `}
                                >
                                    {item.category}
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    // Collapsed sidebar content (ribbon)
                    <div className="flex flex-col items-center space-y-6">
                        {contents.map((item) => (
                            <div
                                key={item.category}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    handleCategoryClick(item.category);
                                }}
                                className={`flex size-8 cursor-pointer items-center justify-center rounded-md ${selectedCategory === item.category
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                title={item.category}
                            >
                                {item.category.charAt(0)}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </>
    )
}