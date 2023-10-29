import { Injectable } from "@angular/core";
import { createClient } from "@sanity/client";
import { environment } from "src/environments/environment";

const sanityClient = {
  option: createClient({
    projectId: environment.SANITY_PROJECT_ID,
    dataset: environment.SANITY_DATASET,
    apiVersion: environment.SANITY_API_VERSION,
  })
}

@Injectable({
  providedIn: 'root'
})
export class SanityService {

  constructor() { }


  getClient() {
    return sanityClient;
  }
}
