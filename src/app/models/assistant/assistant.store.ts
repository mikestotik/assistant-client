import { makeAutoObservable, runInAction } from 'mobx';
import { Assistant, CreateAssistantPayload } from './assistant.interface.ts';
import { assistantService } from './assistant.service.ts';


export class AssistantStore {

  public assistants: Assistant[] = [];


  constructor() {
    makeAutoObservable(this);
  }


  public async load() {
    const list = await assistantService.load();
    return runInAction(() => this.assistants = list);
  }


  public async create(values: CreateAssistantPayload) {
    const item = await assistantService.create(values);
    return runInAction(() => this.assistants = [ ...this.assistants, item ]);
  }
}
