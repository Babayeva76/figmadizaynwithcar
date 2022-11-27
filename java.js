const sequences = [
  {
    id: 1,
    indication: "./Elements/Indication.svg",
    pp6: "Ideate",
    pp7: "Turn your idea from concept to MVP",
  },

  {
    id: 2,
    indication: "./Elements/Indication.svg",
    pp6: "Design",
    pp7: "Sketch out the product to align the user needs",
  },

  {
    id: 3,
    indication: "./Elements/Indication.svg",
    pp6: "Develop",
    pp7: "Convert the designs into a live application",
  },

  {
    id: 4,
    indication: "./Elements/Indication.svg",
    pp6: "Deploy",
    pp7: "Launching the application to the market",
  },

  {
    id: 5,
    indication: "./Elements/Indication.svg",
    pp6: "Ideate",
    pp7: "Turn your idea from concept to MVP",
  },

  {
    id: 6,
    indication: "./Elements/Indication.svg",
    pp6: "Design",
    pp7: "Sketch out the product to align the user needs",
  },

  {
    id: 7,
    indication: "./Elements/Indication.svg",
    pp6: "Develop",
    pp7: "Convert the designs into a live application",
  },

  {
    id: 8,
    indication: "./Elements/Indication.svg",
    pp6: "Deploy",
    pp7: "Launching the application to the market",
  },
];

const processFollow = document.querySelector(".iddd");

for (const sequence of sequences) {
  renderProcess(sequence);
}

function renderProcess(sequence) {
  const design = document.createElement("div");
  processFollow.appendChild(design);
  design.outerHTML = getProductProcessMarkup(sequence);
}

function getProductProcessMarkup(sequence) {
  return ` 
    <div class="ipp"> 
      <img src="${sequence.indication}" alt=""> 
      <p class="pp6">${sequence.pp6}</p> 
      <p class="pp7">${sequence.pp7}</p> 
    </div> 
  `;
}
let currentSlideNumber = 0;
const firstSequence = document.querySelector(".ipp:first-child");
const leftButton = document.querySelector(".carousel-button.left");
const rightButton = document.querySelector(".carousel-button.right");

function handleCarouselButtonClick(direction) {
  currentSlideNumber += direction;
  const margin = -286 * currentSlideNumber;
  firstSequence.style.marginLeft = `${margin}px`;

  if (currentSlideNumber === 0) {
    leftButton.setAttribute("disabled", true);
  } else {
    leftButton.removeAttribute("disabled");
  }

  if (currentSlideNumber === sequences.length - 4) {
    rightButton.setAttribute("disabled", true);
  } else {
    rightButton.removeAttribute("disabled");
  }
}
