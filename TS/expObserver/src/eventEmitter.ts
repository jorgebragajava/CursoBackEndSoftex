class EventEmitter {
    listeners: { [key: string]: Function[] } = {};
   
    on(event: string, listener: Function): void {
       if (!this.listeners[event]) {
         this.listeners[event] = [];
       }
       this.listeners[event].push(listener);
    }
   
    emit(event: string, ...args: any[]): void {
       if (this.listeners[event]) {
         this.listeners[event].forEach(listener => listener(...args));
       }
    }
   }
   