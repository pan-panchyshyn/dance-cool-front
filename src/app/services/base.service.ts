import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class BaseService {
  getRESTUrl(): string {
    return "http://localhost:59993/";
  }
  constructor() {}
}
