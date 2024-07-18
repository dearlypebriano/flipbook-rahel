function showLines(lines, containerId, callback) {
  let index = 0;

  function showNextLine() {
    if (index < lines.length) {
      let lineElement = document.getElementById(lines[index].id);
      if (lineElement) {
        lineElement.style.display = "block";

        // Animasi mengetik
        animateTyping(lineElement, lines[index].text, 0, lines[index].duration);

        setTimeout(() => {
          index++;
          showNextLine();
        }, lines[index].duration + lines[index].delay);
      }
    } else {
      if (callback) {
        callback(); // Panggil callback setelah semua baris teks selesai ditampilkan
      }
    }
  }

  showNextLine();
}

function animateTyping(element, text, index, duration) {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(function () {
      animateTyping(element, text, index, duration);
    }, duration / text.length);
  }
}

document
  .getElementById("checkbox-page1")
  .addEventListener("change", function () {
    if (this.checked) {
      const linesPage2 = [
        { id: "line1", text: "Bersamamu...", duration: 1700, delay: 900 },
        {
          id: "line2",
          text: "Ku akan dicintai dengan tulus...",
          duration: 2000,
          delay: 1000,
        },
        { id: "line3", text: "Tanpa ragu...", duration: 1500, delay: 800 },
      ];
      document.querySelector("audio").play();

      showLines(linesPage2, "container-page2", function () {
        setTimeout(() => {
          document.getElementById("checkbox-page2").checked = true;
        }, 500); // Delay for smooth transition
      });
    }
  });

document
  .getElementById("checkbox-page2")
  .addEventListener("change", function () {
    if (this.checked) {
      const linesPage3 = [
        {
          id: "line4",
          text: "ku akan memberikan cintaku...",
          duration: 2400,
          delay: 1200,
        },
        {
          id: "line5",
          text: "Bersamaku kamu tak akan sendu...",
          duration: 3400,
          delay: 1200,
        },
        { id: "line6", text: "Yakinkan kamu...", duration: 1800, delay: 1500 },
        {
          id: "line7",
          text: "aku yang terbaik untukmu...",
          duration: 3200,
          delay: 1000,
        },
      ];

      showLines(linesPage3, "container-page3", function () {
        setTimeout(() => {
          document.getElementById("checkbox-page3").checked = true;
        }, 500); // Delay for smooth transition
      });
    }
  });
