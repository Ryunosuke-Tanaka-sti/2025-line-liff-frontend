type SelectCategoryContentsProps = {
    contents: string[]
}

export const SelectCategoryContents = (props: SelectCategoryContentsProps) => {
    const { contents } = props
    return (
        <>
            <div className="w-full max-w-2xl rounded-xl bg-white/10 p-6 shadow-lg backdrop-blur-lg">
                <h2 className="mb-4 text-xl font-bold text-white">選択可能な話題</h2>
                <div className="grid grid-cols-1 gap-2">
                    {contents.map((string, index) => (
                        <div
                            key={index}
                            className="rounded-lg bg-white/20 p-2 text-center text-white"
                        >
                            {string}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}