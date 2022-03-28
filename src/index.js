import React from "react";
import ReactDOM from "react-dom";
import 'minireset.css';
import "./index.css";
import App from "./App";

const posts = [
    {
        title: "Next.js Fast Reflesh等のアップデート",
        date: "2020.10.23",
        url: "https://qiita.com/aaa",
    },
    {
        title: "Next.js 9.3 新世代の静的サイト生成、Built-in Sassのサポート",
        date: "2020.03.10",
        url: "https://qiita.com/bbb",
    },
    {
        title: "Serverless Next.jsをClund Functionにデプロイする",
        date: "2019.04.28",
        url: "https://qiita.com/ccc",
    },
    {
        title: "Serverless Next.jsをClund Functionにデプロイする",
        date: "2019.04.28",
        url: "https://qiita.com/ccc",
    }
];

const works = [
    {
        title: "リニューアル！",
        roles: ['WordPress', 'React'],
        imageUrl: "./work.png",
    },
    {
        title: "Next.js 9.3 新世代の静的サイト生成、Built-in Sassのサポート",
        roles: ['React', 'Gatsby', 'Figma'],
        imageUrl: "./work.png",
    },
    {
        title: "Serverless Next.jsをClund Functionにデプロイする",
        roles: ['React', 'Next.js'],
        imageUrl: "./work.png",
    },
    {
        title: "Serverless Next.jsをClund Functionにデプロイする",
        roles: ['React', 'Next.js'],
        imageUrl: "./work.png",
    }
];

ReactDOM.render(
    <App posts={posts} works={works} />,
    document.getElementById("root")
);
