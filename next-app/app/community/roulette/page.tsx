"use client";
import { useMemo, useState } from "react";

import { RouletteContentType } from "@/types/RouletteType";

import { SelectContent } from "./components/SelectContent";
import { SidebarContent } from "./components/SidebarContent";

const RandomStringSelector: React.FC = () => {
  // Fixed array of 15 strings

  const contents: RouletteContentType[] = [
    {
      category: "フリートーク・雑談",
      contents: [
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
    }, {
      category: "キャリア・目標・スキル",
      contents: [
        "今までの自分の経歴",
        "今年の目標、将来の目標",
        "今後習得したいスキルや資格",
        "今までのアルバイト経験",
        "新人のころを振り返って、やっとけば良かったこと、やっててよかったこと",
        "転職や異動を考えたきっかけ",
        "自分の強み・弱みについて",
        "キャリアの中で影響を受けた人",
        "これまでで最も成長できた経験",
        "理想とする働き方"
      ]
    },
    {
      category: "業務改善・仕事術・ツール",
      contents: [
        "この業務この部分が非効率だよね、ここ効率化しようよ",
        "おすすめのツール、IT サービス、ガジェット",
        "おすすめの時短テク、仕事の工夫",
        "toDo 管理何使っている？",
        "音楽聞きながら、ラジオ聞きながら仕事ってあり",
        "会議や打ち合わせの効率化アイデア",
        "メールやチャットの運用ルール、工夫",
        "よく使うショートカットキーや裏技",
        "集中力を保つためにやっていること",
        "タスクの優先順位付けのやり方"
      ]
    },
    {
      category: "社内・職場",
      contents: [
        "うちの SL のヘッド、上司の良いところ",
        "他 SL との文化の違い",
        "自分が社長なら、上司ならどんな施策、方針を出したい？",
        "チームでうまくいった事例",
        "職場でよくある悩み・あるある",
        "上司・先輩からもらってうれしかった言葉",
        "新人へのアドバイス",
        "オフィスのおすすめスポット",
        "テレワーク派？出社派？",
        "社内イベントや飲み会の思い出"
      ]
    },
    {
      category: "テクノロジー・開発",
      contents: [
        "注目の技術、ニュース",
        "開発、提供したいサービス",
        "最近使ってよかったライブラリ・API",
        "AIや自動化で変わった業務",
        "開発環境こだわりポイント",
        "コードレビューで気を付けていること",
        "新しい技術のキャッチアップ方法",
        "気になる技術書・読みたい本",
        "使ってみたいSaaSやクラウドサービス",
        "技術的チャレンジをしたエピソード"
      ]
    },
    {
      category: "プライベート・趣味・雑談",
      contents: [
        "趣味の話",
        "地元、出身地の話",
        "最近のマイブーム",
        "学生時代の部活動",
        "気分転換方法",
        "押し活してる？",
        "休日のすごしかた",
        "おすすめのおかし、食べ物",
        "おすすめの旅行先、行きたい旅行先",
        "最近観た映画やアニメ、ドラマ"
      ]
    },
    {
      category: "体験談・感情シェア",
      contents: [
        "お客様からもらったうれしい FB",
        "やらかした失敗",
        "仕事で泣きそうになった瞬間",
        "誰かに助けられたエピソード",
        "大きな壁を乗り越えた経験",
        "今までで一番うれしかった達成体験",
        "プレゼンで緊張したこと",
        "ちょっとした失敗談と学び",
        "がんばってよかったなと思えた瞬間",
        "忘れられない一言"
      ]
    }
  ]

  const [selectedCategory, setSelectedCategory] = useState<string>(contents[0].category);
  const onClickCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const selectedCategoryContents = useMemo(() => {
    const tmp = contents.find(item => item.category === selectedCategory);
    if (!tmp) return [];
    return tmp.contents;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);


  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 p-6">
      <SelectContent stringArray={selectedCategoryContents} />
      {/* Optional: Show the complete list of strings */}
      <div className="mt-8 w-full max-w-2xl rounded-xl bg-white/10 p-6 shadow-lg backdrop-blur-lg">
        <h2 className="mb-4 text-xl font-bold text-white">選択可能な話題</h2>
        <div className="grid grid-cols-1 gap-2">
          {selectedCategoryContents.map((string, index) => (
            <div
              key={index}
              className="rounded-lg bg-white/20 p-2 text-center text-white"
            >
              {string}
            </div>
          ))}
        </div>
      </div>
      <SidebarContent contents={contents} onClickCategory={onClickCategory} />
    </main>
  );
};

export default RandomStringSelector;
