//
//  score.js
//  Youtube-Score
//
//  Created by Kevin Peter Karatassos on 5/15/25.
//

if (window.top === window) {
    let scoreSpan = document.createElement("span");
    scoreSpan.setAttribute("style", "font-weight: 500; color: green;");
    scoreSpan.setAttribute("id", "language-score");
    scoreSpan.textContent = "Score: 100";

    let scoreDiv = document.createElement("div");
    scoreDiv.setAttribute("style", "pointer-events: none;");
    scoreDiv.setAttribute("title", "Score");
    scoreDiv.setAttribute("class", "yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m");
    scoreDiv.appendChild(scoreSpan);

    let scoreElement = document.createElement("button-view-model");
    scoreElement.setAttribute("style", "padding: 7px; min-width: 100px;");
    scoreElement.appendChild(scoreDiv);

//    document.addEventListener("DOMContentLoaded", function(event) {
//        let referenceNode = document.getElementById("owner");
//        referenceNode.appendChild(scoreElement);
//    });
    
    let referenceNode = document.getElementById("owner");
    referenceNode.appendChild(scoreElement);
}
