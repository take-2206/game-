let currentWords = [];
  let currentWord = {};
  let enterCount = 0;
  let isCorrect = false;
  let isReadingShown = false;

  function selectDay() {
    const day = document.getElementById("daySelect").value;
    currentWords = [...vocabulary[day]];
    document.getElementById("input").disabled = false;
    nextWord();
  }

  function nextWord() {
    if (currentWords.length === 0) {
  document.getElementById("word").textContent = "🎉 Finish";
  document.getElementById("input").value = "";
  document.getElementById("input").disabled = true;
  document.getElementById("input").style.display = "none";
  document.getElementById("result").textContent = "";
  document.getElementById("correctAnswer").textContent = "";
  document.getElementById("meaning").textContent = "";
  document.getElementById("toggleReading").style.display = "none";
  return;
}


    const randomIndex = Math.floor(Math.random() * currentWords.length);
    currentWord = currentWords[randomIndex];
    currentWords.splice(randomIndex, 1);

    isReadingShown = false;
    document.getElementById("word").textContent = currentWord.word;
    document.getElementById("meaning").textContent = `${currentWord.meaning}`;
    document.getElementById("toggleReading").textContent = "Hiện Hiragana";
    document.getElementById("toggleReading").style.display = "inline-block";

    document.getElementById("input").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("correctAnswer").textContent = "";
  }

  function toggleReading() {
    if (!isReadingShown) {
      document.getElementById("word").textContent = currentWord.reading;
      document.getElementById("toggleReading").textContent = "Hiện Kanji";
    } else {
      document.getElementById("word").textContent = currentWord.word;
      document.getElementById("toggleReading").textContent = "Hiện Hiragana";
    }
    isReadingShown = !isReadingShown;
  }

  document.getElementById("input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const inputText = this.value.trim();

      if (inputText === currentWord.reading) {
        isCorrect = true;
        document.getElementById("result").textContent = "corrent!";
        document.getElementById("result").style.color = "green";
        document.getElementById("correctAnswer").textContent = "";
        setTimeout(nextWord, 1000); // Chuyển sang từ tiếp theo sau 1 giây
        setTimeout(() => {
          document.getElementById("result").textContent = "";
          
        }, 1000);
        
      } else {
        isCorrect = false;
        document.getElementById("result").textContent = "wrong";
        document.getElementById("result").style.color = "red";
        document.getElementById("correctAnswer").textContent = `👉 Đáp án đúng: ${currentWord.reading}`;
      }

      this.value = "";
    }
  });

  // Khởi tạo
  window.onload = () => {
    document.getElementById("daySelect").value = "day1";
    selectDay();
  };