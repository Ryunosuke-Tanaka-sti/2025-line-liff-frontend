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
    const [selectedCategory, setSelectedCategory] = useState<string>(contents[0].category);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
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
            className={`absolute left-0 hidden h-full cursor-pointer overflow-x-hidden bg-white shadow-lg transition-all duration-300 ease-in-out md:block   ${isOpen ? 'w-64' : 'w-16'}`}
            onClick={toggleSidebar}
            ref={ref}
        >

            {/* Sidebar content */}
            <div className="h-full overflow-y-auto px-4 py-6">
                {isOpen ? (
                    // Expanded sidebar content
                    <div className="flex flex-col items-start gap-6">
                        <h2 className="flex flex-row items-center gap-2 whitespace-nowrap text-xl font-bold text-gray-800">
                            <svg className="m-auto size-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><path d="m4 9h24a3 3 0 0 0 0-6h-24a3 3 0 0 0 0 6zm0-4h24a1 1 0 0 1 0 2h-24a1 1 0 0 1 0-2z" /><path d="m28 13h-24a3 3 0 0 0 0 6h24a3 3 0 0 0 0-6zm0 4h-24a1 1 0 0 1 0-2h24a1 1 0 0 1 0 2z" /><path d="m28 23h-24a3 3 0 0 0 0 6h24a3 3 0 0 0 0-6zm0 4h-24a1 1 0 0 1 0-2h24a1 1 0 0 1 0 2z" /></g></svg>
                            カテゴリー
                        </h2>

                        {contents.map((item) => (
                            <div key={item.category} className="">
                                <button
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        handleCategoryClick(item.category)
                                    }}
                                    className={`w-full whitespace-nowrap rounded-md px-3 py-2 text-left text-base font-medium transition-colors 
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
                    <div className="flex animate-fade-in flex-col items-center gap-6 transition-opacity">
                        <h2 className="flex flex-row items-center gap-2 whitespace-nowrap text-xl font-bold text-gray-800">
                            <svg className="m-auto size-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><path d="m4 9h24a3 3 0 0 0 0-6h-24a3 3 0 0 0 0 6zm0-4h24a1 1 0 0 1 0 2h-24a1 1 0 0 1 0-2z" /><path d="m28 13h-24a3 3 0 0 0 0 6h24a3 3 0 0 0 0-6zm0 4h-24a1 1 0 0 1 0-2h24a1 1 0 0 1 0 2z" /><path d="m28 23h-24a3 3 0 0 0 0 6h24a3 3 0 0 0 0-6zm0 4h-24a1 1 0 0 1 0-2h24a1 1 0 0 1 0 2z" /></g></svg>
                        </h2>
                        {contents.map((item) => (
                            <div
                                key={item.category}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    handleCategoryClick(item.category);
                                }}
                                className={`flex cursor-pointer items-center justify-center rounded-md p-2 ${selectedCategory === item.category
                                    ? 'bg-indigo-600 fill-white'
                                    : 'bg-gray-200 fill-gray-600  hover:bg-gray-300'
                                    }`}
                                title={item.category}
                            >
                                {item.icon}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>

        {/* カテゴリ選択ボタン */}
        <div className="mt-8 w-full max-w-2xl rounded-xl bg-white/10 p-6 shadow-lg backdrop-blur-lg md:hidden">
            <h2 className="mb-3 text-xl font-semibold text-white">カテゴリ選択</h2>
            <div className="grid grid-cols-2 gap-2">
                {contents.map((item) => (
                    <button
                        key={item.category}
                        onClick={() => handleCategoryClick(item.category)}
                        className={`rounded-lg p-2 text-center text-white 
                                    ${selectedCategory === item.category
                                ? '  bg-indigo-500 text-white'
                                : ' bg-white/20 text-gray-700 hover:bg-gray-100'}
                        `}>
                        {item.category}
                    </button>
                ))}
            </div>
        </div>
    </>
    )
}