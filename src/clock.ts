export class Clock {
  private showSeconds: boolean;

  constructor() {
    this.showSeconds = false;
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
  private getCurrentHours(): number {
    return (new Date()).getHours();
  }

  private getCurrentMinutes(): number {
    return (new Date()).getMinutes();
	}  
	
  private getCurrentSeconds(): number {
    return (new Date()).getSeconds();
  }  	
};