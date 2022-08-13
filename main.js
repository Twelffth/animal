https: //teachablemachine.withgoogle.com/models/88a4ROlx6/.json

  function start() {
    navigator.mediaDevices.getUserMedia({
      audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/88a4ROlx6/model.json', modelReady);
  }

function modelReady() {
  classifier.classify(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    rr = Math.floor(Math.random() * 255) + 1;
    rg = Math.floor(Math.random() * 255) + 1;
    rb = Math.floor(Math.random() * 255) + 1;
    document.getElementById("resultll").innerHTML = "I Can Hear - " + results[0].label;
    document.getElementById("res").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
    document.getElementById("resultll").style.color = "rgb(" + rr + "," + rg + "," + rb + ")";
    document.getElementById("res").style.color = "rgb(" + rr + "," + rg + "," + rb + ")";
    img1 = document.getElementById("p1");
    img2 = document.getElementById("p2");
    img3 = document.getElementById("p3");
    img4 = document.getElementById("p4");
    if (results[0].label == "Dog") {
      img1.src = "animal-1.png";
      img2.src = "animal-02.png";
      img3.src = "animal-03.png";
      img4.src = "animal-04.png";
    } else if (results[0].label == "Cat") {
      img1.src = "animal-01.png";
      img2.src = "animal-2.png";
      img3.src = "animal-03.png";
      img4.src = "animal-04.png";

    } else if (results[0].label == "Bird") {
      img1.src = "animal-01.png";
      img2.src = "animal-02.png";
      img3.src = "animal-3.png";
      img4.src = "animal-04.png";
    } else {
      img1.src = "animal-01.png";
      img2.src = "animal-02.png";
      img3.src = "animal-03.png";
      img4.src = "animal-4.png";

    }

  }
}