import styles from "./App.module.css";
// import * as styles from './App.module.css';

// import React from "react";
import Hello from "./Hello";


const App = () => {

  const message = 'hello React!!';
  const isHide = false;
  const fruits =['りんご', 'オレンジ', 'グレープ'];

  return (
    // styles.xxx で App.modules.css のxxxのスタイルを当てることができる
    <div className={styles.container}>
      <p className={styles.message}>

        {/* テキストの表示 */}
        { message }

        {/* undefinedやnullでも表示に問題ない（何も表示されない） */}
        { undefined }
        { null }

        {/* 三項演算子による表示 */}
        { isHide ? <p>isHideがtrueのときに表示されます</p> : <p>isHideがfalseのときに表示</p> }
        { isHide && <p>isHideがtrueのときのみに表示されます</p> }

        {/* 配列をループ表示  （jsx内の配列はArray.mapを使う。配列内でユニークなkye属性を付与する必要がある） */}
        <div className={styles.f_color}>
          {
            fruits.map(fruit => {
              return <p key={fruit}>{fruit}</p>
            })
          }
        </div>
      </p>

      {/*  Hello.js コンポーネントの読み込み */}
      <Hello />

      {/*  Hello.js コンポーネントの読み込み と  props（値）の受け渡し*/}
      <Hello name='React'/>   {/* Hello world React*/}
      <Hello name='Gatsby'/>  {/* Hello world Gatsby */}
      <Hello name='JavaScript'/>  {/* Hello world Gatsby */}

    </div>
  );
};

export default App;
