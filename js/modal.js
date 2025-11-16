document.addEventListener("DOMContentLoaded", () => {
  // 모달(패널) 선택자
  const noticeItems = document.querySelectorAll(".notice-item");
  const modal = document.querySelector(".modal");
  const closeBtn = document.querySelector(".close");
  const closeButton = document.querySelector(".closeBtn button");
  const noMoreCheckbox = document.querySelector(".noMore");

  // 비밀번호 show/hide 선택자
  const passwordInput = document.getElementById("userPW");
  const toggleButton = document.querySelector(".toggle-password");
  const toggleButtonImg = toggleButton.querySelector("img");

  toggleButton.addEventListener("click", function () {
    const currentType = passwordInput.getAttribute("type");

    // 4. type을 전환합니다.
    if (currentType === "password") {
      // 현재 password이면 text로 변경하여 비밀번호를 보이게 합니다.
      passwordInput.setAttribute("type", "text");
      toggleButtonImg.src = "/images/woori_password_off.svg";
    } else {
      passwordInput.setAttribute("type", "password");
      toggleButtonImg.src = "/images/woori_password_on";
    }
  });

  // 각 공지사항 항목에 클릭 이벤트 추가
  noticeItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      // 오늘 하루 열지 않기가 체크되어 있는지 확인
      const dontShowToday = localStorage.getItem("dontShowModalToday");
      const today = new Date().toDateString();

      if (dontShowToday === today) {
        return; // 오늘은 모달을 띄우지 않음
      }

      modal.classList.add("active");
    });
  });

  // X 버튼으로 모달 닫기
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // 닫기 버튼으로 모달 닫기
  closeButton.addEventListener("click", () => {
    modal.classList.remove("active");

    // "오늘 하루 열지 않기" 체크 확인
    if (noMoreCheckbox.checked) {
      const today = new Date().toDateString();
      localStorage.setItem("dontShowModalToday", today);
    }
  });

  // 모달 외부 클릭시 닫기
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  // ESC 키로 모달 닫기
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
    }
  });
});
