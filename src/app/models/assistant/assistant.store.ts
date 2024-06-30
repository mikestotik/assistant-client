import { makeAutoObservable, runInAction } from 'mobx';
import { Assistant, CreateAssistantPayload, UpdateAssistantPayload } from './assistant.interface.ts';
import { assistantService } from './assistant.service.ts';


export class AssistantStore {

  public assistants: Assistant[] = [];


  constructor() {
    makeAutoObservable(this);
  }


  public selectById = (id?: string) => {
    return this.assistants.find(i => i.id === id);
  };


  public async load() {
    const list = await assistantService.load();
    return runInAction(() => this.assistants = list);
  }


  public async create(values: CreateAssistantPayload) {
    const item = await assistantService.create(values);
    return runInAction(() => this.assistants = [ ...this.assistants, item ]);
  }


  public async update(id: string, values: UpdateAssistantPayload) {
    const item = await assistantService.update(id, values);
    return runInAction(() => this.assistants = this.assistants.map(i => {
      if (i.id === id) return item;
      return i;
    }));
  }
}
