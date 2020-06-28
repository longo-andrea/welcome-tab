import { Clock } from './clock';

// Init
const clock = new Clock();
initPreferences();

const hours = document.getElementById("hours") as HTMLElement;
const date = document.getElementById("date") as HTMLElement;

setInterval(() => {
  hours.textContent = clock.getHour();
  date.textContent = clock.getDate();
}, 1000);

// Elements
const secondsToggler = document.getElementById('toggle-seconds') as HTMLInputElement;
const searchBarToggler = document.getElementById('toggle-search') as HTMLInputElement;
const backgroundToggler = document.querySelectorAll('.background-sample') as NodeListOf<HTMLElement>;
const dateToggler = document.querySelectorAll('.date-format') as NodeListOf<HTMLElement>;
const reset = document.getElementById('reset') as HTMLInputElement;

// Event listener
secondsToggler.addEventListener('change', function() {
  toggleSecondsIndicator(this.checked);
});

searchBarToggler.addEventListener('change', function () {
  toggleSearchBar(this.checked);
});

backgroundToggler.forEach((backgroundSample) => {
  backgroundSample.addEventListener('click', function() {
    const backgroundHexCode = this.dataset.background as string;
    const fontHexCode = this.dataset.color as string;

    setBackgroundColor(backgroundHexCode);
    setFontColor(fontHexCode);
  });
});

dateToggler.forEach((dateToggler) => {
  dateToggler.addEventListener('click', function () {
    const dateFormat = this.dataset.format as string;

    toggleDateFormat(dateFormat);
  });
});

reset.addEventListener("click", () => {
  localStorage.removeItem("font-color");
  localStorage.removeItem("searchbar");
  localStorage.removeItem("date_format");
  localStorage.removeItem("seconds_indicator");
  localStorage.removeItem("background-color");

  location.reload();
});

// Functions
function toggleSecondsIndicator(toggleState: boolean): void {
  clock.setShowSeconds(toggleState);

  // store the state in localStorage
  localStorage.setItem("seconds_indicator", `${toggleState}`);
}

function toggleDateFormat(toggleState: string): void {
  clock.setDateFormat(toggleState);

  const nodeList = document.querySelectorAll(".date-format") as NodeListOf<HTMLElement>;
  
  nodeList.forEach((date) => {
    if (date.dataset.format === toggleState) {
      date.classList.add("date-format-active");
    } else {
      date.classList.remove("date-format-active");
    }
  });

  // store the state in localStorage
  localStorage.setItem("date_format", `${toggleState}`);
}

function toggleSearchBar(toggleState: boolean): void {
  const searchBar = document.getElementById("search-bar") as HTMLElement;

  if (toggleState) {
    searchBar.hidden = false;
  } else {
    searchBar.hidden = true;
  }

  // store the state in localStorage
  localStorage.setItem('searchbar', `${toggleState}`);
}

function setBackgroundColor(hexCode: string): void {
  document.body.style.background = hexCode;

  // store the state in localStorage
  localStorage.setItem('background-color', `${hexCode}`);  
}

function setFontColor(hexCode: string): void {
  const elements = document.querySelector('#content')!.querySelectorAll('*') as NodeListOf<HTMLElement>;
  
  elements.forEach((element) => {
    element.style.color = hexCode;
  });
  
  document.getElementById('settings-icon')!.style.color = hexCode;

	// store the state in localStorage
	localStorage.setItem('font-color', `${hexCode}`);
}

function initPreferences(): void {
  if (localStorage.getItem('seconds_indicator')) {
    toggleSecondsIndicator(localStorage.getItem("seconds_indicator") === 'true');
    toggleDateFormat(localStorage.getItem("date_format")!);


    const secondsToggler = document.getElementById('toggle-seconds') as HTMLInputElement
    secondsToggler.checked = localStorage.getItem("seconds_indicator") === 'true';
  } else {
    toggleSecondsIndicator(true);

    const secondsToggler = document.getElementById('toggle-seconds') as HTMLInputElement
    secondsToggler.checked = true;
  }
  
  if (localStorage.getItem('searchbar')) {
    toggleSearchBar(localStorage.getItem("searchbar") === "true");

    const searchBarToggler = document.getElementById('toggle-search') as HTMLInputElement;
    searchBarToggler.checked = localStorage.getItem('searchbar') === "true";
  } else {
    toggleSearchBar(true);

    const searchBarToggler = document.getElementById('toggle-search') as HTMLInputElement;
    searchBarToggler.checked = true;
  }

  if (localStorage.getItem('background-color')) {
    setBackgroundColor(localStorage.getItem('background-color') as string);
  }

  if (localStorage.getItem('font-color')) {
		setFontColor(localStorage.getItem('font-color') as string);
	}  
}

