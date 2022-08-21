import { dates } from "./data.js";

const timeline = document.querySelector(".timeline");

function bakingTimeline(index) {
  const { date, title, image, details } = dates[index];
  const cardBox = document.createElement("div");
  const cardHeader = document.createElement("div");
  const content = document.createElement("div");

  const year = document.createElement("span");
  const bakingItem = document.createElement("h2");
  const info = document.createElement("p");
  const picture = document.createElement("img");
  const closeButton = document.createElement("span");

  cardBox.setAttribute("id", "card-cardBox");
  content.setAttribute("id", "card-content");
  cardHeader.setAttribute("id", "card-header");
  picture.setAttribute("src", image);
  picture.setAttribute("alt", title);
  closeButton.setAttribute("id", "close-button");

  const dateText = document.createTextNode(date);
  const titleText = document.createTextNode(title);
  const detailsText = document.createTextNode(details);

  bakingItem.appendChild(titleText);
  year.appendChild(dateText);
  info.appendChild(detailsText);

  cardHeader.appendChild(year);
  cardHeader.appendChild(closeButton);
  content.appendChild(cardHeader);
  content.appendChild(picture);
  content.appendChild(bakingItem);
  content.appendChild(info);
  cardBox.appendChild(content);

  closeButton.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      timeline.removeChild(cardBox);
    },
    false
  );

  cardBox.style.display = "flex";
  timeline.prepend(cardBox);
}

dates.map(({ date, title, caption }, index) => {
  const item = document.createElement("div");
  const year = document.createElement("span");
  const bakingItem = document.createElement("h2");
  const _caption = document.createElement("p");
  const circle = document.createElement("div");
  const button = document.createElement("button");

  const dateText = document.createTextNode(date);
  const titleText = document.createTextNode(title);
  const captionText = document.createTextNode(caption);
  const buttonText = document.createTextNode("Gimme, Gimme MORE (info)");

  item.setAttribute("class", "timeline-item");
  button.setAttribute("data-index", index);
  circle.setAttribute("class", "timeline-circle");
  bakingItem.appendChild(titleText);
  year.appendChild(dateText);
  _caption.appendChild(captionText);
  button.appendChild(buttonText);

  item.appendChild(circle);
  circle.appendChild(year);
  item.appendChild(bakingItem);
  item.appendChild(_caption);
  item.appendChild(button);

  button.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      const index = e.target.getAttribute("data-index");
      if (index) bakingTimeline(index);
    },
    false
  );

  timeline.appendChild(item);
});

