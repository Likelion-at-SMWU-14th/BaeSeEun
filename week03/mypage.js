document.querySelector("footer button").addEventListener("click", () => {
  const result = confirm("로그아웃 하시겠습니까?");
  if (result) {
    alert("로그아웃 되었습니다.");
  }
});