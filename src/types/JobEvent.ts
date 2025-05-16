export interface JobEventOption {
    text: string;
    effect: (character: any) => any;
  }
  
  export interface JobEvent {
    jobId: string;
    text: string;
    options: JobEventOption[];
  }
  