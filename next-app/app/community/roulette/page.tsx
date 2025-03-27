

import { SelectContent } from './components/SelectContent';


const RandomStringSelector: React.FC = () => {
    // Fixed array of 15 strings
    const stringArray = [
        "未来の地球では人間の仕事はどうなっている？",
        "もしインターネットが1週間使えなくなったら、どう過ごす？",
        "異星人と初めてコンタクトを取るなら、何を伝える？",
        "タイムマシンが完成！過去と未来、どちらに行く？",
        "人間の感情を数値化できるとしたら、どんな影響がある？",
        "AIが法律を作る時代は来る？",
        "もし明日から言語が1つだけになったら、どの言語がいい？",
        "人間の寿命が200歳になったら社会はどう変わる？",
        "夢の中の世界が現実とつながる技術ができたらどうなる？",
        "動物と会話できるようになったら、世界はどう変わる？"
      ]



    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 p-6">
            <SelectContent stringArray={stringArray} />

            {/* Optional: Show the complete list of strings */}
            <div className="mt-8 w-full max-w-2xl rounded-xl bg-white/10 p-6 shadow-lg backdrop-blur-lg">
                <h2 className="mb-4 text-xl font-bold text-white">選択可能な話題</h2>
                <div className="grid grid-cols-1 gap-2">
                    {stringArray.map((string, index) => (
                        <div key={index} className="rounded-lg bg-white/20 p-2 text-center text-white">
                            {string}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default RandomStringSelector;