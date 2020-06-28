export class Clock {
  private showSeconds: boolean;
  private dateFormat: string;

  constructor() {
    this.showSeconds = true;
    this.dateFormat = "mm/dd/yyyy";
  }

  public getShowSeconds(): boolean {
    return this.showSeconds;
  }

  public getDateFormat(): string {
    return this.dateFormat;
  }

  public getHour(): string {
		const hours = this.getCurrentHours();
		const minutes = `:${this.getCurrentMinutes()}`;
		const seconds = this.showSeconds ? `:${this.getCurrentSeconds()}` : '';

    return hours + minutes + seconds;
	}
  
  public getDate(): string {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    const weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    if (this.dateFormat === "ddmmyyyy") {
      return `${dd}/${mm}/${yyyy}`;
    } else if (this.dateFormat === "string") {
      return `${weekDay[today.getDay()]} ${dd}, ${month[today.getMonth()]} ${yyyy}`;
    } else {
      return `${mm}/${dd}/${yyyy}`;
    }

  }

  public setShowSeconds(showSeconds: boolean): void {
    this.showSeconds = showSeconds;
  }

  public setDateFormat(dateFormat: string): void {
    this.dateFormat = dateFormat;
  }

  // private utilities
  private getCurrentHours(): string {
    const currentHours = (new Date()).getHours();

    if (currentHours < 10) {
      return `0${currentHours}`;
    } else {
      return `${currentHours}`;
    }
  }

  private getCurrentMinutes(): string {
    const currentMinutes = (new Date()).getMinutes();

    if (currentMinutes < 10) {
      return `0${currentMinutes}`;
    } else {
      return `${currentMinutes}`;
    }
	}  
	
  private getCurrentSeconds(): string {
    const currentSeconds =  (new Date()).getSeconds();

    if (currentSeconds < 10) {
      return `0${currentSeconds}`;
    } else {
      return `${currentSeconds}`;
    }
  }
};