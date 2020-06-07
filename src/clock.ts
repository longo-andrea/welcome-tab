export class Clock {
  private showSeconds: boolean;

  constructor() {
    this.showSeconds = true;
  }

  public getShowSeconds(): boolean {
    return this.showSeconds;
  }

  public getHour(): string {
		const hours = this.getCurrentHours();
		const minutes = `:${this.getCurrentMinutes()}`;
		const seconds = this.showSeconds ? `:${this.getCurrentSeconds()}` : '';

    return hours + minutes + seconds;
	}
	
  public setShowSeconds(showSeconds: boolean): void {
    this.showSeconds = showSeconds;
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