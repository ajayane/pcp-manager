import { Injectable } from '@angular/core';

export enum JobType {
  SINGLE, VILLA, X, Y
}
export interface Job {
  name: string;
  updated: Date;
  id: string;
  clientName: string;
  elemantData: Array<JobElementData>;
  jobType: JobType;
}
export interface CompletionInfo {
  updatedOn: Date;
  processed: number;
}
export interface LogisticCompletionInfo extends CompletionInfo {
  deliveryNoteId: string;
}
export interface JobElementData {
  isInternal: boolean;
  elementId: string;
  totalQty: number;
  productionQty: number;
  productionCompletionInfo: CompletionInfo[];
  logisticsCompletionInfo: LogisticCompletionInfo[];
  projectCompletionInfo: CompletionInfo[];
}

@Injectable({
  providedIn: 'root'
})
export class JobService {

  _ongoingJobs: Job[] = [
    {
      name: '300 Villa Project',
      id: 'jb1927',
      updated: new Date('1/1/16'),
      clientName: 'ABC Engineering LLC',
      jobType: JobType.VILLA,
      elemantData: [
        {
          isInternal: false,
          elementId: 'ELEMENT001',
          totalQty: 10,
          productionQty: 7,
          productionCompletionInfo: [
            {
              updatedOn: new Date('1/1/16'),
              processed: 1,
            },
            {
              updatedOn: new Date('2/1/16'),
              processed: 3,
            },
            {
              updatedOn: new Date('3/1/16'),
              processed: 3,
            }
          ],
          logisticsCompletionInfo: [
            {
              updatedOn: new Date('2/1/16'),
              processed: 1,
              deliveryNoteId: 'DEL001'
            },
            {
              updatedOn: new Date('3/1/16'),
              processed: 1,
              deliveryNoteId: 'DEL002'
            }
          ], projectCompletionInfo: [
            {
              updatedOn: new Date('2/1/16'),
              processed: 1,
            }
          ]
        },
        {
          isInternal: false,
          elementId: 'ELEMENT002',
          totalQty: 10,
          productionQty: 7,
          productionCompletionInfo: [
            {
              updatedOn: new Date('1/1/16'),
              processed: 1,
            },
            {
              updatedOn: new Date('2/1/16'),
              processed: 3,
            },
            {
              updatedOn: new Date('3/1/16'),
              processed: 3,
            }
          ],
          logisticsCompletionInfo: [
            {
              updatedOn: new Date('2/1/16'),
              processed: 1,
              deliveryNoteId: 'DEL001'
            },
            {
              updatedOn: new Date('3/1/16'),
              processed: 1,
              deliveryNoteId: 'DEL002'
            }
          ], projectCompletionInfo: [
            {
              updatedOn: new Date('2/1/16'),
              processed: 1,
            }
          ]
        },
        {
          isInternal: false,
          elementId: 'ELEMENT003',
          totalQty: 10,
          productionQty: 7,
          productionCompletionInfo: [
            {
              updatedOn: new Date('1/1/16'),
              processed: 1,
            },
            {
              updatedOn: new Date('2/1/16'),
              processed: 3,
            },
            {
              updatedOn: new Date('3/1/16'),
              processed: 3,
            }
          ],
          logisticsCompletionInfo: [
            {
              updatedOn: new Date('2/1/16'),
              processed: 1,
              deliveryNoteId: 'DEL001'
            },
            {
              updatedOn: new Date('3/1/16'),
              processed: 1,
              deliveryNoteId: 'DEL002'
            }
          ], projectCompletionInfo: [
            {
              updatedOn: new Date('2/1/16'),
              processed: 1,
            }
          ]
        },
        {
          isInternal: false,
          elementId: 'ELEMENT004',
          totalQty: 10,
          productionQty: 7,
          productionCompletionInfo: [
            {
              updatedOn: new Date('1/1/16'),
              processed: 1,
            },
            {
              updatedOn: new Date('2/1/16'),
              processed: 3,
            },
            {
              updatedOn: new Date('3/1/16'),
              processed: 3,
            }
          ],
          logisticsCompletionInfo: [
            {
              updatedOn: new Date('2/1/16'),
              processed: 1,
              deliveryNoteId: 'DEL001'
            },
            {
              updatedOn: new Date('3/1/16'),
              processed: 1,
              deliveryNoteId: 'DEL002'
            }
          ], projectCompletionInfo: [
            {
              updatedOn: new Date('2/1/16'),
              processed: 1,
            }
          ]
        }
      ]
    },
    {
      name: '450 Villa Project',
      id: 'jb1928',
      updated: new Date('1/17/16'),
      clientName: 'ABC Engineering LLC',
      jobType: JobType.VILLA,
      elemantData: []
    },
    {
      name: '100 Villa Project',
      id: 'jb1930',
      updated: new Date('1/28/16'),
      clientName: 'ABC Engineering LLC',
      jobType: JobType.VILLA,
      elemantData: []
    }
  ];
  _completdJobs: Job[] = [
    {
      name: '330 Villa Project',
      id: 'jb1926',
      updated: new Date('2/20/16'),
      clientName: 'ABC Engineering LLC',
      jobType: JobType.VILLA,
      elemantData: []
    },
    {
      name: '120 Villa Project',
      id: 'jb1925',
      updated: new Date('1/18/16'),
      clientName: 'ABC Engineering LLC',
      jobType: JobType.VILLA,
      elemantData: []
    }
  ];

  constructor() { }
  public getJob(id: string) {
    return this._ongoingJobs.filter((j: Job) => {
      return j.id === id;
    });
  }
  public ongoingJob(): Job[] {
    return this._ongoingJobs;
  }
  public completedJob(): Job[] {
    return this._completdJobs;
  }
  public getElementData(id: string): JobElementData[] {
    const found: Job = this._ongoingJobs.find((v: Job) => {
      return v.id === id;
    });
    if (found) {
      return found.elemantData;
    }
    return [];
  }
}
