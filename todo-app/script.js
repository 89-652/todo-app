const messageButton = document.getElementById("messageButton");
const message = document.getElementById("message");

const messages = [
  "小さく作って、少しずつ改善するのが上達のコツ！",
  "エラーが出ても大丈夫。1つずつ確認すれば解決できます。",
  "今日の1行が、未来の大きなスキルになります。",
  "完成したら、次は色やレイアウトを変えて遊んでみよう！"
];

messageButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  message.textContent = messages[randomIndex];
});
